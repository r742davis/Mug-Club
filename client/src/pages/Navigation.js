import React from 'react';
import { Link } from "react-router-dom";
import Button from '@material-ui/core/Button';
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
          <Button variant="outlined" onClick={props.toggleNewCustomerModal}>Add New Customer</Button>
        </li>
        <li className={classes.item}>
          <Button variant="outlined">LOG OUT</Button>
        </li>
      </ul>
    </nav>
  )
};

export default navigation;
