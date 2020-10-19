import React from "react";
import classes from "./Navigation.module.css";
import Burger from "@animated-burgers/burger-squeeze";

const navigation = (props) => {
  let attachedClasses = [classes.List, classes.Close];
  if (props.navOpen) {
    attachedClasses = [classes.List, classes.Open]
  }
  return (
    <nav className={classes.Navbar}>
      <h1>
        MUG CLUB
        <span role="img" aria-label="mugs of beers">
          🍻
        </span>
      </h1>
      <ul className={attachedClasses.join(" ")}>{props.renderedLinks}</ul>
      <div className={classes.Burger}>
        <Burger
          isOpen={props.navOpen}
          onClick={props.navOpen ? () => props.close() : () => props.open()}
        />
      </div>
    </nav>
  );
};

export default navigation;
