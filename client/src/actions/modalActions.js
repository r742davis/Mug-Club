import { OPEN_MODAL, CLOSE_MODAL } from "./action-types";

export const openModal = (modalType, data={}) => ({
  type: OPEN_MODAL,
  payload: {modalType, data}
});

export const closeModal = () => ({
  type: CLOSE_MODAL
});
