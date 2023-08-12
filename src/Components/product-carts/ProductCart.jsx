import React from 'react'
import './ProductCart.css'
const ProductCart = (props) => {

    const {title,imgUrl,price}=props.item
  return (
    <div className="single_product">
    <div className="product_img">
        <img src={imgUrl} alt='' className='w-100'/>
    </div>
    <div className="product_content">
        <div className="rating text-center">
            <span><i class="ri-star-s-fill"></i></span>
            <span><i class="ri-star-s-fill"></i></span>
            <span><i class="ri-star-s-fill"></i></span>
            <span><i class="ri-star-s-fill"></i></span>
            <span><i class="ri-star-s-fill"></i></span>
        </div>
    </div>
    <h6 className='producth6'>{title}</h6>
    <div className='d-flex align-items-center justify-content-between'>
        <span className='price d-flex align-items-center'>prices: Rs.<span>{price}</span>
        </span>

        <span className='shopping_icon'><i class="ri-shopping-cart-line"></i></span>
    </div>
</div>
  )
}

export default ProductCart