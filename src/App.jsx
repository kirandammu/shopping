import React from 'react'
import { Route,Routes } from 'react-router-dom'
import Nav from './components/Nav'
import Home from './pages/Home'
import Footer from './components/Footer'
import Login from './pages/Login'
import Cart from './pages/Cart'
import MensBanner from '../public/GentsBanner.gif'
import WomensBanner from '../public/womensss.jpg'
import KidsBanner from '../public/kidss.jpg'
import ShopCategory from './pages/ShopCategory'
import Product from './pages/Product'




const App = () => {
  return (
    <div>
     <Nav/>
     <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/mens' element={<ShopCategory category='men' banner={MensBanner} />}/>
      <Route path='/womens' element={<ShopCategory category='women' banner={WomensBanner} />} />
      <Route path='/kids' element={<ShopCategory category='kid' banner={KidsBanner} />} />
      <Route path='/cart' element={<Cart/>} />
      <Route path='/login' element={<Login/>}/>
      <Route path='/product' element={<Product/>}/>
      <Route path='/product/:productId' element={<Product/>}/>

     </Routes>
     <Footer/>
    </div>
  )
}

export default App
