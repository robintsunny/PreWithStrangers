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
          <Link
            className="edit-event-button"
            to={`/events/${this.props.event.id}/edit`}
          >
            Edit
          </Link>
        );
        deleteButton = (
          <button
            className="delete-event-button"
            onClick={() =>
              this.props
                .deleteEvent(this.props.match.params.eventId)
                .then(() => this.props.history.push(`/events`))
            }
          >
            Delete
          </button>
        );
      }
      return (
        <div className="event-show">
          <Link className="more-pre-link" to="/events">
            More Pre Times
          </Link>
          <div className="event-show-details">
            <div className="show-name">{this.props.event.name}</div>
            <div className="show-address">📍 {this.props.event.address}</div>
            <div className="show-date">📅 {this.props.event.date}</div>
            <div className="show-time">⏰ {this.props.event.time}</div>
            <div className="show-description">
              DESCRIPTION: {this.props.event.description}
            </div>
          </div>

          {editButton}
          {deleteButton}
        </div>
      );
    }
  }
}

export default EventShow;
