import React from 'react';
import { Link } from 'react-router-dom';

const EventIndexItem = ({ event, deleteEvent }) => (
  <li>
    <Link to={`/events/${event.id}`}>{event.name}</Link>
  </li>
);

export default EventIndexItem;
