import React, { useContext } from 'react'
import { shopContext } from '../components/Context'
import Item from '../components/Item'

const ShopCategory = (props) => {
    const {all_product} = useContext(shopContext)
    const { banner}= props
    return (
      <div className='shop'>
        <div className="banners">
          <img src={banner} alt="" />
        </div>
        <div className="products">
            {all_product.map((item)=>{
              if (props.category===item.category) {
                return(
                  <Item name={item.name} price={item.new_price} image={item.image} id={item.id}/>              
                )
                
              }
              else{
                return null
              }
            })}
        </div>
        <div className="more">
          <span>Explore More</span>
        </div>
      </div>
    )
}

export default ShopCategory
