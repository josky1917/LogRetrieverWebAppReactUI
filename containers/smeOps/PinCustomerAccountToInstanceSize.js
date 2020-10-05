import React, { useEffect, useState } from "react";
import { smePinCustomerAccountToInstanceSize } from "../../actions";
import PropTypes from "prop-types";
import Notice from "../../components/Notice";
import { connect } from "react-redux";

const PinCustomerAccountToInstanceSize = (props) => {
  const [accountId, setAccountId] = useState("");
  const [instanceSize, setInstanceSize] = useState("c5.large");
  const [comment, setComment] = useState("tt:012345678");
  const [query, setQuery] = useState({
    accountId: "",
    instanceSize: "",
    comment: "",
  });

  useEffect(() => {
    props.smePinCustomerAccountToInstanceSize(query);
  }, [query]);

  useEffect(() => {
    Plane();
  }, [query]);

  const updateAccountId = (e) => {
    e.preventDefault();
    setAccountId(e.target.value);
  };

  const updateInstanceSize = (e) => {
    e.preventDefault();
    setInstanceSize(e.target.value);
  };

  const updateComment = (e) => {
    e.preventDefault();
    setComment(e.target.value);
  };

  const updateQuery = (e) => {
    e.preventDefault();
    setQuery({
      accountId: accountId,
      instanceSize: instanceSize,
      comment: comment,
    });
  };

  const Plane = () => {
    return !query.accountId || !query.instanceSize ? (
      <h2>Fill out the form before submission</h2>
    ) : (
      <Notice
        loading={props.smePinCustomerAccountToInstanceSizeState.loading}
        data={props.smePinCustomerAccountToInstanceSizeState.data}
        error={props.smePinCustomerAccountToInstanceSizeState.error}
      />
    );
  };

  return (
    <div>
      <h3>Send pin customer account to instance size request.</h3>
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
        Instance Size:
        <br />
        <input
          className="Search-bar"
          type="text"
          size={40}
          required={true}
          value={instanceSize}
          onChange={updateInstanceSize}
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
          Send Pin Instance Size Request
        </button>
      </form>
      <Plane query={query} />
    </div>
  );
};
const mapStateToProps = (state) => {
  return {
    smePinCustomerAccountToInstanceSizeState: state.smePinInsSize,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    smePinCustomerAccountToInstanceSize: (query) =>
      dispatch(smePinCustomerAccountToInstanceSize(query)),
  };
};

PinCustomerAccountToInstanceSize.propTypes = {
  smePinCustomerAccountToInstanceSizeState: PropTypes.shape({
    loading: PropTypes.bool.isRequired,
    data: PropTypes.object.isRequired,
    error: PropTypes.string.isRequired,
  }),
  smePinCustomerAccountToInstanceSize: PropTypes.func.isRequired,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(PinCustomerAccountToInstanceSize);
