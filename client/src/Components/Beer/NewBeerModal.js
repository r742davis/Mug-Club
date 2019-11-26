import React from 'react';
import classes from './BeerModal.module.css';
import beerTypes from './BeerTypes';

const uniqid = require('uniqid');

//Iterate over object, return the optgroup with the key name, then map each key's array to display the options within that optgroup
const typeMap = Object.entries(beerTypes)
  .map(([key, value]) => {
      return <optgroup key={uniqid()} label={key.split(/(?=[A-Z])/).join(" ")}>{
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
