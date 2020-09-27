import React from "react";
import classes from "../../../css/LoginContainer.module.css";
import Error from "../../UI/Error/Error";
import Success from "../../UI/Success/Success";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowAltCircleLeft } from "@fortawesome/free-solid-svg-icons";

import { connect } from "react-redux";
import { closeRegister } from "../../../store/actions/index";

const register = (props) => (
    <form onSubmit={(e) => props.onSubmit(e)}>
      <div className={classes.AuthContainer}>
      {props.success && <Success success={props.success}/>}
      {props.error && <Error error={props.error}/>}
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
          className={classes.Button}>
          Register
        </button>
        <div 
          onClick={() => props.closeRegister()} 
          className={classes.Back}>
          <FontAwesomeIcon icon={faArrowAltCircleLeft} />
        </div>
      </div>
    </form>
  );

const mapDispatchToProps = { closeRegister };


export default connect(null, mapDispatchToProps)(register);
