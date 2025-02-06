import React, { useContext, useState } from 'react'
import logo from '../React ecommerce/logo.png'
import cart from '../React ecommerce/cart_icon.png'
import { Link } from 'react-router-dom'
import { Context } from './Context'
import all_product from '../React ecommerce/all_product'

const Navbar = () => {
    const [menu,setMenu]=useState("shop")
    const {cartItem} = useContext(Context)
  return (
    
        <nav>
            <div className="logo">
                <img src={logo} alt="" />
                <Link to='/' style={{textDecoration:"none"}}><h1>SHOPPING</h1></Link>
            </div>
            <ul className="nav-menu">
                <li onClick={()=>{setMenu("shop")}}><Link to='/' style={{textDecoration:"none", color:"black"}}>Shop</Link>{menu==="shop"?<hr/>:<></>}</li>
                <li onClick={()=>{setMenu("mens")}}><Link to='/mens' style={{textDecoration:"none", color:"black"}}>Men</Link>{menu==="mens"?<hr/>:<></>}</li>
                <li onClick={()=>{setMenu("womens")}}><Link to='/womens' style={{textDecoration:"none", color:"black"}}>Women</Link>{menu==="womens"?<hr/>:<></>}</li>
                <li onClick={()=>{setMenu("kids")}}><Link to='/kids' style={{textDecoration:"none", color:"black"}}>Kids</Link>{menu==="kids"?<hr/>:<></>}</li>
            </ul>
            <div className="logout">
                <Link to='/login'><button>Login</button></Link>
                <div className="cart">
                 <Link to='/cart'>   <img src={cart} alt="" /></Link>
                    <p className="count">{0}</p>
                </div>
            </div>

        </nav>
        

  )
}

export default Navbar
