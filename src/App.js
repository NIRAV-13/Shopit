import './App.css';
import React from "react";
import { Route, BrowserRouter, Routes } from "react-router-dom";
import OrderHistory from './components/orders/orders';


export default function App(){

  return <>
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<OrderHistory/>} />
      </Routes> 
    </BrowserRouter>
  </>
}
