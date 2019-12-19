import React from 'react';
import Grow from '@material-ui/core/Grow';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';
import classes from '../Modals.module.css';
import beerTypes from '../../Beer/BeerTypes';
const uniqid = require('uniqid');

//Iterate over object, return the optgroup with the key name, then map each key's array to display the options within that optgroup
const typeMap = Object.entries(beerTypes)
  .map(([key, value]) => {
      return <optgroup key={uniqid()} label={key.split(/(?=[A-Z])/).join(" ")}>{
        value.map(type => <option key={uniqid()} value={type}>{type}</option>)
      }</optgroup>
    }
  );

const useStyles = makeStyles(theme => ({
  margin: {
    margin: theme.spacing(1),
  },
}));

const BeerModal = (props) => {
  const styles = useStyles();

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

            <Button
              type="submit"
              variant="contained"
              color="primary"
              className={styles.margin}>Submit Edit</Button>
            <Button
              variant="outlined"
              color="secondary"
              size="medium"
              onClick={props.toggleEditModal}
              className={styles.margin}>Cancel</Button>
          </form>

        </div>
        </Grow>
      </section>
    </>
  )
};

export default BeerModal;
