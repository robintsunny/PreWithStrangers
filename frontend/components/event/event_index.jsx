import React from "react";
import EventIndexItem from "./event_index_item";
// import { Link } from "react-router-dom";
import { HashLink as Link } from "react-router-hash-link";

class EventIndex extends React.Component {
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
    } else {
      return (
        <div>
          <div className="pre-splash">
            <div className="pre-sub-splash">
              <span className="pre-splash-text">Good Training Partners</span>
              <span className="pre-splash-text-tag">
                They're Hard To Come By
              </span>
            </div>

            <Link className="create-event-button" to="/new_event">
              Create a Pre Time!
            </Link>
          </div>

          <div className="pre-message-bar">
            <div className="pre-message-bar-header">
              Pre With Strangers is pre, with strangers.
            </div>

            <div className="pre-message-bar-content">
              For two hours, six-ish iron addicts sit around to talk; maybe
              about training or maybe about anything. The circumstances are
              unusual, but that's the point.
            </div>
          </div>

          <div className="city-bar">
            <span className="city-bar-message">
              Jump To Your City's Pre Times
            </span>

            <div className="city-bar-items">
              {this.props.cities.map(city => {
                return (
                  <div className="city-bar-item">
                    <Link smooth to={`/events#${city.name}`}>
                      {city.name}
                    </Link>
                  </div>
                );
              })}
            </div>
          </div>

          <div className="cities-events">
            {this.props.cities.map(city => {
              return (
                <React.Fragment className="city-events">
                  <div className="entire-city-div">
                    <div id={`${city.name}`} />
                    <span className="city-name">{city.name}</span>

                    {city.event_ids.map(event_id => {
                      const event = this.props.events.find(
                        event => event.id === event_id
                      );

                      // filter out past events here
                      return (
                        <Link to={`/events/${event_id}`} className="city-event">
                          <Link
                            className="event-name"
                            to={`/events/${event_id}`}
                          >
                            {event.name}
                          </Link>
                          <br />
                          <span className="event-date">{event.date}</span>
                          <br />
                          <span className="event-time">{event.time}</span>
                          <br />
                          <Link
                            to={`/events/${event_id}`}
                            className="event-join"
                          >
                            More Info
                          </Link>
                        </Link>
                      );
                    }, this)}
                  </div>
                </React.Fragment>
              );
            }, this)}
          </div>
        </div>
      );
    }
  }
}

export default EventIndex;
