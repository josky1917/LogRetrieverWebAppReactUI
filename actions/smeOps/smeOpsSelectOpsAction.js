import { SMEOPS_SELECT } from "./smeOpsType";

export const selectSmeOpsOption = (smeOpsOption) => {
  return {
    type: SMEOPS_SELECT,
    payload: smeOpsOption,
  };
};
