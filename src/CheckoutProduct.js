import React from 'react'
import './CheckoutProduct.css'

const CheckoutProduct =  ({id, title,image,price,rating}) => {
  return (
    <div className='checkoutProduct'>
      <img className='checkoutProduct__image' src={image} alt=''/>
        <div className='checkoutProduct__info'>
        <p className='checkoutProduct__title'>{title}</p>
        <p className='checkoutProduct__price'>
        <small>$</small>
        <strong>{price}</strong>
        </p>
        <p className='checkoutProduct__rating'>{rating}</p>

      </div>
    </div>
  )
}

export default CheckoutProduct
