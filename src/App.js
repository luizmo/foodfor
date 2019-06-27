import React, { Component } from 'react'
import {  BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom'
import { Donation, FlowDonation, Giver, Home, Login, NewAccount, Receiver } from './pages'
import {isAuthenticated} from './lib/auth';

const PrivateRoute = ({ component: Component, ...rest }) => (
  <Route {...rest} render={ props => (
    isAuthenticated() ? (<Component {...props}/> ) : (<Redirect to={{ pathname:'/', state:{ from:props.location }}}/> )
  )}/>
)

class App extends Component {
  render() {
    return (
      <Router>
        <Switch>
            <PrivateRoute exact path="/create-donation" component={ FlowDonation }/>
            <Route exact path="/donation" component={ Donation }/>
            <Route exact path="/new-account" component={ NewAccount }/>
            <PrivateRoute exact path="/giver" component={ Giver }/>
            <PrivateRoute exact path="/receiver" component={ Receiver }/>
            <Route exact path="/login" component={ Login }/>
            <Route exact expath="/" component={ Home }/>
        </Switch>
      </Router>
    );
  }
}

export default App;