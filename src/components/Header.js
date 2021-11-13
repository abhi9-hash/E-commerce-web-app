import React, { useEffect, useState } from 'react'
import './Header.css'
import ShoppingBasketIcon from '@material-ui/icons/ShoppingBasket';
import { useDispatch, useSelector } from 'react-redux';
import { Button, Dropdown, ButtonGroup, Nav, Navbar } from 'react-bootstrap';
import { signout } from '../screens/actions/userAction';
import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from 'axios';
import {BASEURL, CLIENTURL} from '../constant'


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
                  const res = await axios.get(`${BASEURL}/products`);
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
      <Nav.Link  href="/orderhistory">Orders</Nav.Link>
      <Nav.Link href="/cart" ><ShoppingBasketIcon color="white"/>
                        {cartItems.length > 0? (
                        <span className="badge">{cartItems.length}</span>
                        ):0}</Nav.Link>
      
    </Nav>
   
    <Nav className="mr-2 " size="sm">
    {userInfo ? (
      <>
      <Nav.Link href="/profile"><Button  className="text-left" id="dropdown-button" >{userInfo.name}</Button></Nav.Link>
      <Nav.Link >
               <Dropdown as={ButtonGroup}>
               
               <Dropdown.Toggle></Dropdown.Toggle>               
               <Dropdown.Menu>
                 <Dropdown.Item  className="signOut"  onClick={signoutHandler}>Sign Out</Dropdown.Item>
               </Dropdown.Menu>
             </Dropdown> 
             </Nav.Link>
             </>) : (
              <Nav.Link class="color-white" href="/signin" className="signIn">
                 <span>Hello ! Sign In,</span>  </Nav.Link>
            )}
            
            </Nav>
            <Navbar.Brand  href="/">  <b>E-Comm</b></Navbar.Brand>
  </Navbar.Collapse>      
</Navbar>
<br></br>
<br></br>
<br></br>

<div class="card-cover">
{result?(data.map((r,i)=> (   
                <ul key={i}>
                <li ><a href={CLIENTURL+"/products/"+r._id}> {r.title}</a></li>
                </ul>)
            )
            ):""}
            </div>
      </>
</div>    
    )
}

export default Header
