import {
  USER_LOADED,
  USER_LOADING,
  AUTH_ERROR,
  LOGIN_SUCCESS,
  LOGIN_FAIL,
  LOGOUT_SUCCESS,
  REGISTER_SUCCESS,
  REGISTER_FAIL,
  OPEN_REGISTER,
  CLOSE_REGISTER,
  OPEN_PASSWORD_RESET,
  CLOSE_PASSWORD_RESET,
  SEND_EMAIL_SUCCESS,
} from "../actions/action-types";

const initialState = {
  token: localStorage.getItem("token"),
  isAuthenticated: null,
  isLoading: false,
  user: null,
  registerOpen: false,
  passwordResetOpen: false,
  successMessage: null,
};

export default function (state = initialState, action) {
  switch (action.type) {
    case USER_LOADING:
      return {
        ...state,
        isLoading: true,
      };
    case USER_LOADED:
      return {
        ...state,
        isAuthenticated: true,
        isLoading: false,
        user: action.payload,
      };
    case LOGIN_SUCCESS:
    case REGISTER_SUCCESS:
      localStorage.setItem("token", action.payload.token);
      return {
        ...state,
        ...action.payload,
        isAuthenticated: true,
        isLoading: false,
      };
    case AUTH_ERROR:
    case LOGIN_FAIL:
    case LOGOUT_SUCCESS:
    case REGISTER_FAIL:
      localStorage.removeItem("token");
      return {
        ...state,
        token: null,
        user: null,
        isAuthenticated: false,
        isLoading: false,
      };
    case OPEN_REGISTER:
      return {
        ...state,
        registerOpen: true,
      };
    case CLOSE_REGISTER:
      return {
        ...state,
        registerOpen: false,
      };
    case OPEN_PASSWORD_RESET:
      return {
        ...state,
        passwordResetOpen: true,
      };
    case CLOSE_PASSWORD_RESET:
      return {
        ...state,
        passwordResetOpen: false,
      };
      case SEND_EMAIL_SUCCESS:
          return {
            ...state,
            successMessage: action.payload
          }
    default:
      return state;
  }
}
