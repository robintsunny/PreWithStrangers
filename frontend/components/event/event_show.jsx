import React from "react";
import { Link } from "react-router-dom";

class EventShow extends React.Component {
  componentDidMount() {
    this.props.fetchEvent(this.props.match.params.eventId);
  }



  render() {

    if (!this.props.event) {
      return <div>loading</div>;
    } else {
      let editButton;

      if (this.props.event.host_id === this.props.currentUserId) {
        editButton = <Link to={`/events/${this.props.event.id}/edit`}>Edit</Link>
      }
    return (
      <div>
        {this.props.event.name}
        {this.props.event.description}
        {this.props.event.address}
        {this.props.event.date}
        {this.props.event.time}

        {this.props.event.city_id}
        {editButton}

        <Link to="/events">More Pre Times</Link>

      </div>
    );
  }
}
}

export default EventShow;
