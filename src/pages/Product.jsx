import React, { useContext } from 'react'
import { shopContext } from '../components/Context'
import { useParams } from 'react-router-dom'
import star from '../../public/star_icon.png'
import dull from '../../public/star_dull_icon.png'
import Hero from '../components/Hero'

const Product = () => {
    const {all_product} = useContext(shopContext)
    const {productId} = useParams()
    const product = all_product.find((e)=>e.id === Number(productId))
    console.log(product)
  return (<div className='dis'>
    <div className='display'>
        <div className="display-left">
            <img src={product.image} alt="" />
        </div>
        <div className="display-right">
        <h1>{product.name}</h1>
        <div className="rating">
            <img src={star} alt="" />
            <img src={star} alt="" />
            <img src={star} alt="" />
            <img src={star} alt="" />
            <img src={dull} alt="" />
        </div>
        <div className="prices">
            <h3>${product.old_price}</h3>
            <h1>${product.new_price}</h1>
        </div>
        <div className="sizes">
        <span>S</span>
        <span>M</span>
        <span>L</span>
        <span>XL</span>
        <span>XLL</span>
        </div>
        <div className="buy">
            <button>Add To Cart</button>
            <button>Buy Now</button>
        </div>
        
        </div>
        
      
    </div>
    <div className="review">
    <div className="reviews">
        <span>Description</span>
        <span>Reviews</span>
    </div>
    <p>From attending a casual hangout session with your friends and family to running errands, tees can come in handy for you in varied scenarios. So, check out the wide array of T-shirts that can meet your requirements. You can have a look at the various options with different sleeve lengths, ranging from half sleeves to full sleeves and more. On the other hand, if you are searching for sleeveless T-shirts that can be useful when you are working out or enjoying your downtime, such options are also available online. You can also find tees that feature intricate patterns to elevate their aesthetic appeal too. So, browse options like chequered, striped, zigzagged, and graphic tees, among others, and opt for the ones that you like the most. You can find outfits with varied neck designs too, including the likes of V-neck T-shirts, round neck tees, polo neck tees, and more. In addition, if you are looking for tees with pockets</p>
    </div>
    <Hero/>
    </div>
  )
}

export default Product
