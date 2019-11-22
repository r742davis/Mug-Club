const express = require('express');
const router = express.Router();
const Beer = require('../models/beer.js');
const mongoose = require('mongoose');


//GET route
router.get('/', async (req, res) => {
  try {
    const beers = await Beer.find();
    res.status(200).json(beers);
  } catch (e) {
    res.status(400).json({
      error: error.message
    })
  }
})

//CREATE route
// router.post('/', async (req, res) => {
//
// })

//DELETE route

module.exports = router;
