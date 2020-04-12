import React, { Component } from "react";
import classes from "../css/NavBar.module.css";
import Backdrop from "./Backdrop";
import { Link } from "react-router-dom";
import { Redirect } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPlus,
  faSearch,
  faBeer,
  faUserTimes,
  faUserCircle,
} from "@fortawesome/free-solid-svg-icons";
import Burger from "@animated-burgers/burger-squeeze";
import "@animated-burgers/burger-squeeze/dist/styles.css";

// Redux Imports
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { openModal } from "../actions/modalActions";
import { openNav, closeNav } from "../actions/navActions";
import { logout } from "../actions/authActions";
const actions = {
  logout,
  openModal,
  openNav,
  closeNav,
};

class NavBar extends Component {
  state = {};

  static propTypes = {
    auth: PropTypes.object.isRequired,
    isAuthenticated: PropTypes.bool,
    navOpen: PropTypes.bool,
  };

  logout = () => {
    this.props.logout();
  };

  comboToggle = async (modalType) => {
    await this.props.closeNav();
    await this.props.openModal(modalType);
  };

  render() {
    const urlName = "";
    const { isAuthenticated } = this.props.auth;
    if (!isAuthenticated) {
      return <Redirect to={`${urlName}/`} push={true} />;
    }

    let hamburgerMenu = (
      <ul className={classes.HamburgerList}>
        <Link
          to={`${urlName}/search-customers`}
          className={classes.HamburgerItem}
          onClick={() => this.props.closeNav()}
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
          onClick={() => this.props.closeNav()}
        >
          <div className={classes.LinkDiv}>
            <div>
              <FontAwesomeIcon icon={faBeer} />
            </div>
            <h2>Beers</h2>
          </div>
        </Link>
        <button
          onClick={() => this.comboToggle("NEW_CUSTOMER")}
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
          onClick={() => this.comboToggle("NEW_BEER")}
          className={classes.HamburgerItem}
        >
          <div className={classes.LinkDiv}>
            <div>
              <FontAwesomeIcon icon={faPlus} />
            </div>
            <h2>New Beer</h2>
          </div>
        </button>
        <Link
          to={`${urlName}/account`}
          className={classes.HamburgerItem}
          onClick={() => this.props.closeNav()}
        >
          <div className={classes.LinkDiv}>
            <div>
              <FontAwesomeIcon icon={faUserCircle} />
            </div>
            <h2>Account</h2>
          </div>
        </Link>
        <button onClick={() => this.logout()} className={classes.HamburgerItem}>
          <div className={classes.LinkDiv}>
            <div>
              <FontAwesomeIcon icon={faUserTimes} />
            </div>
            <h2>Log Out</h2>
          </div>
        </button>
      </ul>
    );

    let authLinks = (
      <nav className={classes.Navbar}>
        <h1>MUG CLUB <span role="img" aria-label="mugs of beers">🍻</span></h1>
        {this.props.navOpen ? (
          hamburgerMenu
        ) : (
          <ul className={classes.List}>
            <li className={classes.Item}>
              <Link to={`${urlName}/search-customers`} className={classes.Link}>
                Search
              </Link>
            </li>
            <li className={classes.Item}>
              <Link to={`${urlName}/beers-list`} className={classes.Link}>
                Beers List
              </Link>
            </li>
            <li className={classes.Item}>
              <button
                onClick={() => this.props.openModal("NEW_CUSTOMER")}
                className={classes.NewButton}
              >
                New Customer
              </button>
            </li>
            <li className={classes.Item}>
              <button
                onClick={() => this.props.openModal("NEW_BEER")}
                className={classes.NewButton}
              >
                New Beer
              </button>
            </li>
            <li className={classes.Item}>
              <Link to={`${urlName}/account`} className={classes.Link}>
                Account
              </Link>
            </li>
            <li className={classes.Item}>
              <button onClick={this.logout} className={classes.Logout}>
                Log Out
              </button>
            </li>
          </ul>
        )}
        <div className={classes.HamburgerContainer}>
          <Burger
            isOpen={this.props.navOpen}
            onClick={
              this.props.navOpen
                ? () => this.props.closeNav()
                : () => this.props.openNav()
            }
          />
        </div>
      </nav>
    );

    // return <>{this.props.isAuthenticated && authLinks}</>;
    return (
      <>
        <Backdrop />
        {this.props.isAuthenticated && authLinks}
      </>
    );
  }
}

const mapStateToProps = (state) => ({
  auth: state.auth,
  isAuthenticated: state.auth.isAuthenticated,
  navOpen: state.modal.navOpen,
});

export default connect(mapStateToProps, actions)(NavBar);
