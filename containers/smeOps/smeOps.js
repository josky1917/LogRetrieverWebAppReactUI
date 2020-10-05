import React from "react";
import { connect } from "react-redux";
import { selectSmeOpsOption } from "../../actions";
import GetCustomerLimit from "./GetCustomerLimit";
import PinCustomerAccountToInstance from "./PinCustomerAccountToInstanceSize";
import PingFromInstance from "./PingFromInstance";
import PinCustomerToAmi from "./PinCustomerToAmi";
import ReplaceInstance from "./ReplaceInstance";
import TcpDump from "./TcpDump";
import PropTypes from "prop-types";

const REPLACE_INSTANCE = "replaceInstance";
const PING_FROM_INSTANCE = "pingFromInstance";
const PIN_CUSTOMER_ACCOUNT_TO_INSTANCE_SIZE =
  "pingCustomerAccountToInstanceSize";
const GET_CUSTOMER_LIMIT = "getCustomerLimit";
const TCP_DUMP = "tcpDump";
const PIN_CUSTOMER_TO_AMI = "pinCustomerToAmi";

const smeOps = (props) => {
  const showSelectedContent = (str = props.smeOpsOption) => {
    switch (str) {
      case REPLACE_INSTANCE:
        return <ReplaceInstance />;
      case PING_FROM_INSTANCE:
        return <PingFromInstance />;
      case PIN_CUSTOMER_ACCOUNT_TO_INSTANCE_SIZE:
        return <PinCustomerAccountToInstance />;
      case GET_CUSTOMER_LIMIT:
        return <GetCustomerLimit />;
      case TCP_DUMP:
        return <TcpDump />;
      case PIN_CUSTOMER_TO_AMI:
        return <PinCustomerToAmi />;
      default:
        return <ReplaceInstance />;
    }
  };

  return (
    <div>
      <h1>This is smeOps page for SMEs</h1>
      <div>
        {props.ldap &&
        props.ldap.ldapGroup &&
        (props.ldap.ldapGroup["woodchipper"] ||
          props.ldap.ldapGroup["woodchipper-interns"] ||
          props.ldap.ldapGroup["aws-support-sme-vpn"]) ? (
          <div>
            <select
              value={props.smeOpsOption}
              onChange={(e) => props.selectSmeOpsOption(e.target.value)}
            >
              <option value="replaceInstance">Replace Instance</option>
              <option value="pingFromInstance">Ping From Instance</option>
              <option value="pingCustomerAccountToInstanceSize">
                Ping Customer Account To Instance Size
              </option>
              <option value="getCustomerLimit">Get Customer Limit</option>
              <option value="tcpDump">TCP Dump</option>
              <option value="pinCustomerToAmi">Pin Customer To AMI</option>
            </select>
            {showSelectedContent()}
          </div>
        ) : (
          <h3>No LDAP Permission</h3>
        )}
      </div>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    smeOpsOption: state.smeOps.smeOpsOption,
    ldap: state.ldap.users,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    selectSmeOpsOption: (optionValue) =>
      dispatch(selectSmeOpsOption(optionValue)),
  };
};

smeOps.propTypes = {
  ldap: PropTypes.object.isRequired,
  smeOpsOption: PropTypes.string.isRequired,
  selectSmeOpsOption: PropTypes.func.isRequired,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(smeOps);
