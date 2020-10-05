import { HOME_SELECT } from "./homeType";

export const selectHomeOption = (homeOption) => {
  return {
    type: HOME_SELECT,
    payload: homeOption,
  };
};
