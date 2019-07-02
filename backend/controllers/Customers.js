const express = require('express');
const router = express.Router();
const Customer = require('../models/CustomerSchema.js');
const mongoose = require('mongoose');
// const db = require('../db.js');


// MongoClient.connect('mongodb://localhost:27017/mug_club', function (err, client) {
//   if (err) throw err
//
//   const db = client.db('mug_club')
//
//   db.collection('customers').find().toArray(function (err, result) {
//     if (err) throw err
//
//     console.log(result)
//   })
// })


//GET route
router.get('/', (req, res) => {
    Customer.find((error, data) => {
        res.send(data)
        if(error) return res.status(404).json({
          message: 'Customers not found'
        })
    })
});

//CREATE route

//DELETE route

//SHOW route

//UPDATE route

module.exports = router;

// var customers = [
//   {
//     'firstName': 'Jessica',
//     'lastName': 'Jones'
//   },
//   {
//     'firstName': 'Bobby',
//     'lastName': 'Newport'
//   }
// ];
// db.customers.insert(customers);
