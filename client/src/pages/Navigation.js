import React from 'react';
import { Link } from "react-router-dom";
import classes from './styles/Navigation.module.css';

const navigation = (props) => {
  return (
    <nav className={classes.container}>
      <ul className={classes.list}>
        <li className={classes.item}>
          <Link to="/" className={classes.link}>Home</Link>
        </li>
        <li className={classes.item}>
          <Link to="/searchCustomers" className={classes.link}>Search Customers</Link>
        </li>
        <li className={classes.item}>
          <Link to="/beersList" className={classes.link}>Beers List</Link>
        </li>
        <li className={classes.item}>
          <button 
            onClick={props.toggleNewCustomerModal} 
            className={classes.NewButton}><i class="fas fa-plus"></i>New Customer</button>
        </li>
        <li>
          <button 
            onClick={props.toggleNewBeerModal}
            className={classes.NewButton}><i class="fas fa-plus"></i>New Beer</button>
        </li>
        <li className={classes.item}>
          <button>Log Out</button>
        </li>
      </ul>
    </nav>
  )
};

export default navigation;
