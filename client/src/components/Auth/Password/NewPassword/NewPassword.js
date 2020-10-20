import React from "react";
import classes from "../../../../containers/Auth/Auth.module.css";
import Error from "../../../UI/Error/Error";
// import { closePasswordReset } from "../store/actions/index";

const newPassword = props => (
    <form onSubmit={props.onSubmit}>
        <div className={classes.LoginContainer}>
          {props.error && <Error error={props.error} />}
          <div className={classes.Group}>
            <input
              type="password"
              name="password"
              onChange={props.onChange}
              className={classes.Input}
              required
            />
            <span className={classes.Bar}></span>
            <label htmlFor="email" className={classes.Label}>
              Password
            </label>
          </div>
          <div className={classes.Group}>
            <input
              type="password"
              name="confirmPassword"
              onChange={props.onChange}
              className={classes.Input}
              required
            />
            <span className={classes.Bar}></span>
            <label htmlFor="email" className={classes.Label}>
              Confirm Password
            </label>
          </div>
          <button 
            type="submit" 
            name="passwordReset" 
            className={classes.Button}>
            Confirm Reset Password
          </button>
        </div>
      </form>
)

export default (newPassword);