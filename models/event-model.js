const mongoose = require('../db/connection')

const EventSchema = mongoose.Schema({
    name: String,
    addedBy:{
        type:String,
        default: "WeBackIshAdmin"
    },
    type: String,
    city: String,
    date: {
        type: Date,
        default: Date.now,
      },
    interact: String,
    socialScale: String,
    cost:Number,
    details: String,
    attendees: Array,

})

const Event = mongoose.model('Event', EventSchema)
module.exports = Event
