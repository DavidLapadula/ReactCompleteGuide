import { useEffect, useState } from 'react';
import useInput from '../hooks/use-input';

const SimpleInput = (props) => {
  const { value: enteredName, 
          isValid: enteredNameIsValid,
          hasError: nameInputHasError, 
          valueChangeHandler: nameChangedHandler, 
          inputBlurHandler: nameBlurHandler,
          reset: resetNameInput
        } = useInput(value => value.trim() !== '');

  const formIsValid = false;

  const formSubmissionHandler = event => {
    event.preventDefault();

    if (!enteredNameIsValid) {
      return;
    };
    resetNameInput();

  };

  const nameInputClasses = enteredNameIsValid
    ? 'form-control invalid'
    : 'form-control';

  return (
    <form onSubmit={formSubmissionHandler}>
      <div className={nameInputClasses}>
        <label htmlFor='name'>Your Name</label>
        <input
          type='text'
          id='name'
          onBlur={nameBlurHandler}
          onChange={nameChangedHandler}
        />
        {nameInputHasError && <p>Name cannot be empty</p>}
      </div>
      <div className="form-actions">
        <button disabled={!formIsValid}>Submit</button>
      </div>
    </form>
  );
};

export default SimpleInput;
