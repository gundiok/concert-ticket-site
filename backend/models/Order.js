const mongoose = require("mongoose");

const orderSchema = new mongoose.Schema(
  {
    event: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Event",
      required: true,
    },

    name: { type: String, required: true },
    email: { type: String, required: true },
    quantity: { type: Number, required: true, min: 1 },
    status: {
      type: String,
      default: "pending",
      enum: ["pending", "paid", "cancelled"],
    },
  },
  { timestamps: true },
);

orderSchema.set("toJSON", {
  transform: (document, returnedObject) => {
    returnedObject.id = returnedObject._id.toString();
    delete returnedObject._id;
    delete returnedObject.__v;
  },
});

const Order = mongoose.model("Order", orderSchema);

module.exports = Order;
