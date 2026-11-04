const errorHandler = (error, request, response, next) => {
  console.error(error.message);

  if (error.name === "CastError") {
    return response.status(400).json({ message: "malformatted id" });
  } else if (error.name === "ValidationError") {
    return response.status(400).json({ message: error.message });
  }
  next(error);
};

const unknownEndpoint = (request, response) => {
  response.status(404).send({ message: "unknown endpoint" });
};

module.exports = { errorHandler, unknownEndpoint };
