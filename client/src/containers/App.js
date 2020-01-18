import React from 'react';
import './App.css';
import Container from './Container/Container';

import { createStore } from 'redux';
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


/////////////////////////////
// const defaultState = {
//   welcome: 'Hi',
//   otherState: 'some stuff'
// }

// const greeting = (state = defaultState, action) => {
//   switch (action.type) {
//     case 'GREET_NAME':
//       return { ...state, welcome: `Hello ${action.name}` };
//     case 'GREET_WORLD':
//       return { ...state, welcome: 'Hello World' };
//     default:
//       return state;
//   }
// };

// const store = createStore(greeting);

// console.log(store.getState());

// const name = 'Something coming back from an API';

// store.dispatch({
//   type: 'GREET_NAME',
//   name: 'Jonathan'
// })

// console.log(store.getState());

