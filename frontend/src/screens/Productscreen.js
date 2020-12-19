import React from 'react'
import data from '../data'
import {Link} from 'react-router-dom'
import Header from '../Header';
import './Productscreen.css'
export default function Productscreen(props) {
    const product=data.products.find((x)=>x.id==props.match.params.id)

        if(product){
    return (
       <div>
           <div className='headr'>
           <div className="header1"><Header/>
           <Link to="/"> Back</Link></div>
           <div className="header2">
           <Link to="/">Back</Link></div>
           </div>
           
        
        <div className="page-grid">

        <div className="Productimage">
            <img src={product.image} alt={product.title}/>
        </div>

        <div className="Productinfo1">
            <p><small>category: {product.category}</small></p>
            <p><b>{product.title}</b></p>
            <div>
            {product.stock >0 ?
        <p>In stock: {product.stock}</p>:<p>Unavailable</p>
            }

        </div>
        </div>

        <div className="Productinfo2">
            <p>Rs. <b>{product.price}</b></p>
            <button ><b>Add To Cart</b></button>
            <p>Ratings {Array(product.rating).fill().map((_,i)=>(<div>⭐</div>))}</p>
        </div>
        </div>
        </div>
    );
    }

    else{
        return <div><h1>PRODUCT NOT FOUND</h1></div>;
    }
}


