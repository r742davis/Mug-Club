import {
  FETCH_CUSTOMERS_BEGIN,
  FETCH_CUSTOMERS_SUCCESS,
  FETCH_CUSTOMERS_FAILURE
} from '../actions/action-types';

const initialState = {
  loading: false,
  error: null,
  customers: []
}

export default function customerReducer (state = initialState, action) {
  switch(action.type) {
    case FETCH_CUSTOMERS_BEGIN:
      return {
        ...state,
        loading: true,
        error: null
      };
    
    case FETCH_CUSTOMERS_SUCCESS:
      return {
        ...state,
        loading: false,
        customers: action.payload
      };

    case FETCH_CUSTOMERS_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.payload.error,
        customers: []
      };

    default:
      return state;
  }
}