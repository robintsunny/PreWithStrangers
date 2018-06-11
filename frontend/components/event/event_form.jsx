import React from "react";
import { withRouter } from "react-router-dom";

class EventForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = this.props.event;
  }

  update(field) {
    return e => {
      this.setState({ [field]: e.target.value });
    };
  }

  render() {
    return (
      <div className="overhead">
        <h3 className="event-form-header">{this.props.formType} a Pre Time!</h3>
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
            <option value="San Francisco / Bay Area">
              San Francisco / Bay Area
            </option>
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
