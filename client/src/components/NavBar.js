import React, { Component } from "react";
import classes from "../css/NavBar.module.css";
import { Link } from "react-router-dom";
import { Redirect } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus, faSearch, faBeer, faUserTimes } from "@fortawesome/free-solid-svg-icons";
import Burger from "@animated-burgers/burger-squeeze";
import "@animated-burgers/burger-squeeze/dist/styles.css";

// Redux Imports
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { openModal } from "../actions/modalActions";
import { logout } from "../actions/authActions";
const actions = { logout, openModal };

class NavBar extends Component {
  state = {
    burgerOpen: false,
  };

  static propTypes = {
    auth: PropTypes.object.isRequired,
    isAuthenticated: PropTypes.bool,
  };

  logout = () => {
    this.props.logout();
  };

  toggleMenu = () => {
    this.setState({
      burgerOpen: !this.state.burgerOpen,
    });
  };

  comboToggle = (modalType) => {
    this.props.openModal(modalType);
    this.toggleMenu();
  };

  render() {
    const urlName = "";
    // const { isAuthenticated } = this.props.auth;
    // if (!isAuthenticated) {
    //   return <Redirect to="/" push={true} />;
    // }

    let hamburgerMenu = (
      <ul className={classes.hamburgerList}>
        <Link
          to={`${urlName}/search-customers`}
          className={classes.hamburgerItem}
          onClick={() => this.toggleMenu()}
        >
          <div className={classes.LinkDiv}>
            <FontAwesomeIcon icon={faSearch} />
            <h2>Search</h2>
          </div>
        </Link>
        <Link
          to={`${urlName}/beers-list`}
          className={classes.hamburgerItem}
          onClick={() => this.toggleMenu()}
        >
          <div className={classes.LinkDiv}>
            <FontAwesomeIcon icon={faBeer} />
            <h2>Beers</h2>
          </div>
        </Link>
        <button
          onClick={() => this.comboToggle("NEW_CUSTOMER")}
          className={classes.hamburgerItem}
        >
          <div className={classes.LinkDiv}>
            <FontAwesomeIcon icon={faPlus} />
            <h2>New Customer</h2>
          </div>
        </button>
        <button
          onClick={() => this.comboToggle("NEW_BEER")}
          className={classes.hamburgerItem}
        >
          <div className={classes.LinkDiv}>
            <FontAwesomeIcon icon={faPlus} />
            <h2>New Beer</h2>
          </div>
        </button>
        <button onClick={this.logout} className={classes.hamburgerItem}>
          <div className={classes.LinkDiv}>
            <FontAwesomeIcon icon={faUserTimes} />
            <h2>Log Out</h2>
          </div>
        </button>
      </ul>
    );

    let authLinks = (
      <nav className={classes.navbar}>
        <h1>MUG CLUB 🍻</h1>
        {this.state.burgerOpen ? (
          hamburgerMenu
        ) : (
          <ul className={classes.list}>
            <li className={classes.item}>
              <Link to={`${urlName}/search-customers`} className={classes.link}>
                Search
              </Link>
            </li>
            <li className={classes.item}>
              <Link to={`${urlName}/beers-list`} className={classes.link}>
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
        )}
        <div className={classes.hamburgerContainer}>
          <Burger
            isOpen={this.state.burgerOpen}
            onClick={() => this.toggleMenu()}
          />
        </div>
      </nav>
    );

    // return <>{this.props.isAuthenticated && authLinks}</>;
    return authLinks;
  }
}

const mapStateToProps = (state) => ({
  auth: state.auth,
  isAuthenticated: state.auth.isAuthenticated,
});

export default connect(mapStateToProps, actions)(NavBar);
