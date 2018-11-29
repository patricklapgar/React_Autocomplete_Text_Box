import React, { Component } from 'react';
import './App.css';
// import logo from './logo.svg';
import AutoCompleteText from './AutoCompleteText';
import countries from './countries';


class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-Component">
          <div className="App-Component">
            <AutoCompleteText items = {countries}/>
            <br /><br />
            <AutoCompleteText items = {['Patrick', 'Alexandra', 'Masterchief', 'Cortana', 'Arbiter', 'Truth', 'Luke Skywalker', 'Yoday', 'Darth Vader', 'Obi Wan Kenobi']}/>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
