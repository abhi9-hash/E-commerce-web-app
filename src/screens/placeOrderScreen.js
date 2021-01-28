import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import CheckoutSteps from '../components/CheckoutSteps'
import "./placeOrderScreen.css";
import { ORDER_CREATE_RESET } from './constants/orderConstants';
import LoadingBox from '../components/LoadingBox';
import MessageBox from '../components/MessagingBox';
import { createOrder } from './actions/orderAction';

function PlaceOrderScreen(props) {
  const orderCreate = useSelector((state) => state.orderCreate);
  const { loading, success, error, order } = orderCreate;
    const cart = useSelector((state) => state.cart)
    if(!cart.paymentMethod) {
    props.history.push('/payment');
    }
    const toPrice = (num) => Number(num.toFixed(2)); // 5.123 => "5.12" => 5.12
    cart.Price = toPrice(
    cart.cartItems.reduce((a, c) => a + c.qty * c.price, 0)
    );
    cart.shippingPrice = cart.Price > 1000 ? toPrice(0) : toPrice(50);
    cart.totalPrice = cart.Price + cart.shippingPrice;
    const dispatch = useDispatch();
    const placeOrderHandler = () => {
      dispatch(createOrder({ ...cart, orderItems: cart.cartItems }));
  };
  useEffect(() => {
    if (success) {
      props.history.push(`/order/${order._id}`);
      dispatch({ type: ORDER_CREATE_RESET });
    }
  }, [dispatch, order, props.history, success]);
    return (
        <div>
            <CheckoutSteps step1 step2 step3 step4/>
            <div className="grid">
            <div className="grid-1"> 
             <div >
              <div >
                <h2>Shipping</h2>
                <p>
                  <strong>Name:</strong> {cart.shippingAddress.fullName} <br />
                  <strong>Address: </strong> {cart.shippingAddress.address},
                  {cart.shippingAddress.city}, {cart.shippingAddress.postalCode}
                  ,{cart.shippingAddress.country}
                </p>
              </div>
              <div >
                <h2>Payment</h2>
                <p>
                  <strong>Method:</strong> {cart.paymentMethod}
                </p>
              </div>
              <div >
                <h2>Order Items</h2>
                
                  {cart.cartItems.map((item) => (
                    <div key={item.product}>
                      <div >
                        <div>
                          <img
                            src={item.image}
                            alt={item.name}
                          ></img>
                        </div>
                        <div >
                          <Link Style="text-decoration:black" to={`/products/${item.productID}`}>
                            {item.name}
                          </Link>
                        </div>

                        <div>
                          {item.qty} x Rs.{item.price} = Rs.{item.qty * item.price}
                        </div>
                      </div>
                    </div>
                  ))}
              </div>
          
        </div>
        <div >
          <div >
                <h2>Order Summary</h2>
                <div >
                <strong> Items Price</strong>
                  <div>Rs.{cart.Price.toFixed(2)}</div>
                </div>
                <div>
                <strong> Shipping Price</strong>
                  <div>Rs.{cart.shippingPrice.toFixed(2)}</div>
                </div>
                <div >
                  <div>
                    <strong> Order Total</strong>
                  </div>
                  <div>
                    <strong>Rs.{cart.totalPrice.toFixed(2)}</strong>
                  </div>
                </div>
                <button
                  type="button"
                  onClick={placeOrderHandler}
                  disabled={cart.cartItems.length === 0}
                >
                  <b>Place Order</b>
                </button>
                {loading && <LoadingBox></LoadingBox>}
              {error && <MessageBox>{error}</MessageBox>}
          </div>
        </div>
      </div>
    </div>
    </div>
  );    
}

export default PlaceOrderScreen
