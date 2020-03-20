import React from 'react';
import classes from './styles/Customer.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';

const Customer = (props) => {
  return (
    <div className={classes.CustomerCard}>

      <div className={
        props.completed ? 
        classes.CompletedTitleContainer : 
        classes.IncompleteTitleContainer
        }>
        
        <h1 className={classes.CustomerTitle}>{props.name.first} {props.name.last}

        {
          !props.completed ?
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
          :
          <div className={classes.CheckIcon}>
            <FontAwesomeIcon icon={faCheckCircle} />
          </div>
        }
          
          

          
        </h1>
        <h2 className={classes.CustomerDetails}>Mug Club #{props.clubId}</h2>
      {/* <h2 className={classes.CustomerDetails}>Beer{props.calculateCompletedBeers(props.beers)} </h2> */}
      </div>
      
      {/* <span className={classes.Span}>
        <h2>Completed?</h2>
        <h2>{props.completed ? 'Completed!' : 'Not Yet!'}</h2>
      </span> */}
      <span className={classes.Span}>
    <h2 className={classes.CustomerDetails}>Beers Completed: {props.calculateCompletedBeers(props.beers)} / {props.beers.length}</h2>
        <h2></h2>
      </span>
    </div>
  )
}

export default Customer;

