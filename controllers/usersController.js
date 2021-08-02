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

router.get('/profile', (req,res) => {
    res.send('Profile Page render')
    // this will show indv profile page
})

router.delete('/profile/:id', (req,res) => {
    // deleting user by id possible include profile or user before
    User.findByIdAndDelete(req.params.id)
    .then(() => res.json('User is Deleted'))
    .catch(console.error)
})

// Login Portion

router.get('/login', (req,res) => {
    // res.send(req.body.userName);
    res.send("Login Profile form should go here")

})

router.post('/login', (req,res) => {
    // res.send({userName: req.body.userName});
    const user = User.findOne({userName: req.body.userName})
    res.send(user)
    // if (!user) {
    //     res.send(`User doesn't exisit`)
    // } else {
    //     res.json(user)
    // }

})

module.exports = router;

