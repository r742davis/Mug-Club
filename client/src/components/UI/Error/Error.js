import React from "react";
import classes from "../../../css/ErrorMessage.module.css";

const Error = ({ error }) => (
  <>
    <div className={classes.ErrorContainer}>
      <h3 className={classes.Error}>{error}</h3>
    </div>
  </>
);

export default (Error);
