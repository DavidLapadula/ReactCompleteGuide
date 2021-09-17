import { useState } from 'react';

const useInput = (validateValue) => {
    const [enteredValue, setEnteredValue] = useState('');
    const [enteredValueTouched, setEnteredValueTouched] = useState();

    const valueisValid = validateValue(enteredValue);
    const hasError = !valueisValid && enteredValueTouched;

    const valueChangeHandler = (event) => {
        setEnteredValue(event.target.value);
    };

    const inputBlurHandler = (event) => {
        setEnteredValueTouched(event.target.value);
    };

    const reset = () => {
        setEnteredValue('');
        setEnteredValueTouched(false);
    };

    return {
        value: enteredValue, 
        isValid: valueisValid,
        hasError,
        valueChangeHandler, 
        inputBlurHandler,
        reset
    };
}; 

export default useInput;

