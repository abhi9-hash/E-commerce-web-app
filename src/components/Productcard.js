import React from 'react'
import './Productcard.css'
import {Link} from 'react-router-dom'
function Productcard({id,category,title,price,rating,image}) {
    return (
      
            <Link  to={`/products/${id}`} className='product'>
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
            {/* <button  onClick={addToCartHandler}><strong>Add to Cart</strong></button> */}
            <div className='productrating'>
                {Array(rating).fill().map((_,i)=>(<p>⭐</p>))}
            </div>
             <img  src={image} alt=''/>
          
      </Link>
        
       
    )
}

export default Productcard