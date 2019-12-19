import React from 'react';
import Button from '@material-ui/core/Button';
import Grow from '@material-ui/core/Grow';
import { makeStyles } from '@material-ui/core/styles';
import classes from '../Modals.module.css';
import typeMap from '../../Beer/TypeMap';

const useStyles = makeStyles(theme => ({
  margin: {
    margin: theme.spacing(1),
  },
}));

const NewBeerModal = (props) => {
  const styles = useStyles();

  return (
    <>
      <section className={classes.ModalContainer}>
        <Grow in={true}>
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
              onClick={props.toggleNewModal}
              className={styles.margin}>Cancel</Button>
          </form>
        </div>
        </Grow>
      </section>
    </>
  )
};

export default NewBeerModal;
