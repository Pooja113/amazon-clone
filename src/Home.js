import React from 'react'
import './Home.css'
import Product from './Product'

const Home = () => {
  return (
    <div className='home'>
      <div className='home__container'>
        <img className='home__image' src='https://img.etimg.com/photo/msid-70586058,quality-100/amazon-fashion-sale.jpg' alt='' />
        <div className='home__row'>
          <Product 
            id='1235413'
            title="The lean StartUp: How Today's Entrepreneurs Use Continuous Innovation to Create Radically Successful" 
            price={19.99} 
            rating={5} 
            image='https://images-na.ssl-images-amazon.com/images/I/81-QB7nDh4L.jpg'/>
          <Product 
            id='3211312'
            title="Kenwood KMC011 5 Quart Chef Titanium Kitchen Machine, Stainless Steel" 
            price={396.66} 
            rating={4} 
            image='https://m.media-amazon.com/images/I/81VEi98NpDL._AC_SX679_.jpg'/>
        </div>
        <div className='home__row'>
           <Product 
              id='23424242'
              title='Smart Watch, 1.69" Full Touch Screen Fitness Watch with Heart Rate, Blood Pressure, Sleep Monitor, Waterproof Fitness Tracker with Activity Tracker for Android iOS for Men Women for Gift Black/Green' 
              price={30.66} 
              rating={5} 
              image='https://m.media-amazon.com/images/I/61EJEGQ-WkL._AC_SX569_.jpg'/>
           <Product 
              id='3441525'
              title="Echo Dot (3rd Gen, 2018 release) - Smart speaker with Alexa - Charcoal" price={64.26} rating={4} image='https://m.media-amazon.com/images/I/6182S7MYC2L._AC_SX569_.jpg'/>
           <Product title="2021 Apple 12.9-inch iPad Pro (Wi‑Fi, 256GB) - Silver
           " price={1136.99} rating={4} image='https://m.media-amazon.com/images/I/815KnP2wjDS._AC_SX466_.jpg'/>
        </div>
        <div className='home__row'>
        <Product 
            id = '4323521'
            title="SAMSUNG CJ890 Series 49-Inch Ultrawide QHD (3840x1080) Computer Monitor, 144Hz, Curved, HDMI, USB-C, Height Adjustable Stand, 3 Yr WRNTY (LC49J890DKNXZA)
           " 
           price={730.66} 
           rating={4} 
           image='https://m.media-amazon.com/images/I/61Hh-0F7AbL._AC_SX569_.jpg'/>
        </div>
      </div>
      
    </div>
  )
}

export default Home
