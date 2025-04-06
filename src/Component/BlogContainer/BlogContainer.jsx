

import { useContext } from "react";
import styles from "./BlogContainer.module.css";
import stylesEng from "./BlogContainerEng.module.css";
import { Link } from "react-router-dom";
import { HomePageContext } from "../../store/HomePageContext.jsx";
import { LanguageContext } from "../../Component/LanguageContext/LanguageContext.jsx";
import RightNavArrow from "../../assets/rightNavArrow.png";
import LeftNavArrow from "../../assets/leftNavArrow.png";

function BlogContainer() {
  const { homeScreenDetails, loading, error } = useContext(HomePageContext);
  const { language } = useContext(LanguageContext);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error loading data</p>;

  const stylesSelected = language === "ar" ? styles : stylesEng;
  const arrow = (
    <img
      src={language === "ar" ? LeftNavArrow : RightNavArrow}
      alt="Navigation Arrow"
      style={{ marginRight: "10px" }}
    />
  );

  // Use the patched 
  const blogtitle1 = homeScreenDetails?.blogTitle?.title || [];
  const blogData = homeScreenDetails?.blogData || [];
  const primaryBlog = blogData[0] || {}; // Main blog
  const continueReading = blogData[1] || {}; // Continue reading section

  return (
    <div className="parentcont" style={{ marginTop: "150px" }}>
      <div className={stylesSelected.MainContainer}>
        {/* Blog Title */}
        <Link
          style={{
            marginBottom: "20px",
            textAlign: "center",
            display: "block",
          }}
          to="/R2/blogs"
        >
          {blogtitle1 || "Default Blog Title"}
        </Link>

        {/* Blog Image and Content */}
        <div className={stylesSelected.pricingimg}>
          <img
            src={primaryBlog.imageUrl || ""}
            alt={primaryBlog.title || "Blog"}
          />
          <div className={stylesSelected.contentContainer}>
            <h2>{primaryBlog.title || "Default Blog Subtitle"}</h2>
            <p>{primaryBlog.subTitle || "No description available."}</p>

            {/* Continue Reading Section */}
            <div>
              <h5>
                <Link to="/blogs">
                  {continueReading.title || "Continue reading"}{" "}
                  <span className={stylesSelected.continuereadingarrow}>→</span>
                </Link>
              </h5>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default BlogContainer;


