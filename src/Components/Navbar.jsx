import React, { useContext, useEffect, useState } from 'react';
import { AccountIcon, CartIcon, Logo1 } from '../../assets';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
import { Link, useNavigate } from 'react-router-dom';
import { CartContext } from './CartContext';

const Navbar = () => {
  const navigate = useNavigate()
  const {cartItems} = useContext(CartContext)
 

  const handleCart = () => {
    navigate('/Cart');
  }

  return ( 
      <div className="nav flex items-center justify-between py-4 px-4 bg-white shadow-lg relative z-2">
        <Link to="/">
          <img src={Logo1} className="max-w-20" alt="Logo" />
        </Link>
        <div className="hidden md:block">
          <ul className="flex gap-8">
            <li><a href="#deals" className="text-gray-800">Deals</a></li>
            <li><a href="#whats-new" className="text-gray-800">What's new</a></li>
            <li><a href="#delivery" className="text-gray-800">Delivery</a></li>
          </ul>
        </div>
        <div className="w-full md:w-1/2 lg:w-2/5">
          <div className="flex items-center justify-center bg-gray-300 rounded-full">
            <input 
              type="text" 
              placeholder="Search..." 
              className="w-full px-4 py-2 rounded-full outline-none" />
          </div>
        </div>
        <div className="flex items-center gap-8">
          <a href="#account" className="flex items-center gap-2 text-gray-800">
            <div className="icon-container">
              <AccountIcon />
            </div>
            <span className='hidden md:block '>Account</span>
          </a>
          <p className="text-gray-800 hidden md:block">Help</p>
          <Link to="/Cart" className="flex items-center gap-2 text-gray-800">
            <div className="icon-container">
            <CartIcon 
              color={cartItems.length > 0 ? 'yellow' : 'black'} 
              itemCount={cartItems.length}
              onClick = {handleCart}
          />
            </div>
            <span className='hidden md:block'>Cart</span>
          </Link>
          <div className="md:hidden">
          <FontAwesomeIcon icon={faBars} />
        </div>
        </div>
      </div>
  );
};

export default Navbar;
