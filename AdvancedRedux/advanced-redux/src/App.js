import { Fragment, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import Cart from './components/Cart/Cart';
import Layout from './components/Layout/Layout';
import Products from './components/Shop/Products';
import { sendCartData, fetchCartData } from './store/cart-actions';
import Notification from './components/UI/Notification';

function App() {
  const dispatch = useDispatch();
  const showCart = useSelector(state => state.ui.cartIsVisible);
  const notification = useSelector(state => state.ui.notification);
  const cart = useSelector(state => state.ui.cart);

  useEffect(() => {
    // dispatch(fetchCartData())
  }, [])

  useEffect(() => {
    // dispatch(sendCartData(cart))
  }, [cart, dispatch])

  return (
    <Fragment>
     {notification && (
       <Notification
        status={notification.status}
       />
     )}
      <Layout>
        {showCart && <Cart />}
        <Products />
      </Layout>
    </Fragment>
  );
}

export default App;
