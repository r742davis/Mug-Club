import React from "react";
import classes from "../css/Login.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowAltCircleLeft } from "@fortawesome/free-solid-svg-icons";

const Register = props => {
  return (
    <form onSubmit={(e) => props.onSubmit(e)}>
      <div className={classes.LoginContainer}>
        {props.message && props.error}
        <div className={classes.Group}>
          <input
            type="text"
            name="name"
            onChange={props.onChange}
            className={classes.Input}
            required
          />
          <span className={classes.Bar}></span>
          <label htmlFor="name" className={classes.Label}>
            Name
          </label>
        </div>
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
        <div className={classes.Group}>
          <input
            type="password"
            name="password"
            onChange={props.onChange}
            className={classes.Input}
            required
          />
          <span className={classes.Bar}></span>
          <label htmlFor="password" className={classes.Label}>
            Password
          </label>
        </div>
        <button
          type="submit"
          name="register"
          className={`${classes.Button} ${classes.bounce}`}
        >
          Register
        </button>
        <div onClick={() => props.toggleReg()} className={classes.Back}>
          <FontAwesomeIcon icon={faArrowAltCircleLeft} />
        </div>
      </div>
    </form>
  );
};

export default Register;
