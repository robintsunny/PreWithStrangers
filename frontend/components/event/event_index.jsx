import React from "react";
import EventIndexItem from "./event_index_item";
import { Link } from "react-router-dom";

class EventIndex extends React.Component {
  constructor(props) {
    super(props);
    // this.renderEvents = this.renderEvents.bind(this);
  }

  componentDidMount() {
    this.props.fetchEvents();
  }

  // renderEvents () {
  //   this.props.cities.map(city => {
  //     return (<div>hi</div>);
  //   })
  //     return (
  //       // <CityIndexItem city={city} key={city.id} />
  //       <React.Fragment>
  //       <div>City name:{city.name}</div>
  //       {city.event_ids.forEach(event_id => {
  //         const event = this.props.events.find(event => event.id = event_id);
  //         console.log(event);
  //         return <div>Event name:{event.name}</div>;
  //       }, this)
  //     }
  //   </React.Fragment>
  //   )
  // },this)
  // }

  render() {
    return (
      <div>
        <ul>
          hello
          {this.props.cities.map(city => {
            return (
              <React.Fragment>
                <Link to="/new_event">Create a Pre Time!</Link>
                <div>City name:{city.name}</div>
                {city.event_ids.map(event_id => {
                  const event = this.props.events.find(
                    event => (event.id = event_id)
                  );
                  console.log(event);
                  return <div>Event name:{event.name}</div>;
                }, this)}
              </React.Fragment>
            );
          }, this)}
        </ul>
      </div>
    );
  }
}

export default EventIndex;
