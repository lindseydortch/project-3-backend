const express = require("express")
const router = express.Router();

// import model

const User = require('../models/user-model')

router.get('/register', (req,res) => {
    User.find({})
    .then( users => res.json(users))
    .catch(console.error)
})

router.post('/register', (req,res) => {
    const newUser = new User({
        userName: req.body.userName,
        password: req.body.password,
        city: req.body.city,
        state: req.body.state
    })
    newUser
    .save()
    .then((user) => res.json(user))
    .catch(console.error)
})

module.exports = router;

