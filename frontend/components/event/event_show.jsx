import React from "react";
// import { Link } from "react-router-dom";
import { HashLink as Link } from "react-router-hash-link";

class EventShow extends React.Component {
  componentDidMount() {
    this.props.fetchEvent(this.props.match.params.eventId);
  }

  render() {
    if (!this.props.event || !this.props.host || !this.props.rsvps) {
      return <div>loading</div>;
    } else {
      let editButton;
      let deleteButton;
      let joinButton = (
        <button
          onClick={() =>
            this.props.createRsvp({
              event_id: this.props.match.params.eventId,
              user_id: this.props.currentUserId
            })
          }
          className="user-join"
        >
          SIGN ME UP!
        </button>
      );
      let leaveButton = (
        <button
          onClick={() => this.props.deleteRsvp(this.props.currentUserRsvp.id)}
          className="user-join"
        >
          Leave This Pre Time
        </button>
      );

      let actionButton = this.props.currentUserRsvp ? leaveButton : joinButton;

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
        actionButton = null;
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
              {actionButton}
              <Link className="more-pre-link" to="/events">
                More Pre Times
              </Link>
            </div>
          </div>

          <div className="event-show-right">
            <div className="about-the-host">
              About The Host: {this.props.host.fname}
            </div>
            <div className="host-bio">
              {this.props.host.fname} hasn't submitted a profile yet!
            </div>
          </div>
        </div>
      );
    }
  }
}

export default EventShow;
