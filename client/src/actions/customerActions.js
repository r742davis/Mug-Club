import {
  FETCH_CUSTOMERS_BEGIN,
  FETCH_CUSTOMERS_SUCCESS,
  FETCH_CUSTOMERS_FAILURE
} from './action-types';

export const fetchCustomers = () => {
  return dispatch => {
    dispatch(fetchCustomersBegin());
    return fetch('http://localhost:5000/customers')
      .then(res => res.json())
      .then(customers => {
        dispatch(fetchCustomersSuccess(customers));
        return customers;
      })
      .catch(error => dispatch(fetchCustomersFailure(error)));
  }
};

export const fetchCustomersBegin = () => ({
  type: FETCH_CUSTOMERS_BEGIN
});

export const fetchCustomersSuccess = (customers) => ({
  type: FETCH_CUSTOMERS_SUCCESS,
  payload: customers
});

export const fetchCustomersFailure = (error) => ({
  type: FETCH_CUSTOMERS_FAILURE,
  payload: { error }
});