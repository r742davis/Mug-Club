import React from "react";
import classes from "../../css/NavBar.module.css";
import Backdrop from "../../components/UI/Backdrop/Backdrop";
import Mobile from "../../components/Navigation/Mobile/Mobile";
import Toolbar from "../../components/Navigation/Toolbar/Toolbar";
import Burger from "@animated-burgers/burger-squeeze";
import "@animated-burgers/burger-squeeze/dist/styles.css";
import swal from "@sweetalert/with-react";

import { connect } from "react-redux";
import {
  openModal,
  openNav,
  closeNav,
  logout,
} from "../../store/actions/index";

class Layout extends React.Component {
  state = {};

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
    let navigation = null;
    let mobileNav = null;

    if (this.props.navOpen) {
      mobileNav = (
        <Mobile logoutAlert={this.logoutAlert} comboToggle={this.comboToggle} />
      );
    } else {
      mobileNav = <Toolbar logoutAlert={this.logoutAlert} />;
    }

    if (this.props.isAuthenticated) {
      navigation = (
        <nav className={classes.Navbar}>
          <h1>
            MUG CLUB
            <span role="img" aria-label="mugs of beers">
              🍻
            </span>
          </h1>
          {mobileNav}
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
    }

    return (
      <Backdrop>
        {/* <Toolbar /> */}
        {/* <MobileNav /> */}
        {navigation}
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
  navOpen: modal.navOpen,
  isAuthenticated: auth.token !== null,
});

export default connect(mapStateToProps, mapDispatchToProps)(Layout);
