import React from "react";
import { withRouter } from "react-router-dom";

class SessionForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      fname: "",
      email: "",
      password: "",
      home_city: ""
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.demoLogin = this.demoLogin.bind(this);
  }
  componentDidMount() {
    this.props.clearErrors(null);
  }
  update(field) {
    return e =>
      this.setState({
        [field]: e.currentTarget.value
      });
  }

  handleSubmit(e) {
    e.preventDefault();
    const user = Object.assign({}, this.state);
    this.props.processForm(user);
  }

  demoLogin(e) {
    e.preventDefault();
    const user = { password: "savagerandy", email: "randy@gmail.com" };
    this.props.demoLogin(user);
  }

  renderErrors() {
    if (!!this.props.errors) {
      return (
        <ul>
          {this.props.errors.map((error, i) => (
            <li className="session-errors" key={`error-${i}`}>
              {error}
            </li>
          ))}
        </ul>
      );
    }
  }

  render() {
    let fname;
    let homeCity;
    let passwordPlaceholder = "Password";
    let welcomeMessage = "Hey, stranger!";
    let welcomeMessageTag =
      "It's good to have you back. Sign in here and sign up for your next pre time!";

    if (this.props.formType === "SIGN UP") {
      fname = (
        <label>
          <input
            type="text"
            value={this.state.fname}
            onChange={this.update("fname")}
            className="login-input"
            placeholder="First Name"
          />
        </label>
      );

      homeCity = (
        <select
          name="cities"
          value={this.state.home_city}
          onChange={this.update("home_city")}
        >
          <option value="" disabled selected>
            Select Your Home City
          </option>
          <option value="Austin">Austin</option>
          <option value="Chicago">Chicago</option>
          <option value="Denver">Denver</option>
          <option value="LA">Los Angeles</option>
          <option value="Miami">Miami</option>
          <option value="Montreal">Montreal</option>
          <option value="NYC">New York City</option>
          <option value="Philadelphia">Philadelphia</option>
          <option value="Portland">Portland</option>
          <option value="Seattle">Seattle</option>
          <option value="SFBay">San Francisco / Bay Area</option>
          <option value="Toronto">Toronto</option>
          <option value="Vancouver">Vancouver</option>
          <option value="Dublin">Dublin</option>
          <option value="Istanbul">Istanbul</option>
          <option value="London">London</option>
          <option value="Seoul">Seoul</option>
          <option value="Singapore">Singapore</option>
          <option value="Sydney">Sydney</option>
          <option value="Tokyo">Tokyo</option>
        </select>
      );

      passwordPlaceholder = "Password (at least 8 characters)";
      welcomeMessage = "Join PreWithStrangers!";
      welcomeMessageTag =
        "1000s of strangers across the world have lifted together for more gainz. Create an account and you'll be on your way to join the community.";
    }

    return (
      <div className="login-form-container">
        <form className="login-form-box">
          <div className="welcome-message">{welcomeMessage}</div>

          <p className="welcome-message-tag">{welcomeMessageTag}</p>
          <p className="redirector">{this.props.navLink}</p>

          <br />
          {this.renderErrors()}
          <div className="login-form">
            {fname}
            <br />

            <label>
              <input
                type="text"
                value={this.state.email}
                onChange={this.update("email")}
                className="login-input"
                placeholder="Email Address"
              />
            </label>

            <br />

            <label>
              <input
                type="password"
                value={this.state.password}
                onChange={this.update("password")}
                className="login-input"
                placeholder={passwordPlaceholder}
              />
            </label>

            <br />

            {homeCity}

            <br />

            <input
              onClick={this.handleSubmit}
              className="session-submit"
              type="submit"
              value={this.props.formType}
            />
          </div>
        </form>
        <button onClick={this.demoLogin} className="demo-submit" type="submit">
          Demo Login
        </button>
      </div>
    );
  }
}

export default withRouter(SessionForm);
