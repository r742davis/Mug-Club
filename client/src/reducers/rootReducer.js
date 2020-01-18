import { combineReducers } from 'redux';
import beerReducer from './beerReducer';
import customerReducer from './customerReducer';

export default combineReducers({
  beers: beerReducer,
  customers: customerReducer
});