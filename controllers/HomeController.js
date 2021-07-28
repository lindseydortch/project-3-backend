const express = require('express')
const router = express.Router()

// Home Route 
router.get('/', (req, res) => {
  res.send(`We Back(ish) Home route`)
})

module.exports = router