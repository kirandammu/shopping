import React from 'react'
import banner from '../../public/kidss.jpg'
import new_collections from '../../public/new_collections'
import Item from './Item'
const NewCollections = () => {
  return (
    <div className='main'>
        <div className="hero">
            <img src={banner} alt="" />
            <div className="bios">
            <h1>Welcome All😍 </h1>
            <h6>New Collections Arravial </h6>
            <h3>Special Offer For You, Happy Shopping</h3>
            <span>Explore More</span>
        </div>
        </div>
      <h1>New Collections</h1>
      <div className="tops">
        {new_collections.map((item)=>{
            return(
                <div key={item.id} >
                    <Item name={item.name} price={item.new_price} image={item.image} id={item.id} />
                </div>
            )
        })}
      </div>
    </div>
  )
}

export default NewCollections
