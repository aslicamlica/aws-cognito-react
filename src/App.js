import React from 'react'
import PropTypes from 'prop-types'

import './App.css'
import Landing from './components/Landing'
import Protected from './components/Protected'
import SignIn from './components/SignIn'
import SignUp from './components/SignUp'
import ResetPassword from './components/ResetPassword'
import ChangePassword from './components/ChangePassword'
import ForceChangePassword from './components/ForceChangePassword'
import Header from './components/Header'
import Auth from './components/Auth'
import AddConfig from './components/PrivateRoute'
import ConfigApp from './components/ResetPassword'
import ConfigItem from './components/ChangePassword'
import Cofigs from './components/ForceChangePassword'
import UpdateEnviromentVars from './components/Header'
import UpdateValidationRules from './components/Auth'
import PrivateRoute from './components/PrivateRoute'

import { HashRouter as Router, Route, Switch, Redirect } from 'react-router-dom'

import { state } from 'aws-cognito-redux-saga'

class App extends React.Component {
  static propTypes = {
    auth: PropTypes.object
  }

  render() {
    const { auth } = this.props
    return (
      <Router>
        <div className="app">
          <div className="screen">
            <Auth />
            <Header />
            <Switch>

              <Route path="/signin" component={SignIn} />
            //  <Route path="/signup" component={SignUp} />
              <Route path="/resetpassword" component={ResetPassword} />
              <Route path="/changepassword" component={ChangePassword} />


              <Route path="/landing" component={Landing} />
              <Route path="/signup" component={SignUp} />

            <Route
              //  path="/"
              //  render={() =>
                //  auth.isSignedIn === state.AUTH_SUCCESS ? (
                  //  <Redirect to="/Landing" />
                  //) : (
                  //  <Redirect to="/LandingComponent" />
                  //)
              //  }
              />
            </Switch>
          </div>
        </div>
      </Router>
    )
  }
}

export default App
