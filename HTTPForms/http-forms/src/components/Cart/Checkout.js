import { useRef } from 'react';
import classes from './Checkout.module.css'

const isEmpty = value => value.trim() === '';
const isFiveChars = value => value.trim().length === 5;

const Checkout = props => {
    const nameInputRef = useRef();
    const streetInputRef = useRef();
    const postalInputRef = useRef();
    const cityInputRef = useRef();

    const confirmHandler = (event) => {
        event.preventDefault();

        const enteredName = nameInputRef.current.value;
        const enteredStreet = streetInputRefcurrent.value;
        const enteredPostal = postalInputRef.current.value;
        const enteredCity = cityInputRef.current.value;

        
        if (
            !isEmpty(enteredName) &&
            !isEmpty(enteredStreet) && 
            !isEmpty(enteredPostal) && 
            isFiveChars(enteredPostal) &&
            !isEmpty(enteredCity)

        ) {
            

        } else {
            return; 
        }; 


    };


    return (
        <form onSubmit={confirmHandler}>
            <div className={classes.control}>
                <label htmlFor='name'>Your Name</label>
                <input type='text' id='name' ref={nameInputRef}/>
            </div>
            <div className={classes.control}>
                <label htmlFor='street'>Street</label>
                <input type='text' id='street' ref={streetInputRef}/>
            </div>
            <div className={classes.control}>
                <label htmlFor='postal'>Postal Code</label>
                <input type='text' id='postal' ref={postalInputRef}/>
            </div>
            <div className={classes.control}>
                <label htmlFor='city'>City</label>
                <input type='text' id='city' ref={cityInputRef}/>
            </div>
            <button type="button" onClick={props.onCancel}>Cancel</button>
            <button>Confirm</button>
        </form>
    );
};

export default Checkout;