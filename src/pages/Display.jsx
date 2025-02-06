import React, { useContext } from 'react'
import star from '../React ecommerce/star_icon.png'
import { Context } from './Context';
const Display = (props) => {


    
    const {product} = props;
    const {addCart} = useContext(Context)
  return (
    <div className='display'>
        <div className="leftdisplay">
            <div className="imglist">
                <img src={product.image} alt="" />
                <img src={product.image} alt="" />
                <img src={product.image} alt="" />
                <img src={product.image} alt="" />
            </div>
            <div className="displayimage">
            <img src={product.image} alt="" className='main'/>
            </div>
        </div>
        <div className="rightdisplay">
            <h1>{product.name}</h1>
            <div className="stars">
                <img src={star} alt="" />
                <img src={star} alt="" />
                <img src={star} alt="" />
                <img src={star} alt="" />
            </div>
            <button onClick={()=>{addCart(product.id)}}>Add To Cart</button>
        </div>
      
    </div>
  )
}

export default Display
