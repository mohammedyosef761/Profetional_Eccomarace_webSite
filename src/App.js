
import {useState,useEffect} from 'react';

import './App.css';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import Hero from './components/Hero/Hero';
import Reciption from './components/Reciption/Reciption';
import ShoppingNow from './components/ShoppingNow/ShoppingNow';
import data from './data.json'

import 'bootstrap/dist/css/bootstrap.min.css';





function App() {

 


  // localStorage.setItem('cartItems',JSON.stringify([]));

  return (
    <div className="layout">
        
         <div className='main'>
            <Header />
            <Hero />
            <Reciption />
         </div>
         <Footer />
    </div>
  );
}

export default App;
