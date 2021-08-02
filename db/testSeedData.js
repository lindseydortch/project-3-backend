const userData = require("./user-seeds.json");
const User = require("../models/user-model");

User.deleteMany({})
  .then(() => {
    return User.insertMany(userData);
  })
  .then(console.log)
  .catch(console.error)

  .finally(() => {
    process.exit();
  });