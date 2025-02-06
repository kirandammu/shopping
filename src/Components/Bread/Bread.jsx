import React from 'react'
import './Bread.css'
import arrow from '../React ecommerce/breadcrum_arrow.png'
import { Link } from 'react-router-dom'
const Bread = (props) => {
    const {product}=props
  return (
    <div className='bread'>
        <Link to='/' style={{color:'black',textDecoration:'none'}}>HOME</Link> <img src={arrow} alt="" /> <Link to='/' style={{color:'black',textDecoration:'none'}}>SHOP</Link>  <img src={arrow} alt="" /> <Link to={`/${product.category}`} style={{color:'black',textDecoration:'none'}}>{product.category}</Link> <img src={arrow} alt="" />{product.name}
    </div>
  )
}

export default Bread