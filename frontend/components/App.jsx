import React from 'react';
import { Provider } from 'react-redux';
import { Route, Redirect, Switch, Link, HashRouter } from 'react-router-dom';
import GreetingContainer from './greeting/greeting_container';
import SignUpFormContainer from './session_form/signup_form_container';
import LogInFormContainer from './session_form/login_form_container';
import { AuthRoute, ProtectedRoute } from '../util/route_util';
import SplashContainer from './splash/splash_container'
import SplashBarContainer from './splash_bar/splash_bar_container'
import NavBarContainer from './nav_bar/nav_bar_container'

const App = () => {
  return (
    <div>
      <NavBarContainer />

      <Switch>

        <AuthRoute path="/signup" component={SignUpFormContainer} />
        <AuthRoute path="/login" component={LogInFormContainer} />
        <Route exact path="/" component={SplashContainer} />


        // <ProtectedRoute path="/signout" component={LogInFormContainer} />
        // <Route path='/#' />

    </Switch>


    </div>
  )

};

export default App;
