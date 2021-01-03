import Axios from 'axios';
import { CART_ADD_ITEM,CART_REMOVE_ITEM } from '../constants/cartConstants';

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
