const config = require("./utils/config");
const mongoose = require("mongoose");
const express = require("express");
const Event = require("./models/Event");

const app = express();
app.use(express.json());
app.use(express.static("dist"))

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

app.listen(config.PORT, () => {
  console.log(`Server running on port ${config.PORT}`);
});
