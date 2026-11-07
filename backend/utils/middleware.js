const jwt = require("jsonwebtoken");
const config = require("./config");
const User = require("../models/User");

const getTokenFrom = (request) => {
  const authorization = request.get("authorization");
  if (authorization && authorization.startsWith("Bearer ")) {
    return authorization.replace("Bearer ", "");
  }
  return null;
};

const requireAuth = async (request, response, next) => {
  const decodedToken = jwt.verify(getTokenFrom(request), config.JWT_SECRET);
  if (!decodedToken.id) {
    return response.status(401).json({ message: "invalid token" });
  }
  const user = await User.findById(decodedToken.id);

  if (!user) {
    return response
      .status(401)
      .json({ message: "UserId missing or not valid" });
  }
  next();
};

const errorHandler = (error, request, response, next) => {
  console.error(error.message);

  if (error.name === "CastError") {
    return response.status(400).json({ message: "malformatted id" });
  } else if (error.name === "ValidationError") {
    return response.status(400).json({ message: error.message });
  } else if (error.name === "JsonWebTokenError") {
    return response.status(401).json({
      message: "invalid token",
    });
  } else if (error.name === "TokenExpiredError") {
    return response.status(401).json({
      message: "token expired",
    });
  }

  next(error);
};

const unknownEndpoint = (request, response) => {
  response.status(404).json({ message: "unknown endpoint" });
};

module.exports = { errorHandler, unknownEndpoint, requireAuth };
