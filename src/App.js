import React, { Component } from 'react'
import {  BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom'
import { Donation, FlowDonation, Giver, Home, Login, NewAccount, Receiver, Recovery, Reset, Sucesso } from './pages'
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
            <Route exact path="/donation/:slug" component={ Donation }/>
            <Route exact path="/new-account" component={ NewAccount }/>
            <PrivateRoute exact path="/giver" component={ Giver }/>
            <PrivateRoute exact path="/receiver" component={ Receiver }/>
            <Route exact path="/login" component={ Login }/>
            <Route exact path="/recovery" component={ Recovery }/>
            <Route exact path="/reset" component={ Reset }/>
            <Route exact path="/success-donation" component={ Sucesso }/>
            <Route exact path="/" component={ Home }/>
        </Switch>
      </Router>
    );
  }
}

export default App;