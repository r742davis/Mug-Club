import React from 'react';
import Grow from '@material-ui/core/Grow';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';
import classes from '../Modals.module.css';
import { typeMap } from '../../Beer/TypeMap';

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

            <div className={classes.Group}>
              <label htmlFor="beerName" className={classes.Label}>Beer Name</label>
              <input 
                type="text" 
                name="beerName" 
                className={classes.Input} 
                value={props.beerName} 
                onChange={props.handleInputChange} required/>
              <span className={classes.Bar}></span>
            </div>
          
            <div className={classes.Group}>
              <label htmlFor="beerType" className={classes.Label}>Type</label>
              <select 
                name="beerType"
                className={classes.Select} 
                onChange={props.handleInputChange} 
                value={props.beerType}>
                  <optgroup label="Current Beer Type">
                    <option value={props.beerType}>{props.beerType}</option>
                  </optgroup>
                  {typeMap}
              </select>
            </div>
            
            <div className={classes.Group}>
              <label htmlFor="brewery" className={classes.Label}>Brewery</label>
              <input 
                type="text" 
                name="brewery"  
                className={classes.Input} 
                value={props.brewery} 
                onChange={props.handleInputChange} required/>
              <span className={classes.Bar}></span>
            </div>
            
            <div className={classes.Group}>
              <label htmlFor="breweryLocation" className={classes.Label}>Brewery Location</label>
              <input 
                type="text" 
                name="breweryLocation" 
                className={classes.Input} 
                value={props.breweryLocation} 
                onChange={props.handleInputChange} />
              <span className={classes.Bar}></span>
            </div>
            
            <div className={classes.Group}>
              <label htmlFor="beerUrl" className={classes.Label}>Beer/Brewery Image URL</label>
              <input 
                type="text" 
                name="beerUrl" 
                className={classes.Input} 
                value={props.beerUrl} 
                onChange={props.handleInputChange} required/>
              <span className={classes.Bar}></span>
            </div>
            

            <Button
              type="submit"
              variant="contained"
              color="primary"
              className={styles.margin}>Submit Edit</Button>
            <Button
              variant="outlined"
              color="secondary"
              size="medium"
              onClick={props.toggleEditBeerModal}
              className={styles.margin}>Cancel</Button>
          </form>

        </div>
        </Grow>
      </section>
    </>
  )
};

export default BeerModal;
