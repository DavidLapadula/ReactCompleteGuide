import { useContext, useEffect, useState } from 'react';
import CartIcon from "../Cart/CartIcon";
import CartContext from "../../store/cart-context";
import classes from './HeaderCartButton.module.css';

const HeaderCartButton = props => {
    const cardCtx = useContext(CartContext);

    const [btnisHighlighted, setBtnisHighlighted] = useState(false);

    const { items } = cardCtx;

    const numberOfCartItems = items.reduce((curNumber, item) => {
        return curNumber + item.amount;
    }, 0);

    const btnClasses = `${classes.button} ${btnisHighlighted ? classes.bump : ''}`;

    useEffect(() => {
        if (items.length !== 0 && !btnisHighlighted) {
            setBtnisHighlighted(true);
        }

        const timer = setTimeout(() => {
            setBtnisHighlighted(false);
        }, 300);

        return () => {
            clearTimeout(timer);
        }
    }, [items])

    return (
        <button className={btnClasses} onClick={props.onClicks}>
            <span className={classes.icon}>
                <CartIcon />
            </span>
            <span>Your Cart</span>
            <span className={classes.badge}>
                {numberOfCartItems}
            </span>
        </button>
    );
};

export default HeaderCartButton;