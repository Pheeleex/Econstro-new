import React from 'react'
import { StarsIcon } from '../../../assets'
import LoveIcon from '../../../assets/images/Icons/loveIcon'

const MoreItems = ({groupItems}) => {
    return (
      <div className="more-items">
          <div className="products">
              <h2>Check other Items</h2>
              <div className="card-container flex flex-col md:flex-row">
                  {groupItems.map((item)=> (
                          <div className='card-desc flex flex-col'>
                          <div className="card">
                           <div className="icons flex justify-between w-full">
                             <StarsIcon />
                             <LoveIcon />
                           </div>
                 
                           <div className="content flex justify-center items-center">
                             <div className="image w-3/4" style={item.style}>
                               <img src={item.src} key={item.id} alt="Smartwatch" 
                               className="h-48 object-contain" style={item.imgStyle} />
                             </div>
                           </div>
                         </div>
                         <div className="description mt-4">
                         <h2 className='text-lg font-semibold'>{item.productName}</h2>
                         <span>{item.info}</span>
                         <h3>{item.price}</h3>
                         <span>{item.formerPrice}</span>
                       </div>
                       </div>
                  ))}
                  
              </div>
          </div>
      </div>
    )
  }


export default MoreItems