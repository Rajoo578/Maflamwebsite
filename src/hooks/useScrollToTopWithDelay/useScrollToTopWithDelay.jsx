import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

/**
 * Custom hook to scroll to the top of the page with a delay
 * @param {number} delay - The delay in milliseconds before scrolling
 */
const useScrollToTopWithDelay = (delay = 500) => {
  const location = useLocation();

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      // Ensure the scroll happens after the DOM is ready
      requestAnimationFrame(() => {
        window.scrollTo(0, 0); // Scroll to the top after the delay
      });
    }, delay);

    // Cleanup the timeout if the component is unmounted or the location changes again
    return () => clearTimeout(timeoutId);
  }, [location, delay]); // Runs whenever location changes or delay is updated
};

export default useScrollToTopWithDelay;