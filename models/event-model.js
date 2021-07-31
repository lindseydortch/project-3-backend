const mongoose = require('../db/connection')

const EventSchema = mongoose.Schema({
    title: String,
    user: String,
    // user: {
    //     // References use the type ObjectId
    //     type: mongoose.Schema.Types.ObjectId,
    //     // the name of the model to which they refer
    //     ref: 'User'
    //   },
    type: String,
    location: String,
    date: String,
    online: String,
    inPerson: String,
    socialComfortScale: Number,
    details: String,
    attendees: Array,

})

const Event = mongoose.model('Event', EventSchema)
module.exports = Event
