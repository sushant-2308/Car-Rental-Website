const mongoose = require("mongoose");
const moment = require('moment-timezone');
const dateInIST = moment.tz(Date.now(), "Asia/Kolkata");

const CarSchema = mongoose.Schema({
  model_name: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  start_date: {
    type: Date,
    required: true,
  },
  end_date: {
    type: Date,
    required: true,
  },
  mileage: {
    type: String,
    required: true,
  },
  transmission: {
    type: String,
    required: true,
  },
  seats: {
    type: String,
    required: true,
  },
  car_photo: {
    type: String,
    required: true,
  },
  fuel_type: {
    type: String,
    required: true,
  },
  abs: {
    type: Boolean,
    required: true,
  },
  date: {
    type: Date,
    default: dateInIST,
  },
});

module.exports = mongoose.model("car", CarSchema);