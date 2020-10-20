import React from "react";
import classes from "./BurgerNav.module.css";
import Burger from "@animated-burgers/burger-squeeze";

const burgerNav = ({ isOpen, open, close}) => (
  <div className={classes.BurgerNav}>
    <Burger
      isOpen={isOpen}
      onClick={isOpen ? () => close() : () => open()}
    />
  </div>
);

export default burgerNav;
