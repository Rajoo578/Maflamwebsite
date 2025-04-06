import { useEffect } from "react";

const useScrollPosition = (storageKey, timeout = 0) => {
  // Save scroll position in localStorage when the user scrolls
  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY; // Get the current vertical scroll position
      localStorage.setItem(storageKey, scrollY); // Save to localStorage
    };

    window.addEventListener("scroll", handleScroll);

    // Cleanup event listener on component unmount
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [storageKey]); // Runs whenever the `storageKey` changes

  // Restore scroll position when the component mounts
  useEffect(() => {
    const savedScrollY = localStorage.getItem(storageKey);

    if (savedScrollY) {
      setTimeout(() => {
        window.scrollTo(0, parseInt(savedScrollY, 10)); // Restore the scroll position
      }, timeout);
    }
  }, [storageKey, timeout]); // Runs whenever `storageKey` or `timeout` changes
};

export default useScrollPosition;
