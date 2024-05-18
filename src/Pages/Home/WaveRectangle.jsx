import React from 'react';
import './WaveRectangle.css'; // Make sure to adjust the path

const WaveRectangle = () => {
  return(
    <div className='wave-container'>
        <div className='wave'>
            <svg width="100%" height="317" viewBox="0 0 1434 317" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M1434 17.9582C1434 17.9582 1125.34 86.0846 972.496 75.113C819.651 
            64.1414 587.662 21.2752 341.329 4.9453C94.9954 -11.3846 -44 17.9582 
            -44 17.9582V317H1434V17.9582Z" fill="#660078"/>
            </svg>
        </div>
        <div className='numbers'>
            <div className='number-tag'>
                <h2>5000+</h2>
                <span>Reviews</span>
            </div>

            <div className='number-tag'>
                <h2>3000+</h2>
                <span>Customers</span>
            </div>

            <div className='number-tag'>
                <h2>3000+</h2>
                <span>Customers</span>
            </div>
        </div>
</div>
  )
};

export default WaveRectangle;
