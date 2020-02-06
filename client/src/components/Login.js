import React from 'react';
import Button from '@material-ui/core/Button';
import classes from './styles/Login.module.css';

const Login = (props) => {
  return (
    <div>
      <section className={classes.Container}>
        <h1 className={classes.Title}>Mug Club</h1>
        <form action="#" method="post">
          <div className={classes.LoginContainer}>
            <div className={classes.Group}>
              <input type="text" name="username" className={classes.Input} required/>
              <span className={classes.Bar}></span>
              <label htmlFor="username" className={classes.Label}>Username</label>
            </div>
            <div className={classes.Group}>
              <input type="password" name="password" className={classes.Input} required/>
              <span className={classes.Bar}></span>
              <label htmlFor="password" className={classes.Label}>Password</label>
            </div>
            <button 
              type="submit" 
              name="login" 
              className={classes.Button}>Login</button>
          </div>
        </form>
      </section>
    </div>
  )
} 

export default Login;