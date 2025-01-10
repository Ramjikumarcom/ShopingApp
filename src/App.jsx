import { useState } from 'react'

import './App.css'
import Navbar from './Components/Navbar/Navbar'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Shop from './Pages/Shop'
import ShopCategory from './Pages/ShopCategory'
import Product from './Pages/Product'
import Cart from './Pages/Cart'
import LoginSignup from './Pages/LoginSignup'
import Footer from './Components/Footer/Footer'

import men_banner from './Components/Assets/banner_mens.png'
import women_banner from './Components/Assets/banner_women.png'
import kid_banner from './Components/Assets/banner_kids.png'
import AboutCompany from './Components/AboutCompany/AboutCompany'
import Offices from './Components/Offices/Offices'
import Help from './Components/Help/Help'
import Payment from './Components/Payment/Payment'
import Profile from './Components/Profile/Profile'
import PromoCodeData from './Components/PromoCodeData/PromoCodeData'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <BrowserRouter>
        <Navbar></Navbar>
        <Routes>
          <Route path='/' element={<Shop></Shop>}></Route>
          <Route path='/men' element={<ShopCategory banner={men_banner} category={'men'}></ShopCategory>}></Route>
          <Route path='/women' element={<ShopCategory category={'women'} banner={women_banner}></ShopCategory>}></Route>
          <Route path='/kids' element={<ShopCategory category={'kid'} banner={kid_banner}></ShopCategory>}></Route>

          <Route path='/product' element={<Product></Product>}>
            <Route path=':productId' element={<Product></Product>}></Route>
          </Route>
          <Route path='/cart' element={<Cart></Cart>}></Route>
          <Route path='/login' element={<LoginSignup></LoginSignup>}></Route>
          <Route path='/AboutCompany' element={<AboutCompany></AboutCompany>}></Route>
          <Route path='/offices' element={<Offices></Offices>}></Route>
          <Route path='/help' element={<Help></Help>}></Route>
          <Route path='/payment' element={<Payment></Payment>}></Route>
          <Route path='/profile' element={<Profile></Profile>}></Route>


        </Routes>

        <Footer></Footer>


      </BrowserRouter>


    </>
  )
}

export default App
