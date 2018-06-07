import { connect } from 'react-redux';
import React from 'react';
import { Link } from 'react-router-dom';
import { login } from '../../actions/session_actions';
import Splash from './splash';

const msp = (state) => {
  return {
    splash: 0
  };
};


export default connect(msp, null)(Splash);
