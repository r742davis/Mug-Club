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
const actions = { loadUser, fetchBeers, fetchCustomers };

class Container extends Component {
  state = {};

  componentDidMount = async () => {
    // Checks if there is a token present on page refresh,
    // then loads the current user
    const { token, isAuthenticated } = await this.props.auth;
    if (token) {
      this.props.loadUser();
      setTimeout(this.loadDatabase, 1000);
    }
  };

  loadDatabase = async () => {
    const { token } = this.props.auth;
    if (token) {
      try {
        this.props.fetchBeers();
        this.props.fetchCustomers();
      } catch (error) {
        throw new Error(
          "Cannot connect to database. Server may be busy or unavailable."
        );
      }
    } else {
      //Add error redirect to login page -> due to database not loading
    }
  };

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
  auth: state.auth,
});

export default connect(mapStateToProps, actions)(Container);
