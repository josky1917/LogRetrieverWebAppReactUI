import React, { useEffect, useState } from "react";
import { stUpdateCustomerLimit } from "../../actions";
import PropTypes from "prop-types";
import Notice from "../../components/Notice";
import { connect } from "react-redux";
import CustomerLimitPropertyName from "../../utils/CustomerLimitPropertyName";

const UpdateCustomerLimit = (props) => {
  const [accountId, setAccountId] = useState("0123456789");
  const [propertyName, setPropertyName] = useState(
    "Woodchipper.Obelix.vpnAmiId"
  );
  const [propertyValue, setPropertyValue] = useState("ami-0123456789");
  const [comment, setComment] = useState("tt:012345678");
  const [query, setQuery] = useState({
    accountId: "",
    propertyName: "",
    propertyValue: "",
    comment: "",
  });

  useEffect(() => {
    props.stUpdateCustomerLimit(query);
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

  const updatePropertyValue = (e) => {
    e.preventDefault();
    setPropertyValue(e.target.value);
  };

  const updateComment = (e) => {
    e.preventDefault();
    setComment(e.target.value);
  };

  const updateQuery = (e) => {
    e.preventDefault();
    setQuery({
      accountId: accountId,
      propertyName: propertyName,
      propertyValue: propertyValue,
      comment: comment,
    });
  };

  const Plane = () => {
    return !query.accountId || !query.propertyName ? (
      <h2>Fill out the form before submission</h2>
    ) : (
      <Notice
        loading={props.stUpdateCustomerLimitState.loading}
        data={props.stUpdateCustomerLimitState.data}
        error={props.stUpdateCustomerLimitState.error}
      />
    );
  };

  return (
    <div>
      <h3>Send update customer limit request.</h3>
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
        Property Value:
        <br />
        <input
          className="Search-bar"
          type="text"
          size={40}
          required={true}
          value={propertyValue}
          onChange={updatePropertyValue}
        />
        <br />
        Comment:
        <br />
        <input
          className="Search-bar"
          type="text"
          size={40}
          required={true}
          value={comment}
          onChange={updateComment}
        />
        <br />
        <button className="Search-button" type="submit">
          Send Update Customer Limit Request
        </button>
      </form>
      <Plane query={query} />
    </div>
  );
};
const mapStateToProps = (state) => {
  return {
    stUpdateCustomerLimitState: state.stUpdateCusLimit,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    stUpdateCustomerLimit: (query) => dispatch(stUpdateCustomerLimit(query)),
  };
};

UpdateCustomerLimit.propTypes = {
  stUpdateCustomerLimitState: PropTypes.shape({
    loading: PropTypes.bool.isRequired,
    data: PropTypes.object.isRequired,
    error: PropTypes.string.isRequired,
  }),
  stUpdateCustomerLimit: PropTypes.func.isRequired,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(UpdateCustomerLimit);
