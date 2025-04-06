import React, { createContext, useState, useEffect, useContext } from "react";
import axios from "axios";
import { LanguageContext } from "../Component/LanguageContext/LanguageContext";

export const PrivacyPolicyContext = createContext();

export const PrivacyPolicyProvider = ({ children }) => {
  const [PrivacyPolicyDetails, setPrivacyPolicyDetails] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const { language } = useContext(LanguageContext);

  const fetchPrivacyPolicyDetails = async (langParam) => {
    try {
      const response = await axios.get(
        // `https://prominenttrades.in/maflam/get-TermsAndCondition?lang=${langParam}`
        `https://backend.maflam.com/maflam/get-policy?lang=${langParam}`
      );
      // console.log("API Response for Privacy Policy: ", response.data);

      setPrivacyPolicyDetails(response.data);
      setLoading(false);
    } catch (err) {
      setError(err);
      setLoading(false);
    }
  };

  useEffect(() => {
    const langParam = language === "ar" ? 0 : 1;
    fetchPrivacyPolicyDetails(langParam);
  }, [language]);

  return (
    <PrivacyPolicyContext.Provider
      value={{ PrivacyPolicyDetails, loading, error }}
    >
      {children}
    </PrivacyPolicyContext.Provider>
  );
};
