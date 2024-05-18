import React from 'react'
import { Curology2, Ellipse, Sneaker1, Sneaker2 } from '../../../assets'
import CustomSlider from '../../Components/CustomSlider'

const HeroSlide = () => {
    const slideImages = [Sneaker1, Sneaker2, Curology2]
  return (
    <div className='hero-slide flex'>
        <div className="heroFlex flex flex-col md:flex-row justify-between items-center md:items-center p-1 md:p-4 pt-20 md:pt-18 ">
            <div className="textArea flex flex-col items-start justify-center pl-0 md:pl-1 h-19 gap-0">
                <h1 className="slide-head text-purple-700 mb-4">
                    Get Latest Deals
                </h1>
                <div className="discount">
                    <p className="low text-purple-700">
                        at low discount from
                    </p>
                    <p className="span
                        font-bold ml-1 mb-2">
                        50%
                    </p>
                </div>
                <button className="btn h-12 bg-purple-900 text-white rounded-lg">
                Buy Now
                </button>
            </div>
            <div className="imageBox flex justify-center">
                <CustomSlider items={slideImages} />
            </div>
            
        </div>
</div>
  )
}

export default HeroSlide