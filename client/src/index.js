import React from 'react';
import ReactDOM from 'react-dom';

// import { Provider } from 'react-redux';
// import { applyMiddleware, createStore, compose } from 'redux';
// import thunkMiddleware from 'redux-thunk';
// import loggerMiddleware from './middleware/logger';


import './index.css';
import App from './pages/App';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(<App />, document.getElementById('root'));

serviceWorker.unregister();
