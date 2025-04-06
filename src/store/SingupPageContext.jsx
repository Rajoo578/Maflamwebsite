import React, { useState, useEffect, useContext, createContext } from "react";
import axios from "axios";
import { LanguageContext } from "../Component/LanguageContext/LanguageContext";
// import { LanguageContext } from "../Component/LanguageContext/LanguageContext.jsx";

export const SingupPageContext = createContext();

export const SingupPageContextProvider = ({ children }) => {
  const [singupPageContextDetails, setSingupPageContextDetails] =
    useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const { language } = useContext(LanguageContext);

  const fetchSingupPageContextDetails = async (langParam) => {
    try {
      // const response = await axios.get(`http://192.168.1.39:3001/maflam/getEBooks?lang=${langParam}`
      const response = await axios.get(
        `https://backend.maflam.com/maflam/get-SignUp-Details?lang=${langParam}`
      );
      // console.log("API Response: login  ", response.data);

      setSingupPageContextDetails(response.data);
      setLoading(false);
    } catch (err) {
      setError(err);
      setLoading(false);
    }
  };

  useEffect(() => {
    const langParam = language === "ar" ? 0 : 1;
    fetchSingupPageContextDetails(langParam);
  }, [language]);

  return (
    <SingupPageContext.Provider
      value={{ singupPageContextDetails, loading, error }}
    >
      {children}
    </SingupPageContext.Provider>
  );
};

// import React, { useState, useEffect, useContext, createContext } from "react";
// import axios from "axios";
// import { LanguageContext } from "../Component/LanguageContext/LanguageContext";

// export const SingupPageContext = createContext();

// export const SingupPageContextProvider = ({ children }) => {
//   const [singupPageContextDetails, setSingupPageContextDetails] = useState(null);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState(null);

//   const { language } = useContext(LanguageContext);

//   const fetchSingupPageContextDetails = async (langParam) => {
//     try {
//       const response = await axios.get(
//         `https://prominenttrades.in/maflam/get-SignUp-Details?lang=${langParam}`
//       );
//       console.log("API Response: ", response.data);
//       setSingupPageContextDetails(response.data);
//       setLoading(false);
//     } catch (err) {
//       setError(err);
//       setLoading(false);
//     }
//   };

//   // POST request for form submission
//   const handleSubmit = async (formData ,langParam ) => {
//     const { username, emailId, password, confirmPassword, phone, dateofBirth } = formData;

//     // Format dateofBirth for API submission
//     const formattedDOB = `${dateofBirth.year}-${dateofBirth.month.padStart(2, '0')}-${dateofBirth.day.padStart(2, '0')}`;

//     try {
//     //   const langParam = language === "ar" ? 0 : 1;
//       const response = await axios.post(
//         `https://prominenttrades.in/maflam/sign-up?lang=${langParam}`,
//         {
//           username,
//           emailId,
//           password,
//           confirmPassword,
//           phone,
//           dateofBirth: formattedDOB,
//         }
//       );

//       if (response.data) {
//         alert("Sign Up Successfully");
//         return true; // Return success
//       } else {
//         throw new Error("Invalid response from server");
//       }
//     } catch (err) {
//       console.error("Sign Up Error:", err);
//       setError("Sign Up failed. Please check your details.");
//       return false; // Return failure
//     }
//   };

//   useEffect(() => {
//     const langParam = language === "ar" ? 0 : 1;
//     fetchSingupPageContextDetails(langParam);
//     handleSubmit(langParam)
//   }, [language]);

//   return (
//     <SingupPageContext.Provider value={{ singupPageContextDetails, loading, error, handleSubmit }}>
//       {children}
//     </SingupPageContext.Provider>
//   );
// };
