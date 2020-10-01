import React from 'react';
import logo from './logo.svg';
import './App.css';
import {BrowserRouter,Route} from 'react-router-dom'
import Navbar from './Navbar'
import Orders from './Oders'
import Contactus from './Contactus'
import Body from './Body'
import Footer from './Footer'

function App() {
  return (
    <div className="App">

      <BrowserRouter>
      <Navbar/>
        <Route path='/body' component={Body} exact/>
        <Route path='/orders' component={Orders} exact/>
        <Route path='/contactus' component={Contactus} exact/>
      <Footer/>
      </BrowserRouter>
      
    </div>
  )
}
export default App;
