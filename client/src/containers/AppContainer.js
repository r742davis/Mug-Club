import React, { Component } from "react";
import Routing from "../pages/Routing";
import Backdrop from "../components/Backdrop";
import RenderModal from "../components/RenderModal";
// import LoadExistingCustomers from "../containers/LoadExistingDatabase";

const AppContainer = () => (
  <>
    <Routing />
    {/* Only run in Production <LoadExistingCustomers /> */}
    <Backdrop></Backdrop>
    <RenderModal />
  </>
);

export default AppContainer;
