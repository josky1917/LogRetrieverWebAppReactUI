import { STOPS_SELECT } from "./stOpsType";

export const selectStOpsOption = (stOpsOption) => {
  return {
    type: STOPS_SELECT,
    payload: stOpsOption,
  };
};
