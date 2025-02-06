import React from 'react'
import Item from './Item'
import news from '../React ecommerce/new_collections'
const NewCollection = () => {
  return (
    <div className="popular">
    <h1>NEW COLLECTIONS</h1><hr/>
    <div className="popular-item">
        {news.map((item,i)=>{
            return(
                <Item key={i} id={item.id} name={item.name} image={item.image} new_price={item.new_price} old_price={item.old_price}/>
            )
        })}
    </div>
</div>
  )
}

export default NewCollection
