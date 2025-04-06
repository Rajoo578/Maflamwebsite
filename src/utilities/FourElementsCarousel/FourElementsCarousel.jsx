import React, { useState, useEffect } from 'react';
import Al from '../../assets/CarouselLeftArrow.png';
import Ar from '../../assets/Ar.png';

const FourElementsCarousel= ({ 
  itemWidth, 
  itemHeight, 
  items = [], 
  scalingRatio = 1,  
  margin = 10 
}) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [scrollDirection, setScrollDirection] = useState("right");  // New state to track direction
  const totalItems = items.length;

  const nextSlide = () => {
    setScrollDirection("right");  // Set direction to right
    setCurrentIndex((prevIndex) => (prevIndex + 1) % totalItems); 
  };

  const prevSlide = () => {
    setScrollDirection("left");  // Set direction to left
    setCurrentIndex((prevIndex) => (prevIndex - 1 + totalItems) % totalItems);  
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
    if (scrollDirection === "right") {
      // When scrolling right, fill items from current index to the right
      return [
        items[(currentIndex) % totalItems],
        items[(currentIndex + 1) % totalItems],
        items[(currentIndex + 2) % totalItems],
        items[(currentIndex + 3) % totalItems]
      ];
    } else {
      // When scrolling left, fill items from current index to the left
      return [
        items[(currentIndex - 3 + totalItems) % totalItems],
        items[(currentIndex - 2 + totalItems) % totalItems],
        items[(currentIndex - 1 + totalItems) % totalItems],
        items[currentIndex % totalItems]
      ];
    }
  };

  return (
    <div className="carousel">
      <button className="carousel-btn left" onClick={prevSlide}> 
        <img src={Al} alt="Left Arrow" /> 
      </button>

      {getVisibleItems().map((item, index) => (
        <div
          key={item?.id || index} 
          className={`carousel-item ${index === 1 ? "carousel-center" : ""}`}
          style={{
            width: `${itemWidth}px`, 
            height: `${itemHeight}px`,
            marginLeft: index !== 1 ? `${margin}px` : '0', 
            marginRight: index !== 1 ? `${margin}px` : '0', 
            transform: index === 1 ? `scale(${scalingRatio})` : 'scale(1)', 
          }}
        >
          {item?.content || <div>Placeholder</div>}
        </div>
      ))}

      <button className="carousel-btn right" onClick={nextSlide
      }> 
        <img src={Al} alt="Right Arrow" /> 
      </button>
    </div>
  );
};

export default FourElementsCarousel;
