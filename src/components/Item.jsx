import React from 'react'
import { Link } from 'react-router-dom'

const Item = (props) => {
    const {image, name, price, id} =props
  return (
    <div className='item' >
      <Link to={`/product/${props.id}`}><img src={image} onClick={window.scrollTo(0,0)} /></Link>  
        <h4>{name}</h4>
        <h3>${price}</h3>
    </div>
  )
}

export default Item
