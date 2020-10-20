import React from "react";
import "./App.css";
import Routing from "./containers/Routing/Routing";
import Backdrop from "./components/UI/Backdrop/Backdrop";
import RenderModal from "./components/UI/Modal/RenderModal";

const App = () => {
  return (
    <div className="App">
        <Routing />
        <RenderModal />
    </div>
  );
};

export default App;
