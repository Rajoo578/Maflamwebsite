import React, { createContext, useContext, useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

const LastUrlContext = createContext();

export const LastUrlProvider = ({ children }) => {
  const location = useLocation();
  const [lastUrl, setLastUrl] = useState(localStorage.getItem("lastUrl") || "");

  useEffect(() => {
    const currentUrl = location.pathname + location.search;

    // Update last URL to the one previously stored as current
    if (currentUrl !== lastUrl) {
      const previousUrl = localStorage.getItem("currentUrl") || "";
      setLastUrl(previousUrl);

      // Update localStorage
      localStorage.setItem("lastUrl", previousUrl);
      localStorage.setItem("currentUrl", currentUrl);
    }
  }, [location]);

  return (
    <LastUrlContext.Provider value={lastUrl}>
      {children}
    </LastUrlContext.Provider>
  );
};

export const useLastUrl = () => {
  return useContext(LastUrlContext);
};
