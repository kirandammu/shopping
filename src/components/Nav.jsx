import React from 'react'
import { Link, NavLink } from 'react-router-dom'
import cart from '../../public/cart_icon.png'

const Nav = () => {
  return (
    <div className='nav'>
      <Link to={'/'}><h1>DAMMU</h1></Link>
      <ul>
        <NavLink to={'/'}>Home</NavLink>
        <NavLink to={'/mens'}>Mens</NavLink>
        <NavLink to={'/womens'}>Womens</NavLink>
        <NavLink to={'/kids'}>Kids</NavLink>
      </ul>
      <div className="logout">
        <div className="cart">
            <img src={cart} alt="" />
            <span>0</span>
        </div>
        <button>Login</button>
      </div>
    </div>
  )
}

export default Nav
