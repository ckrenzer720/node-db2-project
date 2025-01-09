const express = require("express");
const carsRouter = require("./cars/cars-router.js");

const server = express();
server.use(express.json());

server.use("/api/cars", carsRouter);

server.use((error, req, res, next) => {
  res.status(error.status || 500).json({ message: error.message });
});

module.exports = server;
