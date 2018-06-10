import React from 'react';

import { Route, Redirect, Switch, Link, HashRouter, withRouter} from 'react-router-dom';

class NavBar extends React.Component {
  render() {
    let dummyLink =
        <span className="main-Cspan">
        <Link className="nav-linksC" to="/about">About</Link>
        <Link className="nav-linksC" to="/login">Sign in</Link>
        <Link className="nav-linksC" to="/signup">Sign Up</Link>
        </span>

    if (this.props.currentUser !== undefined) {
      dummyLink =
      <span className="main-Cspan">
        <Link className="nav-linksC" to="/dashboard">DASHBOARD</Link>
        &nbsp;
        <button className="nav-linksC" onClick={this.props.logout}>Sign Out</button>

      </span>
    }


    return (
      <div className="nav-bar">
        <div></div>
        <Link to="/" className="nav-icon">🏋🏾‍ Pre With Strangers</Link>
        <div className="rightlinks">
        <span>
          <Link className="nav-linksAlways" to="/events">Pre-Times</Link>
          <Link className="nav-linksAlways" to="/hosting_event">Host Event</Link>

        </span>
        {dummyLink}
        </div>
        <div></div>
      </div>
    )
  }
}

export default withRouter(NavBar);
