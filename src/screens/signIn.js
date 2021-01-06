import React, { useState, useEffect } from 'react';
import { useDispatch , useSelector} from 'react-redux';
import { Link } from 'react-router-dom';
import Footer from '../components/Footer';
import Header from '../components/Header';
import { signin } from './actions/userAction';
import LoadingBox from '../components/LoadingBox';
import MessageBox from '../components/MessagingBox';
import "./signIn.css"

export default function SigninScreen(props) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const redirect = props.location.search
    ? props.location.search.split('=')[1]
    : '/';
  const userSignin = useSelector((state) => state.userSignin);
  const { userInfo, loading, error } = userSignin; 

  const dispatch = useDispatch();
  const submitHandler = (e) => {
    e.preventDefault();	
  	dispatch(signin(email, password));
  };	  

  useEffect(() => {
    if (userInfo) {
      props.history.push(redirect);
    }
  }, [props.history, redirect, userInfo]);
  return (
    <div className="signInScreen">
      <Header/>  
      <form className="form" onSubmit={submitHandler}>
        <div>
          <h1>Sign In</h1>
        </div>
        {loading && <LoadingBox></LoadingBox>}
        {error && <MessageBox >{error}</MessageBox>}
        <div>
          <label htmlFor="email">Email address</label>
          <input
            type="email"
            id="email"
            placeholder="Enter email"
            required
            onChange={(e) => setEmail(e.target.value)}
          ></input>
        </div>
        <div>
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            placeholder="Enter password"
            required
            onChange={(e) => setPassword(e.target.value)}
          ></input>
        </div>
        <div>
          <label />
          <button className="signInButton" type="submit" >
            Sign In
          </button>
        </div>
        <div>
          <label />
          <div>
            New customer? <Link to="/register">Create your account</Link>
          </div>
        </div>
      </form>
     <Footer/> 
    </div>
  );
}