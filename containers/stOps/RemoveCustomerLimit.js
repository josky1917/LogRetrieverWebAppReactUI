import React, { useEffect, useState } from "react";
import { stRemoveCustomerLimit } from "../../actions";
import PropTypes from "prop-types";
import Notice from "../../components/Notice";
import { connect } from "react-redux";
import CustomerLimitPropertyName from "../../utils/CustomerLimitPropertyName";

const RemoveCustomerLimit = (props) => {
  const [accountId, setAccountId] = useState("0123456789");
  const [propertyName, setPropertyName] = useState(
    "Woodchipper.Obelix.vpnAmiId"
  );
  const [query, setQuery] = useState({
    accountId: "",
    propertyName: "",
  });

  useEffect(() => {
    props.stRemoveCustomerLimit(query);
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
        loading={props.stRemoveCustomerLimitState.loading}
        data={props.stRemoveCustomerLimitState.data}
        error={props.stRemoveCustomerLimitState.error}
      />
    );
  };

  return (
    <div>
      <h3>Send remove customer limit request.</h3>
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
          Send Remove Customer Limit Request
        </button>
      </form>
      <Plane query={query} />
    </div>
  );
};
const mapStateToProps = (state) => {
  return {
    stRemoveCustomerLimitState: state.stRemoveCusLimit,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    stRemoveCustomerLimit: (query) => dispatch(stRemoveCustomerLimit(query)),
  };
};

RemoveCustomerLimit.propTypes = {
  stRemoveCustomerLimitState: PropTypes.shape({
    loading: PropTypes.bool.isRequired,
    data: PropTypes.object.isRequired,
    error: PropTypes.string.isRequired,
  }),
  stRemoveCustomerLimit: PropTypes.func.isRequired,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(RemoveCustomerLimit);
