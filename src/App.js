import React from 'react';
import Home from './screens/Home'
import {BrowserRouter,Route} from 'react-router-dom'
import Productscreen from './screens/Productscreen';
import cartScreen from './screens/cartScreen';
import SigninScreen from './screens/signIn';
import RegisterScreen from './screens/RegisterScreen';
import shippingScreen from './screens/shippingScreen';
import paymentScreen from './screens/paymentScreen';
import orderScreen from './screens/orderScreen';
import placeOrderScreen from './screens/placeOrderScreen';
import OrderHistoryScreen from './screens/OrderHistoryScreen';
import Header from './components/Header';
import PrivateRoute from './components/PrivateRoute';
import Footer from './components/Footer';
import ProfileScreen from './screens/ProfileScreen';

function App() {

  return (
    <BrowserRouter > 
    <div className="App">
    <Header/>
    <Route path="/cart/:id?" component={cartScreen}/>
    <Route path="/products/:id?" component={Productscreen}/>
    <Route path="/signin" component={SigninScreen}></Route>
    <Route path="/register" component={RegisterScreen}></Route>
    <Route path="/shipping" component={shippingScreen}></Route>
    <Route path="/payment" component={paymentScreen}></Route>
    
    <Route path="/orderhistory" component={OrderHistoryScreen}></Route>
    <Route path="/order/:id?" component={orderScreen}></Route>
    <PrivateRoute
            path="/profile"
            component={ProfileScreen}
          ></PrivateRoute>
    <Route path="/placeorder" component={placeOrderScreen}></Route>

    <Route path="/" component={Home} exact/>
    <Footer/>
    </div>
    </BrowserRouter>
  );
}

export default App;
