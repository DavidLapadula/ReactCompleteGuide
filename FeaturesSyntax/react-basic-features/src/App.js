import React, { Component, useState } from 'react';
import Person from './Person/Person'
import UserInput from "./UserInput/UserInput"; 
import UserOutput from "./UserOutput/UserOutput"; 
import './App.css';

class App extends Component {
  state = {
    persons: [
      { name: 'Max', age: 28 },
      { name: 'Manu', age: 29 },
      { name: 'Stephanie', age: 26 }
    ],
    otherState: 'some other value', 
    userName: "David"
  };

  usernameChangeHandler = (event) => {
    this.setState({
      userName: event.target.value
    }); 
  }; 

  switchNameHandler = (newName) => {
    this.setState({
      persons: [
        { name: newName, age: 28 },
        { name: 'Manu', age: 29 },
        { name: 'Stephanie', age: 27 }
      ]
    });
  };

  nameChangedHandler = (event) => {
    this.setState({
      persons: [
        { name: "John", age: 28 },
        { name: event.target.value, age: 29 },
        { name: 'Stephanie', age: 27 }
      ]
    });
  };

  render() {
    const style = {
      backgroundColor: "white", 
      font: "inherit", 
      border: "1px solid blue", 
      padding: "8px", 
      cursor: "pointer"
    }; 

    return (
      <div className="App">
        <h1>Hi, I'm a React App</h1>
        <p>This is really working!</p>
        <UserInput 
          changed={this.usernameChangeHandler} 
          initialName={this.state.userName}
        />
        <UserOutput userName={this.state.userName}/>

        <hr></hr>
        <button 
          style={style}
          onClick={() => this.switchNameHandler("Steven")}
        >
          Switch Name
        </button>
        <Person
          name={this.state.persons[0].name}
          age={this.state.persons[0].age}
          click={this.switchNameHandler.bind(this, "Steven!")}
        />
        <Person
          name={this.state.persons[1].name}
          age={this.state.persons[1].age}
          changed={this.nameChangedHandler}
        >
          My Hobbies: Racing
        </Person>
        <Person
          name={this.state.persons[2].name}
          age={this.state.persons[2].age}
        />
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
