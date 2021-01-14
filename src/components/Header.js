import React, { useState } from 'react'
import './Header.css'
import SearchIcon from '@material-ui/icons/Search'
import ShoppingBasketIcon from '@material-ui/icons/ShoppingBasket';
import {Link} from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux';
import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown';
import { Button, Dropdown, ButtonGroup  } from 'react-bootstrap';
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
            <Link to="/" className='header_logo'><img src="../../public/logo.svg"></img></Link>
            {/* <div className='header_search'>
                <input className='header_search_input' placeholder='search'  type='text' onChange={(e)=>setSearch(e.target.value)}></input>
                <button className='header_search_button'><SearchIcon className='header_search_icon'/></button>
            </div> 










            <Navbar collapseOnSelect expand="lg" bg="primary" variant="dark">
  <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
  <Navbar.Toggle aria-controls="responsive-navbar-nav" />
  <Navbar.Collapse id="responsive-navbar-nav">
    <Nav className="mr-auto">
      <Nav.Link href="#features">Features</Nav.Link>
      <Nav.Link href="#pricing">Pricing</Nav.Link>
      <NavDropdown title="Dropdown" id="collasible-nav-dropdown">
        <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
        <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
        <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
        <NavDropdown.Divider />
        <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
      </NavDropdown>
    </Nav>
    <Nav>
      <Form inline>
      <FormControl type="text" placeholder="Search" className="mr-sm-2" />
      <Button variant="outline-light" text-color="basic"  >Search</Button>
    </Form>
    </Nav>
  </Navbar.Collapse>
</Navbar>
            
            

            





*/


            
            }
            <div className='header_nav'>
            <div className='header_nav_option1'>
            {userInfo ? (
               <Dropdown as={ButtonGroup}>
               <Button id="dropdown-button" variant="success">{userInfo.name}</Button>
             
               <Dropdown.Toggle split variant="success" id="dropdown-split-basic" />
             
               <Dropdown.Menu>
                 <Dropdown.Item href="#/action-3" className="signOut" to="#signout" onClick={signoutHandler}>Sign Out</Dropdown.Item>
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
            
        </div>
        

    )
}

export default Header
