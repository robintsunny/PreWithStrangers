import { connect } from "react-redux";
import React from "react";
import { Link } from "react-router-dom";
import { signup, receiveErrors } from "../../actions/session_actions";
import SessionForm from "./session_form";

const mapStateToProps = state => {
  return {
    errors: state.errors.session,
    formType: "SIGN UP"
  };
};

const mapDispatchToProps = dispatch => {
  return {
    processForm: user => dispatch(signup(user)),
    demoLogin: user => dispatch(login(user)),
    clearErrors: error => dispatch(receiveErrors(error))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SessionForm);
