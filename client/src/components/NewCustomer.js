import React from 'react';
import Grow from '@material-ui/core/Grow';
import Button from '@material-ui/core/Button';
import classes from './styles/Modals.module.css';

const NewCustomer = (props) => {
  return (
    <>
      <section className={classes.ModalContainer}>
        <Grow in={true}>
        <div className={classes.Modal}>
          <h2 className={classes.ModalTitle}>Add New Customer</h2>
          <form
            className={classes.ModalForm}
            onSubmit={props.handleNewCustomerSubmit}>
            <div className={classes.Group}>
              <label htmlFor="firstName" className={classes.Label}>First Name</label>
              <input type="text" name="firstName" className={classes.Input} value={props.firstName} onChange={props.handleInputChange} />
              <span className={classes.Bar}></span>
            </div>
            <div className={classes.Group}>
              <label htmlFor="lastName" className={classes.Label}>Last Name</label>
              <input type="text" name="lastName" className={classes.Input} value={props.lastName} onChange={props.handleInputChange} />
              <span className={classes.Bar}></span>
            </div>
            <div className={classes.Group}>
              <label htmlFor="clubId" className={classes.Label}>Mug Club ID</label>
              <input type="text" name="clubId" className={classes.Input} value={props.clubId} onChange={props.handleInputChange} />
              <span className={classes.Bar}></span>
            </div>
            <Button
              type="submit"
              variant="contained"
              color="primary"
              >Submit</Button>
            <Button
              variant="outlined"
              color="secondary"
              size="medium"
              onClick={props.toggleNewCustomerModal}
              >Cancel</Button>
          </form>
        </div>
        </Grow>
      </section>
    </>
  )
};

export default NewCustomer;
