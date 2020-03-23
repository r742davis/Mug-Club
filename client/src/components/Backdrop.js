import React from "react";

import classes from "./styles/Backdrop.module.css";

const backdrop = props =>
  props.modalOpen ? (
    <div className={classes.Backdrop} onClick={props.closeModal}></div>
  ) : null;

export default backdrop;
