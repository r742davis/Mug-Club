import React, { Component } from "react";
import { Link } from "react-router-dom";
import classes from "./styles/Navigation.module.css";
import { connect } from "react-redux";
import PropTypes from "prop-types";

class Navigation extends Component {
  state = {};

  static propTypes = {
    auth: PropTypes.object.isRequired,
    isAuthenticated: PropTypes.bool
  };
  render() {
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
              onClick={this.props.toggleNewCustomerModal}
              className={classes.NewButton}
            >
              <i className="fas fa-plus"></i>New Customer
            </button>
          </li>
          <li>
            <button
              onClick={this.props.toggleNewBeerModal}
              className={classes.NewButton}
            >
              <i className="fas fa-plus"></i>New Beer
            </button>
          </li>
          <li className={classes.item}>
            <button>Log Out</button>
          </li>
        </ul>
      </nav>
    );

    return <>{this.props.isAuthenticated ? authLinks : null}</>;
  }
}

const mapStateToProps = state => ({
  auth: state.auth,
  isAuthenticated: state.auth.isAuthenticated
});

export default connect(mapStateToProps, null)(Navigation);
