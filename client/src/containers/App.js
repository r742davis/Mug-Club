import React from 'react';
import './App.css';
import Container from './Container/Container';

import { Provider } from 'react-redux';
import store from '../store';

function App() {
  return (
    <Provider store={store}>
      <Container />
    </Provider>
  );
}

export default App;

