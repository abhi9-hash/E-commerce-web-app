import React, { useEffect } from 'react'
import {Link} from 'react-router-dom'
import Header from '../components/Header';
import './Productscreen.css'
import LoadingBox from '../components/LoadingBox';
import MessagingBox from '../components/MessagingBox';
import { useDispatch, useSelector } from 'react-redux';
import { DetailsProduct } from './actions/productActions';

export default function Productscreen(props){

    const dispatch= useDispatch();
    const id= props.match.params.id;

    useEffect(()=>{
        dispatch(DetailsProduct(id));
    },[dispatch,id]);

    const productDetails = useSelector(state=>state.productDetails);
    const { Loading, Error, Product } = productDetails;
    
    

    return (
        <div>
            {Loading?(<LoadingBox></LoadingBox>
            ):
            Error?(<MessagingBox>{Error}</MessagingBox>):(
                <div>
                <div className='headr'>
                <div className="header1"><Header/>
                <Link to="/"> Back</Link></div>
                <div className="header2">
                <Link to="/">Back</Link></div>
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
                 <button ><b>Add To Cart</b></button>
                 <p>Ratings {Array(Product.rating).fill().map((_,i)=>(<div>⭐</div>))}</p>
             </div>
             </div>
             </div>
             ) 
                }
        </div>
    )
            }
            