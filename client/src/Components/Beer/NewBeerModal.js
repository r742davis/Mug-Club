import React from 'react';
import classes from './BeerModal.module.css';

const beerTypes = {
  lagers: [
    'American Lager',
    'German Helles',
    'German Pilsner',
    'Czech Pilsner'
  ],
  darklagers: [
    'Amber American Lager',
    'Oktoberfest',
    'German Schwarzbier',
    'Vienna Lager'
  ],
  germanBocks: [
    'Traditional Bock',
    'Doppelbock',
    'Weizenbock',
    'Maibock'
  ],
  brownAles: [
    'American Brown Ale',
    'English Brown Ale'
  ],
  paleAles: [
    'American Amber Ale',
    'American Pale Ale',
    'Blonde Ale',
    'English Bitter',
    'English Pale Ale'
  ],
  indianPaleAles: [
    'American IPA',
    'Imperial or Double IPA',
    'English IPA'
  ],
  porters: [
    'American Imperial Porter',
    'English Brown Porter',
    'Robust Porter'
  ],
  stouts: [
    'American Stout',
    'American Imperial Stout',
    'Oatmeal Stout',
    'Milk Stout',
    'Irish Dry Stout'
  ],
  belgianStyle: [
    'Belgian Pale Ale',
    'Belgian Dubbel',
    'Belgian Tripel',
    'Belgian Quadrupel',
    'Belgian Strong Dark Ale',
    'Belgian Saison'
  ],
  wheat: [
    'American Pale Wheat',
    'Belgian Witbier',
    'Berliner Weisse',
    'Dunkelweizen',
    'Hefeweizen'
  ],
  sour: [
    'American Sour',
    'Belgian Fruit Lambic',
    'Flanders Red Ale',
    'Belgian Gueuze'
  ],
  specialty: [
    'American Black Ale',
    'Barrel-Aged',
    'Chocolate',
    'Coffee',
    'Fruit and Vegetable',
    'Gluten-free',
    'Herb and Spice',
    'Honey',
    'Pumpkin',
    'Rye',
    'Session',
    'Smoked',
    'Seasonal'
  ]
}

const NewBeerModal = (props) => {
  return (
    <>
      <section className={classes.ModalContainer}>
        <div className={classes.Modal}>
        <h2 className={classes.ModalTitle}>Create New Beer</h2>
        <form
          className={classes.ModalForm}
          onSubmit={props.handleSubmit}>
          <label htmlFor="beerName">Beer Name</label>
          <input type="text" name="beerName" placeholder="Beer Name" value={props.beerName} onChange={props.handleInputChange} required/>
          <label htmlFor="beerType">Type</label>

          <select name="beerType" placeholder="Select Beer Type" value={props.selectedBeerType || ''} onChange={props.handleInputChange}>
            <option value="default" disabled>Choose a Beer Type</option>
            <option value="American IPA">American IPA</option>
            <option value="Imperial or Double IPA">Imperial or Double IPA</option>
            <option value="English IPA">American Indian Pale Ale IPA</option>
            <option value="Dark Lager">Dark Lager</option>
            <option value="Stout">Stout</option>
            <option value="German Bock">German Bock</option>
            <option value="Belgian-Style Ale">Belgian-Style Ale</option>
            <option value="Sour">Sour</option>
            <option value="Wheat Beer">Wheat Beer</option>
            <option value="Pale Lager">Pale Lager</option>
            <option value="Brown Ale">Brown Ale</option>
            <option value="American Imperial Porter">American Imperial Porter</option>
            <option value="English Brown Porter">English Brown Porter</option>

            <option value="Pilsner">Pilsner</option>
            <option value="Double IPA">Double IPA</option>
          </select>

          {/*<input type="text" name="beerType" placeholder="Beer Type" value={props.beerType} onChange={props.handleInputChange} required/>*/}

          <label htmlFor="brewery">Brewery</label>
          <input type="text" name="brewery" placeholder="Brewery Name" value={props.brewery} onChange={props.handleInputChange} required/>
          <label htmlFor="breweryLocation">Brewery Location</label>
          <input type="text" name="breweryLocation" placeholder="Brewery Location" value={props.breweryLocation} onChange={props.handleInputChange} required/>
          <input type="submit" value="Submit" />
        </form>
        </div>
      </section>
    </>
  )
};

export default NewBeerModal;
