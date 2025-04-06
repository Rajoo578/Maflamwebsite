import React, { createContext, useState, useEffect, useContext } from "react";
import axios from "axios";
import { LanguageContext } from "../Component/LanguageContext/LanguageContext";
// import { LanguageContext } from "../Component/LanguageContext/LanguageContext.jsx";

export const AboutusPageContext = createContext();

export const AboutusPageProvider = ({ children }) => {
  const [aboutusScreenDetails, setAboutusScreenDetails] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const { language } = useContext(LanguageContext);

  const fetchAboutUsScreenDetails = async (langParam) => {
    try {
      //   const response = await axios.get(`https://prominenttrades.in/maflam/get-Aboutus-screen-details?lang=${langParam}`
      //     // 40.172.19.83
      //     //   `http://3.29.25.216:3001/maflam/get-Aboutus-screen-details?lang=${langParam}`
      //   );
      const response = await axios.get(
        `https://backend.maflam.com/maflam/get-AboutUs-Details?lang=${langParam}`
        // const response = await axios.get(`http://192.168.1.39:3001/maflam/get-AboutUs-Details?lang=${langParam}`
        // 40.172.19.83
      );

      setAboutusScreenDetails(response.data);
      setLoading(false);
    } catch (err) {
      setError(err);
      setLoading(false);
    }
  };

  useEffect(() => {
    const langParam = language === "ar" ? 0 : 1;
    fetchAboutUsScreenDetails(langParam);
  }, [language]);

  return (
    <AboutusPageContext.Provider
      value={{ aboutusScreenDetails, loading, error }}
    >
      {children}
    </AboutusPageContext.Provider>
  );
};
