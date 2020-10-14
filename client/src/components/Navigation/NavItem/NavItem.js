import React from "react";
import classes from "./NavItem.module.css";

import { NavLink } from "react-router-dom";

const navItem = (props) => (
  <li className={classes.NavItem}>
    <NavLink
      to={props.link}
      exact={props.exact}
      activeClassName={classes.active}
      onClick={props.clicked}
    >
      {props.children}
    </NavLink>
  </li>
);

export default navItem;
