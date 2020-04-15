import React, { Component } from "react";
import classes from "../css/NavBar.module.css";
import Backdrop from "./Backdrop";
import HamburgerNav from "./HamburgerNav";
import { Link } from "react-router-dom";
import { Redirect } from "react-router-dom";
import Burger from "@animated-burgers/burger-squeeze";
import "@animated-burgers/burger-squeeze/dist/styles.css";
import swal from "@sweetalert/with-react";

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

  logoutAlert = () => {
      swal({
        title: "Log out?",
        icon: "warning",
        buttons: ["Cancel", "Logout"],
        dangerMode: true,
      }).then((willLogout) => {
        if(willLogout) {
          this.props.logout();
        } else {
          swal("You have not been logged out")
        }
      })
  }

  comboToggle = async (modalType) => {
    await this.props.closeNav();
    await this.props.openModal(modalType);
  };

  render() {
    const urlName = "";
    const { isAuthenticated } = this.props.auth;
    // if (!isAuthenticated) {
    //   return <Redirect to={`${urlName}/`} push={true} />
    // }

    let regularNav = (
      <nav className={classes.Navbar}>
        <h1>MUG CLUB 
          <span role="img" aria-label="mugs of beers">🍻</span>
        </h1>
        {this.props.navOpen ? (
          <HamburgerNav 
            logoutAlert={this.logoutAlert}
            comboToggle={this.comboToggle}
          />
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
            {/* <li className={classes.Item}>
              <Link to={`${urlName}/account`} className={classes.Link}>
                Account
              </Link>
            </li> */}
            <li className={classes.Item}>
              <button 
                onClick={this.logout} 
                className={classes.Logout}>
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

    return (
      <>
        <Backdrop />
        {/* {this.props.isAuthenticated && authLinks} */}
        {regularNav}
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
