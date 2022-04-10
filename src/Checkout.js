import React from 'react'
import './Checkout.css'
import Subtotal from './Subtotal'
import CheckoutProduct from './CheckoutProduct'
import { useStateValue } from './StateProvider'


const Checkout = () => {

  const [{basket,user},dispatch] = useStateValue();

  return (
    <div className='checkout'>
      <div className='checkout__left'>
        <img className='checkout__ad' src='https://m.media-amazon.com/images/G/01/FireTV/Inline/IDB_RatingLabel_NA._TTW_.jpg' alt='' />
        <div>
        <h3>Hello, {user ? (user?.email) : 'Guest'}</h3>
          <h2 className='checkout__title'>Your shopping Basket</h2> 
            {basket.map((item)=>(
              <CheckoutProduct 
                  id = {item.id}
                  title= {item.title}
                price= {item.price}
                rating= {item.rating} 
                image= {item.image}
              
              />
            ))}
            

        </div> 
      </div>
      <div className='checkout__right'>
        <Subtotal />
      </div>
    </div>
  )
}

export default Checkout
