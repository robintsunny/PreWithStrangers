import React from 'react';
import { withRouter } from 'react-router-dom';

class SessionForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      fname: 'First Name',
      email: 'Email',
      password: 'Password',
      home_city: 'DC'
    };
    this.handleSubmit = this.handleSubmit.bind(this);
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

    return (
      <div className="login-form-container">
        <form onSubmit={this.handleSubmit} className="login-form-box">
          Join PreworkoutWithStrangers!
          <br/>
          {this.renderErrors()}
          <div className="login-form">
            <label>
              <input type="text"
                value={this.state.fname   }
                onChange={this.update('fname')}
                className="login-input"
              />
            </label>
            <br/>

            <label>
              <input type="text"
                value={this.state.email   }
                onChange={this.update('email')}
                className="login-input"
              />
            </label>

            <br/>

            <label>
              <input type="password"
                value={this.state.password}
                onChange={this.update('password')}
                className="login-input"
              />
            </label>

            <br/>

              <select name="cities">
                <option value="dc">DC</option>
                <option value="london">London</option>
                <option value="boston">Boston</option>
                <option value="sfbay">SF/Bay Area</option>
                <option value="toronto">Toronto</option>
                <option value="newyorkcity">New York City</option>
                <option value="baltimore">Baltimore</option>
              </select>

              <br/>

            <input className="session-submit" type="submit" value={this.props.formType} />

        </div>
        </form>
      </div>
    );
  }
}

export default withRouter(SessionForm);
