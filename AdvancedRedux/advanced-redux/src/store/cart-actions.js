import { uiActions } from './ui-slice';
import { cartActions } from './cart-slice';

export const fetchCartData = () => {
    return async (dispatch) => {
        const fetchData = async () => {
            const response = await fetch('url');

            if (!response.ok) {
                throw new Error('Error');
            }

            const data = await response.json();

            return data;
        };

        try {
            const cartData = await fetchData(); 
            dispatch(cartActions.replaceCart(cartData));
        } catch (error) {
            dispatch(
                uiActions({
                    status: 'error',
                    title: 'Error...',
                    message: 'Error!'
                })
            );
        }
    };
};

export const sendCartData = (cart) => {
    return async (dispatch) => {
        dispatch(
            uiActions({
                status: 'pending',
                title: 'Sending...',
                message: 'Sending cart data!'
            })
        );

        const sendRequest = async () => {
            const response = await fetch(
                'someurl',
                {
                    method: 'PUT',
                    body: JSON.stringify(cart)
                }
            );

            if (!response.ok){
                throw new Error('Error');
            }
        }

    
        try {
            await sendRequest()
        } catch (error) {
            dispatch(
                uiActions({
                    status: 'error',
                    title: 'Error...',
                    message: 'Error!'
                })
            );
        }
    }
}