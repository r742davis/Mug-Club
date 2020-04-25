import React, { Component } from "react";
import classes from "../css/NavBar.module.css";
import Backdrop from "./Backdrop";
import HamburgerNav from "./HamburgerNav";
import RegularNav from "./RegularNav";

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
const mapStateToProps = (state) => ({
  auth: state.auth,
  navOpen: state.modal.navOpen,
});

class NavBar extends Component {
  state = {};

  static propTypes = {
    auth: PropTypes.object.isRequired,
    navOpen: PropTypes.bool,
  };

  logoutAlert = () => {
    swal({
      title: "Log out?",
      icon: "warning",
      buttons: ["Cancel", "Logout"],
      dangerMode: true,
    }).then((willLogout) => {
      if (willLogout) {
        this.props.logout();
      } else {
        swal("You have not been logged out");
      }
    });
  };

  comboToggle = async (modalType) => {
    await this.props.closeNav();
    await this.props.openModal(modalType);
  };

  render() {
    const urlName = "";
    const { token, isAuthenticated } = this.props.auth;
    if (!isAuthenticated && !token) {
      return <Redirect to={`${urlName}/`} push={true} />
    }

    const Navigation = (
      <nav className={classes.Navbar}>
        <h1>
          MUG CLUB
          <span role="img" aria-label="mugs of beers">
            🍻
          </span>
        </h1>
        {this.props.navOpen 
          ? <HamburgerNav
              logoutAlert={this.logoutAlert}
              comboToggle={this.comboToggle}
              urlName={urlName} />
          : <RegularNav 
              logoutAlert={this.logoutAlert} 
              urlName={urlName} />
        }
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
        {token && Navigation}
      </>
    );
  }
}

export default connect(mapStateToProps, actions)(NavBar);
