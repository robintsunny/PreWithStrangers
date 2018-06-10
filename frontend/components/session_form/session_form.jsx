import React from 'react';
import { withRouter } from 'react-router-dom';

class SessionForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      fname: '',
      email: '',
      password: '',
      home_city: 'DC'
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.demoLogin = this.demoLogin.bind(this);
  }

  update(field) {
    return e => this.setState({
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
    const user = {email: 'mountain@mountain.com', password: 'password'};
    this.props.demoLogin(user);
  }

  renderErrors() {
    return(
      <ul>
        {this.props.errors.map((error, i) => (
          <li key={`error-${i}`}>
            {error}
          </li>
        ))}
      </ul>
    );
  }

  render() {
    let fname;
    let homeCity;
    let passwordPlaceholder = 'Password';
    let welcomeMessage = "Hey, stranger!"
    let welcomeMessageTag = "It's good to have you back. Sign in here and sign up for your next pre time!"

    if (this.props.formType === 'SIGN UP') {
      fname =
      <label>
        <input type="text"
          value={this.state.fname   }
          onChange={this.update('fname')}
          className="login-input"
          placeholder="First Name"
        />
      </label>

      homeCity =
      <select name="cities">
        <option value="" disabled selected>Select Your Home City</option>
        <option value="San Francisco / Bay Area">San Francisco / Bay Area</option>
        <option value="Los Angeles">Los Angeles</option>
        <option value="Portland">Portland</option>
        <option value="Seattle">Seattle</option>
        <option value="New York City">New York City</option>
        <option value="Boston">Boston</option>
        <option value="Baltimore">Baltimore</option>
        <option value="DC">DC</option>
        <option value="Miami">Miami</option>
        <option value="Toronto">Toronto</option>
      </select>

      passwordPlaceholder = 'Password (at least 8 characters)';
      welcomeMessage = "Join PreWithStrangers!";
      welcomeMessageTag = '1000s of strangers across the world have lifted together for more gainz. Create an account and you\'ll be on your way to join the community.'
    }


    return (
      <div className="login-form-container">
        <form  className="login-form-box">
          <span className="welcome-message">
            {welcomeMessage}
          </span>
          <p className="welcome-message-tag">
            {welcomeMessageTag}
          </p>

          <br/>
          {this.renderErrors()}
          <div className="login-form">
            {fname}
            <br/>

            <label>
              <input type="text"
                value={this.state.email   }
                onChange={this.update('email')}
                className="login-input"
                placeholder="Email Address"
              />
            </label>

            <br/>

            <label>
              <input type="password"
                value={this.state.password}
                onChange={this.update('password')}
                className="login-input"
                placeholder={passwordPlaceholder}
              />
            </label>

            <br/>

              {homeCity}

              <br/>

            <input onClick={this.handleSubmit}className="session-submit" type="submit" value={this.props.formType} />
        </div>
        </form>
        <button onClick={this.demoLogin} className="demo-submit" type="submit">Demo Login</button>
      </div>
    );
  }
}

export default withRouter(SessionForm);
