import React from 'react';
import classes from './styles/Modals.module.css';
import Grow from '@material-ui/core/Grow';
import BeersList from './BeersList';

const EditCustomer = (props) => {
  if (!props) { return null; }
  return (
    <>
      <section className={classes.ModalContainer}>
        <Grow in={true}>
        <div className={classes.EditModal}>
          <h2 className={classes.ModalTitle}>Edit Customer</h2>
          <form
            className={classes.EditForm}
            onSubmit={props.handleEditCustomerSubmit}>
            <div className={classes.Group}>
              <label htmlFor="firstName" className={classes.Label}>First Name</label>
              <input 
                type="text" 
                name="firstName" 
                className={classes.Input} 
                value={props.firstName} 
                onChange={props.handleInputChange} />
              <span className={classes.Bar}></span>
            </div>
            <div className={classes.Group}>
              <label htmlFor="lastName" className={classes.Label}>Last Name</label>
              <input 
                type="text" 
                name="lastName" 
                className={classes.Input} 
                value={props.lastName} 
                onChange={props.handleInputChange} />
              <span className={classes.Bar}></span>
            </div>
            <div className={classes.Group}>
              <label htmlFor="clubId" className={classes.Label}>Mug Club ID</label>
              <input 
                type="text" 
                name="clubId" 
                className={classes.Input} 
                value={props.clubId} 
                onChange={props.handleInputChange} />
              <span className={classes.Bar}></span>
            </div>
            <div>
              <BeersList 
                beers={props.beers} 
                updateCompletedBeers={props.updateCompletedBeers}
                handleEditCustomerSubmit={props.handleEditCustomerSubmit}
                toggleEditCustomerModal={props.toggleEditCustomerModal}
              />
            </div>
            {/* <button
              onClick={() => props.handleEditCustomerSubmit}
              className={classes.EditButton}>Submit Edit</button>
            <button
              onClick={props.toggleEditCustomerModal}
              className={classes.CancelButton}>Cancel</button> */}
          </form>
        </div>
        </Grow>
      </section>
    </>
  )
};

export default EditCustomer;
