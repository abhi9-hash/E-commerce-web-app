import Axios from 'axios';
import { CART_ADD_ITEM,CART_REMOVE_ITEM,CART_SAVE_SHIPPING_ADDRESS,CART_SAVE_PAYMENT_METHOD } from '../constants/cartConstants';

export const addToCart = (id, qty) => async (dispatch, getState) => {
  const { data } = await Axios.get(`/products/${id}`);
  dispatch({
    type: CART_ADD_ITEM,
    payload: {
      name: data.title,
      image: data.image,
      price: data.price,
      countInStock: data.stock,
      productID: data._id,
      qty,
    },
  });
  localStorage.setItem('cartItems', JSON.stringify(getState().cart.cartItems));
};


export const removeFromCart=(id,qty)=>async(dispatch, getState)=>{
  dispatch({type: CART_REMOVE_ITEM, payload: id });

  localStorage.setItem('cartItems', JSON.stringify(getState().cart.cartItems))
}

export const saveShippingAddress = (data) => (dispatch) => {
  dispatch({ type: CART_SAVE_SHIPPING_ADDRESS, payload: data });
  localStorage.setItem('shippingAddress', JSON.stringify(data));
};

export const savePaymentMethod = (data) => (dispatch) => {
  dispatch({ type: CART_SAVE_PAYMENT_METHOD, payload: data });
};