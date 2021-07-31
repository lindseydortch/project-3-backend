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
const EventController = require('./controllers/EventController')
const groupController = require('./controllers/groupController')
app.use(controller)
app.use(EventController)
app.use(groupController)

// Use routes through controller 

// ===============================================
// Listen Port
// ===============================================
app.set("port", process.env.PORT || 4000);
app.listen(app.get("port"), () =>
console.log(`get porty on ${app.get("port")}`)
);