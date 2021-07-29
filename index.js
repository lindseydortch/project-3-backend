// Initializing Express 
const express = require('express')
const app = express()
const cors = require('cors')

// Middleware 
app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(cors())

// Bring in Controller 
const controller = require('./controllers/controller')
const groupController = require('./controllers/groupController')
app.use(groupController)
app.use(controller)

// ===============================================
// Listen
// ===============================================
// Port Variable 
const port = process.env.PORT || 8000

app.listen(port, () => {
  console.log(`Your app is running on port ${port}`)
})