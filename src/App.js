import React, { Component } from 'react'
import {  BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import { Home, Login, Receiver, NewAccount } from './pages'
class App extends Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route path="/new-account" component={ NewAccount }/>
          <Route path="/receiver" component={ Receiver }/>
          <Route path="/login" component={ Login }/>
          <Route expath="/" component={ Home }/>
        </Switch>
      </Router>
    );
  }
}

export default App;