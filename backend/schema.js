const mongoose = require("mongoose");

/*
advisor: ,
            day: , 
            room: , 
            contactInfo: []
{
    name: 'test',
    advisor: 'simon dao',

}
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
      type:[],
      require: false
  },
  room: {
    type: String,
    require: false
  },
  contactInfo: {
      type: String,
      require: false
  }
});

module.exports = mongoose.model("clubData", ClubSchema,'clubData');