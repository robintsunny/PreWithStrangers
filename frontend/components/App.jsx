import React from 'react';
import { Provider } from 'react-redux';
import { Route, Redirect, Switch, Link, HashRouter } from 'react-router-dom';
import GreetingContainer from './greeting/greeting_container';
import SignUpFormContainer from './session_form/signup_form_container';
import LogInFormContainer from './session_form/login_form_container';
import { AuthRoute, ProtectedRoute } from '../util/route_util';
import SplashContainer from './splash/splash_container'

const App = () => (
  <div>
    <header>
      <h1> 🏋🏾‍ Preworkout With Strangers</h1>                      
      <GreetingContainer />
    </header>

    <Switch>
      <AuthRoute path="/login" component={LogInFormContainer} />
      <AuthRoute path="/signup" component={SignUpFormContainer} />
      <ProtectedRoute exact path="/" component={SplashContainer} />
    </Switch>


  </div>
);

export default App;
