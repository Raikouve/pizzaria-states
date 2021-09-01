import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './pages.css'

export default class Home extends Component {
  render() {
    return (
      <div className="homepage">
        <div className="header">
        <h1 className="welcome-title">Bem-vindos à Pizzaria <span>Don Toni!</span></h1>
        <Link className="prateleira-link" to="/prateleira" >Ver Pizzas</Link>
        </div>
      </div>
    )
  }
}