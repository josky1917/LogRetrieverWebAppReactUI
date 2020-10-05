import React, { useEffect, useState } from "react";
import { smeGetCustomerLimit } from "../../actions";
import PropTypes from "prop-types";
import Notice from "../../components/Notice";
import { connect } from "react-redux";
import CustomerLimitPropertyName from "../../utils/CustomerLimitPropertyName";

const GetCustomerLimit = (props) => {
  const [accountId, setAccountId] = useState("");
  const [propertyName, setPropertyName] = useState(
    "Woodchipper.Obelix.vpnAmiId"
  );
  const [query, setQuery] = useState({
    accountId: "",
    propertyName: "",
  });

  useEffect(() => {
    props.smeGetCustomerLimit(query);
  }, [query]);

  useEffect(() => {
    Plane();
  }, [query]);

  const updateAccountId = (e) => {
    e.preventDefault();
    setAccountId(e.target.value);
  };

  const updatePropertyName = (e) => {
    e.preventDefault();
    setPropertyName(e.target.value);
  };

  const updateQuery = (e) => {
    e.preventDefault();
    setQuery({
      accountId: accountId,
      propertyName: propertyName,
    });
  };

  const Plane = () => {
    return !query.accountId || !query.propertyName ? (
      <h2>Fill out the form before submission</h2>
    ) : (
      <Notice
        loading={props.smeGetCustomerLimitState.loading}
        data={props.smeGetCustomerLimitState.data}
        error={props.smeGetCustomerLimitState.error}
      />
    );
  };

  return (
    <div>
      <h3>Send get customer limit request.</h3>
      <CustomerLimitPropertyName />
      <form onSubmit={updateQuery} className="Search-form">
        Account Id:
        <br />
        <input
          className="Search-bar"
          type="text"
          size={40}
          required={true}
          value={accountId}
          onChange={updateAccountId}
        />
        <br />
        Property Name:
        <br />
        <input
          className="Search-bar"
          type="text"
          size={40}
          required={true}
          value={propertyName}
          list="customer-limit-property-name"
          onChange={updatePropertyName}
        />
        <br />
        <button className="Search-button" type="submit">
          Send Get Customer Limit Request
        </button>
      </form>
      <Plane query={query} />
    </div>
  );
};
const mapStateToProps = (state) => {
  return {
    smeGetCustomerLimitState: state.smeGetCusLimit,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    smeGetCustomerLimit: (query) => dispatch(smeGetCustomerLimit(query)),
  };
};

GetCustomerLimit.propTypes = {
  smeGetCustomerLimitState: PropTypes.shape({
    loading: PropTypes.bool.isRequired,
    data: PropTypes.object.isRequired,
    error: PropTypes.string.isRequired,
  }),
  smeGetCustomerLimit: PropTypes.func.isRequired,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(GetCustomerLimit);
