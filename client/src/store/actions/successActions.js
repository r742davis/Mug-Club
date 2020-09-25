import * as actionType from "./actionTypes";

export const returnSuccessMessage = (message, origin) => {
  return {
    type: actionType.GET_SUCCESS_MESSAGE,
    payload: { message, origin },
  };
};

export const clearSuccessMessage = () => {
  return {
    type: actionType.CLEAR_SUCCESS_MESSAGE,
  };
};
