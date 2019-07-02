const express = require('express');
const router = express.Router();
const Customer  = require('../models/CustomerSchema.js');

//GET route
router.get('/', (req, res) => {
    Customer.find()
      .then(res.send)
      .catch(error => res.status(404).json({
        success: false
      }))
})
//CREATE route

//DELETE route

//SHOW route

//UPDATE route

module.exports = router;
