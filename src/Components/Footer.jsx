import React from 'react';
import { Logo1 } from '../../assets';


const Footer = () => {
  return (
    <div className="footer flex justify-center items-center">
      <div className='foot1'>
        <img src={Logo1} alt='footer' className="w-36 h-auto" />
      </div>
      <div className="foot2 flex flex-col items-start">
        <h2 className="text-lg font-semibold">New to constro</h2>
        <p className="text-sm font-light mb-2">Subscribe to our newsletter and updates</p>
        <div className='input flex'>
          <input type="email" className="max-w-60 h-10 rounded-lg bg-gray-300 px-2 mr-0" placeholder="Your email" />
          <button className="purple ml-0 h-10 bg-pink-500 text-white px-4 rounded-lg">Subscribe</button>
        </div>
      </div>
    </div>
  );
};

export default Footer;
