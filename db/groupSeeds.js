const mongoose = require('./connection')

const Group = require('../models/group')
const groupData = require('./groupSeeds.json')

Group.deleteMany({})
.then(() => {
  return Group.insertMany(groupData)
})
.then(console.log)
.catch(console.error)
.finally(() => {
  process.exit()
})