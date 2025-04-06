import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import useScrollToTopWithDelay from '../../hooks/useScrollToTopWithDelay'; // Ensure correct path
import { LanguageProvider } from "../../Component/LanguageContext/LanguageContext";

const BlogEjsPage = () => {
  const { id } = useParams();
  const [blogData, setBlogData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Call the hook directly at the top level
  useScrollToTopWithDelay(500);

  useEffect(() => {
    const fetchBlogData = async () => {
      try {
        console.log("Fetching blog data for ID:", id);
        const response = await axios.get(`https://backend.maflam.com/maflam/get-blogs?lang=0&_id=${id}`);
        console.log("API Response:", response.data);
        setBlogData(response.data);
        setLoading(false);
      } catch (err) {
        console.error("API Error:", err);
        setError("Error fetching blog data");
        setLoading(false);
      }
    };

    fetchBlogData();
  }, [id]);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>{error}</p>;

  return (
    <div>
      <LanguageProvider>
        <div dangerouslySetInnerHTML={{ __html: blogData }} />
      </LanguageProvider>
    </div>
  );
};

export default BlogEjsPage;
