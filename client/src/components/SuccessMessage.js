import React from "react";
import classes from "../css/ErrorMessage.module.css";

import { connect } from "react-redux";

const SuccessMessage = (props) => (
  <>
    <div className={classes.ErrorContainer}>
      <h3 className={classes.Error}>{props.success}</h3>
    </div>
  </>
);

export default connect()(SuccessMessage);
