import React from "react";
import classes from "../../../css/LoginContainer.module.css";
import Error from "../../UI/Error/Error";

import { connect } from "react-redux";
import { openRegister, openPasswordReset } from "../../../store/actions/index";

const loginComponent = (props) => (
  <form onSubmit={props.onSubmit}>
    <div className={classes.AuthContainer}>
      {props.error && <Error error={props.error} />}
      <div className={classes.Group}>
        <input
          type="text"
          name="email"
          className={classes.Input}
          onChange={props.onChange}
          required
        />
        <label htmlFor="email" className={classes.Label}>
          Email
        </label>
      </div>
      <div className={classes.Group}>
        <input
          type="password"
          name="password"
          className={classes.Input}
          onChange={props.onChange}
          required
        />
        <label htmlFor="password" className={classes.Label}>
          Password
        </label>
      </div>
      <div className={classes.Reset}>
        <h2 onClick={() => props.openPasswordReset()}>Forgot Password?</h2>
      </div>
      <div className={classes.ButtonContainer}>
        <button type="submit" name="login" className={classes.Button}>
          Login
        </button>
        <button
          name="register"
          onClick={() => props.openRegister()}
          className={classes.Button}
        >
          Register
        </button>
      </div>
    </div>
  </form>
);

const mapDispatchToProps = { openRegister, openPasswordReset };

export default connect(null, mapDispatchToProps)(loginComponent);
