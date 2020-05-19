//-- Dependencies
const express = require("express");
const router = express.Router();
const bcrypt = require("bcryptjs");
const config = require("config");
const jwt = require("jsonwebtoken");

//-- User Model
const User = require("../models/user.js");

// GET /users Route
router.get("/", async (req, res) => {
  try {
    const users = await User.find();
    res.status(200).json(users);
  } catch (error) {
    res.status(400).json({
      error: error.message,
    });
  }
});

// SHOW individual user
router.get("/:id", async (req, res) => {
  try {
    const foundUser = await User.findById(req.params.id);
    return res.send(foundUser);
  } catch (error) {
    res.status(400).json({
      Error: "Uh oh! Could not find user.",
    });
  }
});

// POST /users route
router.post("/", (req, res) => {
  // Pass role from Register page
  // Need database user and password for admin / employee
  const { name, email, password } = req.body;
  const role = "PUBLIC";

  //Simple Validation
  if (!name || !email || !password) {
    return res
      .status(400)
      .json({ message: "Please enter all fields: Name, Email, and Password" });
  }

  //Check for existing user
  User.findOne({ email }).then((user) => {
    if (user) {
      return res.status(400).json({ message: "User already exists" });
    }

    const newUser = new User({
      name,
      email,
      password,
      role,
    });

    //Create salt and hash
    bcrypt.genSalt(10, (err, salt) => {
      bcrypt.hash(newUser.password, salt, (error, hash) => {
        if (err) throw err;
        newUser.password = hash;
        newUser.save().then((user) => {
          //JSON Web Token Creation along with user info sent over to database
          jwt.sign(
            {
              id: user.id,
              role: user.role,
            },
            config.get("jwtSecret"),
            { expiresIn: 3600 },
            (err, token) => {
              if (err) throw err;
              res.json({
                token,
                user: {
                  id: user.id,
                  name: user.name,
                  email: user.email,
                  role: user.role,
                },
              });
            }
          );
        });
      });
    });
  });
});

module.exports = router;
