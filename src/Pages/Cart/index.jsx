import React, { useContext } from 'react'
import { CartContext } from '../../Components/CartContext'

const Cart = () => {
const {cartItems} = useContext(CartContext)  
  return (
    <div>
        {
          cartItems.length > 0 ? (
              <div> 
                {
                  cartItems.map((items, index) => (
                    <div className='flex items-center'
                      key={index}> 
                        <div className='image-cart w-1/4'>
                            <img src={items.src} className='w-full h-full' />
                        </div>
                        <div className='flex'>
                            <div>
                            <h2 className='text-3xl font-bold'>{items.productName}</h2>
                            <span className='text-xs text-grey'>Brand Apple | see other Apple products</span>
                            <h2 className='text-gray text-lg font-bold'>{items.price}</h2>
                            <p className='text-sm text-red_700'>+ shipping from NGN500 to Kubwa Abuja</p>
                            </div>
                        </div>
                        <div>
                              <div className='add-remove flex items-center gap-4'>
                              <div className='load bg-purple-700 text-white w-8 h-8 flex justify-center 
                                      items-center rounded-full cursor-pointer'>-</div>
                              <div className='item-no text-black text-2xl font-bold'>0</div>
                              <div className='load bg-purple-700 text-white w-8 h-8 flex justify-center 
                                  items-center rounded-full cursor-pointer'>+</div>
                            </div>
                          </div>
                    </div>
                  ))
                }
              </div>
          ) :
          (
            <p>Your cart is empty</p>
          )
        }
    </div>
  )
}

export default Cart