import * as actionType from "./actionTypes";
import axios from "axios";
import { returnErrors, returnSuccess } from "./index";

const URL =
  process.env.NODE_ENV === "production"
    ? "https://bearmugclub.herokuapp.com/api/"
    : "http://localhost:5000/api/";

export const loadUser = () => (dispatch, getState) => {
  dispatch({ type: actionType.USER_LOADING });

  axios
    .get(URL + "auth/user", tokenConfig(getState))
    .then((res) =>
      dispatch({
        type: actionType.USER_LOADED,
        payload: res.data,
      })
    )
    .catch((err) => {
      dispatch(returnErrors(err.response.data, err.response.status));
      dispatch({
        type: actionType.AUTH_ERROR,
      });
    });
};

export const register = ({ name, email, password }, message) => (dispatch) => {
  const config = {
    headers: {
      "Content-Type": "application/json",
    },
  };
  const body = JSON.stringify({ name, email, password });
  axios
    .post(URL + "users", body, config)
    .then(
      (res) =>
        dispatch({
          type: actionType.REGISTER_SUCCESS,
          payload: res.data,
        }),
      dispatch(returnSuccess(message, "REGISTER"))
    )
    .catch((err) => {
      dispatch(
        returnErrors(err.response.data, err.response.status, "REGISTER_FAIL")
      );
      dispatch({
        type: actionType.REGISTER_FAIL,
      });
    });
};

export const logout = () => {
  return {
    type: actionType.LOGOUT_SUCCESS,
  };
};

export const login = ({ email, password }) => (dispatch) => {
  const config = {
    headers: {
      "Content-Type": "application/json",
    },
  };
  const body = JSON.stringify({ email, password });
  console.log(body);
  axios
    .post(URL + "auth", body, config)
    .then((res) => {
      console.log(res);
      dispatch({
        type: actionType.LOGIN_SUCCESS,
        payload: res.data,
      });
    })
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

export const tokenConfig = (getState) => {
  const token = getState().auth.token;
  const config = {
    headers: {
      "Content-type": "application/json",
      Authorization: `Bearer ${token}`,
    },
  };

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
