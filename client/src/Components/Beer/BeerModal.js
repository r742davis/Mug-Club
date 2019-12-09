import React from 'react';
import Grow from '@material-ui/core/Grow';
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
  );

const BeerModal = (props) => {
  return (
    <>
      <section className={classes.ModalContainer}>
        <Grow in={true}>
        <div className={classes.Modal}>
          <h2 className={classes.ModalTitle}>Edit Beer</h2>
          <img className={classes.ModalImage} src={props.beerUrl} alt={props.beerName} />
          <form
            className={classes.ModalForm}
            onSubmit={props.handleEditSubmit}>
            <label htmlFor="beerName">Beer Name</label>
            <input type="text" name="beerName" placeholder="Beer Name" value={props.beerName} onChange={props.handleInputChange} />
            <label htmlFor="beerType">Type</label>

            <select name="beerType" onChange={props.handleInputChange} value={props.beerType}>
              <optgroup label="Current Beer Type">
                <option value={props.beerType}>{props.beerType}</option>
              </optgroup>
              {typeMap}
            </select>

            <label htmlFor="brewery">Brewery</label>
            <input type="text" name="brewery" placeholder="Brewery Name" value={props.brewery} onChange={props.handleInputChange} />
            <label htmlFor="breweryLocation">Brewery Location</label>
            <input type="text" name="breweryLocation" placeholder="Brewery Location" value={props.breweryLocation} onChange={props.handleInputChange} />

            <label htmlFor="beerUrl">Beer/Brewery Image URL</label>
            <input type="text" name="beerUrl" placeholder="URL Address" value={props.beerUrl} onChange={props.handleInputChange} required/>

            <input type="submit" value="Submit" />
          </form>
          <button onClick={props.toggleEditModal}>Close</button>
        </div>
        </Grow>
      </section>
    </>
  )
};

export default BeerModal;
