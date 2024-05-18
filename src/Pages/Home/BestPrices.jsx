import React from 'react'
import LoveIcon from '../../../assets/images/Icons/loveIcon'
import { StarsIcon } from '../../../assets'

const BestPrices = ({bestPriceItems}) => {
  return (
    <div className="best-prices other-purple">
      <h2 className="deals ml-8 mb-8 text-2xl font-bold">Best Prices</h2>
      <div className="card-container flex flex-col md:flex-row flex-wrap justify-around items-center mt-4">
        {bestPriceItems.map((item, index) => (
          <div className="card-desc flex flex-col" key={index}>
            <div className="card">
              <div className="icons flex justify-between w-full">
                <StarsIcon />
                <LoveIcon />
              </div>
              <div className="content flex justify-center items-center">
                <div className="image w-3/4">
                  <img src={item.src} alt="Best Price" className="h-48 object-contain" />
                </div>
              </div>
            </div>
            <div className="description mt-2">
              <h2 className="text-lg font-semibold">{item.productName}</h2>
              <span className="font-light">{item.info}</span>
              <h3 className="text-lg font-semibold">{item.price}</h3>
              <span className="font-light">{item.formerPrice}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default BestPrices