import React from 'react'

function cartScreen(props) {
    const id=props.match.params.id;
    const Qty=props.location.search?
    Number(props.location.search.split('=')[1]):1
    return (
        <div>
            <h1>Cart Screen</h1>
            <p>Add to cart: Product ID: {id} Qty: {Qty}</p>
            
        </div>
    )
}

export default cartScreen
