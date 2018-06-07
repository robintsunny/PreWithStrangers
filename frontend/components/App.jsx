import React from 'react';
import { Provider } from 'react-redux';
import { Route, Redirect, Switch, Link, HashRouter } from 'react-router-dom';
import GreetingContainer from './greeting/greeting_container';
import SignUpFormContainer from './session_form/signup_form_container';
import LogInFormContainer from './session_form/login_form_container';
import { AuthRoute, ProtectedRoute } from '../util/route_util';
import SplashContainer from './splash/splash_container'

const App = () => {

  return (

    <div>
      <header>
        <h1> 🏋🏾‍ Pre With Strangers</h1>
        &nbsp;
        Pre-Times
        &nbsp;
        Hosting
        &nbsp;
        About
        &nbsp;
        <Link to="/login">Sign In</Link>
        &nbsp;
        <Link to="/signup">Sign Up</Link>
        &nbsp;
        <GreetingContainer />
      </header>

      <Switch>

        <AuthRoute path="/signup" component={SignUpFormContainer} />
        <AuthRoute path="/login" component={LogInFormContainer} />


      </Switch>


    </div>
  )

};

export default App;
