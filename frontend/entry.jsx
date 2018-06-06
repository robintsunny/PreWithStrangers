import React from 'react';
import ReactDOM from 'react-dom';
// import Root from './components/root';
import configureStore from './store/store';

document.addEventListener('DOMContentLoaded', () => {
  const root = document.getElementById('root');

  const store = configureStore();
  window.store = store;
  // we don't put the store directly on the window because
  // it can be confusing when debugging, sometimes giving you access to state
  // when you shouldn't
  window.getState = store.getState;
  window.dispatch = store.dispatch; // just for testing!

  ReactDOM.render(<h1>Welcome to Preworkout With Strangers</h1>, root);
});
