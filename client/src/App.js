import React, { Component } from "react";
import "./css/App.css";
import Routing from "./pages/Routing";
import Backdrop from "./components/Backdrop";
import RenderModal from "./components/RenderModal";

const App = () => {
  return (
    <div className="App">
      <Routing />
      {/* Only run in Production <LoadExistingCustomers /> */}
      <Backdrop></Backdrop>
      <RenderModal />
    </div>
  );
};

export default App;
