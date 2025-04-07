import React from 'react'
import data from '../../public/data'
import banner1 from '../../public/womensss.jpg'
import Item from './Item'
const Hero = () => {
  return (
    <div className='main'>
      <div className="hero">
        <img src={banner1} alt="" />
        <div className="bio">
            <h1>Welcome All👋 </h1>
            <h6>Specail Offers Here</h6>
            <h3>Special Offer For You, Happy Shopping</h3>
            <span>Explore More</span>
        </div>
      </div>
      <div className="top">
        <h1>Popular Items</h1>
        <div className="tops">
            {data.map((item,index)=>{
                return(
                    <div key={index}>
                        <Item name={item.name} image={item.image} price={item.new_price} id={item.id}/>
                    </div>
                )
            })}
        </div>
      </div>
    </div>
  )
}

export default Hero
