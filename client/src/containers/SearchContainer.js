import React, { Component } from "react";
import Search from "../components/Search";

// Redux Imports
import { connect } from "react-redux";
import { loadUser } from "../actions/authActions";
import { fetchCustomers } from "../actions/customerActions";
const actions = {
  loadUser,
  fetchCustomers,
};
const mapStateToProps = (state) => ({
  auth: state.auth,
});

class SearchContainer extends Component {
  componentDidMount = () => {
    const { token } = this.props.auth;
    if (token) {
      this.props.loadUser();
      setTimeout(this.loadDatabase, 1000);
    }
  };

  loadDatabase = () => {
    const { token } = this.props.auth;
    if (token) {
      try {
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
    return <Search />
  }
}

export default connect(mapStateToProps, actions)(SearchContainer);
