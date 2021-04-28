import React, { Component } from 'react';
import './App.css';
import Person from "./Person/Person"; 

class App extends Component {
  render() {
    return (
      <div>
        <h1>
          This is react.
        </h1>
        <Person name="David" age="27"/>
        <Person name="David1" age="28">This is fun</Person>
      </div>
    );
  }
}

export default App;
