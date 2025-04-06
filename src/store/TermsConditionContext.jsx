import React, { createContext, useState, useEffect, useContext } from "react";
import axios from "axios";
import { LanguageContext } from "../Component/LanguageContext/LanguageContext";

export const TermsConditionContext = createContext();

export const TermsConditionProvider = ({ children }) => {
  const [termsConditionDetails, setTermsConditionDetails] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const { language } = useContext(LanguageContext);

  const fetchTermsConditionDetails = async (langParam) => {
    try {
      const response = await axios.get(
        // `https://prominenttrades.in/maflam/get-TermsAndCondition?lang=${langParam}`
        `https://backend.maflam.com/maflam/get-TermsAndCondition?lang=${langParam}`
      );
      // console.log("API Response for Terms and Conditions: ", response.data);

      setTermsConditionDetails(response.data);
      setLoading(false);
    } catch (err) {
      setError(err);
      setLoading(false);
    }
  };

  useEffect(() => {
    const langParam = language === "ar" ? 0 : 1;
    fetchTermsConditionDetails(langParam);
  }, [language]);

  return (
    <TermsConditionContext.Provider
      value={{ termsConditionDetails, loading, error }}
    >
      {children}
    </TermsConditionContext.Provider>
  );
};
