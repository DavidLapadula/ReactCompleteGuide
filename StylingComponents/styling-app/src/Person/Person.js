import React from 'react';
import styled from "styled-components"; 
import "./Person.css"; 

const StyledDiv = styled.div`
    width: 60%; 
    margin: 16px auto; 
    border: 1px solid #eee;
    box-shadow: 0 2px 3px #ccc; 
    padding: 16px; 
    text-align: center
    @media (min-width: 500px) {
        width: 450px;
    }
`;  

const person = (props) => {
    const rnd = Math.random();
    if (rnd < 0.7) {
        throw new Error("Random Error");
    }
    return (
        <StyledDiv>
            <p>{props.children}</p>
            <input type="text" onChange={props.changed} value={props.name}/>
            <p onClick={props.click}> I'm a person named {props.name} who is {props.age} years old</p>
        </StyledDiv>
    ); 
}; 

export default person; 