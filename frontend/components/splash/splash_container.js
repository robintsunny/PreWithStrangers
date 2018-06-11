import { connect } from "react-redux";
import React from "react";
import { Link } from "react-router-dom";
import Splash from "./splash";

const msp = state => {
  return {
    currentUserId: state.session.id
  };
};

export default connect(
  msp,
  null
)(Splash);
