// import React, { useState, useEffect, useContext, createContext } from "react";
// import axios from "axios";
// import { LanguageContext } from "../Component/LanguageContext/LanguageContext";

// export const CheckoutPaymentContext = createContext();

// export const CheckoutPaymentContextProvider = ({ children }) => {
//   const [checkoutPaymentContextDetails, setCheckoutPaymentContextDetails] =
//     useState(null);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState(null);

//   const { language } = useContext(LanguageContext);

//   const fetchPaymentContextDetails = async (langParam) => {
//     try {
//       // const response = await axios.get(`http://192.168.1.39:3001/maflam/getEBooks?lang=${langParam}`
//       const response = await axios.get(
//         `https://backend.maflam.com/maflam/get-maflam-pricing-details?lang=${langParam}`
//       );
//       // console.log("API Response: checkout  ", response.data);

//       setCheckoutPaymentContextDetails(response.data);
//       setLoading(false);
//     } catch (err) {
//       setError(err);
//       setLoading(false);
//     }
//   };

//   useEffect(() => {
//     const langParam = language === "ar" ? 0 : 1;
//     fetchPaymentContextDetails(langParam);
//   }, [language]);

//   return (
//     <CheckoutPaymentContext.Provider
//       value={{ checkoutPaymentContextDetails, loading, error }}
//     >
//       {children}
//     </CheckoutPaymentContext.Provider>
//   );
// };



import React, { useState, useEffect, useContext, createContext } from "react";
import axios from "axios";
import { LanguageContext } from "../Component/LanguageContext/LanguageContext";
import { useParams } from "react-router-dom";

export const CheckoutPaymentContext = createContext();

export const CheckoutPaymentContextProvider = ({ children }) => {
  const [checkoutPaymentContextDetails, setCheckoutPaymentContextDetails] =
    useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const { paymentId} = useParams()

  const { language } = useContext(LanguageContext);

  const fetchPaymentContextDetails = async (langParam) => {
    try {
      // const response = await axios.get(`http://192.168.1.39:3001/maflam/getEBooks?lang=${langParam}`
      const response = await axios.get(
        `https://backend.maflam.com/maflam/get-maflam-pricing-details?lang=${langParam}&&_id=${paymentId}`
      );
      // console.log("API Response: checkout  ", response.data);

      setCheckoutPaymentContextDetails(response.data);
      setLoading(false);
    } catch (err) {
      setError(err);
      setLoading(false);
    }
  };


  useEffect(() => {
    if (paymentId) {
      const langParam = language === "ar" ? 0 : 1;
      fetchPaymentContextDetails(langParam);
    }
  }, [language, paymentId]);

  // useEffect(() => {
  //   const langParam = language === "ar" ? 0 : 1;
  //   fetchPaymentContextDetails(langParam);
  // }, [language,paymentId]);

  return (
    <CheckoutPaymentContext.Provider
      value={{ checkoutPaymentContextDetails, loading, error }}
    >
      {children}
    </CheckoutPaymentContext.Provider>
  );
};
