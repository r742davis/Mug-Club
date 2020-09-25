import * as actionType from "./actionTypes";

export const returnSuccess = (message, origin) => {
  return {
    type: actionType.RETURN_SUCCESS_MESSAGE,
    payload: { message, origin },
  };
};

export const clearSuccess = () => {
  return {
    type: actionType.CLEAR_SUCCESS_MESSAGE,
  };
};
