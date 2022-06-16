import './App.css';
import React from "react";
import OrderHistory from './components/orders/orders';

import { Routes, Route, BrowserRouter } from 'react-router-dom';
import Dashboard from './components/Dashboard/Dashboard';
import ProductDetails from './components/Product/ProductDetails';
import Login from './components/Login/Login'
import Register from './components/Register/Register'

function App() {
  return (
    <div className="App">

      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Dashboard />} />
          <Route path='/product/:id' element={<ProductDetails />} />
          <Route path='/login' element={<Login />} />
          <Route path='/register' element={<Register />} />
          <Route path='/dashboard' element={<Dashboard />} />
        </Routes>
      </BrowserRouter>

    </div>
  );
}

export default function App(){

  return <>
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<OrderHistory/>} />
      </Routes> 
    </BrowserRouter>
  </>
}
