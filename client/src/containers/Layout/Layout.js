import React from "react";
import classes from "../../css/NavBar.module.css";
import Backdrop from "../../components/UI/Backdrop/Backdrop";
import Mobile from "../../components/Navigation/Mobile/Mobile";
import Desktop from "../../components/Navigation/Desktop/Desktop";
import Burger from "@animated-burgers/burger-squeeze";
import "@animated-burgers/burger-squeeze/dist/styles.css";
import swal from "@sweetalert/with-react";

import PropTypes from "prop-types";
import { connect } from "react-redux";
import {
  openModal,
  openNav,
  closeNav,
  logout,
} from "../../store/actions/index";

class Layout extends React.Component {
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

  comboToggle = (modalType) => {
    this.props.closeNav();
    this.props.openModal(modalType);
  };

  render() {
    const { token, isAuthenticated } = this.props.auth;

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
          />
        ) : (
          <Desktop logoutAlert={this.logoutAlert} />
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
      <Backdrop>
        {token && isAuthenticated && Navigation}
        {this.props.children}
      </Backdrop>
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

export default connect(mapStateToProps, mapDispatchToProps)(Layout);
