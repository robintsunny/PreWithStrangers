import React from 'react';
import ReactDOM from 'react-dom';
import configureStore from './store/store';
import Root from './components/root';
import * as actions from './actions/session_actions';

document.addEventListener('DOMContentLoaded', () => {

  const store = configureStore();
  window.store = store;
  window.getState = store.getState;
  window.dispatch = store.dispatch;
  window.signup = actions.signup;


  const root = document.getElementById('root');
  ReactDOM.render(<Root store={ store }/>, root);
});
