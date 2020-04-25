import React, { Component } from "react";
import Routing from "../components/Routing";
import Backdrop from "../components/Backdrop";
import RenderModal from "../components/RenderModal";
// import LoadExistingCustomers from "../containers/LoadExistingDatabase";

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

export default Container;
