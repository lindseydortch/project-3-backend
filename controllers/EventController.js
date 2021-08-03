const express = require("express");
const router = express.Router();

// import model
const Event = require("../models/event-model");

router.get('/events', (req, res, next) => {
  //console.log(req.body)
  Event.find({})
  //.populate('user')
  .then(events => res.json(events))
  .catch(next)
  })
  router.post('/event/add', (req, res, next) => {
    console.log(req.body)
    Event.create(req.body)
    //.populate('user')
     .then(data => res.json(data))
    .catch(next)
  })
  router.get('/event/:id', (req, res) => {
    Event.findById(req.params.id)
    .then(event => res.json(event))
    })
  router.put('/event/edit/:id', (req, res, next) => {
    Event.findByIdAndUpdate({_id: req.params.id}, req.body, {new: true})
    //.populate('user')
    //console.log('event update success')
    .then(data => res.json(data))
    .catch(next)
  })
  
  router.delete('/event/:id', (req, res, next) => {
    Event.findByIdAndRemove(req.params.id)
    .then(() => {
        Event.find({}).then(events => res.json(events))
    })
    .catch(next)
    })


module.exports = router;

