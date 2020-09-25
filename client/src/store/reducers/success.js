import * as actionType from "../actions/actionTypes";

const initialState = {
  message: {},
  origin: null,
};

const successReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionType.RETURN_SUCCESS_MESSAGE:
      return {
        message: action.payload.message,
        origin: action.payload.origin,
      };
    case actionType.CLEAR_SUCCESS_MESSAGE:
      return {
        message: {},
        origin: null,
      };
    default:
      return state;
  }
}

export default successReducer;
