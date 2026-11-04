require("dotenv").config();

const PORT = process.env.PORT;
const MONGODB_URI = process.env.MONGODB_URI;
const STRIPE_KEY = process.env.STRIPE_KEY;
const STRIPE_WEBHOOK_SECRET = process.env.STRIPE_WEBHOOK_SECRET;

module.exports = { PORT, MONGODB_URI, STRIPE_KEY, STRIPE_WEBHOOK_SECRET };
