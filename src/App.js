import React, { Component } from 'react'
import {  BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import { Donation, FlowDonation, Giver, Home, Login, NewAccount, Receiver } from './pages'
class App extends Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route path="/create-donation" component={ FlowDonation }/>
          <Route path="/donation" component={ Donation }/>
          <Route path="/new-account" component={ NewAccount }/>
          <Route path="/giver" component={ Giver }/>
          <Route path="/receiver" component={ Receiver }/>
          <Route path="/login" component={ Login }/>
          <Route expath="/" component={ Home }/>
        </Switch>
      </Router>
    );
  }
}

export default App;