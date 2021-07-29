const express = require('express')
const router = express.Router()

const Group = require('../models/group')

// Group home route
router.get('/group', (req, res) => {
  Group.find({})
  .then(g => res.json(g))
})

// Create 
router.post('/group', (req, res) => {
  let message = req.body.message
  let likes = req.body.likes
  Group.create({
    message, likes
  })
  .then(g => res.json(g))
  .catch(console.error)
})

// Update 
router.put('/group', (req, res) => {
  let id = req.body._id
  let message = req.body.message
  let likes = req.body.likes
  Group.findOneAndUpdate(
    {_id: id},
    {
      message, likes
    },
    {new: true}
  )
  .then(g => res.json(g))
})

// Delete 
router.delete('/group', (req, res) => {
  const id = req.body._id 
  Group.findOneAndRemove({_id: id})
  .then(g => res.json(g))
  .catch(console.error)
})

module.exports = router