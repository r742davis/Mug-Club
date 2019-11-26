import React from 'react';
import classes from './BeerModal.module.css';

const beerTypes = {
  Lagers: [
    'American Lager',
    'German Helles',
    'German Pilsner',
    'Czech Pilsner'
  ],
  DarkLagers: [
    'Amber American Lager',
    'Oktoberfest',
    'German Schwarzbier',
    'Vienna Lager'
  ],
  GermanBocks: [
    'Traditional Bock',
    'Doppelbock',
    'Weizenbock',
    'Maibock'
  ],
  BrownAles: [
    'American Brown Ale',
    'English Brown Ale'
  ],
  PaleAles: [
    'American Amber Ale',
    'American Pale Ale',
    'Blonde Ale',
    'English Bitter',
    'English Pale Ale'
  ],
  IndianPaleAles: [
    'American IPA',
    'Imperial or Double IPA',
    'English IPA'
  ],
  Porters: [
    'American Imperial Porter',
    'English Brown Porter',
    'Robust Porter'
  ],
  Stouts: [
    'American Stout',
    'American Imperial Stout',
    'Oatmeal Stout',
    'Milk Stout',
    'Irish Dry Stout'
  ],
  BelgianStyle: [
    'Belgian Pale Ale',
    'Belgian Dubbel',
    'Belgian Tripel',
    'Belgian Quadrupel',
    'Belgian Strong Dark Ale',
    'Belgian Saison'
  ],
  Wheat: [
    'American Pale Wheat',
    'Belgian Witbier',
    'Berliner Weisse',
    'Dunkelweizen',
    'Hefeweizen'
  ],
  Sour: [
    'American Sour',
    'Belgian Fruit Lambic',
    'Flanders Red Ale',
    'Belgian Gueuze'
  ],
  Specialty: [
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

const uniqid = require('uniqid');

const typeMap = Object.entries(beerTypes)
  .map(([key, value]) => {
      return <optgroup label={key.split(/(?=[A-Z])/).join(" ")}>{
        value.map(type => <option key={uniqid()} value={type}>{type}</option>)
      }</optgroup>
    }
  )

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

          <select name="beerType" onChange={props.handleInputChange}>
            {typeMap}

          </select>

          {/*<optgroup label="Lagers">
          {beerTypes.darkLagers.map((type, index) => {
            return <option key={index} value={type}>{type}</option>
          })}
          </optgroup>

          <optgroup label="Lagers">
          {beerTypes.brownAles.map((type, index) => {
            return <option key={index} value={type}>{type}</option>
          })}
          </optgroup>

          <optgroup label="Lagers">
          {beerTypes.paleAles.map((type, index) => {
            return <option key={index} value={type}>{type}</option>
          })}
          </optgroup>

          <optgroup label="Lagers">
          {beerTypes.indianPaleAles.map((type, index) => {
            return <option key={index} value={type}>{type}</option>
          })}
          </optgroup>

          <optgroup label="Lagers">
          {beerTypes.porters.map((type, index) => {
            return <option key={index} value={type}>{type}</option>
          })}
          </optgroup>

          <optgroup label="Lagers">
          {beerTypes.stouts.map((type, index) => {
            return <option key={index} value={type}>{type}</option>
          })}
          </optgroup>

          <optgroup label="Lagers">
          {beerTypes.belgianStyle.map((type, index) => {
            return <option key={index} value={type}>{type}</option>
          })}
          </optgroup>

          <optgroup label="Lagers">
          {beerTypes.wheat.map((type, index) => {
            return <option key={index} value={type}>{type}</option>
          })}
          </optgroup>

          <optgroup label="Lagers">
          {beerTypes.sour.map((type, index) => {
            return <option key={index} value={type}>{type}</option>
          })}
          </optgroup>

          <optgroup label="German Bocks">
          {beerTypes.germanBocks.map((type, index) => {
            return <option key={index} value={type}>{type}</option>
          })}
          </optgroup>

          <optgroup label="Lagers">
          {beerTypes.specialty.map((type, index) => {
            return <option key={index} value={type}>{type}</option>
          })}
          </optgroup>*/}


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
