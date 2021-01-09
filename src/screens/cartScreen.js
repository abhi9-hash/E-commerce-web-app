import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import MessagingBox from '../components/MessagingBox';
import { addToCart, removeFromCart } from './actions/cartActions';
import DeleteIcon from '@material-ui/icons/Delete';
import "./cartScreen.css"


export default function CartScreen(props) {
  const productId = props.match.params.id;
  const qty = props.location.search
    ? Number(props.location.search.split('=')[1])
    : 1;
  const cart = useSelector((state) => state.cart);
  const { cartItems } = cart;  
  const dispatch = useDispatch();
  useEffect(() => {
    if (productId) {
      dispatch(addToCart(productId, qty));
    }
  }, [dispatch, productId, qty]);

  const removeFromCartHandler = (id) => {
    dispatch((removeFromCart(id)));
  };

  const checkoutHandler = () => {
    props.history.push(`/signin?redirect=shipping`);
  };
  return (
    <div className="cartScreen">
      <h1>Shopping Cart</h1>
      <div className="gridBody">
        {cartItems.length === 0 ? (
          <MessagingBox>
            Cart is empty. <Link to="/">Go Shopping</Link>
          </MessagingBox>
        ) : (
          <div className="productList">
            {cartItems.map((item) => (
              <div key={item.productID} className="cartProduct">
                  <div className="productImage">
                    <img
                      src={item.image}
                      alt={item.name}
                      
                    ></img>
                  </div>
                  <div className="productNameDiv">
                    <Link to={`/products/${item.productID}`} className="productName">{item.name}</Link>
                  </div>
                  <div>
                    <select
                      value={item.qty}
                      onChange={(e) =>
                        dispatch(
                          addToCart(item.productID, Number(e.target.value))
                        )
                      }
                    >
                      {[...Array(item.countInStock).keys()].map((x) => (
                        <option key={x + 1} value={x + 1}>
                          {x + 1}
                        </option>
                      ))}
                    </select>
                  </div>
                  <div>Rs. {item.price}</div>
                  <button type="button" 
                      onClick={()=>removeFromCartHandler(item.productID)} className="deleteButton">
                      <DeleteIcon/>
                  </button>
              </div>
            ))}
          </div>
        )}
      </div>
      <div className="proceedToPay">
        <div className="subTotal">
            <div>
              <h2>
                Subtotal ({cartItems.reduce((a, c) => a + c.qty, 0)} items) : Rs.
                {cartItems.reduce((a, c) => a + c.price * c.qty, 0)}
              </h2>
              </div>
            <div className="checkOut">
              <button
                type="button"
                onClick={checkoutHandler}
                className="checkOutButton"
                disabled={cartItems.length === 0}
              >
                Proceed to Checkout
              </button>
              </div>
        </div>
      </div>
    </div>
  );
}