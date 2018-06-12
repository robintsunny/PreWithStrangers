import { combineReducers } from "redux";

import usersReducer from "./users_reducer";
import citiesReducer from "./cities_reducer";
import eventsReducer from "./events_reducer";
import rsvpsReducer from "./rsvps_reducer";

const entitiesReducer = combineReducers({
  users: usersReducer,
  cities: citiesReducer,
  events: eventsReducer,
  rsvps: rsvpsReducer
});

export default entitiesReducer;
