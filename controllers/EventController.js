const express = require("express");
const router = express.Router();

// import model
const Event = require("../models/event-model");

router.get('/', (req, res, next) => {
  //console.log(req.body)
  Event.find({})
  //.populate('user')
  .then(events => res.json(events))
  .catch(next)
  })
  router.post('/add', (req, res, next) => {
    console.log(req.body)
    Event.create(req.body)
    //.populate('user')
     .then(data => res.json(data))
    .catch(next)
  })
  router.get('/:id', (req, res, next) => {
    Event.findById(req.params.id)
    .then(event => res.json(event))
    .catch(next)
  })
  router.put('/edit/:id', (req, res, next) => {
    Event.findByIdAndUpdate({_id: req.params.id}, req.body, {new: true})
    //.populate('user')
    //console.log('event update success')
    .then(data => res.send('worked'))
    .catch(next)
  })
  
  router.delete('/:id', (req, res, next) => {
    Event.findByIdAndRemove(req.params.id)
    .then(() => {
        Event.find({}).then(events => res.json(events))
    })
    .catch(next)
    })


module.exports = router;

module.exports = router;
