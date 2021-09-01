import React, { Component } from 'react';
// import Pizza from '../components/Pizza';
import { Link } from 'react-router-dom';
// import AddPizza from '../components/AddPizza';
import AddPizzaForm from '../components/AddPizzaForm';
import PizzasList from '../components/PizzasList';
import './pages.css'

export default class Prateleira extends Component {
  constructor(props) {
    super(props)
    this.onClick = this.onClick.bind(this);
    this.state = {
      pedidos: props.pedidos,
    };
  }

  onClick(callback) {
    const { pedidos } = this.state;
    this.setState({
      pedidos: [...pedidos, callback],
    });
  }

  render() {
    const { state, onClick } = this;
    const { pedidos } = state;
    return (
      <div className="prateleira-page">
        <div className="prateleira-container">
          <div className="prateleira">
            <h1>Pizzas</h1>
            {/* <Pizza recheio="calabresa" tempero="orégano" adicional="queijo cheddar" />
            <Pizza recheio="salame" tempero="salsa" adicional="queijo prato" /> */}
            <PizzasList pedidos={ pedidos }/>
          </div>
          <AddPizzaForm onClick={ onClick } />
        </div>
        <Link className="home-link" to="/" >Voltar</Link>
      </div>
    )
  }
}