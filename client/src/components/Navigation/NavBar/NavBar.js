import React from "react";
import classes from "../../../css/NavBar.module.css";
import Backdrop from "../../UI/Backdrop/Backdrop";
import Mobile from "../Mobile/Mobile";
import Desktop from "../Desktop/Desktop";
import Burger from "@animated-burgers/burger-squeeze";
import "@animated-burgers/burger-squeeze/dist/styles.css";
import swal from "@sweetalert/with-react";
import { Redirect } from "react-router-dom";

import PropTypes from "prop-types";
import { connect } from "react-redux";
import { openModal, openNav, closeNav, logout } from "../../../store/actions/index";

class NavBar extends React.Component {
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
      return <Redirect to={`${urlName}/`} push={true} />;
    }

    const Navigation = (
      <nav className={classes.Navbar}>
        <h1>
          MUG CLUB
          <span role="img" aria-label="mugs of beers">
            🍻
          </span>
        </h1>
        {this.props.navOpen ? (
          <Mobile
            logoutAlert={this.logoutAlert}
            comboToggle={this.comboToggle}
            urlName={urlName}
          />
        ) : (
          <Desktop logoutAlert={this.logoutAlert} urlName={urlName} />
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
        {token && isAuthenticated && Navigation}
      </>
    );
  }
}

const mapDispatchToProps = {
  logout,
  openModal,
  openNav,
  closeNav,
};
const mapStateToProps = ({ auth, modal }) => ({
  auth: auth,
  navOpen: modal.navOpen,
});

export default connect(mapStateToProps, mapDispatchToProps)(NavBar);
