import React from "react";
import classes from "../css/Home.module.css";
import Login from "../containers/Login";

const Home = () => {
  return (
    <>
      <div className={classes.BgImage}></div>
      <div className={classes.Container}>
        <Login />
      </div>
    </>
  );
};

export default Home;
