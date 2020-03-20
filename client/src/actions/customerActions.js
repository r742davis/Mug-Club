import {
  FETCH_CUSTOMERS_BEGIN,
  FETCH_CUSTOMERS_SUCCESS,
  FETCH_CUSTOMERS_FAILURE,
  CREATE_CUSTOMER,
  UPDATE_CUSTOMER,
  DELETE_CUSTOMER
} from './action-types';
import axios from 'axios';
import { tokenConfig } from './authActions';
import { returnErrors } from './errorActions';

export const fetchCustomers = () => {
  return (dispatch, getState) => {
    dispatch(fetchCustomersBegin());
    return fetch('http://localhost:5000/customers', tokenConfig(getState))
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


export const createCustomer = (newCustomer) => (dispatch, getState) => {
  axios
    .post('http://localhost:5000/customers', newCustomer, tokenConfig(getState))
    .then(res =>
      dispatch({
        type: CREATE_CUSTOMER,
        payload: res.data
      }))
      .catch(err => dispatch(returnErrors(err.response.data, err.response.status)))
};

export const updateCustomer = (customer, id) => (dispatch, getState) => {
  const customerURL = 'http://localhost:5000/customers/' + id;
  axios
    .put(customerURL, customer, tokenConfig(getState));
}

export const deleteCustomer = (id) => (dispatch, getState) => {
  axios.delete('http://localhost:5000/customers/' + id, tokenConfig(getState))
    .then(res =>
      dispatch({
        type: DELETE_CUSTOMER,
        payload: id
      })  
    )
    .catch(err =>
      dispatch(returnErrors(err.response.data, err.response.status)))
}


