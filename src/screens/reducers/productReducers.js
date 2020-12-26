const {PRODUCT_LIST_REQUEST,
       PRODUCT_LIST_SUCCESS,
       PRODUCT_LIST_FAIL} = require( "../constants/productConstants")
       
export const productlistReducers=( state ={ Products: [] },action) =>{
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
