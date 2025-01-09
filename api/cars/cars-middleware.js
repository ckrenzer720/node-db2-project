const Car = require("./cars-model");
const Vin = require("vin-validator");

const checkCarId = async (req, res, next) => {
  try {
    const { id } = req.params;
    const car = await Car.getById(id);
    if (!car) {
      next({ status: 404, message: `car with id ${id} is not found` });
    } else {
      req.car = car;
      next();
    }
  } catch (error) {
    next(error);
  }
};

const checkCarPayload = (req, res, next) => {
  const error = { status: 400 };
  if (!req.body.vin)
    return next({
      error,
      message: "vin is missing",
    });
  if (!req.body.make)
    return next({
      error,
      message: "make is missing",
    });
  if (!req.body.model)
    return next({
      error,
      message: "model is missing",
    });
  if (!req.body.mileage)
    return next({
      error,
      message: "mileage is missing",
    });
  next();
};

const checkVinNumberValid = (req, res, next) => {
  if (Vin.validate(req.body.vin)) {
    next();
  } else {
    next({ status: 400, message: `vin number ${req.body.vin} is invalid` });
  }
};

const checkVinNumberUnique = (req, res, next) => {
  next();
};

module.exports = {
  checkCarId,
  checkCarPayload,
  checkVinNumberValid,
  checkVinNumberUnique,
};
