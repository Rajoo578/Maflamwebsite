import React, { useContext, useEffect } from "react";

import {
  Navbar,
  BlogHero,
  LatestInsights,
  JoinUs,
  Footer,
  BlogPostHero1,
} from "../../Component";

import
{
  useScrollToTopWithDelay
} from  '../../hooks'

import { 
  BlogsPageContent, 
  BlogsPageContentProvider, 
  LanguageProvider, 
  AboutusPageContext, 
  AboutusPageProvider 
} from "../../store"; 

import styles from "./Blogs.module.css";

const Blogs = () => {
  
  useScrollToTopWithDelay(500)
  const { aboutusScreenDetails, loading: aboutLoading, error: aboutError } =
    useContext(AboutusPageContext);

  useEffect(() => {
    if (aboutusScreenDetails) {
      console.log("About Us Screen Details:", aboutusScreenDetails);
    }
  }, [aboutusScreenDetails]);

  const {
    blogsPageContentDetails,
    loading: blogsLoading,
    error: blogsError,
  } = useContext(BlogsPageContent) || {}; // Add a fallback here

  useEffect(() => {
    if (blogsPageContentDetails) {
      console.log("Blog Page Content Details:", blogsPageContentDetails);
    }
  }, [blogsPageContentDetails]);

  return (
    <div>
      <LanguageProvider>
        <AboutusPageProvider>
          <BlogsPageContentProvider>
            <div className={styles.topbg}>
            <BlogPostHero1 />
            <BlogHero/>
            <LatestInsights />
            </div>
            <div className={styles.container}>
              {/* <PopularResources /> */}
            </div>
          </BlogsPageContentProvider>
        </AboutusPageProvider>
      </LanguageProvider>
    </div>
  );
};

export default Blogs;
