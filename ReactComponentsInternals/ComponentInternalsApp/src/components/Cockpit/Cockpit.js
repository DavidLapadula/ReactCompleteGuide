import React, { useEffect, useRef, useContext } from "react";
import classes from "./Cockpit.css"

const cockpit = props => {
    const toggleBtnRef = useRef(null);
    const authContext = useContext({}); 
    const assignedClasses = [];
    let btnClass = "";

    useEffect(() => {
        console.log("Use effect Cockpit here");
        setTimeout(() => {
            console.log("Timeout");
        }, 1000); 
        toggleBtnRef.current.click(); 
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
            <button ref={toggleBtnRef} className={btnClass} onClick={props.clicked}>
                Toggle Persons
            </button>
            <button onClick={props.login}>Log In</button>
        </div>
    );
};

export default React.memo(cockpit); 