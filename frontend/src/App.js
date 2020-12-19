import React from 'react';

import Home from './screens/Home'
import {BrowserRouter,Route} from 'react-router-dom'
//import {browserHistory} from 'react-dom'
import Productscreen from './screens/Productscreen';

function App() {
  return (
    <BrowserRouter > 
    <div className="App">
    <Route path="/product/:id" component={Productscreen}/>
      <Route path="/" component={Home} exact/>
    </div>
    </BrowserRouter>
  );
}

export default App;
