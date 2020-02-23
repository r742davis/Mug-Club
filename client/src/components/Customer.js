import React from 'react';
import classes from './styles/Customer.module.css';

const customer = (props) => {
  return (
    <div className={classes.CustomerBox}>
      <h1>{props.name.first} {props.name.last}
        <span className={classes.ButtonContainer}>
          <button 
            className={classes.EditButton} 
            onClick={props.toggleEditCustomerModal}><span className={classes.Span}>Edit Info</span></button>
          <button 
            className={classes.DeleteButton}
            onClick={props.deleteCustomer}><span className={classes.Span}>Delete</span></button>
        </span>
      </h1>
      <span className={classes.Span}>
        <h2>Mug Club ID:</h2>
        <h2>{props.clubId}</h2>
      </span>
      <span className={classes.Span}>
        <h2>Completed?</h2>
        <h2>{props.completed ? 'TRUE' : 'FALSE'}</h2>
      </span>
      <button 
        className={classes.BeersButton}
        onClick={props.toggleCustomerBeersModal}>View Completed Beers</button>
    </div>
  )
}

export default customer;
