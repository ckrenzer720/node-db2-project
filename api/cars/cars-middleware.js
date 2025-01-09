const Car = require("./cars-model");

const checkCarId = async (req, res, next) => {
  try {
    console.log("checkCarId middleware");
  } catch (error) {
    next(error);
  }
};

const checkCarPayload = (req, res, next) => {
  try {
    console.log("checkCarPayload middleware");
  } catch (error) {
    next(error);
  }
};

const checkVinNumberValid = (req, res, next) => {
  try {
    console.log("checkVinNumberValid middleware");
  } catch (error) {
    next(error);
  }
};

const checkVinNumberUnique = (req, res, next) => {
  try {
    console.log("checkVinNumberUnique middleware");
  } catch (error) {
    next(error);
  }
};

module.exports = {
  checkCarId,
  checkCarPayload,
  checkVinNumberValid,
  checkVinNumberUnique,
};
