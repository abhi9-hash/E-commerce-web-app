import Axios from 'axios';
import  {PayPalButton}  from 'react-paypal-button-v2';
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import CheckoutSteps from '../components/CheckoutSteps'
import "./placeOrderScreen.css";
import LoadingBox from '../components/LoadingBox';
import MessageBox from '../components/MessagingBox';
import { DetailsOrder, payOrder } from './actions/orderAction';
import {ORDER_PAY_RESET} from './constants/orderConstants'
import { BASEURL } from '../constant';

function OrderScreen(props) {
  const orderID=props.match.params.id;
  const [sdkReady, setSdkReady] = useState(false);
  const orderDetails=useSelector((state)=>state.orderDetails);
  const { order, loading, error } = orderDetails;
  const orderPay = useSelector((state) => state.orderPay);
  const {
    loading: loadingPay,
    error: errorPay,
    success: successPay,
  } = orderPay;
   
    const dispatch = useDispatch();
   
  useEffect(() => {
    const addPayPalScript = async () => {
 	      const { data } = await Axios.get(`${BASEURL}/config/paypal`);
        const script = document.createElement('script');
        script.type = 'text/javascript';
        script.src = `https://www.paypal.com/sdk/js?client-id=${data}`;
        script.async = true;
        script.onload = () => {
          setSdkReady(true);
        };
        document.body.appendChild(script);
      };
      if (!order || successPay || (order && order._id !== orderID)) {
        dispatch({ type: ORDER_PAY_RESET });
        dispatch(DetailsOrder(orderID));
      } else {
        if (!order.isPaid) {
          if (!window.paypal) {
            addPayPalScript();
          } else {
            setSdkReady(true);
          }
        }
      }
    }, [dispatch, order, orderID, sdkReady]);
  
    const successPaymentHandler = (paymentResult) => {
      dispatch(payOrder(order, paymentResult));
    };
  return (loading ? (
    <LoadingBox></LoadingBox>
  ) : error ? (
    <MessageBox >{error}</MessageBox>
  ) : (
        <div>
            <CheckoutSteps step1 step2 step3 step4/>
            <div className="grid">
            <div className="grid-1"> 
             <div>
              <div >
                <h2>Shipping</h2>
                <p>
                  <strong>Name:</strong> {order.shippingAddress.fullName} <br />
                  <strong>Address: </strong> {order.shippingAddress.address},
                  {order.shippingAddress.city}, {order.shippingAddress.postalCode}
                  ,{order.shippingAddress.country}
                </p>
                {order.isDelivered ? (
                  <MessageBox >
                    Delivered at {order.deliveredAt}
                  </MessageBox>
                ) : (
                  <MessageBox >Not Delivered</MessageBox>
                )}
              </div>
              <div >
                <h2>Payment</h2>
                <p>
                  <strong>Method:</strong> {order.paymentMethod}
                </p>
                {order.isPaid ? (
                  <MessageBox >
                    Paid at {order.paidAt}
                  </MessageBox>
                ) : (
                  <MessageBox >Not Paid</MessageBox>
                )}
              </div>
              <div>
                <h2>Order Items</h2>
                
                  {order.orderItems.map((item) => (
                    <div key={item.product}>
                      <div >
                        <div>
                          <img
                            src={item.image}
                            alt={item.name}
                          ></img>
                        </div>
                        <div>
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
        <div>
          <div>
                <h2>Order Summary</h2>
                <div>
                <strong> Items Price</strong>
                  <div>Rs.{order.Price.toFixed(2)}</div>
                </div>
                <div >
                <strong> Shipping Price</strong>
                  <div>Rs.{order.shippingPrice.toFixed(2)}</div>
                </div>
                <div >
                  <div>
                    <strong> Order Total</strong>
                  </div>
                  <div>
                    <strong>Rs.{order.totalPrice.toFixed(2)}</strong>
                  </div>
                  {!order.isPaid && (
                <div Style="z-index:-1">
                  {!sdkReady ? (
                    <LoadingBox></LoadingBox>
                  ) : (
                    <>
                    {errorPay && (
                      <MessageBox >{errorPay}</MessageBox>
                    )}
                    {loadingPay && <LoadingBox></LoadingBox>}
                    <PayPalButton
                    amount={order.totalPrice}
                    onSuccess={successPaymentHandler}
                  ></PayPalButton>
                </>
                  )}
                </div>
              )}
                </div>
          </div>
        </div>
      </div>
    </div>
    </div>
  ));    
}

export default OrderScreen