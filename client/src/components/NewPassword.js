import React from "react";
import classes from "../css/LoginContainer.module.css";
import ErrorMessage from "./ErrorMessage";
import { connect } from "react-redux";
// import { closePasswordReset } from "../store/actions/authActions";
const actions = {  };

const NewPassword = props => (
    <form onSubmit={props.onSubmit}>
        <div className={classes.LoginContainer}>
          {props.error && <ErrorMessage error={props.error} />}
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

export default connect(null, actions)(NewPassword);