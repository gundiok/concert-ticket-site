const mongoose = require("mongoose");

const eventSchema = new mongoose.Schema({
  title: { type: String, required: true },
  city: { type: String, required: true },
  venue: { type: String, required: true },
  description: { type: String, required: true },
  showStartsAt: { type: Date, required: true },
  doorsOpenAt: { type: Date, required: true },
  priceCents: { type: Number, required: true },
  ticketsAvailable: {type: Number, required: true, min: 0}
});

eventSchema.set("toJSON", {
  transform: (document, returnedObject) => {
    returnedObject.id = returnedObject._id.toString();
    delete returnedObject._id;
    delete returnedObject.__v;
  },
});

const Event = mongoose.model("Event", eventSchema);

module.exports = Event;
