import React, { Component } from 'react';
import classes from "./App.css"; 
import Persons from "../components/Persons/Persons"; 
import Cockpit from "../components/Cockpit/Cockpit"; 

class App extends Component {
  constructor(props) {
    super(props); 
  }; 

  static getDerivedStateFromProps(props, state) {
    console.log("App gdsfp");
    return state; 
  }

  componentDidMount() {
    console.log("App did mount");
  }

  shouldComponentUpdate(nextProps, nextState) {
    console.log("Appp should update");
    return true; 
  }

  componentDidUpdate() {
    console.log("App component did update");
  }

  state = {
    persons: [
      { id: 'asfa1', name: 'Max', age: 28 },
      { id: 'vasdf1', name: 'Manu', age: 29 },
      { id: 'asdf11', name: 'Stephanie', age: 26 }
    ],
    showPersons: false
  };

  nameChangedHandler = (event, id) => {
    const personIndex = this.state.persons.findIndex(p => {
      return p.id === id;
    });

    const person = {
      ...this.state.persons[personIndex]
    };

    person.name = event.target.value;

    const persons = [...this.state.persons];
    persons[personIndex] = person;

    this.setState({ persons: persons });
  };

  deletePersonHandler = personIndex => {
    const persons = [...this.state.persons];
    persons.splice(personIndex, 1);
    this.setState({ persons: persons });
  };

  togglePersonsHandler = () => {
    const doesShow = this.state.showPersons;
    this.setState({ showPersons: !doesShow });
  };

  render() {
    let persons = []; 
    
    if (this.state.showPersons) {
      persons = (
        <Persons
          persons={this.state.persons}
          clicked={this.deletePersonHandler}
          changed={this.nameChangedHandler}
        />
      );
    }; 

    return (
      <div className={classes.App}>
        <Cockpit 
          title={this.props.appTitle}
          persons={this.state.persons}
          showPersons={this.state.showPersons}
          clicked={this.togglePersonsHandler}
        />
        {persons}
      </div>
    );
  }
}

export default App;
