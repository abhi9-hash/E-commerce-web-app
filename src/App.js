import React from 'react';
import Home from './screens/Home'
import {BrowserRouter,Route} from 'react-router-dom'
//import {browserHistory} from 'react-dom'
import Productscreen from './screens/Productscreen';
import cartScreen from './screens/cartScreen';
import SigninScreen from './screens/signIn';
import RegisterScreen from './screens/RegisterScreen';

function App() {

  return (
    <BrowserRouter > 
    <div className="App">
    <Route path="/cart/:id?" component={cartScreen}/>
    <Route path="/products/:id" component={Productscreen}/>
    <Route path="/signin" component={SigninScreen}></Route>
    <Route path="/register" component={RegisterScreen}></Route>
    <Route path="/" component={Home} exact/>
    </div>
    </BrowserRouter>
  );
}

export default App;
