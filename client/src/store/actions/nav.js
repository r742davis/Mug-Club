import * as actionType from "./actionTypes";

export const openNav = () => ({
  type: actionType.OPEN_NAV,
});

export const closeNav = () => ({
  type: actionType.CLOSE_NAV,
});
