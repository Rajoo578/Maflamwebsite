


import React, { createContext, useState, useEffect, useContext } from "react";
import axios from "axios";
import { LanguageContext } from "../Component/LanguageContext/LanguageContext";

// Context Creation
export const SocialMediaPageContext = createContext();

// Provider Component
export const SocialMediaPageProvider = ({ children }) => {
  const [socialMediaPageDetails, setSocialMediaPageDetails] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const { language } = useContext(LanguageContext);

  const fetchSocialMediaPageDetails = async (langParam) => {
    try {
      const response = await axios.get(
        `https://backend.maflam.com/maflam/get-socialMedia-page-details?lang=${langParam}`
      );

      setSocialMediaPageDetails(response.data);
      console.log("socilmedia",response )
      setLoading(false);
    } catch (err) {
      setError(err);
      setLoading(false);
    }
  };

  useEffect(() => {
    const langParam = language === "ar" ? 0 : 1;
    fetchSocialMediaPageDetails(langParam);
  }, [language]);

  return (
    <SocialMediaPageContext.Provider
      value={{ socialMediaPageDetails, loading, error }}
    >
      {children}
    </SocialMediaPageContext.Provider>
  );
};



// import React, { createContext, useState, useEffect, useContext } from "react";
// import axios from "axios";
// import { LanguageContext } from "../Component/LanguageContext/LanguageContext";

// export const SocilaMediaPageContext = createContext();

// export const SocilaMediaPageProvider = ({ children }) => {
//   const [socilaMediaPageDetails, setSocilaMediaPageDetails] = useState(null);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState(null);

//   const { language } = useContext(LanguageContext);

//   const fetchSocilaMediaPageDetails = async (langParam) => {
//     try {
//       const response = await axios.get(
//         // `https://prominenttrades.in/maflam/get-TermsAndCondition?lang=${langParam}`
//         `https://backend.maflam.com/maflam/get-socialMedia-page-details?lang=${langParam}`
//       );
//       // console.log("API Response for Terms and Conditions: ", response.data);

//       setSocilaMediaPageDetails(response.data);
//       setLoading(false);
//     } catch (err) {
//       setError(err);
//       setLoading(false);
//     }
//   };

//   useEffect(() => {
//     const langParam = language === "ar" ? 0 : 1;
//     fetchSocilaMediaPageDetails(langParam);
//   }, [language]);

//   return (
//     < SocilaMediaPageContext.Provider
//       value={{ socilaMediaPageDetails, loading, error }}
//     >
//       {children}
//     </ SocilaMediaPageContext.Provider>
//   );
// };
