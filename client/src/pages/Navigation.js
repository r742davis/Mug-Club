import React, { Component } from "react";
import classes from "./styles/Navigation.module.css";
import { Link } from "react-router-dom";
import { Redirect } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";

// Redux Imports
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { openModal } from "../actions/modalActions";
import { logout } from "../actions/authActions";
const actions = { logout, openModal };

class Navigation extends Component {
  state = {};

  static propTypes = {
    auth: PropTypes.object.isRequired,
    isAuthenticated: PropTypes.bool
  };

  logout = () => {
    this.props.logout();
  };

  render() {
    // const { isAuthenticated } = this.props.auth;
    // if (!isAuthenticated) {
    //   return <Redirect to="/" push={true} />
    // }
    const authLinks = (
      <nav className={classes.navbar}>
        <ul className={classes.list}>
          {/* <li className={classes.item}>
            <Link to="/" className={classes.link}>
              Home
            </Link>
          </li> */}
          <li className={classes.item}>
            <Link to="/searchCustomers" className={classes.link}>
              Search
            </Link>
          </li>
          <li className={classes.item}>
            <Link to="/beersList" className={classes.link}>
              Beers List
            </Link>
          </li>
          <li className={classes.item}>
            <button
              onClick={() => this.props.openModal("NEW_CUSTOMER")}
              className={classes.NewButton}
            >
              <FontAwesomeIcon icon={faPlus} /> New Customer
            </button>
          </li>
          <li>
            <button
              onClick={() => this.props.openModal("NEW_BEER")}
              className={classes.NewButton}
            >
              <FontAwesomeIcon icon={faPlus} /> New Beer
            </button>
          </li>
          <li className={classes.item}>
            <button onClick={this.logout} className={classes.Logout}>
              Log Out
            </button>
          </li>
        </ul>
      </nav>
    );

    // return <>{this.props.isAuthenticated ? authLinks : null}</>;
    return authLinks;
  }
}

const mapStateToProps = state => ({
  auth: state.auth,
  isAuthenticated: state.auth.isAuthenticated
});

export default connect(mapStateToProps, actions)(Navigation);
