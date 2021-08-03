const mongoose = require('../db/connection')

const GroupSchema = new mongoose.Schema(
  {
    message: String, 
    likes: Number
  }
)

const Group = mongoose.model('Group', GroupSchema)

module.exports = Group