import React, { useState, useEffect, useContext, createContext } from "react";
import axios from "axios";
import { LanguageContext } from "../Component/LanguageContext/LanguageContext";

export const ContactUs3Context = createContext();

export const ContactUs3ContextProvider = ({ children }) => {
  const [ContactUs3ContextDetails, setContactUs3ContextDetails] =
    useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const { language } = useContext(LanguageContext);

  const fetchContactUs3ContextDetails = async (langParam) => {
    try {
      // const response = await axios.get(`http://192.168.1.39:3001/maflam/getEBooks?lang=${langParam}`
      //  const response = await axios.get(`http://192.168.1.39:3001/maflam/get-contact-details2?lang=${langParam}`
      const response = await axios.get(
        `https://backend.maflam.com/maflam/get-contact-details3?lang=${langParam}`
      );
      // console.log("API Response: contact form 3 ", response.data);
      setContactUs3ContextDetails(response.data);
      setLoading(false);
    } catch (err) {
      setError(err);
      setLoading(false);
    }
  };
  useEffect(() => {
    const langParam = language === "ar" ? 0 : 1;
    fetchContactUs3ContextDetails(langParam);
  }, [language]);

  return (
    <ContactUs3Context.Provider
      value={{ ContactUs3ContextDetails, loading, error }}
    >
      {children}
    </ContactUs3Context.Provider>
  );
};
