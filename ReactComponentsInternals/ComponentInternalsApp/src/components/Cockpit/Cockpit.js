import React, { useEffect } from "react";
import classes from "./Cockpit.css"

const cockpit = props => {
    const assignedClasses = [];
    let btnClass = "";

    useEffect(() => {
        console.log("Use effect Cockpit");
        setTimeout(() => {
            alert("Fuck"); 
        }, 1000); 
    }, []); 

    if (props.showPersons) {
        btnClass = classes.red;
    }

    if (props.personsLength <= 2) {
        assignedClasses.push(classes.red); // classes = ['red']
    }
    if (props.personsLength <= 1) {
        assignedClasses.push(classes.bold); // classes = ['red', 'bold']
    }

    return (
        <div className={classes.Cockpit}>
            <h1>{props.title}</h1>
            <p className={assignedClasses.join(' ')}>This is really working!</p>
            <button className={btnClass} onClick={props.clicked}>
                Toggle Persons
            </button>
        </div>
    );
};

export default React.memo(cockpit); 