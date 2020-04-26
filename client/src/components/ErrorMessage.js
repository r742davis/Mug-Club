import React from "react";
import classes from "../css/LoginContainer.module.css";

import { connect } from "react-redux";
const actions = {};

const ErrorMessage = ({ error }) => (
  <>
    <div>
      <h3 className={classes.Error}>{error}</h3>
    </div>
  </>
);

export default connect(null, actions)(ErrorMessage);
