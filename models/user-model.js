const mongoose = require("../db/connection");

const UserSchema = new mongoose.Schema({
  firstname: String,
  lastname: String,
  city: String,
  state: String,
  username: String,
  email: String,
  password: String,
});

const User = mongoose.model("User", UserSchema);
module.exports = User;
