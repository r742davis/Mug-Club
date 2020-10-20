import React from "react";
import SearchDashboard from "../../components/Search/SearchDashboard";

import { connect } from "react-redux";
import { loadUser, fetchCustomers } from "../../store/actions/index";

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
    return <SearchDashboard />;
  }
}

const mapDispatchToProps = {
  loadUser,
  fetchCustomers,
};

const mapStateToProps = ({ auth, customers: { customers } }) => ({
  auth: auth,
  customers: customers,
});

export default connect(mapStateToProps, mapDispatchToProps)(Search);
