const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const userSchema = new Schema({
  name: {type: String, required: true},
  age: Number,
  location: String,
  password: String,
  gender: [String],
  profession: String,
  sexualOrientation: [String],
  vaccinated: Boolean,
  interests: [String]
});

const User = mongoose.model("User", userSchema);

//make this exportable to be accessed in `app.js`
module.exports = User;