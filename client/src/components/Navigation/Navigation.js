import React from "react";
import classes from "./Navigation.module.css";
import BurgerNav from "./BurgerNav/BurgerNav";
import Logo from "../UI/Logo/Logo";

const navigation = ({ navOpen, renderedLinks, open, close }) => {
  let attachedClasses = [classes.List, classes.Close];
  if (navOpen) {
    attachedClasses = [classes.List, classes.Open];
  }
  return (
    <nav className={classes.Navbar}>
      <Logo />
      <ul className={attachedClasses.join(" ")}>{renderedLinks}</ul>
      <BurgerNav isOpen={navOpen} open={open} close={close} />
    </nav>
  );
};

export default navigation;
