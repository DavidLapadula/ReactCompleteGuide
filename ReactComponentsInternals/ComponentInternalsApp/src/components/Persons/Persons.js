import React, { Component } from "react";
import Person from "./Person/Person";

class Persons extends Component {

    static getDerivedStateFromProps(props, state) {
        console.log("Persons gdsfp");
        return state; 
    }

    // Return whether or not component should continue updating
    shouldComponentUpdate(nextProps, nextState) {
        console.log("Persons should comp update");
        return true;
    }

    getSnapshotBeforeUpdate(prevProps, prevState) {
        console.log("Persons get snapshot");
        return { message: "Snapshots" }; 
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        console.log("Persons comp did update");
    }

    render() {
        console.log("Persons rendering..");
        return this.props.persons.map((person, index) => {
            return (
                <Person
                    click={() => this.props.clicked(index)}
                    name={person.name}
                    age={person.age}
                    key={person.id}
                    changed={event => this.props.changed(event, person.id)}
                />
            );
        }); 
    }
}


export default Persons; 