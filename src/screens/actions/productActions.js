import {PRODUCT_LIST_REQUEST,PRODUCT_LIST_SUCCESS,PRODUCT_LIST_FAIL} from '../constants/productConstants'
import axios from 'axios';

export const listProducts= () =>async(dispatch)=>{
    dispatch({
        type:PRODUCT_LIST_REQUEST
    });
        try{
            const { data }= await axios.get('/products/api');
            dispatch({type:PRODUCT_LIST_SUCCESS, payload:data});
        }catch(error){
            dispatch({type:PRODUCT_LIST_FAIL, payload:error.message});
        }
};
