import React, { createContext, useState, useEffect, useContext } from "react";
import axios from "axios";
import { LanguageContext } from "../Component/LanguageContext/LanguageContext.jsx";

export const HomePageContext = createContext();

export const HomePageProvider = ({ children }) => {
  const [homeScreenDetails, setHomeScreenDetails] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const { language } = useContext(LanguageContext);

  const fetchHomeScreenDetails = async (langParam) => {
    try {
      const response = await axios.get(
        // `http://3.29.25.216:3001/maflam/get-home-screen-details?lang=${langParam}`
        `https://backend.maflam.com/maflam/get-home-screen-details?lang=${langParam}`
        // 40.172.19.83
      );
      // console.log("API Response:", response.data);

      setHomeScreenDetails(response.data);
      setLoading(false);
    } catch (err) {
      setError(err);
      setLoading(false);
    }
  };

  useEffect(() => {
    const langParam = language === "ar" ? 0 : 1;
    fetchHomeScreenDetails(langParam);
  }, [language]);

  return (
    <HomePageContext.Provider value={{ homeScreenDetails, loading, error }}>
      {children}
    </HomePageContext.Provider>
  );
};
