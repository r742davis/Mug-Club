import React, { Component } from "react";
import BeerDisplay from "../components/BeerDisplay";
import { connect } from "react-redux";
import { loadUser } from "../actions/authActions";
import { fetchBeers } from "../actions/beerActions";
const actions = { loadUser, fetchBeers };
const mapStateToProps = (state) => ({
  auth: state.auth,
});

class BeersContainer extends Component {
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
        this.props.fetchBeers();
      } catch (e) {
        throw new Error(
          "Cannot connect to database. Server may be busy or unavailable."
        );
      }
    } else {
      //Add error redirect to login page -> due to database not loading
    }
  };
  render() {
    return <BeerDisplay />;
  }
}

export default connect(mapStateToProps, actions)(BeersContainer);
