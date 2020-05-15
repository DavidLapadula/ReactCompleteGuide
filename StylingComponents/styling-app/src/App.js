import React, { Component, useState } from 'react';
import Person from './Person/Person'
import UserInput from "./UserInput/UserInput"; 
import UserOutput from "./UserOutput/UserOutput"; 
import styled from "styled-components"; 
import './App.css';

const StyledButton = styled.button`
    background-color: ${props => props.alt ? "red": "green"};
    color: white;
    font: inherit;
    border: 1px solid blue;
    padding: 8px;
    cursor: pointer; 
    &:hover {
      background-color: ${props => props.alt ? "salmon": "lightgreen"}; 
      color: black; 
    }
`; 

class App extends Component {
  state = {
    persons: [
      { id: 1, name: 'Max', age: 28 },
      { id: 2, name: 'Manu', age: 29 },
      { id: 3, name: 'Stephanie', age: 26 }
    ],
    otherState: 'some other value',
    userName: "David",
    showPersons: false
  };

  usernameChangeHandler = (event) => {
    this.setState({
      userName: event.target.value
    });
  };

  nameChangedHandler = (event, id) => {
    const personIndex = this.state.persons.findIndex(person => {
      return person.id === id;
    });
    const person = {
      ...this.state.persons[personIndex]
    };
    person.name = event.target.value;

    const persons = [...this.state.persons];
    persons[personIndex] = person;

    this.setState({
      persons
    });
  };

  togglePersonHandler = () => {
    this.setState({
      showPersons: !this.state.showPersons
    });
  };

  deletePersonHandler = (index) => {
    const persons = [...this.state.persons];
    persons.splice(index, 1);
    this.setState({ persons });
  };

  render() {
    let persons = null;

    if (this.state.showPersons) {
      persons = (
        <div>
          {this.state.persons.map((person, index) => {
            return (
              <Person
                key={person.id}
                click={() => this.deletePersonHandler(index)}
                changed={(event) => this.nameChangedHandler(event, person.id)}
                name={person.name}
                age={person.age}
              />
            );
          })}
        </div>
      );
    };

    const classes = [];
    if (this.state.persons.length <= 2) {
      classes.push("red");
    }

    if (this.state.persons.length <= 1) {
      classes.push("bold");
    }

    return (
      <div className="App">
        <h1>Hi, I'm a React App</h1>
        <p className={classes.join(" ")}>This is really working!</p>
        <UserInput
          changed={this.usernameChangeHandler}
          initialName={this.state.userName}
        />
        <UserOutput userName={this.state.userName} />

        <hr></hr>
        <StyledButton
          alt={this.state.showPersons}
          onClick={this.togglePersonHandler}
        >
          Switch Name
        </StyledButton>
        {
          persons
        }
      </div>
    );
  }
}

export default App;

// Using Hooks
// const app = props => {
//   const [peopleState, setPeople] = useState({
//     people: [
//       { name: "David", age: 27 },
//       { name: "John", age: 25 }
//     ]
//   });

//   const switchNameHandler = () => {
//     setPeople({
//       people: [
//         { name: "David", age: 17 },
//         { name: "John", age: 15 }
//       ]
//     });
//   };

//   return (
//     <div className="App">
//       <button onClick={switchNameHandler}>Switch Name</button>
//       <Person
//         name={peopleState.people[0].name}
//         age={peopleState.people[0].age}
//       >
//         I like running.
//         </Person>
//       <Person
//         name={peopleState.people[1].name}
//         age={peopleState.people[1].age}
//       >
//         I like cycling.
//         </Person>
//     </div>
//   );
// }

// export default app;
