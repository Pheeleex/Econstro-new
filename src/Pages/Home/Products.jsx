import React, { useState } from 'react'
import { loveIcon, StarsIcon } from '../../../assets'
import ProductItems from '../../../assets/ProductsItems'
import BestPrices from './BestPrices'
import LoveIcon from '../../../assets/images/Icons/loveIcon'
import { useNavigate } from 'react-router-dom'


const Products = () => {
    const cardsPerPage = 8
    const [currentPage, setCurrentPage] = useState(1)
    const startIndex = (currentPage - 1) * cardsPerPage
    const endIndex = startIndex + cardsPerPage
    const currentCards = ProductItems.slice(startIndex, endIndex)
    const bestPriceItems = ProductItems.filter((item) => item.bestPrice)
    const totalPages = Math.ceil(ProductItems.length / cardsPerPage)

    const handlePageChange = () => {
        setCurrentPage(page)
    }


    const navigate = useNavigate()
    
    const handleCardClick = (item) => {
      console.log('clicked', item)
      navigate('/AddToCart', {state: {...item, group: item.group}})
    }
  return (
    <>
    <div className="products">
      <h2 className='deals ml-8 mb-8 text-2xl font-bold'>Latest Deals</h2>
      <div className='card-container flex flex-col md:flex-row'>
        {currentCards.map((item) => (
          <div className='card-desc flex flex-col'>
            <div className="card" onClick={() => handleCardClick(item)}>
              <div className="flex justify-between w-full">
                <StarsIcon />
                <LoveIcon />
              </div>
              <div className="flex justify-center items-center">
                <div className="w-3/4">
                  <img src={item.src} key={item.id} alt="Smartwatch" className="h-48 object-contain" />
                </div>
              </div>
            </div>
            <div className="description mt-4">
              <h2 className="text-lg font-semibold">{item.productName}</h2>
              <span className="font-light">{item.info}</span>
              <h3 className="text-lg font-semibold">{item.price}</h3>
              <span className="font-light">{item.formerPrice}</span>
            </div>
          </div>
        ))}
      </div>
      <div className='pagination flex justify-center mt-8 gap-3'>
        {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
          <button key={page} onClick={() => handlePageChange(page)}>{page}</button>
        ))}
      </div>
    </div>
    <BestPrices bestPriceItems={bestPriceItems} />
  </>
  )
}

export default Products