import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./BlogHero.module.css";
import { BlogsPageContent } from "../../store/BlogsPageContent.jsx";
import { LanguageContext } from "../LanguageContext/LanguageContext.jsx"; // Context providing language info

const BlogHero = () => {
  const { blogsPageContentDetails, loading, error } = useContext(BlogsPageContent);
  const { direction } = useContext(LanguageContext); // Assuming this provides 'ltr' or 'rtl'
  const navigate = useNavigate();

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error loading data</p>;

  const { formattedBlogDataforheader = [] } = blogsPageContentDetails || {};
  console.log(blogsPageContentDetails);
  if (!formattedBlogDataforheader.length) return <p>No blog data available</p>;

  // Function to handle "Continue Reading" button click
  const handleContinueReading = (id) => {
    navigate(`/blogDetails/${id}`);
  };

  return (
    <div style={{direction:'rtl'}} className={styles.blogDetails}>
      <h2> أحدث المقالات  </h2>
      <div className={styles.heroSection}>
        <div className={styles.featuredBlog}>
          <div className={styles.featuredContent}>
            <img
              src={formattedBlogDataforheader[0].blogImage}
              alt="Featured Blog"
              className={styles.featuredImage}
            />

            <h2 className={styles.featuredTitle}>
              {formattedBlogDataforheader[0].title}
            </h2>
            <p className={styles.featuredDescription}>
              {formattedBlogDataforheader[0].blogSubtitle1}
            </p>
            <button
              onClick={() => handleContinueReading(formattedBlogDataforheader[0].id)}
              className={styles.readMoreBtn}
            >
              {formattedBlogDataforheader[0].btnTitle}
              &nbsp;
              <span
                style={{
                  color: "white",
                  fontWeight: "700",
            
                  display: "inline-block",
                }}
              >
                                  <svg xmlns="http://www.w3.org/2000/svg" width="15" height="12" viewBox="0 0 15 12" fill="none">
<path d="M14 6L1.14286 6M1.14286 6L6.14286 11M1.14286 6L6.14286 0.999999" stroke="#F7FFFF" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
              </span>
            </button>
          </div>
        </div>

        <div className={styles.blogList}>
          {formattedBlogDataforheader.slice(1).map((post, index) => (
            <div key={index} className={styles.blogCard}>
              <img
                src={post.blogImage || "default-image-url.jpg"}
                alt={post.title}
                className={styles.blogImage}
              />
              <div className={styles.blogContent}>

                <h3 style={{fontSize:"20px"}} className={styles.title}>{post.title}</h3>
                <a style={{fontSize:"17px"}}
                  onClick={() => handleContinueReading(post.id)}
                  className={styles.readMore}
                >
                  {post.btnTitle}
                  <span
                    style={{
                      color: "white",
                      fontWeight: "700",
                      marginLeft:"10px",
                      marginRight:"10px",
                      display: "inline-block",
                    }}
                  >
                   <svg xmlns="http://www.w3.org/2000/svg" width="15" height="12" viewBox="0 0 15 12" fill="none">
<path d="M14 6L1.14286 6M1.14286 6L6.14286 11M1.14286 6L6.14286 0.999999" stroke="#F7FFFF" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
                  </span>
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default BlogHero;
