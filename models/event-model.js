const mongoose = require('../db/connection')

const EventSchema = mongoose.Schema({
    name: String,
    user: String,
    // user: {
    //     // References use the type ObjectId
    //     type: mongoose.Schema.Types.ObjectId,
    //     // the name of the model to which they refer
    //     ref: 'User'
    //   },
    type: String,
    location: String,
    dateAndTime: String,
    online: String,
    inPerson: String,
    socialComfortScale: String,
    description: String,
    attending: String,

})


///url?
///img?


const Event = mongoose.model('Event', EventSchema)
module.exports = Event
