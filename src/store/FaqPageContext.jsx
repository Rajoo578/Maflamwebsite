import React, { createContext, useState, useEffect, useContext } from "react";
import axios from "axios";
import { LanguageContext } from "../Component/LanguageContext/LanguageContext";

export const FaqPageContext = createContext();

export const FaqPageProvider = ({ children }) => {
  const [faqScreenDetails, setFaqScreenDetails] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const { language } = useContext(LanguageContext);

  const fetchfaqScreenDetails = async (langParam) => {
    try {
      setLoading(true);
      const response = await axios.get(
        `https://backend.maflam.com/maflam/get-faq?lang=${langParam}`

        // `http://192.168.1.39:3001/maflam/get-faq?lang=${langParam}`
      );
      // console.log("API Response:", response.data);

      setFaqScreenDetails(response.data);
      setLoading(false);
    } catch (err) {
      console.error("Error fetching FAQ data:", err);
      setError(err);
      setLoading(false);
    }
  };

  useEffect(() => {
    const langParam = language === "ar" ? 0 : 1;
    console.log("Fetching FAQ data for language:", langParam);
    fetchfaqScreenDetails(langParam);
  }, [language]);

  return (
    <FaqPageContext.Provider value={{ faqScreenDetails, loading, error }}>
      {children}
    </FaqPageContext.Provider>
  );
};
