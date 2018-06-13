import React from "react";
import { Provider } from "react-redux";
import { Route, Redirect, Switch, Link, HashRouter } from "react-router-dom";
import GreetingContainer from "./greeting/greeting_container";
import SignUpFormContainer from "./session_form/signup_form_container";
import LogInFormContainer from "./session_form/login_form_container";
import { AuthRoute, ProtectedRoute } from "../util/route_util";
import SplashContainer from "./splash/splash_container";
import SplashBarContainer from "./splash_bar/splash_bar_container";
import NavBarContainer from "./nav_bar/nav_bar_container";
import CityIndexContainer from "./city/city_index_container";
import EventIndexContainer from "./event/event_index_container";
import EventShowContainer from "./event/event_show_container";
import CreateEventContainer from "./event/create_event_form_container";
import EditEventContainer from "./event/edit_event_form_container";
import DashboardContainer from "./dashboard/dashboard_container";

const App = () => {
  return (
    <div>
      <NavBarContainer />

      <Switch>
        <AuthRoute path="/signup" component={SignUpFormContainer} />
        <AuthRoute path="/login" component={LogInFormContainer} />
        <Route exact path="/" component={SplashContainer} />
        <Route exact path="/events" component={EventIndexContainer} />
        <Route exact path="/events/:eventId" component={EventShowContainer} />
        <Route
          exact
          path="/events/:eventId/edit"
          component={EditEventContainer}
        />
        <ProtectedRoute
          exact
          path="/new_event"
          component={CreateEventContainer}
        />
        <ProtectedRoute
          exact
          path="/dashboard"
          component={DashboardContainer}
        />
      </Switch>
    </div>
  );
};

export default App;
