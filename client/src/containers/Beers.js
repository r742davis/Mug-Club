import React from "react";
import BeerDisplay from "../components/Beers/BeerDisplay/BeerDisplay";
import { connect } from "react-redux";
import { loadUser, fetchBeers } from "../store/actions/index";

class Beers extends React.Component {
  componentDidMount = async () => {
    const { token } = this.props.auth;
    const { beers } = this.props.beers;
    if (token && !beers) {
      console.log(beers);
      await this.props.loadUser();
      this.loadDatabase(token);
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

const mapDispatchToProps = { loadUser, fetchBeers };
const mapStateToProps = ({ auth, beers }) => ({
  auth: auth,
  beers: beers,
});

export default connect(mapStateToProps, mapDispatchToProps)(Beers);
