const express = require("express");
const router = express.Router();
// import model
const User = require("../models/user-model");

// import dependenceis
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const auth = require("../middleware/auth");

router.get("/register", (req, res) => {
  User.find({})
    .then((users) => res.json(users))
    .catch(console.error);
});

router.post("/register", async (req, res) => {
  //validation
  if (!req.body.userName || !req.body.password) {
    return res.status(400).json({ msg: "Please enter all fields" });
  }
  if (req.body.userName.length > 15) {
    return res
      .status(400)
      .json({ msg: "Username length is 15 characters MAX" });
  }
  const user = await User.findOne({ userName: req.body.userName });
  if (user) {
    return res.status(400).json({ msg: "User already exists" });
  }
  bcrypt.genSalt(10, function (err, salt) {
    bcrypt.hash(req.body.password, salt, function (err, hash) {
      const newUser = new User({
        userName: req.body.userName,
        password: hash,
        city: req.body.city,
        state: req.body.state,
      });
      newUser
        .save()
        .then((user) => res.json(user))
        .catch(console.error);
    });
  });
});

// Profile routes

router.get("/profile", auth, async (req, res) => {
  const user =  User.findById(req.user._id);
  res.json({
    id: user._id,
    userName: user.userName,
    date: user.date,
  });
  
});

// delete profile will need auth

router.delete("/profile", auth, (req, res) => {
  User.findByIdAndDelete(req.user._id)
    .then(() => res.json("user is deleted"))
    .catch(console.error);
});

router.delete("/:id", (req, res) => {
  // deleting user by id possible include profile or user before
  User.findByIdAndDelete(req.params.id)
    .then(() => res.json("User is Deleted"))
    .catch(console.error);
});

// Login Portion

router.get("/login", (req, res) => {
  // res.send(req.body.userName);
  res.send("Login Profile form should go here");
});

router.post("/login", async (req, res) => {
  // testing if post login works
  // const user = await User.findOne({ name: req.body.name });

  //validation
  if (!req.body.userName || !req.body.password) {
    return res.status(400).json({ msg: "Please enter all fields" });
  }
  const user = await User.findOne({ userName: req.body.userName });
  if (!user) {
    return res.status(400).json({ msg: "User doesnt exist" });
  }

  bcrypt.compare(req.body.password, user.password, (err, response) => {
    if (!response) {
      return res.status(400).send({ msg: "Authentication Error" });
    } else {
      const userForToken = {
        _id: user._id,
      };

      const token = jwt.sign(userForToken, `${process.env.JWT_SECRET}`);

      // const token = jwt.sign({_id: user._id}, `${process.env.JWT_SECRET}`)

      res.json({
        token: token,
        user: {
          id: user._id,
          userName: user.userName,
          city: user.city,
          state: user.state,
          date: user.date,
        },
      });
    }
  });
});

router.post("/tokenIsValid", async (req, res) => {
  // res.send('tokenValid Post Request sent')
  
  try {
    const token = req.header("auth-token");
    if (!token) {
      return res.json("false");
    }

    const verified = jwt.verify(token, `${process.env.JWT_SECRET}`);
    if (!verified) {
      return res.json("false");
    }

    const user = await User.findById(verified._id);
    if (!user) {
      return res.json("false");
    }

    return res.json(true);
  } catch {
    res.status(500).json({ msg: err.message });
  }
});

module.exports = router;
