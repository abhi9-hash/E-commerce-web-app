import React from 'react'
import './Productcard.css'
function Productcard({id,category,title,price,rating,image}) {
    return (
        <div className='product'>
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
        </div>
    )
}

export default Productcard