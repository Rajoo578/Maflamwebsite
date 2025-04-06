import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

/**
 * Custom hook to scroll to an element by ID with a delay.
 * @param {string} elementId - The ID of the element to scroll to.
 * @param {number} delay - The delay in milliseconds before scrolling.
 */
const useScrollToElementWithDelay = (elementId, delay = 500) => {
  const location = useLocation();

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      const targetElement = document.getElementById(elementId); // Get the element by ID
      if (targetElement) {
        // Scroll to the element if it exists
        targetElement.scrollIntoView({ behavior: 'smooth' });
      }
    }, delay);

    // Cleanup the timeout if the location changes again before the scroll is triggered
    return () => clearTimeout(timeoutId);
  }, [location, elementId, delay]); // Runs whenever location, elementId, or delay changes
};

export default useScrollToElementWithDelay;
