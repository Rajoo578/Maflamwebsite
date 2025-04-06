import React, { useContext, useEffect,useRef } from "react";
import {  EBooksCards, JoinUs } from "../../Component";


import { LanguageProvider } from "../../Component/LanguageContext/LanguageContext";
import { 
  AboutusPageContext, 
  AboutusPageProvider, 
  EbookPageContext, 
  EbookPageContextProvider 
} from "../../store";  // Importing from store/index.js

import
{
  useScrollToTopWithDelay
} from  '../../hooks'

import "./Ebooks.css"
const Ebooks = () => {
  useScrollToTopWithDelay(500);
  const {
    aboutusScreenDetails,
    loading: aboutLoading,
    error: aboutError,
  } = useContext(AboutusPageContext);

  // useEffect(() => {
  //   if (aboutusScreenDetails) {
  //     console.log("About Us Screen Details:", aboutusScreenDetails);
  //   }
  // }, [aboutusScreenDetails]);

  const {
    ebookPageContextDetails,
    loading: homeLoading,
    error: homeError,
  } = useContext(EbookPageContext);

  // useEffect(() => {
  //   if (ebookPageContextDetails) {
  //     console.log("Home Screen Details:", ebookPageContextDetails);
  //   }
  // }, [ebookPageContextDetails]);

  
  // Create a reference for the ContactInformation component
  const contactInfoRef = useRef(null);

  // Scroll to the ContactInformation component after the page loads
  useEffect(() => {
    // Delay the scroll to allow the page to fully load
    setTimeout(() => {
      if (contactInfoRef.current) {
        // Use window.scrollTo to scroll to the element
        contactInfoRef.current.scrollIntoView({behavior: "smooth" ,});
      }
    }, 500); // 500ms delay to ensure the page is loaded

    // Cleanup the timeout to avoid memory leaks
    return () => clearTimeout();
  }, []);

  return (
    <div>
      <LanguageProvider>
        <AboutusPageProvider>
          <EbookPageContextProvider>
            <div className="parent">
            <EBooksCards></EBooksCards>
  
           

              </div>
          </EbookPageContextProvider>
        </AboutusPageProvider>
      </LanguageProvider>
    </div>
  );
};

export default Ebooks;
