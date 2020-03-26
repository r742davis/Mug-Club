import React from "react";
import "./styles/App.css";
import Container from "../containers/Container";

import { Provider } from "react-redux";
import store from "../store";

function App() {
  return (
    <Provider store={store}>
      <Container />
    </Provider>
  );
}

export default App;
