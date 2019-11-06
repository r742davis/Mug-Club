import React from 'react';
import Button from '@material-ui/core/Button';

import classes from './Button.module.css';

const button = (props) => {
  return (
    <div>
      <Button
      variant="contained"
      color="primary"
      className={classes.Button}
      onClick={props.handleClick}>Display Customers List</Button>
    </div>
  )
}

export default button;

// <button onClick={() => {
//     this.setState({ clicked: true })
//   }}
//   >Click to List People
// </button>
