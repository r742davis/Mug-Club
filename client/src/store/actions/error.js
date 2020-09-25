import * as actionType from "./actionTypes";

export const returnErrors = (message, status, id = null) => {
  return {
    type: actionType.GET_ERRORS,
    payload: { message, status, id },
  };
};

export const clearErrors = () => {
  return {
    type: actionType.CLEAR_ERRORS,
  };
};
