import React from "react";
import classes from "./Success.module.css";

const Success = (props) => (
  <>
    <div className={classes.ErrorContainer}>
      <h3 className={classes.Error}>{props.success}</h3>
    </div>
  </>
);

export default (Success);
