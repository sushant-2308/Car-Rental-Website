const mongoose = require("mongoose");
const moment = require('moment-timezone');
const dateInIST = moment.tz(Date.now(), "Asia/Kolkata");

const UserSchema = mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  username: {
    type: String,
    required: true,
  },
  profilepicture: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  email_verified: {
    type: Boolean,
    required: true,
  },
  date: {
    type: Date,
    default: dateInIST,
  },
});

module.exports = mongoose.model("user", UserSchema);