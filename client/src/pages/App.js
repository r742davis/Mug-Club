import React from "react";
import "../css/App.css";
import AppContainer from "../containers/AppContainer";

import { Provider } from "react-redux";
import store from "../store";

function App() {
  return (
    <Provider store={store}>
      <AppContainer />
    </Provider>
  );
}

export default App;
