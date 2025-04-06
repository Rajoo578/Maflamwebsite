import React, { createContext, useState, useEffect, useContext } from "react";
import axios from "axios";
import { LanguageContext } from "../Component/LanguageContext/LanguageContext";

export const PurchaseCancellationContext = createContext();

export const PurchaseCancellationProvider = ({ children }) => {
  const [purchaseCancellationDetails, setpurchaseCancellationDetails] =
    useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const { language } = useContext(LanguageContext);

  const fetchpurchaseCancellationDetails = async (langParam) => {
    try {
      const response = await axios.get(
        `https://backend.maflam.com/maflam/get-purchases-cancellation-policy?lang=${langParam}`
      );
      // console.log("API Response for Purchase Cancellition: ", response.data);

      setpurchaseCancellationDetails(response.data);
      setLoading(false);
    } catch (err) {
      setError(err);
      setLoading(false);
    }
  };

  useEffect(() => {
    const langParam = language === "ar" ? 0 : 1;
    fetchpurchaseCancellationDetails(langParam);
  }, [language]);

  return (
    <PurchaseCancellationContext.Provider
      value={{ purchaseCancellationDetails, loading, error }}
    >
      {children}
    </PurchaseCancellationContext.Provider>
  );
};
