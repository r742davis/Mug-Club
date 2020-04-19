import React, { Component } from "react";
import Routing from "../components/Routing";
import Backdrop from "../components/Backdrop";
import RenderModal from "../components/RenderModal";
import LoadExistingCustomers from "../containers/LoadExistingDatabase";

// Redux Imports
import { connect } from "react-redux";
import { loadUser } from "../actions/authActions";
import { fetchBeers } from "../actions/beerActions";
import { fetchCustomers } from "../actions/customerActions";
const actions = { loadUser,fetchBeers, fetchCustomers };

class Container extends Component {
  componentDidMount = () => {
    // Checks if there is a token present on page refresh,
    // then loads the current user
    const { token } = this.props.auth;
    if (token) {
      this.props.loadUser();
    } 
  }

  render() {
    return (
      <>
        <Routing />
        {/* Only run in Production <LoadExistingCustomers /> */}
        <Backdrop></Backdrop>
        <RenderModal />
      </>
    );
  }
}

const mapStateToProps = (state) => ({
  auth: state.auth
});

export default connect(mapStateToProps, actions)(Container);
