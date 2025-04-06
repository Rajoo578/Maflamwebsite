import React, { useContext, useState } from "react";
import styles from "./LatestInsights.module.css";
import { BlogsPageContent } from "../../store/BlogsPageContent.jsx";
import { LanguageContext } from "../LanguageContext/LanguageContext.jsx";

const LatestInsights = () => {
  const { blogsPageContentDetails, loading, error } = useContext(BlogsPageContent);
  const [visibleCount, setVisibleCount] = useState(2); // Initial insights to display
  const [showAll, setShowAll] = useState(false); // Toggle between showing all and minimum
  const { language } = useContext(LanguageContext); // Assuming LanguageContext provides language info (like "en" or "ar")

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error loading data</p>;

  // Destructure otherBlogDataforbody from context
  const { otherBlogDataforbody = [] } = blogsPageContentDetails || {};

  // Function to handle toggling between load more and show less
  const toggleInsights = () => {
    if (showAll) {
      setVisibleCount(2); // Show minimum if toggling back
    } else {
      setVisibleCount(otherBlogDataforbody.length); // Show all
    }
    setShowAll(!showAll); // Toggle the showAll state
  };

  const isRTL = language === "ar"; // Check if the language is Arabic or RTL
  const arrowStyle = {
    transform: isRTL ? "scaleX(-1)" : "none",
    display: "inline-block",
  };

  return (
    <section style={{direction:'rtl'}} className={styles.insightsSection}>
      <hr style={{ opacity: "0.2" }} />
      <h2 className={styles.heading}>المقالات الأكثر شيوعًا </h2>
      <div className={styles.insightsContainer}>
        {/* Render otherBlogDataforbody data */}
        {otherBlogDataforbody.slice(0, visibleCount).map((blog, index) => (
          <div key={index} className={styles.insightCard}>
            <img
              src={blog.blogImage}
              alt={blog.title}
              className={styles.insightImage}
            />
            <div className={styles.cardContent}>
             
              <p className={styles.title}>{blog.title}</p>
              <a href="/blogDetails" className={styles.readMore}>
                {blog.btnTitle}{" "}
                <span
                  style={{
                    color: "white",
                    fontWeight: "700",
                    display: "inline-block",
                  }}
                >
                  <svg xmlns="http://www.w3.org/2000/svg" width="15" height="12" viewBox="0 0 15 12" fill="none">
                    <path d="M13.9995 6L1.14237 6M1.14237 6L6.14237 11M1.14237 6L6.14237 0.999999" stroke="#F7FFFF" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                  </svg>
                </span>
              </a>
            </div>
          </div>
        ))}
      </div>

      {/* Conditionally render the "Load More" or "Show Less" button */}
      {otherBlogDataforbody.length > 2 && (
        <button
          onClick={toggleInsights}
          className={styles.loadMoreBtn}
          style={{
            backgroundColor: "#39FFFB",
            color: "black",
            height: "64px",
            borderRadius: "32px",
            fontSize: "17px",
            fontWeight: "700",
          }}
        >
          {showAll ? "Show Less" : ` تحميل المزيد  (${otherBlogDataforbody.length - visibleCount})`}
        </button>
      )}
    </section>
  );
};

export default LatestInsights;
