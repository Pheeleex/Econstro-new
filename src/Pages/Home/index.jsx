import React from 'react'
import HeroSlide from './HeroSlide'
import HeroTab from './HeroTab'
import Products from './Products'
import WaveRectangle from './WaveRectangle'

const Home = () => {
  return (
   <>
     <div className='hero flex'>
      <HeroTab />
      <HeroSlide />
    </div>
      <Products />
      <WaveRectangle />
   </>
  )
}

export default Home