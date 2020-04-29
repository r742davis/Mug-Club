import { GET_SUCCESS_MESSAGE, CLEAR_SUCCESS_MESSAGE } from "./action-types";

export const returnSuccessMessage = (message, origin) => {
  return {
    type: GET_SUCCESS_MESSAGE,
    payload: { message, origin },
  };
};

export const clearSuccessMessage = () => {
  return {
    type: CLEAR_SUCCESS_MESSAGE,
  };
};
