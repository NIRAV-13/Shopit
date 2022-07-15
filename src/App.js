import './App.css';
import React from "react";

import { Routes, Route, BrowserRouter } from 'react-router-dom';
import Dashboard from './components/Dashboard/Dashboard';
import ProductDetails from './components/Product/ProductDetails';
import Login from './components/Login/Login'
import Register from './components/Register/Register'
import Orders from './components/orders/orders';
import Wishlist from './components/wishlist/wishList';
import Cart from './components/Cart/Cart';
import Home from "./pages/home/Home";
import List from "./pages/list/List";
import GiftCards from './components/GiftCards/GiftCards'
import data from './components/back/Data/Data';
import AddGiftcard from './components/ADDGiftcard/AddGiftcard';
import Table from './components/ADDGiftcard/Table';
import UserProfile from './components/UserProfile/Profile'
import ForgotPassword from './components/ForgotPassword/ForgotPassword'

function App({ BuyCardhandling, tableData }) {

  const { productItems } = data;

  // const [data, setData] = React.useState(null);

  // React.useEffect(() => {
  //   fetch("/api")
  //     .then((res) => res.json())
  //     .then((data) => setData(data.message));
  // }, []);

  return (
    <div className="App">

      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Dashboard />} />
          <Route path='/product/:id' element={<ProductDetails />} />
          <Route path='/login' element={<Login />} />
          <Route path='/forgotpassword' element={<ForgotPassword />} />
          <Route path='/register' element={<Register />} />
          <Route path='/dashboard' element={<Dashboard />} />
          <Route path='/orders' element={<Orders />} />
          <Route path='/wishlist' element={<Wishlist />} />
          <Route path='/cart' element={<Cart />} />
          <Route path="/admin" element={<Home />} />
          <Route path="/users" element={<List />} />
          <Route path="/dashboard_admin" element={<Home />} />
          <Route path="/products" element={<Home />} />
          <Route path="/orders_admin" element={<Home />} />
          <Route path="/notifications" element={<Home />} />
          <Route path="/giftcards_add/addgiftcard" element={<AddGiftcard />} />
          <Route path="/giftcardss_add/addgiftcard/table" element={<Table tableData={tableData} />} />
          <Route path="/profile" element={<Home />} />
          <Route path="/userprofile" element={<UserProfile />} />
          <Route path="/logout" element={<Home />} />
          <Route path="/offer" element={<List />} />
          <Route path="/giftcards" element={<GiftCards productItems={productItems} BuyCardhandling={BuyCardhandling} />} />

        </Routes>
      </BrowserRouter>
    </div>
  );
}


export default App;