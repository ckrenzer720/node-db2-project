const express = require("express");
const Car = require("./cars-model");
const router = express.Router();

router.get("/", async (req, res, next) => {
  try {
    const cars = await Car.getAll();
    res.json(cars);
  } catch (error) {
    next(error);
  }
});

router.get("/:id", async (req, res) => {
  const { id } = req.params;
  const carID = await Car.getById(id);
  res.json(`getting car with id ${id}`);
});

router.post("/", async (req, res) => {
  res.json("posting new car");
});

module.exports = router;
