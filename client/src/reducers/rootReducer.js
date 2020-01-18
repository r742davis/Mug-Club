import { combineReducers } from 'redux';
import beerReducer from './beerReducer';

export default combineReducers({
  beers: beerReducer
});