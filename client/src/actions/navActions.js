import { OPEN_NAV, CLOSE_NAV } from "./action-types";

export const openNav = () => ({
  type: OPEN_NAV
});

export const closeNav = () => ({
  type: CLOSE_NAV
});