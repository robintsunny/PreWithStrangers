import React from "react";
import { Link } from "react-router-dom";

class Dashboard extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.fetchJoinedEvents();
  }

  render() {
    if (!this.props.joinedEvents) {
      return <div>DASHBOARDDDDD 🏋🏾‍</div>;
    } else {
      return (
        <div>
          <div className="rob">
            <div className="signed-up-logo">PRE TIMES YOUR SIGNED UP FOR!</div>
            <div className="dashboard-wrapper">
              {this.props.joinedEvents.map(event => {
                return (
                  <div className="city-event">
                    <Link to={`events/${event.id}`} className="event-name">
                      {event.name}
                    </Link>
                    <div className="event-details">{event.date}</div>
                    <div className="event-details">{event.time}</div>
                    <div className="event-details">{event.address}</div>
                    <div className="event-details-description">
                      {event.description}
                    </div>

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
