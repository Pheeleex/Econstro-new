import React, { useState } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import ProductItems from '../../../assets/ProductsItems';
import { StarsIcon } from '../../../assets';
import Overview from './Overview';
import MoreItems from './MoreItems';
import CartForm from './CartForm';

const AddToCart = () => {
    const location = useLocation()
    const {group, ...data} = location.state;
    const groupItems = ProductItems.filter((item) => item.group === group)

    const [itemNumber, setItemNumber] = useState(1);
    const navigate = useNavigate()
  
    const handleIncrement = () => {
      setItemNumber(prevItemNumber => prevItemNumber + 1)
    };
  
    const handleDecrement = () => {
      if (itemNumber > 1) {
        setItemNumber(prevItemNumber => prevItemNumber - 1)
      }
    };
  
  
    const addToCartSuccess = () => {
      const cartItems = JSON.parse(localStorage.getItem('cartItems')) || [];
      cartItems.push(data); // Assuming data contains the item details
      localStorage.setItem('cartItems', JSON.stringify(cartItems));
      navigate('/Success');
      console.log('Navigating...');
    };
    

  return (
    <div className='heroCart-container'>
      <div className='hero-cart flex justify-center items-center bg-purple-200 mb-0 flex-col md:flex-row'>
        <div className='cart flex flex-wrap justify-start items-center w-full md:w-3/5 gap-8 md:gap-4 p-4'>
          <div className='image relative w-full md:w-1/4 h-96 flex-shrink-0'>
            <img src={data.src} alt='smartwatch' className='w-full h-full' />
            <div className='stock absolute top-1/12 left-2/3 w-14 h-14 bg-purple-800 rounded-full flex justify-center items-center'>
              <p className='in text-white text-sm font-bold'>in stock</p>
            </div>
          </div>
          <div className='content'>
            <h2 className='text-black font-semibold text-2xl mb-0'>{data.productName}</h2>
            <p className='text-black text-sm font-light'>
              {data.productName} is the latest apple watch product, available in different colors
            </p>
            <p className='text-black text-sm font-light'>
              Brand: <span>{data.productName}| See other Apple products</span>
            </p>
            <h2 className='price text-purple-700 text-2xl font-semibold'>{data.price}</h2>
            <span className='delivery text-red-600 text-xs'>Shipping from NGN500 to Kubwa Abuja</span>
            <div className='ratings mt-4'>
              <StarsIcon />
              <span className='text-black text-xs'>(900 verified rating)</span>
              <div className='load-cart mt-4 flex flex-col gap-4'>
                <div className='add-remove flex items-center gap-4'>
                  <div className='load bg-purple-700 text-white w-8 h-8 flex justify-center 
                  items-center rounded-full cursor-pointer' onClick={handleDecrement}>-</div>
                  <div className='item-no text-black text-2xl font-bold'>{itemNumber}</div>
                  <div className='load bg-purple-700 text-white w-8 h-8 flex justify-center 
                  items-center rounded-full cursor-pointer' onClick={handleIncrement}>+</div>
                </div>
                <div className='cart-btns flex gap-4 flex-col md:flex-row'>
                  <div className='cart-btn bg-purple-800 text-white w-28 h-8 flex justify-center 
                  items-center rounded-lg cursor-pointer'>Buy now</div>
                  <div className='cart-btn bg-purple-800 text-white w-28 h-8 flex justify-center 
                  items-center rounded-lg cursor-pointer' onClick={addToCartSuccess}>Add to Cart</div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <CartForm  />
      </div>
      <Overview />
      <MoreItems groupItems={groupItems} />
    </div>
  )
}

export default AddToCart