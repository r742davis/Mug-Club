import React, { Component } from "react";
import classes from "../css/LoginContainer.module.css";
import ErrorMessage from "./ErrorMessage";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowAltCircleLeft } from "@fortawesome/free-solid-svg-icons";
import { connect } from "react-redux";
const actions = {};

const mapStateToProps = (state) => {
  return {};
}

class PasswordReset extends Component {
  render() {
    return (
      <>
        <form>
          <div className={classes.LoginContainer}>
            {props.error && <ErrorMessage error={props.error} />}

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
            <button type="submit" name="send" className={classes.Button}>
              Send Email
            </button>
            <div onClick={() => props.closeRegister()} className={classes.Back}>
              <FontAwesomeIcon icon={faArrowAltCircleLeft} />
            </div>
          </div>
        </form>
      </>
    );
  }
}

export default connect(mapStateToProps, actions)(PasswordReset);
