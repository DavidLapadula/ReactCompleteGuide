import React from 'react';

const person = (props) => {
    return (
        <div>
            <p>I'm a person. Name: {props.name} Age: {props.age}</p>
            <p>{props.children}</p>
        </div>
    );
}

export default person;