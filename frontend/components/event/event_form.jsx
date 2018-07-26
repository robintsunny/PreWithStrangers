import React from "react";
import { withRouter } from "react-router-dom";

class EventForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = this.props.event;
  }

  componentDidMount() {
    this.props.clearErrors(null);
  }

  update(field) {
    return e => {
      this.setState({ [field]: e.target.value });
    };
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
    return (
      <div className="overhead">
        <h3 className="event-form-header">{this.props.formType} a Pre Time!</h3>
        {this.renderErrors()}

        <form
          className="event-form"
          onSubmit={e => {
            e.preventDefault();
            this.props.submitEvent(this.state).then(action => {
              this.props.history.push(`/events/${action.payload.event.id}`);
            });
          }}
        >
          <label className="event-attr">
            Name
            <input
              type="text"
              value={this.state.name}
              onChange={this.update("name")}
            />
          </label>

          <label className="event-attr">
            Date
            <input
              type="date"
              value={this.state.date}
              onChange={this.update("date")}
            />
          </label>

          <label className="event-attr">
            Time
            <input
              type="time"
              value={this.state.time}
              onChange={this.update("time")}
            />
          </label>

          <label className="event-attr">
            Address
            <input
              type="text"
              value={this.state.address}
              onChange={this.update("address")}
            />
          </label>

          <select
            name="cities"
            value={this.state.city}
            onChange={this.update("city")}
          >
            <option value="" disabled selected>
              What City Are You Getting Pre In?
            </option>
            <option value="Austin">Austin</option>
            <option value="Chicago">Chicago</option>
            <option value="Denver">Denver</option>
            <option value="Los Angeles">Los Angeles</option>
            <option value="Miami">Miami</option>
            <option value="Montreal">Montreal</option>
            <option value="New York City ">New York City</option>
            <option value="Philadelphia">Philadelphia</option>
            <option value="Portland">Portland</option>
            <option value="Seattle">Seattle</option>
            <option value="San Francisco / Bay Area">
              San Francisco / Bay Area
            </option>
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

          <label className="event-attr">
            Description
            <br />
            <textarea
              className="event-description"
              value={this.state.description}
              onChange={this.update("description")}
            />
          </label>

          <input
            type="submit"
            value={this.props.formType}
            className="demo-submit"
          />
        </form>
      </div>
    );
  }
}

export default withRouter(EventForm);
