import React from "react";

import {
  Route,
  Redirect,
  Switch,
  Link,
  HashRouter,
  withRouter
} from "react-router-dom";

class Footer extends React.Component {
  constructor(props) {
    super(props);
  }

  // handleLogout(e) {
  //   e.preventDefault();
  //   this.props.logout().then(() => this.props.history.push("/"));
  // }

  render() {
    return <div className="nav-bar">FOOTER</div>;
  }
}

export default withRouter(Footer);
