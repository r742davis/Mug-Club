import React, { Component } from "react";
import Routing from "../components/Routing";
import Backdrop from "../components/Backdrop";
import RenderModal from "../components/RenderModal";
import LoadExistingCustomers from "../containers/LoadExistingDatabase";

// Redux Imports
import { connect } from "react-redux";
import { fetchBeers } from "../actions/beerActions";
import { fetchCustomers } from "../actions/customerActions";
const actions = { fetchBeers, fetchCustomers };

class Container extends Component {
  
  async componentDidMount() {
    await this.loadData();
  }

  loadData = async () => {
    try {
      await this.props.fetchBeers();
      await this.props.fetchCustomers();
    } catch (error) {
      throw new Error(
        "Cannot connect to database. Server may be busy or unavailable."
      );
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

const mapStateToProps = (state) => ({});

export default connect(mapStateToProps, actions)(Container);
