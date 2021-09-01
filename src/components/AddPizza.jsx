import React, { Component } from 'react';
import Pizza from './Pizza';

export default class AddPizza extends Component {
  constructor() {
    super()
    this.state = {
      recheio: '',
      tempero: '',
      adicional: '',
    };
  }
  
  handleClick() {
    this.setState({
      recheio: '',
      tempero: '',
      adicional: '',
    });
  }

  render() {
    const { recheio, tempero, adicional } = this.state;
    return (
      <Pizza recheio={ recheio } tempero={ tempero } adicional={ adicional }/>
    )
  }
}
