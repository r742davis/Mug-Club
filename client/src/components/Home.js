import React from "react";
import classes from "../css/Home.module.css";
import LoginContainer from "../containers/LoginContainer";

const Home = () => {
  return (
    <>
      <div className={classes.BgImage}></div>
      <div className={classes.Container}>
        <LoginContainer />
      </div>
    </>
  );
};

export default Home;
