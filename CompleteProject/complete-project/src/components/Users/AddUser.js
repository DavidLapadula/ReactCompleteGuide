import React, {useState} from 'react';

import ErrorModal from '../UI/ErrorModal';
import Card from '../UI/Card';
import Button from '../UI/Button';
import classes from "./AddUser.module.css";


const AddUser = props => {
   const [enteredUsername, setEnteredUsername] = useState('');
   const [enteredAge, setEnteredAge] = useState('');
   const [error, setError] = useState('');

    const addUserHandler = (event) => {
        event.preventDefault();

        if (enteredUsername.trim().length === 0 || enteredAge.trim() === 0) {
            setError({
                title: "Invalid input",
                message: "Please enter non-empty values"
            });
            return;
        }

        if (+enteredAge < 1) {
            setError({
                title: "Invalid age",
                message: "Please enter a valid age"
            });
            return;
        }

        props.onAddUser(enteredUsername, enteredAge);

        // reset state values
        setEnteredUsername('');
        setEnteredAge('');
    };

    const usernameChangeHandler = (event) =>  {
        setEnteredUsername(event.target.value);
    };

    const ageChangeHandler = (event) =>  {
        setEnteredAge(event.target.value);
    };

    const errorHandler = () => {
        setError(null);
    }

    return (
        <div>
            {error && <ErrorModal onConfirm={errorHandler} title={error.title} message={error.message} />}
            <Card className={classes.input}>
                <form onSubmit={addUserHandler}>
                    <label htmlFor="username">Username</label>
                    <input id="username" type="text" value={enteredUsername} onChange={usernameChangeHandler}/>
                    <label htmlFor="age">Age (years)</label>
                    <input id="age" type="number" value={enteredAge} onChange={ageChangeHandler}/>
                    <Button type="submit">Add User</Button>
                </form>
            </Card>
        </div>
    );
};

export default AddUser;