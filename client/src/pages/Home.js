import React from "react";
import Login from "../components/Login";
import classes from "../styles/Home.module.css";

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
