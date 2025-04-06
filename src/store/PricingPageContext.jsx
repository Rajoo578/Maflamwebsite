import React, { useState, useEffect, useContext, createContext } from "react";
import { useParams } from "react-router-dom"; // Import useParams for URL parameters
import axios from "axios";
import { LanguageContext } from "../Component/LanguageContext/LanguageContext";

export const PricingPageContext = createContext();

export const PricingPageContextProvider = ({ children }) => {
  const [pricingPageContextDetails, setPricingPageContextDetails] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const { language } = useContext(LanguageContext);
  const { category } = useParams(); // Get the 'category' from the URL

  const fetchPricingPageContextDetails = async (langParam, categoryParam) => {
    try {
      const response = await axios.get(
        `https://backend.maflam.com/maflam/get-pricing-course-category?lang=${langParam}&&category=${categoryParam}&&_id=672c6953bd321f82ce18327a&&insId=0
        `
      );
      setPricingPageContextDetails(response.data);
      setLoading(false);
    } catch (err) {
      setError(err);
      setLoading(false); 
    }
  };

  useEffect(() => {
    const langParam = language === "ar" ? 0 : 1;
    fetchPricingPageContextDetails(langParam, category || "All");
  }, [language, category]); // React to changes in language and category

  return (
    <PricingPageContext.Provider
      value={{
        pricingPageContextDetails,
        loading,
        error,
      }}
    >
      {children}
    </PricingPageContext.Provider>
  );
};


// import React, { useState, useEffect, useContext, createContext } from "react";
// import axios from "axios";
// import { LanguageContext } from "../Component/LanguageContext/LanguageContext";

// export const PricingPageContext = createContext();

// export const PricingPageContextProvider = ({ children }) => {
//   const [pricingPageContextDetails, setPricingPageContextDetails] =
//     useState(null);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState(null);

//   const { language } = useContext(LanguageContext);

//   const fetchPricingPageContextDetails = async (langParam) => {
//     try {
//       // const response = await axios.get(`http://192.168.1.39:3001/maflam/getEBooks?lang=${langParam}`
//       const response = await axios.get(
//         `https://backend.maflam.com/maflam/get-pricing-course-category?lang=${langParam}&&category=All`
//       );
//       // console.log("API Response: pricing  ", response.data);

//       setPricingPageContextDetails(response.data);
//       setLoading(false);
//     } catch (err) {
//       setError(err);
//       setLoading(false);
//     }
//   };

//   useEffect(() => {
//     const langParam = language === "ar" ? 0 : 1;
//     fetchPricingPageContextDetails(langParam);
//   }, [language]);

//   return (
//     <PricingPageContext.Provider
//       value={{ pricingPageContextDetails, loading, error }}
//     >
//       {children}
//     </PricingPageContext.Provider>
//   );
// };
