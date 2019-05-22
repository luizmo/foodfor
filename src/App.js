import React, { Component } from 'react'
import {  BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import { Home, Login } from './pages'
class App extends Component {
  render() {
    return (
      <Router>
        <Switch>
         
          <Route path="/login" component={ Login }/>
          <Route path="/" component={ Home }/>
        </Switch>
      </Router>
    );
  }
}

export default App;