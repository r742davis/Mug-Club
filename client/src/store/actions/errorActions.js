import * as actionType from "./actionTypes";

// Return errors
export const returnErrors = (message, status, id = null) => {
  return {
    type: actionType.GET_ERRORS,
    payload: { message, status, id }
  };
};

// Clear errors
export const clearErrors = () => {
  return {
    type: actionType.CLEAR_ERRORS
  };
};
