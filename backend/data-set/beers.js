const beersList = [
  {
    name: "Pale Ale",
    type: "American Pale Ale",
    brewery: "Sierra Nevada",
    breweryLocation: "Chico, CA",
    url: "https://drive.google.com/file/d/134aecjHHFQXqVkGlcnx33uJicRDafwLp/view?usp=sharing",
    finished: false
  },
  {
    name: "Kellerweis Hefeweizen",
    type: "Weissbier",
    brewery: "Sierra Nevada",
    breweryLocation: "Chico, CA",
    url: "https://drive.google.com/file/d/134aecjHHFQXqVkGlcnx33uJicRDafwLp/view?usp=sharing",
    finished: false
  },
  {
    name: "Stout",
    type: "American Stout",
    brewery: "Sierra Nevada",
    breweryLocation: "Chico, CA",
    url: "https://drive.google.com/file/d/134aecjHHFQXqVkGlcnx33uJicRDafwLp/view?usp=sharing",
    finished: false
  },
  {
    name: "Porter",
    type: "American Porter",
    brewery: "Sierra Nevada",
    breweryLocation: "Chico, CA",
    url: "https://drive.google.com/file/d/134aecjHHFQXqVkGlcnx33uJicRDafwLp/view?usp=sharing",
    finished: false
  },
  {
    name: "Knightro",
    type: "Irish Stout",
    brewery: "Sierra Nevada",
    breweryLocation: "Chico, CA",
    url: "https://drive.google.com/file/d/134aecjHHFQXqVkGlcnx33uJicRDafwLp/view?usp=sharing",
    finished: false
  },
  {
    name: "Seasonal",
    type: "Seasonal Variety",
    brewery: "Sierra Nevada",
    breweryLocation: "Chico, CA",
    url: "https://drive.google.com/file/d/134aecjHHFQXqVkGlcnx33uJicRDafwLp/view?usp=sharing",
    finished: false
  },
  {
    name: "Hop Hunter IPA",
    type: "American IPA",
    brewery: "Sierra Nevada",
    breweryLocation: "Chico, CA",
    url: "https://drive.google.com/file/d/134aecjHHFQXqVkGlcnx33uJicRDafwLp/view?usp=sharing",
    finished: false
  },
  {
    name: "Otra Vez",
    type: "Gose",
    brewery: "Sierra Nevada",
    breweryLocation: "Chico, CA",
    url: "https://drive.google.com/file/d/134aecjHHFQXqVkGlcnx33uJicRDafwLp/view?usp=sharing",
    finished: false
  },
  {
    name: "Hop Bullet",
    type: "Double IPA",
    brewery: "Sierra Nevada",
    breweryLocation: "Chico, CA",
    url: "https://drive.google.com/file/d/134aecjHHFQXqVkGlcnx33uJicRDafwLp/view?usp=sharing",
    finished: false
  },
  {
    name: "Sierraveza",
    type: "American Lager",
    brewery: "Sierra Nevada",
    breweryLocation: "Chico, CA",
    url: "https://drive.google.com/file/d/134aecjHHFQXqVkGlcnx33uJicRDafwLp/view?usp=sharing",
    finished: false
  },
  {
    name: "Torpedo Extra IPA",
    type: "American IPA",
    brewery: "Sierra Nevada",
    breweryLocation: "Chico, CA",
    url: "https://drive.google.com/file/d/134aecjHHFQXqVkGlcnx33uJicRDafwLp/view?usp=sharing",
    finished: false
  },
  {
    name: "Tropical Torpedo IPA",
    type: "American IPA",
    brewery: "Sierra Nevada",
    breweryLocation: "Chico, CA",
    url: "https://drive.google.com/file/d/134aecjHHFQXqVkGlcnx33uJicRDafwLp/view?usp=sharing",
    finished: false
  },
  {
    name: "Mind Haze",
    type: "Hazy IPA",
    brewery: "Firestone Walker",
    breweryLocation: "Paso Robles, CA",
    url: "https://drive.google.com/file/d/1zw93Ek8smHQQieZn_33IDY28FHqvORJb/view?usp=sharing",
    finished: false
  },
  {
    name: "Shock Top Belgian White",
    type: "Witbier",
    brewery: "Blue Moon",
    breweryLocation: "Golden, CO",
    url: "https://drive.google.com/file/d/1WjOwSXobZrdn-Myr6ftrNjriea65D4Yg/view?usp=sharing",
    finished: false
  },
  {
    name: "Big Wave Golden Ale",
    type: "Blonde Ale",
    brewery: "Kona",
    breweryLocation: "Kailua-Kona, HI",
    url: "https://drive.google.com/open?id=1dLQ11QA6GrL75AoD6jBnUJHa-zoxGV9e",
    finished: false
  },
  {
    name: "Macadamia Nut Porter On Nitro",
    type: "American Porter",
    brewery: "Six Rivers",
    breweryLocation: "McKinleyville, CA",
    url: "https://drive.google.com/open?id=10DoleFUySr9iue-POTAYR2MEid5Hvgfb",
    finished: false
  },
  {
    name: "Stella Artois Lager",
    type: "International Pale Lager",
    brewery: "Stella Artois",
    breweryLocation: "Leuven, Belgium",
    url: "https://drive.google.com/open?id=1FBhCsTyJ0QauoFSD3_iWO7HxABEB_8tS",
    finished: false
  },
  {
    name: "805",
    type: "Blonde Ale",
    brewery: "Firestone Walker",
    breweryLocation: "Paso Robles, CA",
    url: "https://drive.google.com/file/d/1zw93Ek8smHQQieZn_33IDY28FHqvORJb/view?usp=sharing",
    finished: false
  },
  {
    name: "Scrimshaw Pilsner",
    type: "German Pilsner",
    brewery: "North Coast",
    breweryLocation: "Fort Bragg, CA",
    url: "https://drive.google.com/open?id=19Cq59SfTaukS2nLixM4reV0sYPbcF8EJ",
    finished: false
  },
  {
    name: "Lagunitas IPA",
    type: "American IPA",
    brewery: "Lagunitas",
    breweryLocation: "Petaluma, CA",
    url: "https://drive.google.com/open?id=1j0pSg90ip_zp_J8G7tLZotR6_uqF1PeC",
    finished: false
  },
  {
    name: "Fruitlands Passion Fruit & Guava",
    type: "Gose",
    brewery: "Modern Times",
    breweryLocation: "San Diego, CA",
    url: "https://drive.google.com/open?id=1Un19tXWHQaxVRfhyKITNs_n3FNJ2Vc2J",
    finished: false
  },
  {
    name: "Gummy Worms Hazy Pale",
    type: "American Pale Ale",
    brewery: "New Glory",
    breweryLocation: "Sacramento, CA",
    url: "https://drive.google.com/open?id=1G05kN5eFVNpQdlJ_i0SIjYp7wM1czHdb",
    finished: false
  },
  {
    name: "Panic IPA",
    type: "American IPA",
    brewery: "Track 7",
    breweryLocation: "Sacramento, CA",
    url: "https://drive.google.com/open?id=1fAwlRlspWg0yVE3GrlwEoJMgtid09TTu",
    finished: false
  },
  {
    name: "Great White",
    type: "Witbier",
    brewery: "Lost Coast",
    breweryLocation: "Eureka, CA",
    url: "https://drive.google.com/open?id=10UyssI7sYbZqJdy4mi4no5HW30-y24J_",
    finished: false
  },
  {
    name: "Modelo Especial",
    type: "International Pale Lager",
    brewery: "Grupo Modelo",
    breweryLocation: "Mazatlan, Mexico",
    url: "https://drive.google.com/open?id=10pL5RYXnKhPzZSLcvs-ZeveWbMMD4Xj2",
    finished: false
  },
  {
    name: "Guinness Draught",
    type: "Irish Stout",
    brewery: "St. James Gate (Guinness)",
    breweryLocation: "Dublin, Ireland",
    url: "https://drive.google.com/open?id=1-e-Wx53bVzGEWgjJkBU7WVpslWeq5FYo",
    finished: false
  },
]

module.exports = beersList;
