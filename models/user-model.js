const mongoose = require("../db/connection");

const UserSchema = new mongoose.Schema({
  userName: {
    type: String,
    required: true,
    unique: true,
    maxlength: 15,
  },
  password: {
    type: String,
    required: true,
  },
  city: String,
  state: String,
  date: {
    type: Date,
    default: Date.now
}
  // groups: [{
  //   // References use the type ObjectId
  //   type: mongoose.Schema.Types.ObjectId,
  //   // the name of the model to which they refer
  //   ref: 'Group'
  // }],
  // events: [{
  //   // References use the type ObjectId
  //   type: mongoose.Schema.Types.ObjectId,
  //   // the name of the model to which they refer
  //   ref: 'Event'
  // }]
});

const User = mongoose.model("User", UserSchema);
module.exports = User;
