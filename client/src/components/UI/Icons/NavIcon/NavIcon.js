import React from "react";
import classes from "./NavIcon.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const navIcon = (props) => (
  <div className={classes.NavIcon}>
    <div>
      <FontAwesomeIcon icon={props.icon} />
    </div>
    {props.children}
  </div>
);

export default navIcon;
