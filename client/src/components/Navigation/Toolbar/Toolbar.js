import React from "react";
import classes from "../../../css/NavBar.module.css";
import NavItem from "../NavItem/NavItem";

import { connect } from "react-redux";
import { openModal } from "../../../store/actions/index";


const toolbar = (props) => (
  <ul className={classes.List}>
    <NavItem link={"/search-customers"}>Search</NavItem>
    <NavItem link={"/beers"}>Beers</NavItem>
    <NavItem link={"/"} clicked={() => props.openModal("NEW_CUSTOMER")}>New Customer</NavItem>
    <NavItem link={"/"} clicked={() => props.openModal("NEW_BEER")}>New Beer</NavItem>
    <NavItem link={"/"} clicked={() => props.logoutAlert()}>Logout</NavItem>
  </ul>
);

const mapDispatchToProps = {
  openModal,
};

export default connect(null, mapDispatchToProps)(toolbar);
