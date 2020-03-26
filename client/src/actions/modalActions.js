import {
  OPEN_MODAL,
  CLOSE_MODAL
} from "./action-types";
import { returnErrors } from "./errorActions";

export const openModal = data => ({
  type: OPEN_MODAL,
  payload: data
});

export const closeModal = () => ({
  type: CLOSE_MODAL
})
