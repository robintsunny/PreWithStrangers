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
        <div className="pre-splash"></div>
          <Link className="create-event-button" to="/new_event">
            Create a Pre Time!
          </Link>

          {this.props.cities.map(city => {
            return (
              <React.Fragment>
                <span className="event-index-city-name">{city.name}</span>
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
