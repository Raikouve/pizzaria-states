import React, { Component } from 'react';

export default class AddPizzaForm extends Component {
  constructor() {
    super()
    this.handleClick = this.handleClick.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.state = {
      id: 5,
      ingredientes: {
        recheio: '',
        tempero: '',
        adicional: '',
      },
    };
  }

  handleChange({ target }) {
    const { name, value } = target;
    const { state } = this;
    state.ingredientes[name] = value;
    this.setState(state);
  }

  handleClick() {
    const { onClick } = this.props;
    onClick(this.state);
    this.setState({
      id: 5,
      ingredientes: {
        recheio: '',
        tempero: '',
        adicional: '',
      },
    });
  }

  render() {
    const { state, handleChange, handleClick } = this;
    const { id, ingredientes } = state;
    return (
      <div className="addpizza-container">
        <p>Faça um pedido:</p>
        <form className="addpizza">
          <label htmlFor="recheio">
            Recheio
            <input
              type="text"
              name="recheio"
              id="recheio"
              value={ ingredientes.recheio }
              onChange={ handleChange }
            />
          </label>
          <label htmlFor="tempero">
            Tempero
            <input
              type="text"
              name="tempero"
              id="tempero"
              value={ ingredientes.tempero }
              onChange={ handleChange }
            />
          </label>
          <label htmlFor="adicional">
            Adicional
            <input
              type="text"
              name="adicional"
              id="adicional"
              value={ ingredientes.adicional }
              onChange={ handleChange }
            />
          </label>
          <button type="button" className="addpizza-button" onClick={ handleClick }>Pedir</button>
        </form>
      </div>
    )
  }
}
