import React from "react";
import { Link } from "react-router-dom";

class EventShow extends React.Component {
  componentDidMount() {
    this.props.fetchEvent(this.props.match.params.eventId);
  }

  componentWillReceiveProps() {
    this.props.fetchCity(event.city_id);
  }

  render() {
    return (
      <div>
        {this.props.event.description}
        {this.props.event.description}
        {this.props.event.city_id}
        <Link to="/events">More Pre Times</Link>
      </div>
    );
  }
}

export default EventShow;
