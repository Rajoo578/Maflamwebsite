import React, { useState, useEffect, useContext, createContext } from "react";
import axios from "axios";
import { LanguageContext } from "../Component/LanguageContext/LanguageContext";
// import { LanguageContext } from "../Component/LanguageContext/LanguageContext.jsx";

export const EbookPageContext = createContext();

export const EbookPageContextProvider = ({ children }) => {
  const [ebookPageContextDetails, setEbookPageContextDetails] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const { language } = useContext(LanguageContext);

  const fetchebookPageContextDetails = async (langParam) => {
    try {
      // const response = await axios.get(`http://192.168.1.39:3001/maflam/getEBooks?lang=${langParam}`
      const response = await axios.get(
        `https://backend.maflam.com/maflam/getEBooks?lang=${langParam}`
      );
      // console.log("API Response: ebooks  ", response.data);

      setEbookPageContextDetails(response.data);
      setLoading(false);
    } catch (err) {
      setError(err);
      setLoading(false);
    }
  };

  useEffect(() => {
    const langParam = language === "ar" ? 0 : 1;
    fetchebookPageContextDetails(langParam);
  }, [language]);

  return (
    <EbookPageContext.Provider
      value={{ ebookPageContextDetails, loading, error }}
    >
      {children}
    </EbookPageContext.Provider>
  );
};
