const mongoose = require("mongoose");
const validator = require("validator");

const orderSchema = new mongoose.Schema(
  {
    name: { type: String, required: true, trim: true, maxLength: 100 },
    email: {
      type: String,
      required: [true, "Email address is required"],
      lowercase: true,
      trim: true,
      validate: {
        validator: validator.isEmail,
        message: "Please provide a valid email address",
      },
    },
    quantity: { type: Number, required: true, min: 1, max: 10 },
    status: {
      type: String,
      default: "pending",
      enum: ["pending", "paid", "cancelled"],
    },
    event: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Event",
      required: true,
    },
    orderNumber: {
      type: String,
      required: true,
      unique: true,
      default: () => {
        return `KAT-${crypto.randomUUID().slice(0, 8).toUpperCase()}`;
      },
    },
    totalPriceCents: { type: Number, required: true, min: 1 },
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
