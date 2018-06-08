import React from 'react';

import { Route, Redirect, Switch, Link, HashRouter, withRouter} from 'react-router-dom';

class NavBar extends React.Component {
  render() {
    let dummyLink =
        <span>
        <Link to="/about">About</Link>
        &nbsp;
        <Link to="/login">Sign in</Link>
        &nbsp;
        <Link to="/signup">Sign Up</Link>
        </span>

    if (this.props.currentUser !== undefined) {
      dummyLink =
      <span>
        <Link to="/dashboard">Dashboard</Link>
        &nbsp;
        <button onClick={this.props.logout}>Sign Out</button>

      </span>
    }


    return (
      <div className="nav-bar">
        <Link to="/" className="nav-icon">🏋🏾‍ Pre With Strangers</Link>


        <span className="nav-links">
          Pre-Times
          &nbsp;
          Hosting
          &nbsp;
          {dummyLink}
        </span>
      </div>
    )
  }
}

export default withRouter(NavBar);
