const Event = require("./models/Event");
const events = require("./data/events");
const config = require("./utils/config");

const mongoose = require("mongoose");

console.log(config.MONGODB_URI?.replace(/\/\/([^:]+):([^@]+)@/, "//$1:***@"));
const seedDatabase = async () => {
  try {
    await mongoose.connect(config.MONGODB_URI);
    console.log("connected to mongoDB");
    await Event.deleteMany({});
    const uploadedEvents = await Event.insertMany(events);
    console.log(`Inserted ${uploadedEvents.length} events`);
  } catch (error) {
    console.log(error);
    process.exitCode = 1;
  } finally {
    await mongoose.connection.close();
  }
};

seedDatabase();
