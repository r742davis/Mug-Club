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
const mapStateToProps = ({ auth, customers: { customers } }) => ({
  auth: auth,
  customers: customers,
});

class SearchContainer extends Component {
  componentDidMount = async () => {
    const { token, customers } = this.props.auth;
    if (token && !customers) {
      await this.props.loadUser();
      await this.loadDatabase(token);
    }
  };

  loadDatabase = (token) => {
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
