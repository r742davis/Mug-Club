import * as actionType from "./actionTypes";
import axios from "axios";
import { returnErrors } from "./errorActions";
import { returnSuccessMessage } from "./successActions";

const URL =
  process.env.NODE_ENV === "production"
    ? "https://bearmugclub.herokuapp.com/api/"
    : "http://localhost:5000/api/";

//Check for token and then load the user
export const loadUser = () => (dispatch, getState) => {
  // User loading
  dispatch({ type: actionType.USER_LOADING });

  axios
    .get(URL + "auth/user", tokenConfig(getState))
    .then((res) =>
      dispatch({
        type: actionType.USER_LOADED,
        payload: res.data,
      })
    )
    //If token is invalid
    .catch((err) => {
      dispatch(returnErrors(err.response.data, err.response.status));
      dispatch({
        type: actionType.AUTH_ERROR,
      });
    });
};

//Register user
export const register = ({ name, email, password }, message) => (dispatch) => {
  const config = {
    headers: {
      "Content-Type": "application/json",
    },
  };

  //Request body
  const body = JSON.stringify({ name, email, password });

  axios
    .post(URL + "users", body, config)
    .then(
      (res) =>
        dispatch({
          type: actionType.REGISTER_SUCCESS,
          payload: res.data,
        }),
      dispatch(returnSuccessMessage(message, "REGISTER"))
    )
    //For an error with registration
    .catch((err) => {
      dispatch(
        returnErrors(err.response.data, err.response.status, "REGISTER_FAIL")
      );
      dispatch({
        type: actionType.REGISTER_FAIL,
      });
    });
};

//Logout User
export const logout = () => {
  return {
    type: actionType.LOGOUT_SUCCESS,
  };
};

//Login User
export const login = ({ email, password }) => (dispatch) => {
  const config = {
    headers: {
      "Content-Type": "application/json",
    },
  };
  //Request body
  const body = JSON.stringify({ email, password });
  axios
    .post(URL + "auth", body, config)
    .then((res) => {
      dispatch({
        type: actionType.LOGIN_SUCCESS,
        payload: res.data,
      });
    })
    //For an error with the login
    .catch((err) => {
      dispatch(
        returnErrors(err.response.data, err.response.status, "LOGIN_FAIL")
      );
      dispatch({
        type: actionType.LOGIN_FAIL,
      });
    });
};

export const sendReset = (email) => (dispatch) => {
  const userEmail = { email: email };
  const config = {
    headers: {
      "Content-Type": "application/json",
    },
  };
  axios
    .post(URL + "auth/requestReset", userEmail, config)
    .then((res) => {
      console.log(res);
      dispatch({
        type: actionType.SEND_EMAIL_SUCCESS,
        payload: res.data,
      });
    })
    .catch((err) => {
      dispatch(
        returnErrors(
          err.response.data,
          err.response.status,
          "RESET_PASSWORD_FAIL"
        )
      );
      // dispatch({
      //   type: LOGIN_FAIL,
      // });
    });

  //Add redux store dispatches after successful firig of sendReset
};

// Setup config, headers, and token
export const tokenConfig = (getState) => {
  //Get token from local storage
  const token = getState().auth.token;

  //Headers
  const config = {
    headers: {
      "Content-type": "application/json",
      Authorization: `Bearer ${token}`,
    }
  };

  //If token, add to headers
  if (token) {
    config.headers["x-auth-token"] = token;
  }

  return config;
};

export const openRegister = () => {
  return function (dispatch) {
    dispatch({
      type: actionType.OPEN_REGISTER,
    });
    dispatch({
      type: actionType.CLEAR_ERRORS,
    });
  };
};

export const closeRegister = () => {
  return function (dispatch) {
    dispatch({
      type: actionType.CLOSE_REGISTER,
    });
    dispatch({
      type: actionType.CLEAR_ERRORS,
    });
  };
};

export const openPasswordReset = () => {
  return function (dispatch) {
    dispatch({
      type: actionType.OPEN_PASSWORD_RESET,
    });
    dispatch({
      type: actionType.CLEAR_ERRORS,
    });
  };
};

export const closePasswordReset = () => {
  return function (dispatch) {
    dispatch({
      type: actionType.CLOSE_PASSWORD_RESET,
    });
    dispatch({
      type: actionType.CLEAR_ERRORS,
    });
  };
};

export const clearSuccessMessage = () => {
  return function (dispatch) {
    dispatch({
      type: actionType.CLEAR_SUCCESS_MESSAGE,
    });
  };
};
