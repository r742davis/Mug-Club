const express = require('express');
const router = express.Router();
const Customer = require('../models/customer.js');
const mongoose = require('mongoose');
// const db = require('../db.js');


// Extracted beers list: for easier modification, cleaner CREATE route
const beersList = [
  {
    id: 1,
    name: "Pale Ale",
    type: "American Pale Ale",
    brewery: "Sierra Nevada",
    breweryLocation: "Chico, CA",
    finished: false
  },
  {
    id: 2,
    name: "Kellerweis Hefeweizen",
    type: "Weissbier",
    brewery: "Sierra Nevada",
    breweryLocation: "Chico, CA",
    finished: false
  },
  {
    id: 3,
    name: "Stout",
    type: "American Stout",
    brewery: "Sierra Nevada",
    breweryLocation: "Chico, CA",
    finished: false
  },
  {
    id: 4,
    name: "Porter",
    type: "American Porter",
    brewery: "Sierra Nevada",
    breweryLocation: "Chico, CA",
    finished: false
  },
  {
    id: 5,
    name: "Knightro",
    type: "Irish Stout",
    brewery: "Sierra Nevada",
    breweryLocation: "Chico, CA",
    finished: false
  },
  {
    id: 6,
    name: "Seasonal",
    type: "Seasonal Variety",
    brewery: "Sierra Nevada",
    breweryLocation: "Chico, CA",
    finished: false
  },
  {
    id: 7,
    name: "Hop Hunter IPA",
    type: "American IPA",
    brewery: "Sierra Nevada",
    breweryLocation: "Chico, CA",
    finished: false
  },
  {
    id: 8,
    name: "Otra Vez",
    type: "Gose",
    brewery: "Sierra Nevada",
    breweryLocation: "Chico, CA",
    finished: false
  },
  {
    id: 9,
    name: "Hop Bullet",
    type: "Double IPA",
    brewery: "Sierra Nevada",
    breweryLocation: "Chico, CA",
    finished: false
  },
  {
    id: 10,
    name: "Sierraveza",
    type: "American Lager",
    brewery: "Sierra Nevada",
    breweryLocation: "Chico, CA",
    finished: false
  },
  {
    id: 11,
    name: "Torpedo Extra IPA",
    type: "American IPA",
    brewery: "Sierra Nevada",
    breweryLocation: "Chico, CA",
    finished: false
  },
  {
    id: 12,
    name: "Tropical Torpedo IPA",
    type: "American IPA",
    brewery: "Sierra Nevada",
    breweryLocation: "Chico, CA",
    finished: false
  },
  {
    id: 13,
    name: "Mind Haze",
    type: "Hazy IPA",
    brewery: "Firestone Walker",
    breweryLocation: "Paso Robles, CA",
    finished: false
  },
  {
    id: 14,
    name: "Shock Top Belgian White",
    type: "Witbier",
    brewery: "Blue Moon",
    breweryLocation: "Golden, CO",
    finished: false
  },
  {
    id: 15,
    name: "Big Wave Golden Ale",
    type: "Blonde Ale",
    brewery: "Kona",
    breweryLocation: "Kailua-Kona, HI",
    finished: false
  },
  {
    id: 16,
    name: "Macadamia Nut Porter On Nitro",
    type: "American Porter",
    brewery: "Six Rivers",
    breweryLocation: "McKinleyville, CA",
    finished: false
  },
  {
    id: 17,
    name: "Stella Artois Lager",
    type: "International Pale Lager",
    brewery: "Stella Artois",
    breweryLocation: "Leuven, Belgium",
    finished: false
  },
  {
    id: 18,
    name: "805",
    type: "Blonde Ale",
    brewery: "Firestone Walker",
    breweryLocation: "Paso Robles, CA",
    finished: false
  },
  {
    id: 19,
    name: "Scrimshaw Pilsner",
    type: "German Pilsner",
    brewery: "North Coast",
    breweryLocation: "Fort Bragg, CA",
    finished: false
  },
  {
    id: 20,
    name: "Lagunitas IPA",
    type: "American IPA",
    brewery: "Lagunitas",
    breweryLocation: "Petaluma, CA",
    finished: false
  },
  {
    id: 21,
    name: "Fruitlands Passion Fruit & Guava",
    type: "Gose",
    brewery: "Modern Times",
    breweryLocation: "San Diego, CA",
    finished: false
  },
  {
    id: 22,
    name: "Gummy Worms Hazy Pale",
    type: "American Pale Ale",
    brewery: "New Glory",
    breweryLocation: "Sacramento, CA",
    finished: false
  },
  {
    id: 23,
    name: "Panic IPA",
    type: "American IPA",
    brewery: "Track 7",
    breweryLocation: "Sacramento, CA",
    finished: false
  },
  {
    id: 24,
    name: "Great White",
    type: "Witbier",
    brewery: "Lost Coast",
    breweryLocation: "Eureka, CA",
    finished: false
  },
  {
    id: 25,
    name: "Modelo Especial",
    type: "International Pale Lager",
    brewery: "Grupo Modelo",
    breweryLocation: "Mazatlan, Mexico",
    finished: false
  },
  {
    id: 26,
    name: "Guinness Draught",
    type: "Irish Stout",
    brewery: "St. James Gate (Guinness)",
    breweryLocation: "Dublin, Ireland",
    finished: false
  },
];

//GET route
router.get('/', async (req, res) => {
    try {
      const customers = await Customer.find();
      res.status(200).json(customers);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
});

//CREATE route
router.post('/', async (req, res) => {
  try {
    //Customer Schema for adding to database: includes mugClub and beers nesting
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
        beers: beersList
      }
    });
    const savedNewCustomer = await newCustomer.save();
    return res.json(savedNewCustomer);
  } catch (error) {
      res.status(400).json({error: error.message})
  }
})

//DELETE route
router.delete('/:id', async (req, res) => {
  try {
    const findCustomer = await Customer.findById(req.params.id);
    const foundCustomer = await findCustomer.remove();
    return res.json({ Success: "Customer was successfully deleted from database" })
  } catch (error) {
      res.status(400).json({ Error: "Uh oh! Could not delete customer." })
  }
})

//SHOW route
router.get('/:id', async (req, res) => {
  try {
    const findCustomer = await Customer.findById(req.params.id);
    return res.send('User ' + req.params.id + ' ' + findCustomer.firstName)
  } catch (error) {
      res.status(400).json({ Error: "Uh oh! Could not find customer." })
  }
})

//UPDATE/EDIT route
router.put('/:id', async (req, res) => {
  try {
    const updateCustomer = await Customer.findByIdAndUpdate(req.params.id, req.body, {new:true});
    res.status(200).json(updateCustomer);
  } catch (error) {
    res.status(400).json({error: error.message});
  }
})


module.exports = router;
