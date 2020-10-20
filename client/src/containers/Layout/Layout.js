import React from "react";
import Backdrop from "../../components/UI/Backdrop/Backdrop";
import NavItem from "../../components/Navigation/NavItem/NavItem";
import Navigation from "../../components/Navigation/Navigation";
import NavIcon from "../../components/UI/Icons/NavIcon/NavIcon";
import "@animated-burgers/burger-squeeze/dist/styles.css";

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
          text: "New Customer",
        },
      },
      {
        link: "/beers",
        actions: {
          closeNav: () => this.props.closeNav(),
          openModal: () => this.props.openModal("NEW_BEER"),
        },
        details: {
          icon: faPlus,
          text: "New Beer",
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
    let navigation = null;

    const links = this.state.navLinks.map((navLink) => (
      <NavItem
        key={navLink.details.text}
        link={navLink.link}
        closeNav={navLink.actions.closeNav}
        openModal={navLink.actions.openModal}
      >
        <NavIcon icon={navLink.details.icon}>
        {navLink.details.text}
        </NavIcon>
      </NavItem>
    ));

    if (this.props.isAuthenticated) {
      navigation = (
        <Navigation
          renderedLinks={links}
          navOpen={this.props.navOpen}
          close={this.props.closeNav}
          open={this.props.openNav}
        />
      );
    }

    return (
      <Backdrop navOpen={this.props.navOpen}>
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
