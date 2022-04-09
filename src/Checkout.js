import React from 'react'
import './Checkout.css'
import Subtotal from './Subtotal'
import CheckoutProduct from './CheckoutProduct'


const Checkout = () => {
  return (
    <div className='checkout'>
      <div className='checkout__left'>
        <img className='checkout__ad' src='https://m.media-amazon.com/images/G/01/FireTV/Inline/IDB_RatingLabel_NA._TTW_.jpg' alt='' />
        <div>
          <h2 className='checkout__title'>Your shopping Basket</h2> 
            <CheckoutProduct />

        </div> 
      </div>
      <div className='checkout__right'>
        <Subtotal />
      </div>
    </div>
  )
}

export default Checkout
