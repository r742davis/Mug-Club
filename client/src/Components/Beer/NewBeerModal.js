import React from 'react';
import classes from './BeerModal.module.css';

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
            <option value="Indian Pale Ale">Indian Pale Ale</option>
            <option value="Pale Lager">Pale Lager</option>
            <option value="Brown Ale">Brown Ale</option>
            <option value="Porter">Porter</option>
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
