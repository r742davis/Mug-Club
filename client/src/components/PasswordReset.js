import React, { Component } from "react";
import classes from "../css/LoginContainer.module.css";
import ErrorMessage from "./ErrorMessage";
import SuccessMessage from "./SuccessMessage";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowAltCircleLeft } from "@fortawesome/free-solid-svg-icons";
import { connect } from "react-redux";
import { closePasswordReset } from "../actions/authActions";
const actions = { closePasswordReset };

const PasswordReset = (props) => {
  return (
    <>
      <form onSubmit={props.onSubmit}>
        <div className={classes.LoginContainer}>
          {props.error && <ErrorMessage error={props.error} />}
          {props.message && <SuccessMessage message={props.message} />}
          <div className={classes.Group}>
            <input
              type="email"
              name="email"
              onChange={props.onChange}
              className={classes.Input}
              required
            />
            <span className={classes.Bar}></span>
            <label htmlFor="email" className={classes.Label}>
              Email
            </label>
          </div>
          <button 
            type="submit" 
            name="reset" 
            className={classes.Button}>
            Send Email
          </button>
          <div
            onClick={() => props.closePasswordReset()}
            className={classes.Back}
          >
            <FontAwesomeIcon icon={faArrowAltCircleLeft} />
          </div>
        </div>
      </form>
    </>
  );
};

export default connect(null, actions)(PasswordReset);
