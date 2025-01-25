import { useState } from 'react';

import './App.css';
import Navbar from './Components/Navbar/Navbar';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Shop from './Pages/Shop';
import ShopCategory from './Pages/ShopCategory';
import Product from './Pages/Product';
import Cart from './Pages/Cart';
import LoginSignup from './Pages/LoginSignup';
import Footer from './Components/Footer/Footer';

import men_banner from './Components/Assets/banner_mens.png';
import women_banner from './Components/Assets/banner_women.png';
import kid_banner from './Components/Assets/banner_kids.png';
import AboutCompany from './Components/AboutCompany/AboutCompany';
import Offices from './Components/Offices/Offices';
import Help from './Components/Help/Help';
import Payment from './Components/Payment/Payment';
import Profile from './Components/Profile/Profile';
import CheckVerification from './Components/CheckVerification/CheckVerification';

function App() {
  return (
    <BrowserRouter basename={process.env.NODE_ENV === 'production' ? '/ShopingApp' : '/'}>
      <Navbar />
      <Routes>
        <Route path="/" element={<Shop />} />
        <Route path="/men" element={<ShopCategory banner={men_banner} category="men" />} />
        <Route path="/women" element={<ShopCategory banner={women_banner} category="women" />} />
        <Route path="/kids" element={<ShopCategory banner={kid_banner} category="kid" />} />
        <Route path="/product/:productId" element={<Product />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/login" element={<LoginSignup />} />
        <Route path="/AboutCompany" element={<AboutCompany />} />
        <Route path="/offices" element={<Offices />} />
        <Route path="/help" element={<Help />} />
        <Route path="/payment" element={<Payment />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/CheckVerification" element={<CheckVerification />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
