import {
  FETCH_CUSTOMERS_BEGIN,
  FETCH_CUSTOMERS_SUCCESS,
  FETCH_CUSTOMERS_FAILURE,
  CREATE_CUSTOMER,
  UPDATE_CUSTOMER,
  DELETE_CUSTOMER
} from './action-types';
import axios from 'axios';

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


export const createCustomer = (newCustomer) => (dispatch) => {
  const config = {
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded',
      'Accept': 'application/json'
    }
  };
  axios.post('http://localhost:5000/customers', newCustomer, {crossDomain: true}, config)
    .then(res =>
      dispatch({
        type: CREATE_CUSTOMER,
        payload: res.data
      }))
    .catch(error => console.log(error))
};

export const updateCustomer = (id, customer, customers) => (dispatch) => {
  
}

