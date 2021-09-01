import React, { Component } from 'react'
import { Switch, Route } from 'react-router-dom'
import './App.css';
import pedidos from './data.js/pedidos';
import Home from './pages/Home';
import Prateleira from './pages/Prateleira';

class App extends Component {
  render() {
    return (
      <Switch>
        <Route exact path="/" component={ Home } />
        <Route path="/prateleira">
          <Prateleira pedidos={ pedidos } />
        </Route>
      </Switch>
    )
  }
}

export default App;
