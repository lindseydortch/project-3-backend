const express = require("express");
const { events } = require("../models/event-model");
const router = express.Router();

// import model
const Event = require("../models/event-model");

// Home Route
router.get("/events", (req, res) => {
  console.log("event route hit");
  Event.find({}).then((events) => res.json(events));
});

// Indivual Event View -- express
router.get("/events/:id", (req, res) => {
  console.log("express indv view hit");
  console.log(req.params.id);
  const id = req.params.id;
  Event.findById(id).then((event) => {
    res.json(event);
  });
});

// Indivual Event View - react - delee or update
router.get("/events", (req, res) => {
  console.log(req.body.id);
  const id = req.body.id;
  Event.findById(id).then((event) => {
    res.json(event);
  });
});

module.exports = router;
