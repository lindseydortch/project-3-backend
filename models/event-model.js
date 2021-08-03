const mongoose = require('../db/connection')

const EventSchema = mongoose.Schema({
    name: String,
    addedBy:{
        type:String,
        default: "WeBackIshAdmin"
    },
    type: String,
    city: String,
    state:{
        type:String,
        maxlength:2
    },
    date: {
        type: Date,
        default: Date.now,
      },
    online: String,
    inPerson: String,
    cost:Number,
    socialComfortScale: Number,
    details: String,
    attendees: Array,

})

const Event = mongoose.model('Event', EventSchema)
module.exports = Event
