import React from 'react';

import classes from './Button.module.css';

const button = (props) => {
  return (
    <div>
      <button
      className={classes.Button}
      onClick={props.handleClick}>Display Customers List</button>
    </div>
  )
}

export default button;

// <button onClick={() => {
//     this.setState({ clicked: true })
//   }}
//   >Click to List People
// </button>
