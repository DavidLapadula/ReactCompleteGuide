import { useDispatch, useSelector } from 'react-redux';

import classes from './CartButton.module.css';
import { uiActions } from '../../store/ui-slice';

const CartButton = (props) => {
  const dispatch = useDispatch();
  const cardQuantity = useSelector(state => state.cart.totalQuantity);

  const toggleCardHandler = () => {
    dispatch(uiActions.toggle());
  };

  return (
    <button onClick={toggleCardHandler} className={classes.button}>
      <span>My Cart</span>
      <span className={classes.badge}>{cardQuantity}</span>
    </button>
  );
};

export default CartButton;
