const config = require("./utils/config");
const mongoose = require("mongoose");
const express = require("express");
const path = require("path")
const Event = require("./models/Event");
const Order = require("./models/Order");

const app = express();
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
    return res
      .status(404)
      .json({ message: "Your order cannot be found!" });
  }
  res.send(order);
});

app.post("/api/orders", async (req, res) => {
  const body = req.body;
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
  });

  const savedOrder = await order.save();
  res.status(201).json(savedOrder);
});

app.get("/*splat", (req, res) => {
  res.sendFile(path.join(__dirname, "dist/index.html"));
});

app.listen(config.PORT, () => {
  console.log(`Server running on port ${config.PORT}`);
});
