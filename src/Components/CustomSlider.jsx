import React, { useState, useEffect } from 'react';

const dotsContainerStyles = {
  display: "flex",
  justifyContent: "center",
  cursor: "pointer"
};

const dotStyle = {
  margin: "0 3px",
  cursor: "pointer",
  fontSize: "20px",
  color: 'white',
  borderRadius: '50%',
};

const imageSlidesStyle = {
  width: "600.84px",
  height: "480.4px",
  display: "flex",
  flexDirection: "row-reverse",
};

const CustomSlider = ({ items }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % items.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [items.length]);

  const goToSlide = (index) => {
    setCurrentIndex(index);
  };

  return (
    <div className="custom-slider" style={imageSlidesStyle}>
      <div className="image-slide">
        <img
          src={items[currentIndex]}
          alt={`Slide ${currentIndex + 1}`}
          style={{ width: '100%', height: '100%' }}
        />
        <div style={dotsContainerStyles}>
          {items.map((slide, index) => (
            <div
              style={dotStyle}
              key={index}
              onClick={() => goToSlide(index)}
              className={`circle ${index === currentIndex ? 'activeDot' : ''}`}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default CustomSlider;
