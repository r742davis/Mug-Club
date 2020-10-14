import React from "react";
import classes from "../../../css/NavBar.module.css";
import NavItem from "../NavItem/NavItem";

import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPlus,
  faSearch,
  faBeer,
  faUserTimes,
} from "@fortawesome/free-solid-svg-icons";

import { connect } from "react-redux";
import { openModal, closeNav } from "../../../store/actions/index";


const mobile = (props) => {
  return (
    <ul className={classes.HamburgerList}>
      <NavItem 
      link={'/search-customers'}
      close={() => props.closeNav()}
      >
        <div className={classes.LinkDiv}>
          <div>
            <FontAwesomeIcon icon={faSearch} />
          </div>
          <h2>Search</h2>
        </div>
      </NavItem>
      <Link
        to={'/beers'}
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
      <button
        onClick={() => props.logoutAlert()}
        className={classes.HamburgerItem}
      >
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

const mapDispatchToProps = {
  openModal,
  closeNav,
};

export default connect(null, mapDispatchToProps)(mobile);
