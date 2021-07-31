const mongoose = require("../db/connection");

const UserSchema = new mongoose.Schema({
  firstname: String,
  lastname: String,
  city: String,
  state: String,
  username: String,
  email: String,
  password: String,
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
