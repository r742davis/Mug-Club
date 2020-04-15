import React from "react";
import classes from "../css/NavBar.module.css";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPlus,
  faSearch,
  faBeer,
  faUserTimes,
  faUserCircle,
} from "@fortawesome/free-solid-svg-icons";

// Redux Imports
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { openModal } from "../actions/modalActions";
import { closeNav } from "../actions/navActions";
const actions = {
  openModal,
  closeNav
};
const urlName = "";

const HamburgerMenu = (props) => {
  return (
    <ul className={classes.HamburgerList}>
      <Link
        to={`${urlName}/search-customers`}
        className={classes.HamburgerItem}
        onClick={() => props.closeNav()}
      >
        <div className={classes.LinkDiv}>
          <div>
            <FontAwesomeIcon icon={faSearch} />
          </div>
          <h2>Search</h2>
        </div>
      </Link>
      <Link
        to={`${urlName}/beers-list`}
        className={classes.HamburgerItem}
        onClick={() => props.closeNav()}
      >
        <div className={classes.LinkDiv}>
          <div>
            <FontAwesomeIcon icon={faBeer} />
          </div>
          <h2>Beers</h2>
        </div>
      </Link>
      <button
        onClick={() => props.comboToggle("NEW_CUSTOMER")}
        className={classes.HamburgerItem}
      >
        <div className={classes.LinkDiv}>
          <div>
            <FontAwesomeIcon icon={faPlus} />
          </div>
          <h2>New Customer</h2>
        </div>
      </button>
      <button
        onClick={() => props.comboToggle("NEW_BEER")}
        className={classes.HamburgerItem}
      >
        <div className={classes.LinkDiv}>
          <div>
            <FontAwesomeIcon icon={faPlus} />
          </div>
          <h2>New Beer</h2>
        </div>
      </button>
      {/* <Link
        to={`${urlName}/account`}
        className={classes.HamburgerItem}
        onClick={() => props.closeNav()}
      >
        <div className={classes.LinkDiv}>
          <div>
            <FontAwesomeIcon icon={faUserCircle} />
          </div>
          <h2>Account</h2>
        </div>
      </Link> */}
      <button onClick={() => props.logoutAlert()} className={classes.HamburgerItem}>
        <div className={classes.LinkDiv}>
          <div>
            <FontAwesomeIcon icon={faUserTimes} />
          </div>
          <h2>Log Out</h2>
        </div>
      </button>
    </ul>
  );
};

const mapStateToProps = (state) => ({});

export default connect(mapStateToProps, actions)(HamburgerMenu);
