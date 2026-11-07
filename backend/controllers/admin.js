const Order = require("../models/Order");
const adminRouter = require("express").Router();
const { requireAuth } = require("../utils/middleware");

adminRouter.get("/stats", requireAuth, async (req, res) => {
  const orders = await Order.find({ status: "paid" }).populate("event");

  const stats = Object.values(
    orders.reduce((accumulator, currentOrder) => {
      const id = currentOrder.event.id;
      if (!accumulator[id]) {
        accumulator[id] = {
          eventId: currentOrder.event.id,
          title: currentOrder.event.title,
          ticketsAvailable: currentOrder.event.ticketsAvailable,
          ticketsSold: 0,
          revenueCents: 0,
        };
      }
      accumulator[id].ticketsSold += currentOrder.quantity;
      accumulator[id].revenueCents += currentOrder.totalPriceCents;
      return accumulator;
    }, {}),
  );
  res.json(stats);
});

module.exports = adminRouter;
