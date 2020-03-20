import { combineReducers } from "redux";
import beerReducer from "./beerReducer";
import customerReducer from "./customerReducer";
import errorReducer from "./errorReducer";
import authReducer from "./authReducer";

export default combineReducers({
  beers: beerReducer,
  customers: customerReducer,
  auth: authReducer,
  error: errorReducer
});
