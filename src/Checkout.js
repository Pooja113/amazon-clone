import React from 'react'
import './Checkout.css'


const Checkout = () => {
  return (
    <div className='checkout'>
      <div className='checkout__left'>
        <img className='checkout__ad' src='https://m.media-amazon.com/images/G/01/FireTV/Inline/IDB_RatingLabel_NA._TTW_.jpg' alt='' />
        <div>
          <h2 className='checkout__title'>Your shopping Basket</h2>  
        </div> 
      </div>
      <div className='checkout__right'>
        <h2>Subtotal</h2>
      </div>
    </div>
  )
}

export default Checkout
