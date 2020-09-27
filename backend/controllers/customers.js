const express = require("express");
const router = express.Router();
const Customer = require("../models/customer.js");
const Beer = require("../models/beer.js");
const authorizeToken = require("../middleware/authorizeToken");

// GET ALL CUSTOMERS route //
/////////////////////////////
router.get("/", async (req, res) => {
  try {
    const customers = await Customer.find();
    res.status(200).json(customers);
  } catch (error) {
    res.status(400).json({
      error: error.message,
    });
  }
});

// CREATE CUSTOMER route //
///////////////////////////
router.post("/", authorizeToken, async (req, res) => {
  try {
    //Pulled from 'beers' collection on Mongo database
    const beerList = await Beer.find();
    const { 
      name: { first, last },
      mugClub: { completed, clubId, beers },
      username,
      password,
      email,
    } = req.body;
    const newCustomer = await new Customer({
      name: {
        first: first,
        last: last,
      },
      username: username,
      password: password,
      email: email,
      mugClub: {
        completed: completed,
        clubId: clubId,
        beers: beers ? beers : beerList,
      },
    });
    const savedNewCustomer = await newCustomer.save();
    return res.json(savedNewCustomer);
  } catch (error) {
    res.status(400).json({
      error: error.message,
    });
  }
});

// DELETE CUSTOMER route //
///////////////////////////
router.delete("/:id", authorizeToken, async (req, res) => {
  try {
    const findCustomer = await Customer.findById(req.params.id);
    const foundCustomer = await findCustomer.remove();
    return res.json({
      Success: "Customer was successfully deleted from database",
    });
  } catch (error) {
    res.status(400).json({
      Error: "Uh oh! Could not delete customer.",
    });
  }
});

// SHOW SINGLE CUSTOMER route //
////////////////////////////////
router.get("/:id", authorizeToken, async (req, res) => {
  try {
    const foundCustomer = await Customer.findById(req.params.id);
    return res.send(foundCustomer);
  } catch (error) {
    res.status(400).json({
      Error: "Uh oh! Could not find customer.",
    });
  }
});

// UPDATE CUSTOMER route //
///////////////////////////
router.put("/:id", authorizeToken, async (req, res) => {
  try {
    const updateCustomer = await Customer.findByIdAndUpdate(
      req.params.id,
      req.body,
      {
        new: true,
      }
    );
    res.status(200).json(updateCustomer);
  } catch (error) {
    res.status(400).json({
      error: error.message,
    });
  }
});

module.exports = router;
