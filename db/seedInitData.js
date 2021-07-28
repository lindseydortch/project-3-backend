// import seedData
const eventsData = require('./event-seeds.json')

//import models 
const Events = require("../models/event-model")

// remove any preexisting data and insert
Events.deleteMany({})
.then( () => {
return Events.insertMany(eventsData)
})
.then(console.log)
.catch(console.error)

// exit 
.finally( () => {
    process.exit()
})