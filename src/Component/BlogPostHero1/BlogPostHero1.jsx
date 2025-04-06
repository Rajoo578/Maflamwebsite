import React, { useContext } from "react";
import styles from "./BlogPostHero1.module.css";
// import stylesArabic from "./BlogPostHero1Arabic.module.css";
// import { LanguageContext } from "../../Component/LanguageContext/LanguageContext.jsx";
import { assests } from "../../assets/assests";
import { BlogsPageContent } from "../../store/BlogsPageContent";
import blogsearch from "../../assets/BlogSearch.png"

export default function BlogPostHero1() {
  const { blogsPageContentDetails, loading, error } = useContext(BlogsPageContent);

  if (loading) return <p>Loading...</p>; // Handle loading state
  if (error) return <p>Error loading data</p>; // Handle error state

  // Destructure blogTitle data from context
  const { blogTitle = [] } = blogsPageContentDetails || {};

  console.log("blogs")

  return (
    <div className={styles.header}>
      <div>
        <h1>{blogTitle[0]?.title || "Read and Explore Various Articles in the Film Industry"}</h1>
        <div className={styles.searchBar}>
          <div className={styles.searchBox}>
          <input type="text" placeholder={blogTitle[1]?.title || "Search"} />
          <span className={styles.searchlogo}><img src={blogTitle} alt="" /></span>
          </div>
          <button className={styles.categoryButton}>
            <span style={{ position:"absolute", left:'30px', fontSize:'17px', fontWeight:'700'}}>  {blogTitle[2]?.title || "Category"}  </span>
            <img  style={{ position:"absolute", right:'30px', fontSize:'17px', fontWeight:'700'}}  src={assests.filter} alt="Search Icon" />
          </button>
        </div>
      </div>
    </div>
  );
}