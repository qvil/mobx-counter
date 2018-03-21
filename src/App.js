import React, { Component } from 'react';
import { observable } from 'mobx';
import { observer } from 'mobx-react'

export const appState = observable({
  count: 0
});

appState.handleIncrement = function() {
  this.count++;
}
appState.handleDecrement = function() {
  this.count--;
}

@observer class App extends Component {
  render() {
    return (
      <div className="App">
        Counter: {this.props.store.count} <br />
        <button onClick={this.handleIncrement}>+</button>
        <button onClick={this.handleDecrement}>-</button>
      </div>
    );
  }
  handleIncrement = () => {
    this.props.store.handleIncrement();
  }
  handleDecrement = () => {
    this.props.store.handleDecrement();
  }
}

export default App;
