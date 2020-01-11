import React from 'react';
import Login from '../Login/Login';
import classes from './Home.module.css';

const home = (props) => {
  return (
    <>
      <div className={classes.Container}>
        <h1>The Madison Bear Garden</h1>
        <h3>Mug Club</h3>
        <Login />
      </div>
    </>
  )
};

export default home;
