const mongoose = require('./connection')

const Group = require('../models/group')
const groupData = require('./groupSeeds.json')

Group.deleteMany({})
.then(console.log)
.catch(console.error)
.finally(() => {
  process.exit()
})