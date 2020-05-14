import React from "react";

const userOutput = (props) => {
    return (
        <div>
            <p>Random Text!</p>
            <p>My name is {props.userName}</p>
        </div>
    );
};

export default userOutput; 