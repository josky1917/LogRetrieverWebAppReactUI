import { combineReducers } from "redux";
import homeSelectOpsReducer from "./home/homeSelectOpsReducer";
import smeOpsSelectOpsReducer from "./smeOps/smeOpsSelectOpsReducer";
import stOpsSelectOpsReducer from "./stOps/stOpsSelectOpsReducer";
import ldapFetchUserReducer from "./ldapFetchUserReducer";
import homeSingleTunnelNotificationReducer from "./home/homeSingleTunnelNotificationReducer";
import smeReplaceInstanceReducer from "./smeOps/smeReplaceInstanceReducer";
import smePingFromInstanceReducer from "./smeOps/smePingFromInstanceReducer";
import smePinCustomerAccountToInstanceSizeReducer from "./smeOps/smePinCustomerAccountToInstanceSizeReducer";
import smeGetCustomerLimitReducer from "./smeOps/smeGetCustomerLimitReducer";
import smePinCustomerToAmiReducer from "./smeOps/smePinCustomerToAmiReducer";
import smeTcpDumpReducer from "./smeOps/smeTcpDumpReducer";
import stRemoveCustomerLimitReducer from "./stOps/stRemoveCustomerLimitReducer";
import stUpdateCustomerLimitReducer from "./stOps/stUpdateCustomerLimitReducer";
import stSetWorkflowStateReducer from "./stOps/stSetWorkflowStateReducer";
import homeTelemetryReducer from "./home/homeTelemetryReducer";
import wxdLogs from "./wxLog/wxLogReducer";

/**
 * Returns the combined reducer.
 * @param state
 * @param action
 */

export default combineReducers({
  home: homeSelectOpsReducer,
  homeNotification: homeSingleTunnelNotificationReducer,
  homeTelemetry: homeTelemetryReducer,
  smeOps: smeOpsSelectOpsReducer,
  smeReplaceIns: smeReplaceInstanceReducer,
  smePingFromIns: smePingFromInstanceReducer,
  smePinInsSize: smePinCustomerAccountToInstanceSizeReducer,
  smeGetCusLimit: smeGetCustomerLimitReducer,
  smePinAmi: smePinCustomerToAmiReducer,
  smeTcpDump: smeTcpDumpReducer,
  stOps: stOpsSelectOpsReducer,
  stRemoveCusLimit: stRemoveCustomerLimitReducer,
  stUpdateCusLimit: stUpdateCustomerLimitReducer,
  stWorkflowState: stSetWorkflowStateReducer,
  wxLog: wxdLogs,
  ldap: ldapFetchUserReducer,
});
