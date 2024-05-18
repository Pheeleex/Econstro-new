import React from 'react';

const Success = () => {
  return (
    <div className='success p-16 bg-success'>
      <div className='success-container mt-8 flex flex-col justify-center items-center gap-40'>
        <h2 className='text-2xl font-bold'>Successfully added to cart</h2>
        <div className='cart-btns flex gap-4'>
          <div className='cart-btn btn-1 bg-purple-700 text-white py-2 px-4 rounded-lg cursor-pointer'>Check Out</div>
          <div className='cart-btn btn-2 bg-gray-500 text-white py-2 px-4 rounded-lg cursor-pointer'>Maybe later</div>
        </div>
      </div>
    </div>
  );
}

export default Success;
