
import React, { createContext, useState, useEffect, useContext } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import { LanguageContext } from "../Component/LanguageContext/LanguageContext";

export const FilmProductionContext = createContext();

export const FilmProductionProvider = ({ children }) => {
  const { language } = useContext(LanguageContext);
  const { courseId } = useParams(); // Get courseId from URL
  const [filmproductionScreenDetails, setFilmproductionScreenDetails] =
    useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const fetchFilmProductionScreenDetails = async (langParam, idParam, idType) => {
    try {
      let url = "";
      
      if (idType === "_id") {

     
        url = `https://backend.maflam.com/maflam/get-courses-by-id?lang=${langParam}&&_id=${idParam}&&insId=0`;
      } else if (idType === "insId")
      {
       
        url = `https://backend.maflam.com/maflam/get-courses-by-id?lang=${langParam}&&_id=0&&insId=${idParam}`;
      }

      const response = await axios.get(url);
      setFilmproductionScreenDetails(response.data);
      setLoading(false);
    } catch (err) {
      setError(err);
      setLoading(false);
    }
  };

  useEffect(() => {
    if (courseId) {
      const langParam = language === "ar" ? 0 : 1;
      const idType = courseId.startsWith("67") ? "_id" : "insId";
      fetchFilmProductionScreenDetails(langParam, courseId, idType);
    }
  }, [language, courseId]);

  return (
    <FilmProductionContext.Provider
      value={{ filmproductionScreenDetails, loading, error }}
    >
      {children}
    </FilmProductionContext.Provider>
  );
};