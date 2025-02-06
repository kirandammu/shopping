import React from 'react'
import exclusive from '../React ecommerce/exclusive_image.png'
const Exclusive = () => {
  return (
      <div className="hero">
    <div className="hero-left">
        
        <p>Exclusive</p>
        <p>Offers For You</p>
        <span>Check Now </span>
    </div>
    <div className="hero-right">
        <img src={exclusive} alt="" />

    </div>
   </div>
    
  )
}

export default Exclusive
