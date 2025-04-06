import React, { createContext, useState, useEffect, useContext } from "react";
import axios from "axios";
import { LanguageContext } from "../Component/LanguageContext/LanguageContext";

export const CommunityGuidelinesContext = createContext();

export const CommunityGuidelinesProvider = ({ children }) => {
  const [CommunityGuidelinesDetails, setCommunityGuidelinesDetails] =
    useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const { language } = useContext(LanguageContext);

  const fetchCommunityGuidelinesDetails = async (langParam) => {
    try {
      const response = await axios.get(
        `https://backend.maflam.com/maflam/get-communityguidelines?lang=${langParam}`
      );
      // console.log("API Response for Community Guidelines: ", response.data);

      setCommunityGuidelinesDetails(response.data);
      setLoading(false);
    } catch (err) {
      setError(err);
      setLoading(false);
    }
  };

  useEffect(() => {
    const langParam = language === "ar" ? 0 : 1;
    fetchCommunityGuidelinesDetails(langParam);
  }, [language]);

  return (
    <CommunityGuidelinesContext.Provider
      value={{ CommunityGuidelinesDetails, loading, error }}
    >
      {children}
    </CommunityGuidelinesContext.Provider>
  );
};
