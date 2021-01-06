import React, { useState } from 'react'
import './Header.css'
import SearchIcon from '@material-ui/icons/Search'
import ShoppingBasketIcon from '@material-ui/icons/ShoppingBasket';
import {Link} from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux';
import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown';
import { DropdownButton,Dropdown  } from 'react-bootstrap';
import { signout } from '../screens/actions/userAction';

function Header() {
    const cart = useSelector((state) => state.cart);
    const { cartItems } = cart;
    const userSignin = useSelector((state) => state.userSignin);
    const { userInfo } = userSignin;
    const dispatch = useDispatch();
    const signoutHandler = () => {
        dispatch(signout());
    };
    const [search,setSearch]=useState("")
    return (
        <div className='header'>
            <Link to="/" className='header_logo'><img src="../../public/logo.png"></img></Link>
            {/* <div className='header_search'>
                <input className='header_search_input' placeholder='search'  type='text' onChange={(e)=>setSearch(e.target.value)}></input>
                <button className='header_search_button'><SearchIcon className='header_search_icon'/></button>
            </div> */}
            <div className='header_nav'>
            <div className='header_nav_option1'>
            {userInfo ? (
              <DropdownButton id="dropdown-button" title={userInfo.name}>
              <Dropdown.Item ><Link className="signOut" to="#signout" onClick={signoutHandler}>
                      Sign Out
                    </Link></Dropdown.Item>
            </DropdownButton>
            ) : (
              <Link to="/signin" className="signIn">
                  <span>Hello Guest, </span><br></br>
                  <span>Sign In</span></Link>
            )}
            </div>
                <div className='header_nav_option2'>
                    <span> orders</span>
                </div>
                <div className="header_cart_div">
                <Link to="/cart" className='header_cart'>
                    <h2>
                        <ShoppingBasketIcon color="white"/>
                        {cartItems.length > 0? (
                        <span className="badge">{cartItems.length}</span>
                        ):0}
                    </h2>
                </Link>
                </div>
            </div>
            
        </div>
        

    )
}

export default Header
