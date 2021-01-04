import {createStore,  applyMiddleware, combineReducers, compose} from 'redux';
import thunk from 'redux-thunk'
import { productlistReducers , productDetailsReducers} from '../screens/reducers/productReducers';
import { cartReducer } from '../screens/reducers/cartReducers';

const initialState = {
    cart: {
      cartItems: localStorage.getItem('cartItems')
        ? JSON.parse(localStorage.getItem('cartItems'))
        : [],
    },
  };

const reducer=combineReducers({

    productList : productlistReducers,
    productDetails: productDetailsReducers,
    cart: cartReducer,
});

const composeEnhancer= window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__||compose
const store= createStore(reducer,initialState, composeEnhancer(applyMiddleware(thunk)));


export default store;