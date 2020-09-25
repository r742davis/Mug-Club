import * as actionType from "../actions/actionTypes";

const initialState = {
  token: localStorage.getItem("token"),
  isAuthenticated: null,
  isLoading: false,
  user: null,
  registerOpen: false,
  passwordResetOpen: false,
  successMessage: null,
};

const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionType.USER_LOADING:
      return {
        ...state,
        isLoading: true,
      };
    case actionType.USER_LOADED:
      return {
        ...state,
        isAuthenticated: true,
        isLoading: false,
        user: action.payload,
      };
    case actionType.LOGIN_SUCCESS:
      localStorage.setItem("token", action.payload.token);
      return {
        ...state,
        ...action.payload,
        isAuthenticated: true,
        isLoading: false,
      };
    case actionType.REGISTER_SUCCESS:
      return {
        ...state,
        successMessage: action.payload.successMessage,
      };
    case actionType.AUTH_ERROR:
    case actionType.LOGIN_FAIL:
    case actionType.LOGOUT_SUCCESS:
    case actionType.REGISTER_FAIL:
      localStorage.removeItem("token");
      return {
        ...state,
        token: null,
        user: null,
        isAuthenticated: false,
        isLoading: false,
      };
    case actionType.OPEN_REGISTER:
      return {
        ...state,
        registerOpen: true,
      };
    case actionType.CLOSE_REGISTER:
      return {
        ...state,
        registerOpen: false,
      };
    case actionType.OPEN_PASSWORD_RESET:
      return {
        ...state,
        passwordResetOpen: true,
      };
    case actionType.CLOSE_PASSWORD_RESET:
      return {
        ...state,
        passwordResetOpen: false,
      };
    case actionType.SEND_EMAIL_SUCCESS:
      return {
        ...state,
        successMessage: action.payload,
      };
    default:
      return state;
  }
}

export default authReducer;