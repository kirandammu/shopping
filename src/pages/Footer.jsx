import React from 'react'
import logo from '../React ecommerce/logo.png'
import insta from '../React ecommerce/instagram_icon.png'
import pint from '../React ecommerce/pintester_icon.png'
import whats from '../React ecommerce/whatsapp_icon.png'

const Footer = () => {
  return (
    <div className='footer'>
      <div className="logo">
        <img src={logo} alt="" />
        <h1>SHOPPING</h1>
      </div>
      <ul className="links">
        <li>Company</li>
        <li>Products</li>
        <li>Offers</li>
        <li>About</li>
        <li>Contact</li>
      </ul>
      <div className="icons">
        <img src={insta} alt="" />
        <img src={pint} alt="" />
        <img src={whats} alt="" />
      </div>
      <p>copyright @ 2023 - All Right Reserved</p>
    </div>
  )
}

export default Footer
