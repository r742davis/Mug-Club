import {
  FETCH_BEERS_BEGIN,
  FETCH_BEERS_SUCCESS,
  FETCH_BEERS_FAILURE
} from '../actions/action-types';

const initialState = {
  welcome: 'hello',
  beers: [],
  loading: false,
  error: null
}

export default function beerReducer (state = initialState, action) {
  switch(action.type) {
    case FETCH_BEERS_BEGIN:
      return {
        ...state,
        loading: true,
        error: null
      };
    
    case FETCH_BEERS_SUCCESS:
      return {
        ...state,
        loading: false,
        beers: action.payload
      };

    case FETCH_BEERS_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.payload.error,
        beers: []
      };

    default:
      return state;
  }
}