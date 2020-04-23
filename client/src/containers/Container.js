import React, { Component } from "react";
import Routing from "../components/Routing";
import Backdrop from "../components/Backdrop";
import RenderModal from "../components/RenderModal";
import LoadExistingCustomers from "../containers/LoadExistingDatabase";

// Redux Imports
import { connect } from "react-redux";

class Container extends Component {
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

export default connect(mapStateToProps)(Container);
