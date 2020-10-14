import React from "react";
import "./css/App.css";
import Routing from "./containers/Routing/Routing";
import Backdrop from "./components/UI/Backdrop/Backdrop";
import RenderModal from "./components/UI/Modal/RenderModal";

const App = () => {
  return (
    <div className="App">
      <Backdrop>
        <Routing />
        <RenderModal />
      </Backdrop>
    </div>
  );
};

export default App;
