import React, { useState } from 'react'
import './Header.css'
import SearchIcon from '@material-ui/icons/Search'
import ShoppingBasketIcon from '@material-ui/icons/ShoppingBasket';
import {Link} from 'react-router-dom'
import { useSelector } from 'react-redux';

function Header() {
    const cart = useSelector((state) => state.cart);
    const { cartItems } = cart;
    const [search,setSearch]=useState("")
    return (
        <div className='header'>
            <Link to="/" className='header_logo'><img src="../../public/logo.png"></img></Link>
            <div className='header_search'>
                <input className='header_search_input' placeholder='search'  type='text' onChange={(e)=>setSearch(e.target.value)}></input>
                <button className='header_search_button'><SearchIcon className='header_search_icon'/></button>
            </div>
            <div className='header_nav'>
                <div className='header_nav_option1'>
                <div>
                     <span > Hello Guest</span>
                    </div>
                    <div>
                    <span > SignIn</span>
                    </div>
            </div>
                <div className='header_nav_option2'>
                    <span> orders</span>
                </div>
            </div>
            <Link to="/cart" className='header_cart'>
                    <h2>
                        <ShoppingBasketIcon color="white"/>
                        {cartItems.length > 0? (
                        <span className="badge">{cartItems.length}</span>
                        ):0}
                    </h2>
                </Link>
        </div>
        

    )
}

export default Header
