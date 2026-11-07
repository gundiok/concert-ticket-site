const User = require("./models/User");
const config = require("./utils/config");
const mongoose = require("mongoose");
const bcrypt = require("bcrypt");

const createAdmin = async () => {
  try {
    const username = process.argv[2];
    const password = process.argv[3];
    if (!username || !password) {
      console.log("Usage: node createAdmin.js <username> <password>");

      process.exit(1);
    }

    if (password.length < 12) {
      console.log("The password is too short");
      process.exit(1);
    }
    await mongoose.connect(config.MONGODB_URI);
    console.log("connected to mongoDB");

    const saltRounds = 10;
    const passwordHash = await bcrypt.hash(password, saltRounds);
    const user = new User({
      username,
      passwordHash,
    });
    const savedUser = await user.save();
    console.log(savedUser);
    console.log("Admin user successfully created");
  } catch (error) {
    console.log(error);
    process.exitCode = 1;
  } finally {
    await mongoose.connection.close();
  }
};

createAdmin();
