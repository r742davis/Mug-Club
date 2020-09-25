import React, { Component } from "react";
import BeerDisplay from "../components/BeerDisplay";
import { connect } from "react-redux";
import { loadUser, fetchBeers } from "../store/actions/index";
const actions = { loadUser, fetchBeers };
const mapStateToProps = ({ auth, beers }) => ({
  auth: auth,
  beers: beers
});

class BeersContainer extends Component {
  componentDidMount = async () => {
    const { token } = this.props.auth;
    const { beers } = this.props.beers;
    if (token && !beers) {
      console.log(beers);
      await this.props.loadUser();
      await this.loadDatabase(token);
    } 
  };

  loadDatabase = (token) => {
    if (token) {
      try {
        this.props.fetchBeers();
      } catch (e) {
        throw new Error(
          "Cannot connect to database. Server may be busy or unavailable."
        );
      }
    }
  };
  render() {
    return <BeerDisplay />;
  }
}

export default connect(mapStateToProps, actions)(BeersContainer);
