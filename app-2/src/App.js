import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import User from "./Components/User";


class App extends Component {

  render() {
    return (
      <div className="main">
        <User />
      </div>
    )
  }
}

export default App;
