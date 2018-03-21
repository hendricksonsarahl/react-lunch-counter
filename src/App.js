import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Welcome to The Lunch Counter</h1>
        </header>
        <p className="App-intro">
          Lunch counter countdown! <code>25:02</code>
        </p>
      <div className="App-footer">
        <img src={logo} className="App-logo" alt="logo" />
      </div>
      </div>
    );
  }
}

export default App;
