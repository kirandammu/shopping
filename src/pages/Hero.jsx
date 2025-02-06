import React from 'react'
import hero from '../React ecommerce/hero_image.png'
import hand from '../React ecommerce/hand_icon.png'
import arrow from '../React ecommerce/arrow.png'
const Hero = () => {
  return (
   <div className="hero">
    <div className="hero-left">
        <h2>NEW ARRIVALS ONLY</h2>
        <p>new
        <img src={hand} alt="" /></p>
        <p>collections</p>
        <p>for everyone</p>
        <span>Latest Collection <img src={arrow} alt="" /></span>
    </div>
    <div className="hero-right">
        <img src={hero} alt="" />

    </div>
   </div>
  )
}

export default Hero
