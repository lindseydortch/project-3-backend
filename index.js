// Initializing Express 
const express = require('express')
const app = express()
const cors = require('cors')
// Import Controllers
const controller = require('./controllers/HomeController')
const EventController = require('./controllers/EventController')


// Middleware 
app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(cors())


// Use routes through controller 
app.use(controller)
app.use('/events', EventController)
// ===============================================
// Listen Port
// ===============================================
app.set("port", process.env.PORT || 4000);
app.listen(app.get("port"), () =>
console.log(`get porty on ${app.get("port")}`)
);