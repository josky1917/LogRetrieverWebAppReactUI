import React, { useEffect, useState } from "react";
import { smePinCustomerToAmi } from "../../actions";
import PropTypes from "prop-types";
import Notice from "../../components/Notice";
import { connect } from "react-redux";
import CustomerLimitPropertyName from "../../utils/CustomerLimitPropertyName";

const PinCustomerToAmi = (props) => {
  const [accountId, setAccountId] = useState("");
  const [amiId, setAmiId] = useState("ami-0123456789");
  const [comment, setComment] = useState("tt:012345678");
  const [query, setQuery] = useState({
    accountId: "",
    amiId: "",
    comment: "",
  });

  useEffect(() => {
    props.smePinCustomerToAmi(query);
  }, [query]);

  useEffect(() => {
    Plane();
  }, [query]);

  const updateAccountId = (e) => {
    e.preventDefault();
    setAccountId(e.target.value);
  };

  const updateAmiId = (e) => {
    e.preventDefault();
    setAmiId(e.target.value);
  };

  const updateComment = (e) => {
    e.preventDefault();
    setComment(e.target.value);
  };

  const updateQuery = (e) => {
    e.preventDefault();
    setQuery({
      accountId: accountId,
      amiId: amiId,
      comment: comment,
    });
  };

  const Plane = () => {
    return !query.accountId ? (
      <h2>Fill out the form before submission</h2>
    ) : (
      <Notice
        loading={props.smePinCustomerToAmiState.loading}
        data={props.smePinCustomerToAmiState.data}
        error={props.smePinCustomerToAmiState.error}
      />
    );
  };

  return (
    <div>
      <h3>Send pin customer to ami request.</h3>
      <CustomerLimitPropertyName />
      <form onSubmit={updateQuery} className="Search-form">
        AWS Account Id:
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
        AMI ID:
        <br />
        <input
          className="Search-bar"
          type="text"
          size={40}
          required={true}
          value={amiId}
          onChange={updateAmiId}
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
          Send Pin Customer To Ami Request
        </button>
      </form>
      <Plane query={query} />
    </div>
  );
};
const mapStateToProps = (state) => {
  return {
    smePinCustomerToAmiState: state.smePinAmi,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    smePinCustomerToAmi: (query) => dispatch(smePinCustomerToAmi(query)),
  };
};

PinCustomerToAmi.propTypes = {
  smePinCustomerToAmiState: PropTypes.shape({
    loading: PropTypes.bool.isRequired,
    data: PropTypes.object.isRequired,
    error: PropTypes.string.isRequired,
  }),
  smePinCustomerToAmi: PropTypes.func.isRequired,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(PinCustomerToAmi);
