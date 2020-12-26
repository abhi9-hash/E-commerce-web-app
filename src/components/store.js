import {createStore,  applyMiddleware, combineReducers, compose} from 'redux';
import thunk from 'redux-thunk'
import {productlistReducers} from '../screens/reducers/productReducers';

const initialState={};

const reducer=combineReducers({

    productList : productlistReducers
});

const composeEnhancer= window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__||compose
const store= createStore(reducer,initialState, composeEnhancer(applyMiddleware(thunk)));


export default store;