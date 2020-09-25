import auth from "./reducers/auth";
import beers from "./reducers/beers";
import customers from "./reducers/customers";
import error from "./reducers/error";
import modal from "./reducers/modal";
import success from "./reducers/success";
import { createStore, applyMiddleware, compose, combineReducers } from "redux";
import thunk from "redux-thunk";

const reducer = combineReducers({
  auth,
  beers,
  customers,
  error,
  modal,
  success,
});

const logger = (store) => {
  return (next) => {
    return (action) => {
      console.log("[Middleware] Dispatching", action);
      const result = next(action);
      console.log("[Middleware] Next State", store.getState());
      return result;
    };
  };
};

let store;
const initialState = {};
const middleware = [thunk, logger];

if (process.env.NODE_ENV === "production") {
  store = createStore(
    reducer,
    initialState,
    compose(applyMiddleware(...middleware))
  );
} else {
  store = createStore(
    reducer,
    initialState,
    compose(
      applyMiddleware(...middleware),
      window.__REDUX_DEVTOOLS_EXTENSION__ &&
        window.__REDUX_DEVTOOLS_EXTENSION__()
    )
  );
}

export default store;
