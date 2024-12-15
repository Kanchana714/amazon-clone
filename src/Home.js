import React from 'react'
import './Home.css'
import Product from './Product'

function Home() {
  return (
    <div className='home'>
     
      <img className="home__image" src="https://images-eu.ssl-images-amazon.com/images/G/31/img24/Media/BAU/PC_Hero_2x-toys_1._CB582765723_.jpg" alt='phone' />
      
      {/* Product id,title,rating,image*/}
      <div className="home__row">
      <Product id="123451" 
      title="The Lean Startup:Now Constant Innovation Creation "
      price={11.98}
      rating={5}
      image ="https://m.media-amazon.com/images/I/619VJYWIbXL._AC_UL320_.jpg"
      />
      <Product id="123452" 
      title="The Lean Startup:Now Constant Innovation Creation "
      price={11.98}
      rating={5}
      image ="https://m.media-amazon.com/images/I/31tKtKPIkWL._SX300_SY300_QL70_FMwebp_.jpg" alt='earpods'/>
      </div>
      <div className="home__row">
      <Product id="123453" 
      title="The Lean Startup:Now Constant Innovation Creation "
      price={11.98}
      rating={5}
      image ="https://m.media-amazon.com/images/I/51M-0OzscIL.AC_SX250.jpg" alt='light'  />
      <Product id="123454" 
      title="The Lean Startup:Now Constant Innovation Creation "
      price={11.98}
      rating={5}
      image ="https://m.media-amazon.com/images/I/51y39ofWmfL._AC_UL320_.jpg" alt='cow'/>
      <Product id="123455" 
      title="The Lean Startup:Now Constant Innovation Creation "
      price={11.98}
      rating={5}
      image ="https://m.media-amazon.com/images/I/61QnIuUiOgL._AC_UL320_.jpg" alt='toy'/>
      </div>
      <div className="home__row">
      <Product id="123456" 
      title="The Lean Startup:Now Constant Innovation Creation "
      price={11.98}
      rating={5}
      image ="https://m.media-amazon.com/images/I/51DGcy8eBCL._SX425_.jpg" alt='hotpot'
      />
      </div>

    </div>
  )
}

export default Home
