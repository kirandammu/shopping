import React from 'react'
import Navbar from './pages/Navbar'
import { BrowserRouter } from 'react-router-dom'
import { Route,Routes } from 'react-router-dom'
import Shopcategory from './pages/Shopcategory'
import Signup from './pages/Signup'
import Cart from './pages/Cart'
import Shops from './pages/Shops'
import Product from './pages/Product'
import Footer from './pages/Footer'
import men from './React ecommerce/banner_mens.png'
import women from './React ecommerce/banner_women.png'
import kid from './React ecommerce/banner_kids.png'
import Loginpage from './pages/Loginpage'


const App = () => {
  return (
    <div>
      <BrowserRouter>
      
      <Navbar/>
      <Routes>
        <Route path='/' element={<Shops/>}/>
        <Route path='/mens' element={<Shopcategory banner={men} category='men'/>}/>
        <Route path='/womens' element={<Shopcategory banner={women} category='women'/>}/>
        <Route path='/kids' element={<Shopcategory banner={kid} category='kid'/>}/>
        <Route path='/signup' element={<Signup/>}/>
        <Route path='/login' element={<Loginpage/>}/>
        <Route path='/cart' element={<Cart/>}/>
        <Route path='/product' element={<Product/>}/>
        <Route path='/product/:productId' element={<Product/>}/>
      </Routes>
      <Footer/>
      </BrowserRouter>
      
    </div>
  )
}

export default App
