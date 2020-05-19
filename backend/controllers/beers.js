const express = require("express");
const router = express.Router();
const Beer = require("../models/beer.js");
const authorizeToken = require("../middleware/authorizeToken");
const { authRole } = require("../permissions/authRole");
const { ROLE } = require("../permissions/roles")

// GET ALL BEERS route //
////////////////////////
router.get("/", authorizeToken, async (req, res) => {
  try {
    const beers = await Beer.find();
    res.status(200).json(beers);
  } catch (error) {
    res.status(400).json({
      error: error.message,
    });
  }
});

// CREATE BEER route //
///////////////////////
router.post("/", authorizeToken, async (req, res) => {
  const { 
    name, 
    type, 
    brewery, 
    breweryLocation, 
    url, 
    finished } = req.body;
  try {
    const newBeer = await new Beer({
      name: name,
      type: type,
      brewery: brewery,
      breweryLocation: breweryLocation,
      url: url,
      finished: finished,
    });
    const savedNewBeer = await newBeer.save();
    return res.json(savedNewBeer);
  } catch (error) {
    res.status(400).json({
      error: error.message,
    });
  }
});

// SHOW SINGLE BEER route //
////////////////////////////
router.get("/:id", authorizeToken, async (req, res) => {
  try {
    const foundBeer = await Beer.findById(req.params.id);
    return res.send(foundBeer);
  } catch (e) {
    res.status(400).json({
      Error: "Uh oh! Could not find beer.",
    });
  }
});

// DELETE BEER route //
///////////////////////
router.delete("/:id", authorizeToken, authRole(ROLE.PUBLIC), async (req, res) => {
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

// UPDATE BEER route //
///////////////////////
router.put("/:id", authorizeToken, async (req, res) => {
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
