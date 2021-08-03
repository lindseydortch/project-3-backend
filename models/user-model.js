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
});

const User = mongoose.model("User", UserSchema);
module.exports = User;
