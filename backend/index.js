const config = require("./utils/config");
const loginRouter = require("./controllers/login");
const mongoose = require("mongoose");
const express = require("express");
const Stripe = require("stripe");
const path = require("path");
const Event = require("./models/Event");
const Order = require("./models/Order");
const { errorHandler, unknownEndpoint } = require("./utils/middleware");
const adminRouter = require("./controllers/admin");

const stripeClient = new Stripe(config.STRIPE_KEY);

const app = express();

app.post(
  "/api/webhooks/stripe",
  express.raw({ type: "application/json" }),
  async (req, res) => {
    const stripeSignature = req.headers["stripe-signature"];

    try {
      const event = stripeClient.webhooks.constructEvent(
        req.body,
        stripeSignature,
        config.STRIPE_WEBHOOK_SECRET,
      );

      console.log(event.type);

      if (event.type === "checkout.session.completed") {
        const checkoutSession = event.data.object;
        const orderId = checkoutSession.client_reference_id;
        if (!orderId) {
          console.log(
            `Checkout session ${checkoutSession.id} has no order id, skipping`,
          );

          return res.status(200).end();
        }
        const updatedOrder = await Order.findByIdAndUpdate(
          orderId,
          { status: "paid" },
          { new: true },
        );

        if (!updatedOrder) {
          console.log(
            `Order cannot be found for ${orderId}, no updation necessary`,
          );
        } else {
          console.log(
            `Order ${updatedOrder.orderNumber} has been successfully marked paid`,
          );
        }
      }
      return res.status(200).end();
    } catch (error) {
      console.error(error.message);

      return res.status(400).end();
    }
  },
);

app.use(express.json());
app.use(express.static("dist"));

mongoose.set("strictQuery", false);

mongoose
  .connect(config.MONGODB_URI)
  .then(() => console.log("connected to MongoDB"))
  .catch((error) => console.log("error connecting to MongoDB:", error.message));

app.get("/api/events", async (req, res) => {
  const events = await Event.find({});
  res.send(events);
});

app.get("/api/events/:id", async (req, res) => {
  const id = req.params.id;

  const event = await Event.findById(id);
  if (!event) {
    return res
      .status(404)
      .json({ message: "The requested event does not exist" });
  }
  res.send(event);
});

app.get("/api/orders/:id", async (req, res) => {
  const id = req.params.id;

  const order = await Order.findById(id).populate("event");
  if (!order) {
    return res.status(404).json({ message: "Your order cannot be found!" });
  }
  res.send(order);
});

app.post("/api/orders", async (req, res) => {
  const body = req.body;
  if (
    !Number.isInteger(body.quantity) ||
    body.quantity < 1 ||
    body.quantity > 10
  ) {
    return res.status(400).json({ message: "Invalid quantity" });
  }
  const event = await Event.findById(body.eventId);
  if (!event) {
    return res
      .status(404)
      .json({ message: "The requested event does not exist" });
  }

  const order = new Order({
    name: body.name,
    email: body.email,
    quantity: body.quantity,
    event: event.id,
    totalPriceCents: event.priceCents * body.quantity,
  });

  try {
    await order.validate();
  } catch (err) {
    console.error("Validation failed:", err.errors);
    return res.status(400).json({ message: "Invalid order" });
  }

  const updatedEvent = await Event.findOneAndUpdate(
    { _id: body.eventId, ticketsAvailable: { $gte: body.quantity } },
    { $inc: { ticketsAvailable: -body.quantity } },
  );

  if (!updatedEvent) {
    return res
      .status(409)
      .json({ message: "Unfortunately, there are not enough tickets left" });
  }

  const savedOrder = await order.save();
  const session = await stripeClient.checkout.sessions.create({
    success_url: `${config.FRONTEND_URL}/orders/${savedOrder.id}`,
    cancel_url: `${config.FRONTEND_URL}/events/${event.id}`,
    line_items: [
      {
        price_data: {
          currency: "eur",
          unit_amount: event.priceCents,
          product_data: {
            name: event.title,
          },
        },
        quantity: order.quantity,
      },
    ],
    mode: "payment",
    client_reference_id: order.id,
  });
  res.status(201).json({
    paymentUrl: session.url,
  });
});
app.use("/api/login", loginRouter);
app.use("/api/admin", adminRouter);
app.use("/api", unknownEndpoint);
app.get("/*splat", (req, res) => {
  res.sendFile(path.join(__dirname, "dist/index.html"));
});

app.use(errorHandler);

app.listen(config.PORT, () => {
  console.log(`Server running on port ${config.PORT}`);
});
