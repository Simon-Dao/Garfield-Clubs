const mongoose = require("mongoose");

/*
advisor: ,
            day: , 
            room: , 
            contactInfo: []
            */

const ClubSchema = mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  advisor: {
      type: String,
      require: false
  },
  meetingTimes: {
      type:[]
  },
  //I am storing 
  rooms:[String]

});

module.exports = mongoose.model("user", UserScheme);