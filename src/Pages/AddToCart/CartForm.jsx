import React from 'react'
import { DoorDelivery, PickupStation } from '../../../assets'
import ReturnIcon from '../../../assets/images/Icons/ReturnIcon'

const CartForm = () => {
  return (
    <div className='cart-form bg-yellow-100 w-full md:w-2/5 p-8'>
      <div className='form'>
        <h1 className='text-xl mb-4'>Choose your location</h1>
        <div className='input-form flex flex-col gap-4'>
          <div className='inputs flex flex-col'>
            <label className='text-sm'>State</label>
            <select className='w-full md:w-80 h-12 border border-purple-500 rounded-lg p-2 mt-1'>
              <option>Choose State</option>
              <option>Abuja</option>
              <option>The Buj</option>
            </select>
          </div>
          <div className='inputs flex flex-col'>
            <label className='text-sm'>City</label>
            <select className='w-full md:w-80 h-12 border border-purple-500 rounded-lg p-2 mt-1'>
              <option>Choose City</option>
              <option>Kubwa</option>
              <option>Apo</option>
            </select>
          </div>
          <div className='inputs flex flex-col'>
            <label className='text-sm'>Mobile</label>
            <input
              placeholder='Enter mobile number'
              type='number'
              className='w-full md:w-80 h-12 border border-purple-500 rounded-lg p-2 mt-1'
            />
          </div>
          <div className='inputs flex flex-col'>
            <label className='text-sm'>Email</label>
            <input
              placeholder='Enter email'
              type='email'
              className='w-full md:w-80 h-12 border border-purple-500 rounded-lg p-2 mt-1'
            />
          </div>
        </div>
      </div>
      <div className='deli-ver mt-8'>
        <div className='deliver flex items-center mb-4 p-2 gap-4'>
          <DoorDelivery />
          <div>
            <h3 className='text-sm font-semibold'>Door Delivery</h3>
            <p className='text-xs'>Delivery fees NGN500</p>
            <p className='text-xs'>Ready for delivery between 30 November & 31 November when you order</p>
          </div>
        </div>
        <div className='deliver flex items-center mb-4 p-2 gap-4'>
          <PickupStation />
          <div>
            <h3 className='text-sm font-semibold'>Pickup Station</h3>
            <p className='text-xs'>Delivery fees NGN250</p>
            <p className='text-xs'>Ready for delivery between 30 November & 31 November when you order</p>
          </div>
        </div>
        <div className='deliver flex items-center mb-4 p-2 gap-4'>
          <ReturnIcon />
          <div>
            <h3 className='text-sm font-semibold'>Return Policy</h3>
            <p className='text-xs'>Return within 7 days for all eligible items</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default CartForm