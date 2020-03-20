import React from 'react';
import classes from './styles/Customer.module.css';

const Customer = (props) => {
  return (
    <div className={classes.CustomerBox}>
      <h1 className={props.completed ? classes.CompletedTitle : classes.CustomerBoxTitle}>{props.name.first} {props.name.last}
        <span className={classes.ButtonContainer}>
          <button 
            className={classes.EditButton} 
            onClick={props.toggleEditCustomerModal}>
            Edit
          </button>
          <button 
            className={classes.DeleteButton}
            onClick={props.deleteCustomer}>
            Delete
          </button>
        </span>
      </h1>
      <span className={classes.Span}>
        <h2>Mug Club ID:</h2>
        <h2>{props.clubId}</h2>
      </span>
      <span className={classes.Span}>
        <h2>Completed?</h2>
        <h2>{props.completed ? 'Completed!' : 'Not Yet!'}</h2>
      </span>
      <span className={classes.Span}>
        <h2>Beers Completed:</h2>
        <h2>{props.calculateCompletedBeers(props.beers)}</h2>
      </span>
    </div>
  )
}

export default Customer;

