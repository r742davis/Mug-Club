import React from 'react';
import Card from '@material-ui/core/Card';
// import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
// import Button from '@material-ui/core/Button';
// import Typography from '@material-ui/core/Typography';
import BeersList from './BeersList';
import classes from './styles/Customer.module.css';

const customer = (props) => {
  return (
    <div className={classes.CustomerBox}>
        <h1>{props.name.first} {props.name.last}</h1>
        <h2>Mug Club ID: {props.clubId}</h2>
        <h2>Completed?</h2>
        <BeersList beers={props.beers} />
        {/* <button onClick={props.handleDisplayBeer}>Display Beer List</button> */}
        {/* { props.displayBeer ?
          <BeersList beers={props.beers} /> : null } */}
        <button 
          className={classes.EditButton} 
          onClick={props.toggleEditCustomerModal}><span className={classes.Span}>Edit</span></button>
        <button 
          className={classes.DeleteButton}
          onClick={props.deleteCustomer}><span className={classes.Span}>Delete</span></button>
    </div>
  )
}

export default customer;
