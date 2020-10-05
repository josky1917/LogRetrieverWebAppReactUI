import React, { useEffect } from "react";
import { connect } from "react-redux";
import { ldapFetchUser } from "../actions";
import MainPlane from "./MainPlane";
import PropTypes from "prop-types";

const LdapAuth = (props) => {
  useEffect(() => {
    props.ldapFetchUser();
  }, [props.ldapFetchUser]);

  return props.ldapUserData.loading ? (
    <h1>Loading</h1>
  ) : props.ldapUserData.error ? (
    <h2>{props.ldapUserData.error}</h2>
  ) : props.ldapUserData.users.isLdapAccess === false ? (
    <h2>
      User {props.ldapUserData.users.requesterID} does not have ldap permission.
    </h2>
  ) : (
    <div>
      <h3>Current user: {props.ldapUserData.users.requesterID}</h3>
      <div>
        <MainPlane />
      </div>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    ldapUserData: state.ldap,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    ldapFetchUser: () => dispatch(ldapFetchUser()),
  };
};

LdapAuth.propTypes = {
  ldapUserData: PropTypes.shape({
    loading: PropTypes.bool.isRequired,
    users: PropTypes.object.isRequired,
    error: PropTypes.string.isRequired,
  }),
  ldapFetchUser: PropTypes.func.isRequired,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(LdapAuth);
