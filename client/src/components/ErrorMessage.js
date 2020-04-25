import React from "react";
import classes from "../css/LoginContainer.module.css";

import { connect } from "react-redux";
const actions = {};
const mapStateToProps = (state) => ({});

const ErrorMessage = (props) => (
  <>
    <div>
      <h3 className={classes.Error}>{props.error}</h3>
    </div>
  </>
);

export default connect(mapStateToProps, actions)(ErrorMessage);
