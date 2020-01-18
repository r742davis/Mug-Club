import {
  FETCH_CUSTOMERS_BEGIN,
  FETCH_CUSTOMERS_SUCCESS,
  FETCH_CUSTOMERS_FAILURE,
  CREATE_CUSTOMER,
  UPDATE_CUSTOMER,
  DELETE_CUSTOMER,
  TOGGLE_EDIT_CUSTOMER_MODAL
} from '../actions/action-types';

const initialState = {
  loading: false,
  error: null,
  toggleEditCustomerModal: false,
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

    case UPDATE_CUSTOMER:
      return {
        ...state
      }

    case CREATE_CUSTOMER:
      return {
        ...state
      }

    case DELETE_CUSTOMER:
      return {
        ...state
      }

    case TOGGLE_EDIT_CUSTOMER_MODAL:
      return {
        ...state
      }

    default:
      return state;
  }
}