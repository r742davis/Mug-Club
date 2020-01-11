import React from 'react';
import Login from '../Login/Login';
import classes from './Home.module.css';

const home = (props) => {
  return (
    <>
      <div className={classes.BgImage}>
      </div>
      <div className={classes.Container}>
        <Login />
      </div>
    </>
  )
};

export default home;
