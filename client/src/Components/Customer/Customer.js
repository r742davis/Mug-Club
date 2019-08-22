import React from 'react';

import classes from './Customer.module.css';

const customer = (props) => {
  return (
    <div className={classes.CustomerBox}>
      <h3> Hello my name is {props.firstName} {props.lastName}! </h3>
    </div>
  )
}

export default customer;
