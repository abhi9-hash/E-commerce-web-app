import React from 'react';
import Home from './screens/Home'
import {BrowserRouter,Route} from 'react-router-dom'
//import {browserHistory} from 'react-dom'
import Productscreen from './screens/Productscreen';
import cartScreen from './screens/cartScreen';
import SigninScreen from './screens/signIn';
import RegisterScreen from './screens/RegisterScreen';
import shippingScreen from './screens/shippingScreen';
import Header from './components/Header';
import Footer from './components/Footer';

function App() {

  return (
    <BrowserRouter > 
    <div className="App">
    <Header/>
    <Route path="/cart/:id?" component={cartScreen}/>
    <Route path="/products/:id" component={Productscreen}/>
    <Route path="/signin" component={SigninScreen}></Route>
    <Route path="/register" component={RegisterScreen}></Route>
    <Route path="/shipping" component={shippingScreen}></Route>
    <Route path="/" component={Home} exact/>
    <Footer/>
    </div>
    </BrowserRouter>
  );
}

export default App;
