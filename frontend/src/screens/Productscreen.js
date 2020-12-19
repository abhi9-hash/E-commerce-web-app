import React from 'react'
import data from '../data'
import Header from '../Header';
import './Productscreen.css'
export default function Productscreen(props) {
    const product=data.products.find((x)=>x.id==props.match.params.id)

        if(product){
    return (
       <div>
           <div className="header"><Header/></div>
        
        <div className="page-grid">

        <div className="Productimage">
            <img src={product.image} alt={product.title}/>
        </div>

        <div className="Productinfo1">
            <p><small>{product.category}</small></p>
            <p>{product.title}</p>
            <div>
            {product.stock >0 ?
        <p>In stock: {product.stock}</p>:<p>Unavailable</p>
            }

        </div>
        </div>

        <div className="Productinfo2">
            <p>Rs. {product.price}</p>
            <p>Rating {Array(product.rating).fill().map((_,i)=>(<div>⭐</div>))}</p>
        </div>
        </div>
        </div>
    );
    }

    else{
        return <div><h1>PRODUCT NOT FOUND</h1></div>;
    }
}


