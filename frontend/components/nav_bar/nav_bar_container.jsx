import { connect } from 'react-redux';
import React from 'react';
import { Link } from 'react-router-dom';
import { login, signup, signout } from '../../actions/session_actions';
import NavBar from './nav_bar';

const mapStateToProps = (state) => {
  return {
    currentUser: state.entities.users[state.session.id],
    errors: state.errors.session,
  };
};

const mapDispatchToProps = dispatch => {

  return {
    signup: (user) => dispatch(signup(user)),
    login: (user) => dispatch(login(user)),
    logout: () => dispatch(logout())
  };
};

export default connect(mapStateToProps,mapDispatchToProps)(NavBar)
