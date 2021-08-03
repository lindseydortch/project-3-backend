// Initializing Express 
const express = require('express')
// Adding dotenv for the jwt secrete key to work
require("dotenv").config()
const app = express()
const cors = require('cors')

// Middleware 
app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(cors())

// Bring in Controller 
const HomeController = require('./controllers/HomeController')
const EventController = require('./controllers/EventController')
const groupController = require('./controllers/groupController')
const userController = require('./controllers/usersController')
app.use(HomeController)
app.use(EventController)
app.use(groupController)
app.use(userController)

// Use routes through controller 

// ===============================================
// Listen Port
// ===============================================
app.set("port", process.env.PORT || 4000);
app.listen(app.get("port"), () =>
console.log(`get porty on ${app.get("port")}`)
);