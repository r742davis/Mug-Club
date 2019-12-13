import React from 'react';
import classes from './Navigation.module.css';

const navbar = (props) => {

  return (
    <nav>
      <div className={classes.container}>
        <ul className={classes.list}>
          <li className={classes.item}>
            <a href="#" className={classes.link}>Home</a>
          </li>
          <li className={classes.item}>
            <a href="#" className={classes.link}>Create New Customer</a>
          </li>
          <li className={classes.item}>
            <a href="#" className={classes.link}>Search Customers</a>
          </li>
          <li className={classes.item}>
            <a href="#" className={classes.link}>Edit Beer List</a>
          </li>
          <li className={classes.item}>
            <a href="#" className={classes.link}>LOG OUT</a>
          </li>
        </ul>
      </div>
    </nav>
  )
};

export default navbar;
