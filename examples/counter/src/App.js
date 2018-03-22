import React from "react";
import { observable } from "mobx";
import { observer } from "mobx-react";
// import { DevTools } from "mobx-react-devtools";

const DevTools =
  process.env.NODE_ENV !== "production"
    ? require("mobx-react-devtools").default
    : React.Fragment;

export const appState = observable({
  count: 0
});

appState.handleIncrement = function() {
  this.count++;
};
appState.handleDecrement = function() {
  this.count--;
};

@observer
class App extends React.Component {
  render() {
    return (
      <div className="App">
        <DevTools />
        Counter: {this.props.store.count} <br />
        <button onClick={this.handleIncrement}>+</button>
        <button onClick={this.handleDecrement}>-</button>
      </div>
    );
  }
  handleIncrement = () => {
    this.props.store.handleIncrement();
  };
  handleDecrement = () => {
    this.props.store.handleDecrement();
  };
}

export default App;
