import React from "react";
import { withRouter } from "react-router-dom";

class EventForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = props.event;
  }

  update(field) {
    return e => {
      this.setState({ [field]: e.target.value });
    };
  }

  render() {
    return (
      <div>
        <h3>{this.props.formType}</h3>
        <form onSubmit={() => this.props.submitEvent(this.state)}>
          <label>
            Name
            <input
              type="text"
              value={this.state.name}
              onChange={this.update("name")}
            />
          </label>

          <label>
            Description
            <textarea
              value={this.state.description}
              onChange={this.update("description")}
            />
          </label>

          <label>
            Date
            <input
              type="date"
              value={this.state.date}
              onChange={this.update("date")}
            />
          </label>

          <label>
            Time
            <input
              type="time"
              value={this.state.time}
              onChange={this.update("time")}
            />
          </label>

          <label>
            Address
            <input
              type="text"
              value={this.state.address}
              onChange={this.update("address")}
            />
          </label>

          <select name="cities">
            <option value="" disabled selected>
              Select Your Home City
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
        </form>
      </div>
    );
  }
}

export default withRouter(EventForm);
