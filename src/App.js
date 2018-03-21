import React, { Component } from 'react';
import { observable } from 'mobx';
import { observer } from 'mobx-react'

@observer class App extends Component {
  @observable count = 0;

  render() {
    return (
      <div className="App">
        Counter: {this.count} <br />
        <button onClick={this.handleIncrement}>+</button>
        <button onClick={this.handleDecrement}>-</button>
      </div>
    );
  }

  handleIncrement = () => {
    this.count++;
  }
  handleDecrement = () => {
    this.count--;
  }
}

export default App;
