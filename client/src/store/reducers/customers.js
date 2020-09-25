import * as actionType from "../actions/actionTypes";

const initialState = {
  loading: false,
  error: null,
  showEditCustomerModal: false,
  customers: null,
  updatedBeers: [],
};

const customerReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionType.FETCH_CUSTOMERS_BEGIN:
      return {
        ...state,
        loading: true,
        error: null,
      };
    case actionType.FETCH_CUSTOMERS_SUCCESS:
      return {
        ...state,
        loading: false,
        customers: action.payload,
      };
    case actionType.FETCH_CUSTOMERS_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.payload.error,
        customers: null,
      };
    case actionType.CREATE_CUSTOMER:
      return {
        ...state,
        customers: [action.payload, ...state.customers],
      };
    case actionType.DELETE_CUSTOMER:
      return {
        ...state,
        customers: state.customers.filter(
          (customer) => customer._id !== action.payload
        ),
      };
    case actionType.UPDATE_CUSTOMER_BEERS:
      return {
        ...state,
        updatedBeers: action.payload,
      };
    default:
      return state;
  }
};

export default customerReducer;
