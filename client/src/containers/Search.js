import React from "react";
import SearchComponent from "../components/Search/SearchComponent";

import { connect } from "react-redux";
import { loadUser, fetchCustomers } from "../store/actions/index";
const actions = {
  loadUser,
  fetchCustomers,
};
const mapStateToProps = ({ auth, customers: { customers } }) => ({
  auth: auth,
  customers: customers,
});

class Search extends React.Component {
  componentDidMount = async () => {
    const { token } = this.props.auth;
    if (token && !this.props.customers) {
      await this.props.loadUser();
      this.loadDatabase(token);
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
    return <SearchComponent />
  }
}

export default connect(mapStateToProps, actions)(Search);
