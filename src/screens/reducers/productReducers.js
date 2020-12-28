const {PRODUCT_LIST_REQUEST,
       PRODUCT_LIST_SUCCESS,
       PRODUCT_LIST_FAIL}  = require('../constants/productConstants')
const {PRODUCT_DETAILS_REQUEST,PRODUCT_DETAILS_SUCCESS,PRODUCT_DETAILS_FAIL}= require('../constants/productConstants')       
export const productlistReducers=( state ={ Loading:true, Products: {} }, action)=> {
    switch(action.type){
        case PRODUCT_LIST_REQUEST:
            return{
                Loading:true
            };
        case PRODUCT_LIST_SUCCESS:
            return { Loading:false, Products: action.payload};
        case PRODUCT_LIST_FAIL:
            return { Loading: false, Products: action.payload};
        default:
            return state;              
    }
};


export const productDetailsReducers =(state = { Loading: true, Product: {} }, action)=> {
    switch (action.type) {
        case PRODUCT_DETAILS_REQUEST:
            return {
                Loading: true
            };
        case PRODUCT_DETAILS_SUCCESS:
            return { Loading: false, Product: action.payload };
        case PRODUCT_DETAILS_FAIL:
            return { Loading: false, Product: action.payload };
        default:
            return state;
    }
};