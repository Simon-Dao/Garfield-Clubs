const mongoose = require("mongoose");

//IMPORTANT
//In order to keep the database organizes, we have to define a schema for all of the data to follow

const ClubSchema = mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  advisor: {
      type: String,
      required: false
  },
  meetingTimes: {
      type:[],
      required: false
  },
  room: {
    type: String,
    required: false
  },
  contactInfo: {
      type: String,
      required: false
  }
});

module.exports = mongoose.model("clubData", ClubSchema,'clubData');