import { combineReducers } from "redux";
import beerReducer from "./beerReducer";
import customerReducer from "./customerReducer";
import errorReducer from "./errorReducer";
import successMessageReducer from "./successMessageReducer";
import authReducer from "./authReducer";
import modalReducer from "./modalReducer";

export default combineReducers({
  beers: beerReducer,
  customers: customerReducer,
  auth: authReducer,
  modal: modalReducer,
  error: errorReducer,
  success: successMessageReducer
});
