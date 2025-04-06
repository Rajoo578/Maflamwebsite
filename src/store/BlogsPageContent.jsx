import React, { createContext, useState, useEffect, useContext } from "react";
import axios from "axios";
import { LanguageContext } from "../Component/LanguageContext/LanguageContext";
// import { LanguageContext } from "../Component/LanguageContext/LanguageContext.jsx";

export const BlogsPageContent = createContext();

export const BlogsPageContentProvider = ({ children }) => {
  const [blogsPageContentDetails, setBlogsPageContentDetails] = useState(null);
  //   const [blogsPageContentDetailsEjs, setBlogsPageContentDetailsEjs] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const { language } = useContext(LanguageContext);

  const fetchBlogsPageContent = async (langParam) => {
    try {
      //   const response = await axios.get(`https://prominenttrades.in/maflam/get-Aboutus-screen-details?lang=${langParam}`
      //     // 40.172.19.83
      //     //   `http://3.29.25.216:3001/maflam/get-Aboutus-screen-details?lang=${langParam}`
      //   );
      // const response = await axios.get(`https://backend.maflam.com/maflam/get-maflam-blogs-details?lang=${langParam}`
      const response = await axios.get(
        `https://backend.maflam.com/maflam/get-maflam-blogs-details-new?lang=${langParam}`
        // const response = await axios.get(`http://192.168.1.39:3001/maflam/get-AboutUs-Details?lang=${langParam}`
        // 40.172.19.83
      );
      // console.log("API Response: for blogs ", response.data);

      setBlogsPageContentDetails(response.data);
      setLoading(false);
    } catch (err) {
      setError(err);
      setLoading(false);
    }
  };

  //   const fetchBlogsPageContentEjs = async (langParam  , Id) => {
  //     try {
  //     //   const response = await axios.get(`https://prominenttrades.in/maflam/get-Aboutus-screen-details?lang=${langParam}`
  //     //     // 40.172.19.83
  //     //     //   `http://3.29.25.216:3001/maflam/get-Aboutus-screen-details?lang=${langParam}`
  //     //   );
  //     const response = await axios.get(`https://backend.maflam.com/maflam/get-blogs?lang=${langParam}&&_id=${Id}`
  //     // const response = await axios.get(`http://192.168.1.39:3001/maflam/get-AboutUs-Details?lang=${langParam}`
  //         // 40.172.19.83
  //       );
  //       console.log("API Response: for blogs ", response.data);

  //       setBlogsPageContentDetailsEjs(response.data);
  //       setLoading(false);
  //     } catch (err) {
  //       setError(err);
  //       setLoading(false);
  //     }
  //   };
  useEffect(() => {
    const langParam = language === "ar" ? 0 : 1;
    fetchBlogsPageContent(langParam);
    // fetchBlogsPageContentEjs(langParam);
  }, [language]);

  return (
    <BlogsPageContent.Provider
      value={{ blogsPageContentDetails, loading, error }}
    >
      {children}
    </BlogsPageContent.Provider>
  );
};
