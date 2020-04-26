import {
  FETCH_CUSTOMERS_BEGIN,
  FETCH_CUSTOMERS_SUCCESS,
  FETCH_CUSTOMERS_FAILURE,
  CREATE_CUSTOMER,
  DELETE_CUSTOMER,
  UPDATE_CUSTOMER_BEERS
} from "../actions/action-types";

const initialState = {
  loading: false,
  error: null,
  showEditCustomerModal: false,
  customers: null,
  updatedBeers: [],
};

export default function customerReducer(state = initialState, action) {
  switch (action.type) {
    case FETCH_CUSTOMERS_BEGIN:
      return {
        ...state,
        loading: true,
        error: null,
      };
    case FETCH_CUSTOMERS_SUCCESS:
      return {
        ...state,
        loading: false,
        customers: action.payload,
      };
    case FETCH_CUSTOMERS_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.payload.error,
        customers: null,
      };
    case CREATE_CUSTOMER:
      return {
        ...state,
        customers: [action.payload, ...state.customers],
      };
    case DELETE_CUSTOMER:
      return {
        ...state,
        customers: state.customers.filter(
          (customer) => customer._id !== action.payload
        ),
      };
    case UPDATE_CUSTOMER_BEERS:
      return {
        ...state,
        updatedBeers: action.payload,
      };
    default:
      return state;
  }
}
