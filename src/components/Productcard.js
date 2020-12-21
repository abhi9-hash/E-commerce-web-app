import {Link} from 'react-router-dom'
import React from 'react'
import './Productcard.css'
import { pathToFileURL } from 'url'
import { PassThrough } from 'stream'
function Productcard({id,category,title,price,rating,image}) {
    return (
      
            <a  href={`/product/${id}`} className='product'>
            <div className='productid'>
                <small>{id}</small>
            </div>
            <div className='productcategory'>
            <small>{category}</small>
            </div>
            <div className='productinfo'>
                <p>{title}</p>
            </div>
            <div className='productprice'>
                <p>Rs.{price}</p>
            </div>
            <div className='productrating'>
                {Array(rating).fill().map((_,i)=>(<p>⭐</p>))}
            </div>
             <img  src={image} alt=''/>
<button><strong>Add to Cart</strong></button>          
      </a>
        
       
    )
}

export default Productcard