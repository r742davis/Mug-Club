import React from "react";
import classes from "../../css/NavBar.module.css";
import Backdrop from "../../components/UI/Backdrop/Backdrop";
import NavItem from "../../components/Navigation/NavItem/NavItem";
import Toolbar from "../../components/Navigation/Toolbar/Toolbar";
import Burger from "@animated-burgers/burger-squeeze";
import "@animated-burgers/burger-squeeze/dist/styles.css";
import swal from "@sweetalert/with-react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPlus,
  faSearch,
  faBeer,
  faUserTimes,
} from "@fortawesome/free-solid-svg-icons";

import { connect } from "react-redux";
import {
  openModal,
  openNav,
  closeNav,
  logout,
} from "../../store/actions/index";

class Layout extends React.Component {
  state = {
    navLinks: [
      {
        link: "/search-customers",
        actions: {
          closeNav: () => this.props.closeNav(),
          openModal: null,
        },
        details: {
          icon: faSearch,
          text: "Search",
        },
      },
      {
        link: "/beers",
        actions: {
          closeNav: () => this.props.closeNav(),
          openModal: null,
        },
        details: {
          icon: faBeer,
          text: "Beers",
        },
      },
      {
        link: "/",
        actions: {
          closeNav: () => this.props.closeNav(),
          openModal: () => this.props.openModal("NEW_CUSTOMER"),
        },
        details: {
          icon: faPlus,
          text: "Create New Customer",
        },
      },
      {
        link: "/",
        actions: {
          closeNav: () => this.props.closeNav(),
          openModal: () => this.props.openModal("NEW_BEER"),
        },
        details: {
          icon: faPlus,
          text: "Create New Beer",
        },
      },
      {
        link: "/",
        actions: {
          closeNav: () => this.props.closeNav(),
          openModal: () => this.props.logout(),
        },
        details: {
          icon: faUserTimes,
          text: "Logout",
        },
      },
    ],
  };

  render() {
    const links = this.state.navLinks.map((navLink) => (
      <NavItem
        link={navLink.link}
        closeNav={navLink.actions.closeNav}
        openModal={navLink.actions.openModal}
      >
        <div className={classes.LinkDiv}>
          <div>
            <FontAwesomeIcon icon={navLink.details.icon} />
          </div>
          <h2>{navLink.details.text}</h2>
        </div>
      </NavItem>
    ));

    let navigation = null;
    let mobile = null;

    if (this.props.navOpen) {
      mobile = <ul className={classes.HamburgerList}>{links}</ul>;
    } else {
      mobile = <Toolbar logoutAlert={this.logoutAlert} />;
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
          {mobile}
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
