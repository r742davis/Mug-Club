import React from "react";
import classes from "../css/Home.module.css";
import Login from "./Login";

const home = props => {
  return (
    <>
      <div className={classes.BgImage}></div>
      <div className={classes.Container}>
        <Login />
      </div>
    </>
  );
};

export default home;
