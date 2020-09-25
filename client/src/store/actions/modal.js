import * as actionType from "./actionTypes";

export const openModal = (modalType, data = {}) => ({
  type: actionType.OPEN_MODAL,
  payload: { modalType, data },
});

export const closeModal = () => ({
  type: actionType.CLOSE_MODAL,
});
