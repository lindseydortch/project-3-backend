const mongoose = require("../db/connection");

const EventSchema = new mongoose.Schema({
  title: String,
  user: String,
  type: String,
  location: String,
  date: String,
  online: {type: Boolean, default: false},
  inPerson: {type: Boolean, default: false},
  cost: Number,
  socialComfortScale: Number,
  details: String,
  attendees:Array
});

const Event = mongoose.model("Event", EventSchema);
module.exports = Event;
