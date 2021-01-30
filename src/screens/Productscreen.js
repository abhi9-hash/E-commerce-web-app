import React, { useEffect, useState } from 'react'
import './Productscreen.css'
import LoadingBox from '../components/LoadingBox';
import MessagingBox from '../components/MessagingBox';
import { useDispatch, useSelector } from 'react-redux';
import { DetailsProduct } from './actions/productActions';

export default function Productscreen(props){

    const dispatch= useDispatch();
    const id= props.match.params.id;
    const [qty, setQty] = useState(1);

    useEffect(()=>{
        dispatch(DetailsProduct(id));
    },[dispatch,id]);

    const productDetails = useSelector(state=>state.productDetails);
    const { Loading, Error, Product } = productDetails;

    const addToCartHandler = () => {
        props.history.push(`/cart/${id}?qty=${qty}`);
    }
    
    

    return (
        <div>
            {Loading?(<LoadingBox></LoadingBox>
            ):
            Error?(<MessagingBox>{Error}</MessagingBox>):(
                <div>
                <div className='Header'>
                
                </div>
                
             
             <div className="page-grid">
     
             <div className="Productimage">
                 <img src={Product.image} alt={Product.title}/>
             </div>
     
             <div className="Productinfo1">
                 <p><small>category: {Product.category}</small></p>
                 <p><b>{Product.title}</b></p>
                 <div>
                 {Product.stock >0 ?
             <p>In stock: {Product.stock}</p>:<p>Unavailable</p>
                 }
     
             </div>
             </div>
     
             <div className="Productinfo2">
                 <p>Rs. <b>{Product.price}</b></p>
                 {Product.stock > 0 && (
                    <div className="qtyinfo">
                        Qty: 
                            <select
                              value={qty}
                              onChange={(e) => setQty(e.target.value)}
                            >
                              {[...Array(Product.stock).keys()].map(
                                (x) => (
                                  <option key={x + 1} value={x + 1}>
                                    {x + 1}
                                  </option>
                                )
                              )}
                            </select>
                          
                    
                        <button
                          onClick={addToCartHandler}
                        >
                          <b>Add to Cart</b>
                        </button>
                      </div>
                  )}
                 <p>Ratings {Array(Product.rating).fill().map((_,i)=>(<div>⭐</div>))}</p>
             </div>
             </div>
             </div>
             ) 
                }
        </div>
    )
            }
        