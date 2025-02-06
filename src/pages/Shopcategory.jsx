import React,{useContext} from 'react'
import { Context } from './Context'
import down from '../React ecommerce/dropdown_icon.png'
import Item from './Item'

const ShopCategory = (props) => {
  const {all_product} = useContext(Context)
  return (
    <div className="shop-category">
      <img src={props.banner} alt="" className='banner'/>
      <div className="indexsort">
      <p><span>Showing 1-12</span> out of 36 products</p>
      <div className="sort">Sort By <img src={down} alt="" /></div>
      </div>
      <div className="products">
        {all_product.map((item,i)=>{
          if(props.category===item.category){
            return(
              <Item key={i} id={item.id} name={item.name} image={item.image} new_price={item.new_price} old_price={item.old_price}/>
            )
          }
          else{
            return null;
          }
        })}
      </div>
      {/* <p className="more">See More</p> */}

    </div>
   
  )
}

export default ShopCategory
