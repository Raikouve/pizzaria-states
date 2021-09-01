import React, { Component } from 'react';
import './pizza.css';

export default class Pizza extends Component {
  render() {
    const { pedido } = this.props;
    const { ingredientes: { recheio, tempero, adicional } } = pedido;
    return (
      <div className="pizza">
        <p className="recheio">{ recheio }</p>
        <p className="tempero">{ tempero }</p>
        <p className="adicional">{ adicional }</p>
      </div>
    )
  }
}


