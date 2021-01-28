import React, { useState } from 'react'
import './Header.css'
import SearchIcon from '@material-ui/icons/Search'
import ShoppingBasketIcon from '@material-ui/icons/ShoppingBasket';
import {Link} from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux';
import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown';
import { Button, Dropdown, Menu, Item, Toggle, ButtonGroup, Nav, NavDropdown, Navbar, FormControl, Form ,Collapse } from 'react-bootstrap';
import { signout } from '../screens/actions/userAction';
import MenuIcon from '@material-ui/icons/Menu'
import 'bootstrap/dist/css/bootstrap.min.css';


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
          <Navbar collapseOnSelect expand="lg" bg="primary" fixed="top" variant="dark">
  
  <Navbar.Toggle aria-controls="responsive-navbar-nav" />
  <Navbar.Collapse id="responsive-navbar-nav">
    <Nav className="mr-auto">
      <Nav.Link color="white" href="/orders">Orders</Nav.Link>
      <Nav.Link href="/cart"><ShoppingBasketIcon color="white"/>
                        {cartItems.length > 0? (
                        <span className="badge">{cartItems.length}</span>
                        ):0}</Nav.Link>
      
    </Nav>
  </Navbar.Collapse>
  <Nav className="mr-5">{userInfo ? (
               <Dropdown as={ButtonGroup}>
               <Button id="dropdown-button" >{userInfo.name}</Button>
               <Dropdown.Toggle></Dropdown.Toggle>               
               <Dropdown.Menu>
                 <Dropdown.Item  className="signOut"  onClick={signoutHandler}>Sign Out</Dropdown.Item>
               </Dropdown.Menu>
             </Dropdown> 
            ) : (
              <Link to="/signin" className="signIn">
                 <span>Hello Guest,</span>  <br></br>
                  <span>Sign In</span></Link>
            )}
            </Nav>
            <nav></nav>
<Navbar.Brand href="/">  E-comm</Navbar.Brand>
</Navbar>


 



            {/* <Link to=" " className='header_logo'><img src="../../public/logo.svg"></img></Link>
            
            <div className='header_nav'>
            <div className='header_nav_option1'>
            {userInfo ? (
               <Dropdown as={ButtonGroup}>
               <Button id="dropdown-button" variant="success">{userInfo.name}</Button>
             
               <Dropdown.Toggle>⬇</Dropdown.Toggle>               
               <Dropdown.Menu>
                 <Dropdown.Item  className="signOut" to="#signout" onClick={signoutHandler}>Sign Out</Dropdown.Item>
               </Dropdown.Menu>
             </Dropdown> 
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
             */}
        </div>
        

    )
}

export default Header
