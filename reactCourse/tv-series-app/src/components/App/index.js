import React, { Component } from 'react';
import Intro from "../Intro";
import './App.css';

class App extends Component {
  state = {
    series:[]
  }
  
  render() {
    return (
      <div className="App">
        <header className="App-header">
        <h1 className = "App-title">TV Series App</h1>
        <Intro message = "Here you can find alll of your most loved series" />
        <span className = "message">The length of series array - {this.state.series.length}</span>
        </header>
      </div>
    );
  }
}

export default App;
