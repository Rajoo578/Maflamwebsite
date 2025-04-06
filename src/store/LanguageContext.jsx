
import { createContext, useState, useEffect } from "react";


export const LanguageContext = createContext();

export const LanguageProvider = ({ children }) => {

  const [language, setLanguage] = useState(localStorage.getItem("language") || "ar");
  const [direction, setDirection] = useState(localStorage.getItem("direction") || "rtl");

  useEffect(() => {

    if (language === "ar") {
      document.body.dir = "rtl";
      setDirection("rtl");
    } else {
      document.body.dir = "ltr";
      setDirection("ltr");
    }

  
    localStorage.setItem("language", language);
    localStorage.setItem("direction", direction);
  }, [language, direction]);

  const toggleLanguage = () => {

    setLanguage((prevLanguage) => (prevLanguage === "en" ? "ar" : "en"));
  };

  return (
    <LanguageContext.Provider value={{ language, direction, toggleLanguage }}>
      {children}
    </LanguageContext.Provider>
  );
};



// import { createContext, useState, useEffect } from "react";

// // Create the context
// export const LanguageContext = createContext();

// export const LanguageProvider = ({ children }) => {
//   const [language, setLanguage] = useState("ar");
//   const [direction, setDirection] = useState("rtl");

//   useEffect(() => {
//     if (language === "ar") {
//       document.body.dir = "rtl";
//       setDirection("rtl");
//     } else {
//       document.body.dir = "ltr";
//       setDirection("ltr");
//     }
//   }, [language]);

//   const toggleLanguage = () => {
//     setLanguage((prevLanguage) => (prevLanguage === "en" ? "ar" : "en"));
//   };

//   return (
//     <LanguageContext.Provider value={{ language, direction, toggleLanguage }}>
//       {children}
//     </LanguageContext.Provider>
//   );
// };


