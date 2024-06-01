import React from 'react'
import { useLocation } from 'react-router-dom'

const CheckOut = () => {
    const location = useLocation();
    const {product} = location.state || {}
  return (
    <div>
        <h2>{product.productName}</h2>
        <span>{product.price}</span>
        <img src={product.src} alt='smartwatch' className='w-3/4 h-3/4' />
    </div>
  )
}

export default CheckOut