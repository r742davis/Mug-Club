import React, { Component } from "react";
import { Link } from "react-router-dom";
import classes from "./styles/Navigation.module.css";
import { connect } from "react-redux";
import { Redirect } from 'react-router-dom';
import { logout } from '../actions/authActions';
import PropTypes from "prop-types";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";

class Navigation extends Component {
  state = {
    navigate: false
  };

  static propTypes = {
    auth: PropTypes.object.isRequired,
    isAuthenticated: PropTypes.bool
  };

  logout = () => {
    this.props.logout();
  }
  
  
  render() {
    const { isAuthenticated } = this.props.auth;
    if (!isAuthenticated) {
      return <Redirect to="/" push={true} />
    }
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
              <FontAwesomeIcon icon={faPlus}/> New Customer
            </button>
          </li>
          <li>
            <button
              onClick={this.props.toggleNewBeerModal}
              className={classes.NewButton}
            >
              <FontAwesomeIcon icon={faPlus} /> New Beer
            </button>
          </li>
          <li className={classes.item}>
            <button 
              onClick={this.logout}
              className={classes.Logout}
            >Log Out</button>
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

export default connect(mapStateToProps, { logout })(Navigation);
