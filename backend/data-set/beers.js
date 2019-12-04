const beersList = [
  {
    name: "Pale Ale",
    type: "American Pale Ale",
    brewery: "Sierra Nevada",
    breweryLocation: "Chico, CA",
    url: "https://photos.app.goo.gl/daaE19DXwXhUJR6H7",
    finished: false
  },
  {
    name: "Kellerweis Hefeweizen",
    type: "Weissbier",
    brewery: "Sierra Nevada",
    breweryLocation: "Chico, CA",
    url: "https://photos.app.goo.gl/daaE19DXwXhUJR6H7",
    finished: false
  },
  {
    name: "Stout",
    type: "American Stout",
    brewery: "Sierra Nevada",
    breweryLocation: "Chico, CA",
    url: "https://photos.app.goo.gl/daaE19DXwXhUJR6H7",
    finished: false
  },
  {
    name: "Porter",
    type: "American Porter",
    brewery: "Sierra Nevada",
    breweryLocation: "Chico, CA",
    url: "https://photos.app.goo.gl/daaE19DXwXhUJR6H7",
    finished: false
  },
  {
    name: "Knightro",
    type: "Irish Stout",
    brewery: "Sierra Nevada",
    breweryLocation: "Chico, CA",
    url: "https://photos.app.goo.gl/daaE19DXwXhUJR6H7",
    finished: false
  },
  {
    name: "Seasonal",
    type: "Seasonal Variety",
    brewery: "Sierra Nevada",
    breweryLocation: "Chico, CA",
    url: "https://photos.app.goo.gl/daaE19DXwXhUJR6H7",
    finished: false
  },
  {
    name: "Hop Hunter IPA",
    type: "American IPA",
    brewery: "Sierra Nevada",
    breweryLocation: "Chico, CA",
    url: "https://photos.app.goo.gl/daaE19DXwXhUJR6H7",
    finished: false
  },
  {
    name: "Otra Vez",
    type: "Gose",
    brewery: "Sierra Nevada",
    breweryLocation: "Chico, CA",
    url: "https://photos.app.goo.gl/daaE19DXwXhUJR6H7",
    finished: false
  },
  {
    name: "Hop Bullet",
    type: "Double IPA",
    brewery: "Sierra Nevada",
    breweryLocation: "Chico, CA",
    url: "https://photos.app.goo.gl/daaE19DXwXhUJR6H7",
    finished: false
  },
  {
    name: "Sierraveza",
    type: "American Lager",
    brewery: "Sierra Nevada",
    breweryLocation: "Chico, CA",
    url: "https://photos.app.goo.gl/daaE19DXwXhUJR6H7",
    finished: false
  },
  {
    name: "Torpedo Extra IPA",
    type: "American IPA",
    brewery: "Sierra Nevada",
    breweryLocation: "Chico, CA",
    url: "https://photos.app.goo.gl/daaE19DXwXhUJR6H7",
    finished: false
  },
  {
    name: "Tropical Torpedo IPA",
    type: "American IPA",
    brewery: "Sierra Nevada",
    breweryLocation: "Chico, CA",
    url: "https://photos.app.goo.gl/daaE19DXwXhUJR6H7",
    finished: false
  },
  {
    name: "Mind Haze",
    type: "Hazy IPA",
    brewery: "Firestone Walker",
    breweryLocation: "Paso Robles, CA",
    url: "https://photos.app.goo.gl/1W2A8ASgR9uq2sv39",
    finished: false
  },
  {
    name: "Shock Top Belgian White",
    type: "Witbier",
    brewery: "Blue Moon",
    breweryLocation: "Golden, CO",
    url: "https://photos.app.goo.gl/LM3KbkbqADCLwfXi7",
    finished: false
  },
  {
    name: "Big Wave Golden Ale",
    type: "Blonde Ale",
    brewery: "Kona",
    breweryLocation: "Kailua-Kona, HI",
    url: "https://photos.app.goo.gl/udmDaATaxKVHvdYXA",
    finished: false
  },
  {
    name: "Macadamia Nut Porter On Nitro",
    type: "American Porter",
    brewery: "Six Rivers",
    breweryLocation: "McKinleyville, CA",
    url: "https://photos.app.goo.gl/b1kdw43oXKWiQY1v5",
    finished: false
  },
  {
    name: "Stella Artois Lager",
    type: "International Pale Lager",
    brewery: "Stella Artois",
    breweryLocation: "Leuven, Belgium",
    url: "https://photos.app.goo.gl/psuizGkpVQP1MJwZ7",
    finished: false
  },
  {
    name: "805",
    type: "Blonde Ale",
    brewery: "Firestone Walker",
    breweryLocation: "Paso Robles, CA",
    url: "https://photos.app.goo.gl/1W2A8ASgR9uq2sv39",
    finished: false
  },
  {
    name: "Scrimshaw Pilsner",
    type: "German Pilsner",
    brewery: "North Coast",
    breweryLocation: "Fort Bragg, CA",
    url: "https://photos.app.goo.gl/cNPNrbsL5odJ1MsU7",
    finished: false
  },
  {
    name: "Lagunitas IPA",
    type: "American IPA",
    brewery: "Lagunitas",
    breweryLocation: "Petaluma, CA",
    url: "https://photos.app.goo.gl/SyxcCW68x9nnTTEz7",
    finished: false
  },
  {
    name: "Fruitlands Passion Fruit & Guava",
    type: "Gose",
    brewery: "Modern Times",
    breweryLocation: "San Diego, CA",
    url: "https://photos.app.goo.gl/3DdB6E4ZCjDbBWLb9",
    finished: false
  },
  {
    name: "Gummy Worms Hazy Pale",
    type: "American Pale Ale",
    brewery: "New Glory",
    breweryLocation: "Sacramento, CA",
    url: "https://photos.app.goo.gl/Ctb6wMKyaTEMhU6K7",
    finished: false
  },
  {
    name: "Panic IPA",
    type: "American IPA",
    brewery: "Track 7",
    breweryLocation: "Sacramento, CA",
    url: "https://photos.app.goo.gl/gxfyRdJj5S1ZV6kH8",
    finished: false
  },
  {
    name: "Great White",
    type: "Witbier",
    brewery: "Lost Coast",
    breweryLocation: "Eureka, CA",
    url: "https://photos.app.goo.gl/DSB5KPWUbetnTtpQ7",
    finished: false
  },
  {
    name: "Modelo Especial",
    type: "International Pale Lager",
    brewery: "Grupo Modelo",
    breweryLocation: "Mazatlan, Mexico",
    url: "https://photos.app.goo.gl/5VNWfGVToGTpXzrr9",
    finished: false
  },
  {
    name: "Guinness Draught",
    type: "Irish Stout",
    brewery: "St. James Gate (Guinness)",
    breweryLocation: "Dublin, Ireland",
    url: "https://photos.app.goo.gl/NEdGAVoag5bKiToE7",
    finished: false
  },
]

module.exports = beersList;
