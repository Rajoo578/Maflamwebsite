import React, { useState, useEffect } from 'react';
import './SocialMediaCarousel.css';
import Al from '../../assets/CarouselLeftArrow.png'
import Ar from '../../assets/Ar.png'
const Carou = ({ 
  itemWidth, 
  itemHeight, 
  items = [], 
  scalingRatio = 1.3,  // Default scaling ratio for the centered item
  margin = 20 // Default margin between items
}) => {
  const [currentIndex, setCurrentIndex] = useState(1);
  const totalItems = items.length;

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % totalItems); 
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + totalItems) % totalItems);  // Circular loop
  };

  useEffect(() => {
    const handleKeyDown = (event) => {
      if (event.key === 'ArrowRight') {
        nextSlide();
      } else if (event.key === 'ArrowLeft') {
        prevSlide();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [currentIndex]);

  const getVisibleItems = () => {

    if(currentIndex==0 || currentIndex==totalItems-1)
      {
          const prevIndex = (currentIndex - 1 + totalItems) % totalItems; // Get the previous item (wrapping around)
          const nextIndex = (currentIndex + 1) % totalItems; // Get the next item (wrapping around)
          return [items[prevIndex], items[currentIndex], items[nextIndex]];
      }
      return items.slice(currentIndex-1,currentIndex+2);
  };

  return (
    <div className="carouselOSP">
      <button className="carousel-btnOSP left" onClick={prevSlide}> <img src={Al} alt="" /> </button>
      {getVisibleItems().map((item, index) => (
        <div
          key={item.id}
          className={`carousel-itemOSP ${index === 1 ? "carousel-centerOSP" : ""}`}
          style={{
            width: `${itemWidth}px`, 
            height: `${itemHeight}px`,
            marginLeft: index !== 1 ? `${margin}px` : '0', // Apply margin to non-centered items
            marginRight: index !== 1 ? `${margin}px` : '0', // Apply margin to non-centered items
            transform: index === 1 ? `scale(1.5)` : 'scale(0.9)', // Centered item scales based on the scalingRatio prop
          }}
        >
          {item.content}
        </div>
      ))}
      <button className="carousel-btnOSP right" onClick={nextSlide}> <img src={Ar} alt="" /> </button>
    </div>
  );
};

export default Carou;






