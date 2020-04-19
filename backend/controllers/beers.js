const express = require("express");
const router = express.Router();
const Beer = require("../models/beer.js");
const mongoose = require("mongoose");
const auth = require("../middleware/auth");

const User = require("../models/user.js");

//GET route
router.get("/", auth, async (req, res) => {
  console.log(req.headers);
  try {
    const beers = await Beer.find();
    res.status(200).json(beers);
  } catch (error) {
    res.status(400).json({
      error: error.message,
    });
  }
});

//CREATE route
router.post("/", auth, async (req, res) => {
  try {
    // const beerList = await Beer.find();
    const newBeer = await new Beer({
      name: req.body.name,
      type: req.body.type,
      brewery: req.body.brewery,
      breweryLocation: req.body.breweryLocation,
      url: req.body.url,
      finished: req.body.finished,
    });
    const savedNewBeer = await newBeer.save();
    return res.json(savedNewBeer);
  } catch (error) {
    res.status(400).json({
      error: error.message,
    });
  }
});

//SHOW route
router.get("/:id", async (req, res) => {
  try {
    const foundBeer = await Beer.findById(req.params.id);
    return res.send(foundBeer);
  } catch (e) {
    res.status(400).json({
      Error: "Uh oh! Could not find beer.",
    });
  }
});

//DELETE route
router.delete("/:id", auth, async (req, res) => {
  try {
    const findBeer = await Beer.findById(req.params.id);
    const foundBeer = await findBeer.remove();
    return res.json({
      Success: "Beer was successfully deleted from database",
    });
  } catch (e) {
    res.status(400).json({
      Error: "Uh oh! Could not delete beer.",
    });
  }
});

//UPDATE route
router.put("/:id", auth, async (req, res) => {
  try {
    const updateBeer = await Beer.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });
    res.status(200).json(updateBeer);
  } catch (e) {
    res.status(400).json({
      Error: "Oh my, your beer could not be updated.",
    });
  }
});

module.exports = router;
