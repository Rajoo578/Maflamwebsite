import React, { useState, useEffect, useContext, createContext } from "react";
import axios from "axios";
import { LanguageContext } from "../Component/LanguageContext/LanguageContext";

export const ContactUsContext = createContext();

export const ContactUsContextProvider = ({ children }) => {
  const [contactUsContextDetails, setContactUsContextDetails] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const { language } = useContext(LanguageContext);

  const fetchContactUsContextDetails = async (langParam) => {
    try {
      // const response = await axios.get(`http://192.168.1.39:3001/maflam/getEBooks?lang=${langParam}`
      //  const response = await axios.get(`http://192.168.1.39:3001/maflam/get-contact-details?lang=${langParam}`
      const response = await axios.get(
        `https://backend.maflam.com/maflam/get-contact-details?lang=${langParam}`
      );
      // console.log("API Response: contact  ", response.data);

      setContactUsContextDetails(response.data);
      setLoading(false);
    } catch (err) {
      setError(err);
      setLoading(false);
    }
  };

  useEffect(() => {
    const langParam = language === "ar" ? 0 : 1;
    fetchContactUsContextDetails(langParam);
  }, [language]);

  return (
    <ContactUsContext.Provider
      value={{ contactUsContextDetails, loading, error }}
    >
      {children}
    </ContactUsContext.Provider>
  );
};
