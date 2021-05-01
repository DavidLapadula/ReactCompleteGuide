import React, { useState } from 'react';
import './App.css';
import Person from "./Person/Person"; 

const app = props => {
  // state = {
  //   persons: [
  //     {name: "David", age: 28},
  //     {name: "Mike", age: 29},
  //   ]
  // }


  const [personsState, setPersonsState ] = useState({
      persons: [
      {name: "David", age: 28},
      {name: "Mike", age: 29},
    ]
  });



  const [otherState, setOtherState] = useState("Some other state stuff")

  const switchNameHandler = () => {
      setPersonsState({
         persons: [
          {name: "David1", age: 28},
          {name: "Mike1", age: 29},
         ]
      })
    }

    return (
      <div>
        <h1>
          This is react.
        </h1>
        <button onClick={switchNameHandler}>Switch Name</button>
        <Person name={personsState.persons[0].name} age={personsState.persons[0].age}/>
        <Person name={personsState.persons[1].name} age={personsState.persons[1].age}/>
      </div>
    );
}

export default app;
