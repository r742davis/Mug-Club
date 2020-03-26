import { OPEN_MODAL, CLOSE_MODAL } from "../actions/action-types";

const initialState = {
  modalType: "",
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
        modalType: action.payload.modalType,
        info: action.payload.data,
        error: null
      };
    case CLOSE_MODAL:
      return {
        ...state,
        modalOpen: false,
        modalType: "",
        info: null,
        error: null
      };
    default:
      return state;
  }
}
