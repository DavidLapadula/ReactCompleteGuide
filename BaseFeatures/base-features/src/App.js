import React, { Component } from 'react';
import './App.css';
import Person from "./Person/Person"; 

class App extends Component {
  state = {
    persons: [
      {name: "David", age: 28},
      {name: "Mike", age: 29},
    ]
  }

  switchNameHandler = () => {
      this.setState({
       persons: [
        {name: "David1", age: 28},
        {name: "Mike1", age: 29},
       ]
      })
  }

  render() {
    return (
      <div>
        <h1>
          This is react.
        </h1>
        <button onClick={this.switchNameHandler}>Switch Name</button>
        <Person name={this.state.persons[0].name} age={this.state.persons[0].age}/>
        <Person name={this.state.persons[1].name} age={this.state.persons[1].age}/>
      </div>
    );
  }
}

export default App;
