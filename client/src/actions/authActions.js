import axios from 'axios';
import { returnErrors } from './errorActions';

//Action types
import {
  USER_LOADED,
  USER_LOADING,
  AUTH_ERROR,
  LOGIN_SUCCESS,
  LOGIN_FAIL,
  LOGOUT_SUCCESS,
  REGISTER_SUCCESS,
  REGISTER_FAIL
} from './action-types';

//Check for token and then load the user
export const loadUser = () => (dispatch, getState) => {
  // User loading
  dispatch({ type: USER_LOADING });

  axios.get('https://vie-du-vin-backend.herokuapp.com/auth/user', tokenConfig(getState))
    .then(res => dispatch({
      type: USER_LOADED,
      payload: res.data
    }))
    //If token is invalid
    .catch( err => {
      dispatch(returnErrors(err.response.data, err.response.status))
      dispatch({
        type: AUTH_ERROR
      })
    })
}

//Register user
export const register = ({ name, email, password }) => dispatch => {
  const config = {
    headers: {
      'Content-Type': 'application/json'
    }
  }

  //Request body
  const body = JSON.stringify({ name, email, password })

  axios.post('https://vie-du-vin-backend.herokuapp.com/users', body, config)
    .then(res => dispatch({
      type: REGISTER_SUCCESS,
      payload: res.data
    }))
    //For an error with registration
    .catch(err => {
      dispatch(returnErrors(err.response.data, err.response.status, 'REGISTER_FAIL'))
      dispatch({
        type: REGISTER_FAIL
      })
    })
}

//Logout User
export const logout = () => {
  return {
    type: LOGOUT_SUCCESS
  }
}

//Login User
export const login = ({ email, password }) => dispatch => {
  const config = {
    headers: {
      'Content-Type': 'application/json'
    }
  }

  //Request body
  const body = JSON.stringify({ email, password })

  axios.post('https://vie-du-vin-backend.herokuapp.com/auth', body, config)
    .then(res => dispatch({
      type: LOGIN_SUCCESS,
      payload: res.data
    }))
    //For an error with the login
    .catch(err => {
      dispatch(returnErrors(err.response.data, err.response.status, 'LOGIN_FAIL'))
      dispatch({
        type: LOGIN_FAIL
      })
    })
}

// Setup config, headers, and token
export const tokenConfig = getState => {
  //Get token from local storage
  const token = getState().auth.token;

  //Headers
  const config = {
    headers: {
      "Content-type": "application/json",
      "Authorization": `Bearer ${token}`
    }
  }

  //If token, add to headers
  if(token) {
    config.headers['x-auth-token'] = token;
  }

  return config;
}
