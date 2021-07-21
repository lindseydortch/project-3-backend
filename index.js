// Initializing Express 
const express = require('express')
const app = express()

// Middleware 
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

// Bring in Controller 
const controller = require('./controllers/controller')
app.use(controller)

// ===============================================
// Listen
// ===============================================
// Port Variable 
const port = process.env.PORT || 8000

app.listen(port, () => {
  console.log(`Your app is running on port ${port}`)
})