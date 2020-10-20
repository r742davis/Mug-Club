import React from "react";
import classes from "./Account.module.css";

const account = (props) => (
  <div className={classes.AccountContainer}>
    <h1>Account</h1>
    <div className={classes.InfoContainer}>
      <h2>Name</h2>
      <h2>Email</h2>
      <h2>Reset Password</h2>
      <h2>Delete Account</h2>
    </div>
  </div>
);

export default account;
