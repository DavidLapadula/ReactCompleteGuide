import { useReducer } from 'react';

import CartContext from './cart-context';

const defaultCartState = {
    items: [],
    totalAmount: 0
}; 

const cartReducer = (state, action) => {
    let updatedItems;
    const existingCartItemIndex = state.items.findIndex(item => item.id === action.id);
    
    if (action.type === 'ADD') {
        const newTotalAmount = state.totalAmount + action.item.price * action.item.amount; 
        const existingCartItem = state.items[existingCartItemIndex];

        if (existingCartItem) {
            const updatedItem = {
                ...existingCartItem,
                amount: existingCartItem.amount + action.item.amount
            };
            updatedItems = [...state.items];
            updatedItems[existingCartItemIndex] = updatedItem;
        } else {
            updatedItems = state.items.concat(action.item);
        }
        
        return {
            items: updatedItems,
            totalAmount: newTotalAmount
        };
    };

    if (action.type === 'REMOVE') {
        const existingCartItem = state.items[existingCartItemIndex];
        const updatedTotalAmount = state.totalAmount - existingCartItem.price;

        if (existingCartItem.amount === 1) {
            updatedItems = state.items.filter(item => item.id !== action.id);
        } else {
            const updatedItem = {...existingCartItem, amount: existingCartItem.amount - 1};
            updatedItems = [...state.items];
            updatedItems[existingCartItemIndex] = updatedItem;
        }

        return {
            items: updatedItems, 
            totalAmount: updatedTotalAmount
        }

    }


    return defaultCartState;
}

const CartProvider = props => {
    const [cartState, dispatchCartAction] = useReducer(cartReducer, defaultCartState); 

    const addItemToCartHandler = item => {
        dispatchCartAction({type: 'ADD', item: item})
    };

    const removeItemToCartHandler = id => {
        dispatchCartAction({type: 'REMOVE', id: id})
    };

    const cartContext = {
        items: cartState.items,
        totalAmount: 0,
        addItem: addItemToCartHandler,
        removeItem: removeItemToCartHandler,
    }

    return (
        <CartContext.Provider value={cartContext}>
            {props.children}
        </CartContext.Provider>
    );
};

export default CartProvider;