import React, { useContext } from 'react'
import { Context } from '../pages/Context'
import { useParams } from 'react-router-dom';
import Display from '../pages/Display'

const Product = () => {
  const {all_product}=useContext(Context);
  const {productId}= useParams();
  const product = all_product.find((e)=> e.id === Number(productId))
  return (
    <div>
      <Display product={product}/>
    </div>
  )
}

export default Product
