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
    return (
      <div className="footer">
        <div className="footer-links">
          <Link to="/about" className="footer-link">
            About
          </Link>
          <Link to="/new_event" className="footer-link">
            Hosting
          </Link>
          <Link to="/events" className="footer-link">
            Pre Times
          </Link>
        </div>

        <div className="footer-paragraph">
          <div className="footer-paragraph-el">
            Pre With Strangers is all about making our passions have a family.
            We're more active than ever before, but we might also find out our
            close circle don't have an interest in our barbell life. And all we
            want to do is bring people together because, well, the world is
            better that way.
          </div>

          <div className="footer-paragraph-el">
            We're not doing anything groundbreaking. We're creating something
            that would've been completely unnecessary 20 years ago. But while we
            grow our tank top and jogger collection, it's easy to forget the
            value of an iron family. A situation that's intentionally
            unintentional.
          </div>
        </div>
      </div>
    );
  }
}

export default withRouter(Footer);
