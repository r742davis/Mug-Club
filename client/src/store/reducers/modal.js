import * as actionType from "../actions/actionTypes";

const initialState = {
  modalType: "",
  modalOpen: false,
  navOpen: false,
  error: null,
  info: null,
};

const modalReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionType.OPEN_MODAL:
      return {
        ...state,
        modalOpen: true,
        modalType: action.payload.modalType,
        info: action.payload.data,
        error: null,
      };
    case actionType.CLOSE_MODAL:
      return {
        ...state,
        modalOpen: false,
        modalType: "",
        info: null,
        error: null,
      };
    case actionType.OPEN_NAV:
      return {
        ...state,
        navOpen: true,
        error: null,
      };
    case actionType.CLOSE_NAV:
      return {
        ...state,
        navOpen: false,
        error: null,
      };
    default:
      return state;
  }
};

export default modalReducer;
