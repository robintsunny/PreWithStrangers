import React from "react";
import { Link } from "react-router-dom";

class Dashboard extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: true
    };
  }

  componentDidMount() {
    this.props.fetchEvents().then(() => this.setState({ loading: false }));
  }

  render() {
    if (this.state.loading) {
      return <div> LOADING</div>;
    } else if (!this.props.joinedEvents && !this.props.hostedEvents) {
      return <div> NO EVENTS!</div>;
    } else {
      return (
        <div>
          <div className="rob">
            <div className="signed-up-logo">
              Pre Times you're SIGNED UP for!
            </div>
            <div className="dashboard-wrapper">
              {this.props.joinedEvents.map(event => {
                // {this.props.joinedEvents.map(event => {
                return (
                  <div className="city-event">
                    <Link to={`events/${event.id}`} className="event-name">
                      {event.name}
                    </Link>
                    <div className="event-details">{event.date}</div>
                    <div className="event-details">{event.time}</div>
                    <div className="event-details">{event.address}</div>

                    <button
                      className="event-leave"
                      onClick={() => {
                        this.props.deleteRsvp();
                      }}
                    >
                      Leave Event
                    </button>
                  </div>
                );
              })}
            </div>
            <div className="signed-up-logo hosting-logo">
              Pre Times You're HOSTING!
            </div>
            <div className="dashboard-wrapper">
              {this.props.hostedEvents.map(event => {
                // {this.props.joinedEvents.map(event => {
                return (
                  <div className="city-event">
                    <Link to={`events/${event.id}`} className="event-name">
                      {event.name}
                    </Link>
                    <div className="event-details">{event.date}</div>
                    <div className="event-details">{event.time}</div>
                    <div className="event-details">{event.address}</div>

                    <button
                      className="event-leave"
                      onClick={() => {
                        this.props.deleteRsvp();
                      }}
                    >
                      Leave Event
                    </button>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      );
    }
  }
}

export default Dashboard;
