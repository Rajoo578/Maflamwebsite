import React, { useState, useEffect, useContext, createContext } from "react";
import axios from "axios";
import { LanguageContext } from "../Component/LanguageContext/LanguageContext";

export const ContactUs2Context = createContext();

export const ContactUs2ContextProvider = ({ children }) => {
  const [contactUs2ContextDetails, setContactUs2ContextDetails] =
    useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const { language } = useContext(LanguageContext);

  const fetchContactUs2ContextDetails = async (langParam) => {
    try {
      // const response = await axios.get(`http://192.168.1.39:3001/maflam/getEBooks?lang=${langParam}`
      //  const response = await axios.get(`http://192.168.1.39:3001/maflam/get-contact-details2?lang=${langParam}`
      const response = await axios.get(
        `https://backend.maflam.com/maflam/get-contact-details2?lang=${langParam}`
      );
      setContactUs2ContextDetails(response.data);
      setLoading(false);
    } catch (err) {
      setError(err);
      setLoading(false);
    }
  };
  useEffect(() => {
    const langParam = language === "ar" ? 0 : 1;
    fetchContactUs2ContextDetails(langParam);
  }, [language]);

  return (
    <ContactUs2Context.Provider
      value={{ contactUs2ContextDetails, loading, error }}
    >
      {children}
    </ContactUs2Context.Provider>
  );
};
