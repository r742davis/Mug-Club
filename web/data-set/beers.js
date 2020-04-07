const beersList = [
  {
    name: "Budweiser",
    type: "American Lager",
    brewery: "Anheuser Busch",
    breweryLocation: "St. Louis, MO",
    url: "https://www.google.com/url?sa=i&url=https%3A%2F%2F1000logos.net%2Fbudweiser-logo%2F&psig=AOvVaw1cv59hWiwPdNOIFd1d3L0a&ust=1585597850455000&source=images&cd=vfe&ved=0CAIQjRxqFwoTCIC4sb-6wOgCFQAAAAAdAAAAABAD",
    finished: false
  },
  {
    name: "Bud Light",
    type: "American Light Lager",
    brewery: "Anheuser Busch",
    breweryLocation: "St. Louis, MO",
    url: "https://www.google.com/url?sa=i&url=https%3A%2F%2Ftwitter.com%2Fbudlight&psig=AOvVaw1S9I1Uv3VzaN6Vq-BFeAHY&ust=1585597962656000&source=images&cd=vfe&ved=0CAIQjRxqFwoTCND5ve26wOgCFQAAAAAdAAAAABAD",
    finished: false
  },
  {
    name: "Coors",
    type: "American Lager",
    brewery: "Coors Brewing Company",
    breweryLocation: "Golden, CO",
    url: "https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.taphunter.com%2Fbeer%2Fcoors-banquet%2F5103350571073536&psig=AOvVaw0BNYLmvkU9ZzQ1OTdtAYJE&ust=1585598111237000&source=images&cd=vfe&ved=0CAIQjRxqFwoTCPjIy7u7wOgCFQAAAAAdAAAAABAD",
    finished: false
  },
  {
    name: "Coors Light",
    type: "American Light Lager",
    brewery: "Coors Brewing Company",
    breweryLocation: "Golden, CO",
    url: "https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.logopik.com%2Fitem%2Fcoors-light-logo-vector%2F&psig=AOvVaw2xd6IgfclYBfDHtUdyRgRL&ust=1585598159221000&source=images&cd=vfe&ved=0CAIQjRxqFwoTCMjl6su7wOgCFQAAAAAdAAAAABAl",
    finished: false
  },
  {
    name: "Pale Ale",
    type: "American Pale Ale",
    brewery: "Sierra Nevada",
    breweryLocation: "Chico, CA",
    url: "https://i.imgur.com/5bLXtLP.png",
    finished: false
  },
  {
    name: "Kellerweis Hefeweizen",
    type: "Weissbier",
    brewery: "Sierra Nevada",
    breweryLocation: "Chico, CA",
    url: "https://i.imgur.com/WXNVazi.png",
    finished: false
  },
  {
    name: "Stout",
    type: "American Stout",
    brewery: "Sierra Nevada",
    breweryLocation: "Chico, CA",
    url: "https://i.imgur.com/Ken7GuF.jpg",
    finished: false
  },
  {
    name: "Porter",
    type: "American Porter",
    brewery: "Sierra Nevada",
    breweryLocation: "Chico, CA",
    url: "https://i.imgur.com/txZEzTJ.jpg",
    finished: false
  },
  {
    name: "Knightro",
    type: "Irish Stout",
    brewery: "Sierra Nevada",
    breweryLocation: "Chico, CA",
    url: "https://i.imgur.com/5QmkdCb.png",
    finished: false
  },
  {
    name: "Seasonal",
    type: "Seasonal Variety",
    brewery: "Sierra Nevada",
    breweryLocation: "Chico, CA",
    url: "https://i.imgur.com/OCie6ls.png",
    finished: false
  },
  {
    name: "Hop Hunter IPA",
    type: "American IPA",
    brewery: "Sierra Nevada",
    breweryLocation: "Chico, CA",
    url: "https://i.imgur.com/866YExV.png",
    finished: false
  },
  {
    name: "Otra Vez",
    type: "Gose",
    brewery: "Sierra Nevada",
    breweryLocation: "Chico, CA",
    url: "https://i.imgur.com/BkD54Li.png",
    finished: false
  },
  {
    name: "Hop Bullet",
    type: "Double IPA",
    brewery: "Sierra Nevada",
    breweryLocation: "Chico, CA",
    url: "https://i.imgur.com/O0z3mGr.jpg",
    finished: false
  },
  {
    name: "Sierraveza",
    type: "American Lager",
    brewery: "Sierra Nevada",
    breweryLocation: "Chico, CA",
    url: "https://i.imgur.com/XCw18zr.png",
    finished: false
  },
  {
    name: "Torpedo Extra IPA",
    type: "American IPA",
    brewery: "Sierra Nevada",
    breweryLocation: "Chico, CA",
    url: "https://i.imgur.com/vrsClqs.jpg",
    finished: false
  },
  {
    name: "Tropical Torpedo IPA",
    type: "American IPA",
    brewery: "Sierra Nevada",
    breweryLocation: "Chico, CA",
    url: "https://i.imgur.com/NJcgSfz.jpg",
    finished: false
  },
  {
    name: "Mind Haze",
    type: "Hazy IPA",
    brewery: "Firestone Walker",
    breweryLocation: "Paso Robles, CA",
    url: "https://i.imgur.com/whQInzT.png",
    finished: false
  },
  {
    name: "Shock Top Belgian White",
    type: "Witbier",
    brewery: "Blue Moon",
    breweryLocation: "Golden, CO",
    url: "https://i.imgur.com/Xa3gSdK.png",
    finished: false
  },
  {
    name: "Big Wave Golden Ale",
    type: "Blonde Ale",
    brewery: "Kona",
    breweryLocation: "Kailua-Kona, HI",
    url: "https://i.imgur.com/uvCAHxN.jpg",
    finished: false
  },
  {
    name: "Macadamia Nut Porter On Nitro",
    type: "American Porter",
    brewery: "Six Rivers",
    breweryLocation: "McKinleyville, CA",
    url: "https://i.imgur.com/fcBbxHh.png",
    finished: false
  },
  {
    name: "Stella Artois Lager",
    type: "International Pale Lager",
    brewery: "Stella Artois",
    breweryLocation: "Leuven, Belgium",
    url: "https://i.imgur.com/qIJm7jT.png",
    finished: false
  },
  {
    name: "805",
    type: "Blonde Ale",
    brewery: "Firestone Walker",
    breweryLocation: "Paso Robles, CA",
    url: "https://i.imgur.com/whQInzT.png",
    finished: false
  },
  {
    name: "Scrimshaw Pilsner",
    type: "German Pilsner",
    brewery: "North Coast",
    breweryLocation: "Fort Bragg, CA",
    url: "https://i.imgur.com/44kFYnG.jpg",
    finished: false
  },
  {
    name: "Lagunitas IPA",
    type: "American IPA",
    brewery: "Lagunitas",
    breweryLocation: "Petaluma, CA",
    url: "https://i.imgur.com/9SBroXx.jpg",
    finished: false
  },
  {
    name: "Fruitlands Passion Fruit & Guava",
    type: "Gose",
    brewery: "Modern Times",
    breweryLocation: "San Diego, CA",
    url: "https://i.imgur.com/zHawXZz.png",
    finished: false
  },
  {
    name: "Gummy Worms Hazy Pale",
    type: "American Pale Ale",
    brewery: "New Glory",
    breweryLocation: "Sacramento, CA",
    url: "https://i.imgur.com/FESgirx.png",
    finished: false
  },
  {
    name: "Panic IPA",
    type: "American IPA",
    brewery: "Track 7",
    breweryLocation: "Sacramento, CA",
    url: "https://i.imgur.com/fbR4ag6.png",
    finished: false
  },
  {
    name: "Great White",
    type: "Witbier",
    brewery: "Lost Coast",
    breweryLocation: "Eureka, CA",
    url: "https://i.imgur.com/arH05Oq.png",
    finished: false
  },
  {
    name: "Modelo Especial",
    type: "International Pale Lager",
    brewery: "Grupo Modelo",
    breweryLocation: "Mazatlan, Mexico",
    url: "https://i.imgur.com/sp1OlDb.png",
    finished: false
  },
  {
    name: "Guinness Draught",
    type: "Irish Stout",
    brewery: "St. James Gate (Guinness)",
    breweryLocation: "Dublin, Ireland",
    url: "https://i.imgur.com/68Hj9dd.png",
    finished: false
  },
]

module.exports = beersList;
