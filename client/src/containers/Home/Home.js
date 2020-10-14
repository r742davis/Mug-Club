import React from "react";
import classes from "../../css/Home.module.css";
import Auth from "../Auth/Auth";

const Home = () => {
  return (
    <>
      <div className={classes.BgImage}></div>
      <div className={classes.Container}>
        <Auth />
      </div>
    </>
  );
};

export default Home;
