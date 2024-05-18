import React from 'react'

const StockIcon = () => {
  return (
    <div>
        <svg width="99" height="98" viewBox="0 0 99 98" fill="none" xmlns="http://www.w3.org/2000/svg">
        <g filter="url(#filter0_d_663_325)">
            <ellipse cx="49.4803" cy="40.943" rx="40.2014" ry="39.2785" fill="#9A0BB4"/>
        </g>
        <text x="50%" y="50%" dominantBaseline="middle" textAnchor="middle" fill="#ffffff" fontSize="16">
          In stock
        </text>
  <defs>
    <filter id="filter0_d_663_325" x="0.47893" y="0.864444" width="98.0027" height="96.1571" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
      <feFlood flood-opacity="0" result="BackgroundImageFix"/>
      <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
      <feOffset dy="8"/>
      <feGaussianBlur stdDeviation="4.4"/>
      <feComposite in2="hardAlpha" operator="out"/>
      <feColorMatrix type="matrix" values="0 0 0 0 0.334925 0 0 0 0 0.0228472 0 0 0 0 0.391667 0 0 0 0.11 0"/>
      <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_663_325"/>
      <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_663_325" result="shape"/>
    </filter>
  </defs>
</svg>
    </div>
  )
}

export default StockIcon