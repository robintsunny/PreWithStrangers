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
                .then(() => this.props.history.push(`/`))
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

          {editButton}
          {deleteButton}

          <Link to="/events">More Pre Times</Link>
        </div>
      );
    }
  }
}

export default EventShow;
