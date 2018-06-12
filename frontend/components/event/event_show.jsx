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
      let joinButton = (
        <div className="user-join">
          <div>SIGN ME UP!</div>
        </div>
      );
      let leaveButton = (
        <div className="user-join">
          <div>Leave Pre Time</div>
        </div>
      );

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
        joinButton = null;
      }
      return (
        <div className="event-show">
          <div className="event-show-left">
            <div className="event-show-details">
              <div className="show-name">{this.props.event.name}</div>
              <div className="show-attr">📍 {this.props.event.address}</div>
              <div className="show-attr">📅 {this.props.event.date}</div>
              <div className="show-attr">⏰ {this.props.event.time}</div>
              <div className="show-attr">📃 {this.props.event.description}</div>
              {editButton}
              {deleteButton}
              {joinButton}
              {leaveButton}
              <Link className="more-pre-link" to="/events">
                More Pre Times
              </Link>
            </div>
          </div>

          <div className="event-show-right">
            <div className="about-the-host">
              About The Host: {this.props.event.host.fname}
            </div>
            <div className="host-bio">
              Ser Gregor Clegane, known as the Mountain That Rides, or simply
              the Mountain, is the older brother of Sandor Clegane and is a
              vassal to Tywin Lannister. His size and strength make him a
              fearsome warrior, and he has earned a reputation for brutality.
            </div>
          </div>
        </div>
      );
    }
  }
}

export default EventShow;
