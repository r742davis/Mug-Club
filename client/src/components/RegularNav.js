import React from "react";
import classes from "../css/NavBar.module.css";
import { Link } from "react-router-dom";

//Redux Imports
import { connect } from "react-redux";
import { openModal } from "../store/actions/modalActions";
const actions = {
  openModal,
};

const RegularNav = (props) => (
  <ul className={classes.List}>
    <li className={classes.Item}>
      <Link to={`${props.urlName}/search-customers`} className={classes.Link}>
        Search
      </Link>
    </li>
    <li className={classes.Item}>
      <Link to={`${props.urlName}/beers-list`} className={classes.Link}>
        Beers List
      </Link>
    </li>
    <li className={classes.Item}>
      <button
        onClick={() => props.openModal("NEW_CUSTOMER")}
        className={classes.NewButton}
      >
        New Customer
      </button>
    </li>
    <li className={classes.Item}>
      <button
        onClick={() => props.openModal("NEW_BEER")}
        className={classes.NewButton}
      >
        New Beer
      </button>
    </li>
    {/* <li className={classes.Item}>
              <Link to={`${props.urlName}/account`} className={classes.Link}>
                Account
              </Link>
            </li> */}
    <li className={classes.Item}>
      <button onClick={() => props.logoutAlert()} className={classes.Logout}>
        Log Out
      </button>
    </li>
  </ul>
);

export default connect(null, actions)(RegularNav);
