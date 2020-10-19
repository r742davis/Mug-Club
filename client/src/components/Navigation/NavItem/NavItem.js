import React from "react";
import classes from "./NavItem.module.css";

import { NavLink } from "react-router-dom";

const navItem = ({ link, exact, active, closeNav, openModal, children}) => (
  <li className={classes.NavItem}>
    <NavLink
      to={link}
      exact={exact}
      activeClassName={classes.active}
      onClick={() => {
        closeNav();
        if (openModal) {
          openModal();
        }
      }}
    >
      {children}
    </NavLink>
  </li>
);

export default navItem;
