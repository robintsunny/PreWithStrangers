import React from "react";
import EventIndexItem from "./event_index_item";
import { Link } from "react-router-dom";

class EventIndex extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.fetchEvents();
  }

  render() {
    if (!this.props.cities) {
      return <div>loading</div>;
    } else {
    return (
      <div >
        <div className="pre-splash">

      <div className="pre-sub-splash">
          <span className="pre-splash-text">Good Training Partners</span>
          <span className="pre-splash-text-tag">They're Hard To Come By</span>
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
            For two hours, five-ish athletic strangers sit around to talk.
            Not about anything in particular.
            The circumstances are unusual, but that's the point.
          </div>
        </div>


        <div className="city-bar">
          <span className="city-bar-message">Jump To Your City's Pre Times</span>

        <div className="city-bar-items">
          {this.props.cities.map((city) => {
            return (
              <div className="city-bar-item">
                <a href={`#${city.name}`}>{city.name}</a>
              </div>
            )})}
          </div>


        </div>



          {this.props.cities.map(city => {
            return (
              <React.Fragment>
                <span className="city-name" id={`"${city.name}"`}>
                  {city.name}
                </span>

                {city.event_ids.map(event_id => {
                  const event = this.props.events.find(
                    event => event.id === event_id
                  );
                  return (
                    <span className="event-index-city-events">
                      <Link to={`/events/${event_id}`}>{event.name}</Link>

                      {event.date}
                      {event.time}
                    </span>
                  );
                }, this)}
              </React.Fragment>
            );
          }, this)}

      </div>
    );
  }
}
}

export default EventIndex;
