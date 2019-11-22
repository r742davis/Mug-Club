const express = require('express');
const router = express.Router();
const Beer = require('../models/beer.js');
const mongoose = require('mongoose');


//GET route
router.get('/', async (req, res) => {
  try {
    const beers = await Beer.find();
    res.status(200).json(beers);
  } catch (error) {
    res.status(400).json({
      error: error.message
    })
  }
})

//CREATE route
router.post('/', async (req, res) => {
  try {
    const beerList = await Beer.find();
    const newBeer = await new Beer({
      name: req.body.name,
      type: req.body.type,
      brewery: req.body.brewery,
      breweryLocation: req.body.breweryLocation,
      finished: req.body.finished
    });
    const savedNewBeer = await newBeer.save();
    return res.json(savedNewBeer);
  } catch (error) {
    res.status(400).json({
      error: error.message
    })
  }
})

//DELETE route

module.exports = router;
