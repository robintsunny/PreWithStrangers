import React from "react";
import { Link } from "react-router-dom";

const Greeting = ({ currentUser, logout }) => {
  const sessionLinks = () => <nav className="login-signup" />;
  const personalGreeting = () => (
    <hgroup className="header-group">
      <h2 className="header-name">Welcome back, {currentUser.fname}!</h2>
      <button className="header-button" onClick={logout}>
        Log Out
      </button>
    </hgroup>
  );

  return currentUser ? personalGreeting() : sessionLinks();
};

export default Greeting;
