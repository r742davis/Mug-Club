import {
  FETCH_BEERS_BEGIN,
  FETCH_BEERS_SUCCESS,
  FETCH_BEERS_FAILURE,
  CREATE_BEER,
  UPDATE_BEER,
  DELETE_BEER
} from '../actions/action-types';

const initialState = {
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
    case CREATE_BEER:
      return {
        ...state,
        beers: [...state.beers, action.payload]
      }
    case UPDATE_BEER:
      return {
        ...state
      }
    case DELETE_BEER:
      return {
        ...state,
        customers: state.beers.filter(beer => beer._id !== action.payload)
      }
    default:
      return state;
  }
}