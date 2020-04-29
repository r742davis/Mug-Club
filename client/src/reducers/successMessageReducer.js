import {
  GET_SUCCESS_MESSAGE,
  CLEAR_SUCCESS_MESSAGE,
} from "../actions/action-types";

const initialState = {
  message: {},
  origin: null,
};

export default function (state = initialState, action) {
  switch (action.type) {
    case GET_SUCCESS_MESSAGE:
      return {
        message: action.payload.message,
        origin: action.payload.origin,
      };
    case CLEAR_SUCCESS_MESSAGE:
      return {
        message: {},
        origin: null,
      };
    default:
      return state;
  }
}
