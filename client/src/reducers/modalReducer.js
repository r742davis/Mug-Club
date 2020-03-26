import { OPEN_MODAL, CLOSE_MODAL } from "../actions/action-types";

const initialState = {
  modalOpen: false,
  error: null,
  info: null
};

export default function modalReducer(state = initialState, action) {
  switch (action.type) {
    case OPEN_MODAL:
      return {
        ...state,
        modalOpen: true,
        info: action.payload,
        error: null
      };
    case CLOSE_MODAL:
      return {
        ...state,
        modalOpen: false,
        info: null,
        error: null
      };
    default:
      return state;
  }
}
