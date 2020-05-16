import React from "react"; 

const userInput = (props) => {
    return <input 
                onChange={props.changed} 
                type="text"
                value={props.initialName} 
            />; 
}; 

export default userInput; 