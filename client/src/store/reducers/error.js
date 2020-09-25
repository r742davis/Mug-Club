import * as actionType from "../actions/actionTypes";

const initialState = {
  message: {},
  status: null,
  id: null
};

const errorReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionType.GET_ERRORS:
      return {
        message: action.payload.message,
        status: action.payload.status,
        id: action.payload.id
      };
    case actionType.CLEAR_ERRORS:
      return {
        message: {},
        status: null,
        id: null
      };
    default:
      return state;
  }
}

export default errorReducer;