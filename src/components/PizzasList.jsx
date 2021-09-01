import React, { Component } from 'react';
// import pedidos from '../data.js/pedidos'
import Pizza from './Pizza';

export default class PizzasList extends Component {
  render() {
    const { pedidos } = this.props;
    return (
      <div className="pizzas-list">
        { pedidos.map((pedido) => <Pizza
            key={ pedido.id }
            pedido={ pedido }
            // recheio={pedido.ingredientes.recheio}
            // tempero={pedido.ingredientes.tempero}
            // adicional={pedido.ingredientes.adicional}
          />)
        }
      </div>
    )
  }
}
