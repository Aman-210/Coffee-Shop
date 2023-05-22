import React from 'react';
import './App.css';
import { useState } from 'react';
import { Typography , ThemeProvider } from '@mui/material';
import {BrowserRouter , Routes, Route} from "react-router-dom"
// components
import  Header  from './components/Header/header';
import Container from './components/Header/container';
import Product1 from './components/Product/product1';
import Product2 from './components/Product/Product2';
import Product3 from './components/Product/Product3';
import Product4 from './components/Product/Product4';
import Cart from './components/Cart/Cart';
import {theme} from "./style"
import Footer1 from './components/Footer/Footer1';
import Footer2 from './components/Footer/Footer2';

function App() {
  const [show , setShow] = useState(true);
  const [cart , setCart] = useState([]);
  const [warning , setWarning] = useState(false)
   const handleOnClick = (item )=>{
    console.log(item );
    let isPresent = false;
    cart.forEach((product)=>{
      if(item.id === product.id )
      isPresent=true;
    })
    if(isPresent){
      setWarning (true);
      setTimeout(()=>{
        setWarning(false);
      },2000 )
     return ;
    }
    setCart([...cart , item ])
   }
   const handleChange = (item , d)=>{
    let ind = -1;
    cart.forEach((data,index)=>{
      if(data.id===item.id)
      ind = index;
    })
    const tempArr = cart;
    tempArr[ind].quantity+=d;
   
    if (tempArr[ind].quantity===0)
       tempArr[ind].quantity = 1;
    setCart([...tempArr])
   }
  

  return (
    
     <BrowserRouter>
     <ThemeProvider theme={theme}>
    
        <Header size={cart.length} setShow={setShow}  />
        
           {show ? (
            <div>
              <Container setShow={setShow} /> 
            <Product1 handleOnClick={handleOnClick}   />
            <Product2 handleOnClick={handleOnClick}   />
            <Product3 handleOnClick={handleOnClick}   />
            <Product4 handleOnClick={handleOnClick}   />
            <Footer1/>
            <Footer2/>
             </div>
            ) : (
            <Cart cart={cart} setCart={setCart} handleChange={handleChange} />
              )}
      
           {
            warning && <div className='warning'>Item is already added to your cart</div>
           }
        </ThemeProvider>
      </BrowserRouter>
      
    
  );
}

export default App;
