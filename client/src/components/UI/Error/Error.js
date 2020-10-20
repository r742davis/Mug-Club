import React from "react";
import classes from "./Error.module.css";

const Error = ({ error }) => (
  <>
    <div className={classes.ErrorContainer}>
      <h3 className={classes.Error}>{error}</h3>
    </div>
  </>
);

export default (Error);
