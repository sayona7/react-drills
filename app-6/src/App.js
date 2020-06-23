import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Todo from "./Components/Todo";

class App extends Component {
  constructor() {
    super();

    this.state = {
      array: [],
      input: ""
    };

    this.buttonHandler = this.buttonHandler.bind(this);
  }

inputHandler(value) {
  this.setState({input: value})
}

buttonHandler() {
  this.setState({
    array: [...this.state.array, this.state.input],
    input: ""
  })
}

  render() {
    let array = this.state.array.map((element, index) => {
      return <Todo key={index} task={element} />;
    });
    
    return (
      <div className="div">
        <h3>To-do list:</h3>
        <input placeholder="Add your task!"
        value={this.state.input}
        onChange={e => this.inputHandler(e.target.value)} />
        <button onClick={this.buttonHandler} id="btn">Add</button>
        <Todo />

        {array}
      </div>
    );
  }
}



export default App;
