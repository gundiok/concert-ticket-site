require("dotenv").config();

const PORT = process.env.PORT;
const MONGODB_URI = process.env.MONGODB_URI;
const STRIPE_KEY = process.env.STRIPE_KEY;
const STRIPE_WEBHOOK_SECRET = process.env.STRIPE_WEBHOOK_SECRET?.trim();
const FRONTEND_URL = process.env.RENDER_EXTERNAL_URL || "http://localhost:5173";
const JWT_SECRET = process.env.JWT_SECRET

module.exports = {
  PORT,
  MONGODB_URI,
  STRIPE_KEY,
  STRIPE_WEBHOOK_SECRET,
  FRONTEND_URL,
  JWT_SECRET
};
