import React from 'react';
import { Link } from 'react-router-dom';
import EventIndexContainer from '../event/event_index_container';

const CityIndexItem = ({ city }) => (
  <span>
    <EventIndexContainer events={city.events} city={city} />
  </span>
);

export default CityIndexItem;
