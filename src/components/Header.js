import React, { useEffect, useState } from 'react'
import './Header.css'
import ShoppingBasketIcon from '@material-ui/icons/ShoppingBasket';
import { useDispatch, useSelector } from 'react-redux';
import { Button, Dropdown, ButtonGroup, Nav, Navbar } from 'react-bootstrap';
import { signout } from '../screens/actions/userAction';
import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from 'axios';


function Header() {
    const cart = useSelector((state) => state.cart);
    const { cartItems } = cart;
    const userSignin = useSelector((state) => state.userSignin);
    const { userInfo } = userSignin;
    const dispatch = useDispatch();
    const signoutHandler = () => {
        dispatch(signout());
    };
    const [data ,setData] = useState([]);
    const [filtered ,setFilterd] = useState([]);
    const [result , setResult] = useState("");
    const handleChange = event => {
      setResult(event.target.value);
  };

     


     useEffect(()=>{
      const fetchData = async ()=> {
              try{
                  const res = await axios.get('/products');
                  setData(res.data);
                  setFilterd(res.data);
              }catch(err){
                  throw new Error(err);
              }
               };
            fetchData(); 
  },[]);

  useEffect(()=> {
    const results = filtered.filter(res=> res.title.toLowerCase().includes(result)

    ); 
    setData(results)
} ,[result])
  
    return (
        <div className='header'>
          <>
          <Navbar collapseOnSelect expand="lg" bg="primary" fixed="top" variant="dark">
  
  <Navbar.Toggle aria-controls="responsive-navbar-nav" />
  <Nav.Link  variant="dark" href="javascript:history.back()"><ArrowBackIcon style={{ color:"white" }}/></Nav.Link>
  <Nav>
      <input
        type="text"
        placeholder="Search"
        value={result}
        onChange={handleChange}
      />
</Nav>
<Navbar.Collapse id="responsive-navbar-nav">
    <Nav className="mr-auto">
      <Nav.Link  href="/orders">Orders</Nav.Link>
      <Nav.Link href="/cart" ><ShoppingBasketIcon color="white"/>
                        {cartItems.length > 0? (
                        <span className="badge">{cartItems.length}</span>
                        ):0}</Nav.Link>
      
    </Nav>
   
    <Nav className="mr-2 " size="sm">
    {userInfo ? (
      <Nav.Link>
               <Dropdown as={ButtonGroup}>
               <Button  className="text-left" id="dropdown-button" >{userInfo.name}</Button>
               <Dropdown.Toggle></Dropdown.Toggle>               
               <Dropdown.Menu>
                 <Dropdown.Item  className="signOut"  onClick={signoutHandler}>Sign Out</Dropdown.Item>
               </Dropdown.Menu>
             </Dropdown> 
             </Nav.Link>
            ) : (
              <Nav.Link class="color-white" href="/signin" className="signIn">
                 <span>Hello ! Sign In,</span>  </Nav.Link>
            )}
            
            </Nav>
  </Navbar.Collapse>
  
<Navbar.Brand  href="/">  <b>E-Comm</b></Navbar.Brand>

      
</Navbar>
<br></br>
<br></br>
<br></br>

<div class="card-cover">
{result?(data.map((r,i)=> (   
                <ul key={i}>
                <li ><a href={"/products/"+r._id}> {r.title}</a></li>
                </ul>)
            )
            ):""}
            </div>
      </>



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
