const express = require("express");
const router = express.Router();
const Customer = require("../models/customer.js");
const Beer = require("../models/beer.js");
const mongoose = require("mongoose");
const auth = require('../middleware/auth');

//GET route
router.get("/",  async (req, res) => {
  try {
    const customers = await Customer.find();
    res.status(200).json(customers);
  } catch (error) {
    res.status(400).json({
      error: error.message
    });
  }
});

//CREATE route
router.post("/",  async (req, res) => {
  try {
    //Pulled from 'beers' collection on Mongo database
    const beerList = await Beer.find();
    const newCustomer = await new Customer({
      name: {
        first: req.body.name.first,
        last: req.body.name.last
      },
      username: req.body.username,
      password: req.body.password,
      email: req.body.email,
      mugClub: {
        completed: req.body.mugClub.completed,
        clubId: req.body.mugClub.clubId,
        beers: (req.body.mugClub.beers ? req.body.mugClub.beers : beerList)
      }
    });
    const savedNewCustomer = await newCustomer.save();
    return res.json(savedNewCustomer);
  } catch (error) {
    res.status(400).json({
      error: error.message
    });
  }
});

//DELETE route
router.delete("/:id",  async (req, res) => {
  try {
    const findCustomer = await Customer.findById(req.params.id);
    const foundCustomer = await findCustomer.remove();
    return res.json({
      Success: "Customer was successfully deleted from database"
    });
  } catch (error) {
    res.status(400).json({
      Error: "Uh oh! Could not delete customer."
    });
  }
});

//SHOW route
router.get("/:id",  async (req, res) => {
  try {
    const foundCustomer = await Customer.findById(req.params.id);
    return res.send(foundCustomer);
  } catch (error) {
    res.status(400).json({
      Error: "Uh oh! Could not find customer."
    });
  }
});

//UPDATE/EDIT route
router.put("/:id",  async (req, res) => {
  try {
    const updateCustomer = await Customer.findByIdAndUpdate(
      req.params.id,
      req.body,
      {
        new: true
      }
    );
    res.status(200).json(updateCustomer);
  } catch (error) {
    res.status(400).json({
      error: error.message
    });
  }
});

module.exports = router;