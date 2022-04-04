const mongoose = require("mongoose");

//IMPORTANT
//In order to keep the database organizes, we have to define a schema for all of the data to follow

const ClubSchema = mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  officers: {
    type: String,
      required: false
  },
  advisor: {
      type: String,
      required: false
  },
  days: {
      type:String,
      required: false
  },
  images: {
    type:[],
    required: false
},
  room: {
    type: String,
    required: false
  },
  description: {
    type: String,
    required: false
  },
  mission: {
    type: String,
    required: false
  },
  contactInfo: {
      type: String,
      required: false
  }
});

module.exports = mongoose.model("clubData", ClubSchema,'clubData');