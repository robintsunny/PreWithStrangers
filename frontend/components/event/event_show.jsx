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
      let deleteButton;

      if (this.props.event.host_id === this.props.currentUserId) {
        editButton = (
          <Link to={`/events/${this.props.event.id}/edit`}>Edit</Link>
        );
        deleteButton = (
          <button
            onClick={() =>
              this.deleteEvent
                .bind(this)
                .then(() => this.props.history.push(`/events`))
            }
          >
            Delete
          </button>
        );
      }
      return (
        <div className="event-show">
          <div className="show-name">NAME: {this.props.event.name}</div>
          <div className="show-address">
            ADDRESS: {this.props.event.address}
          </div>
          <div className="show-date">DATE: {this.props.event.date}</div>
          <div className="show-time">TIME: {this.props.event.time}</div>
          <div className="show-description">
            Description: {this.props.event.description}
          </div>

          <div className="edit-event-button">{editButton}</div>
          <div className="edit-event-button">{deleteButton}</div>

          <Link to="/events">More Pre Times</Link>
        </div>
      );
    }
  }
}

export default EventShow;
