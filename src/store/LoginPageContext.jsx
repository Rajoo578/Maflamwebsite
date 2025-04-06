import React, { useState, useEffect, useContext, createContext } from "react";
import axios from "axios";
import { LanguageContext } from "../Component/LanguageContext/LanguageContext";
export const LoginPageContext = createContext();

export const LoginPageContextProvider = ({ children }) => {
  const [loginPageContexttDetails, setLoginPageContextDetails] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const { language } = useContext(LanguageContext);

  const fetchLoginPageContextDetails = async (langParam) => {
    try {
      const response = await axios.get(
        `https://backend.maflam.com/maflam/get-LogIn-Details?lang=${langParam}`
      );
      // console.log("API Response: login  ", response.data);

      setLoginPageContextDetails(response.data);
      setLoading(false);
    } catch (err) {
      setError(err);
      setLoading(false);
    }
  };

  useEffect(() => {
    const langParam = language === "ar" ? 0 : 1;
    fetchLoginPageContextDetails(langParam);
  }, [language]);

  return (
    <LoginPageContext.Provider
      value={{ loginPageContexttDetails, loading, error }}
    >
      {children}
    </LoginPageContext.Provider>
  );
};
