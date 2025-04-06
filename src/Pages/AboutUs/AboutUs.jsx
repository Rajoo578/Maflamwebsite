import React, { useContext, useEffect,useState } from "react";
import { useLocation } from "react-router-dom";

import {
  Filmmaker,
  JoinUs,
  MaflamCard,
  MaflamImageOffer,
  MaflamInstructors,
  MaflamContent,
  OurVisionData,
} from "../../Component";
import
{
  Loader
} from '../../utilities'

import {
  LanguageProvider,
  HomePageContext,
  HomePageProvider,
  AboutusPageContext,
  AboutusPageProvider,
} from "../../store"

import
{
  useScrollToTopWithDelay
} from  '../../hooks'

import styles from "./AboutUs.module.css";
const useDelayedScroll = (delay = 1000) => {
  useEffect(() => {
    const scrollToElement = () => {
      const hash = window.location.hash; // Get the hash from the URL
      if (hash) {
        const elementId = hash.substring(1); // Remove '#' to get the element ID
        const element = document.getElementById(elementId);

        if (element) {
          // Delay scrolling to the element
          setTimeout(() => {
            element.scrollIntoView({ behavior: 'smooth', block: 'start' });
          }, delay);
        }
      }
    };

    const handleAnchorClick = (event) => {
      const anchor = event.target.closest('a'); // Check if the clicked element is an anchor
      if (anchor && anchor.hash) {
        // Prevent default navigation to hash
        event.preventDefault();

        // Update the URL without reloading the page
        window.history.pushState(null, '', anchor.hash);

        // Trigger the scroll
        scrollToElement();
      }
    };

    // Listen for hash changes and clicks on anchor links
    window.addEventListener('hashchange', scrollToElement);
    document.addEventListener('click', handleAnchorClick);

    // Trigger scroll on initial load if hash is present
    scrollToElement();

    // Cleanup event listeners on unmount
    return () => {
      window.removeEventListener('hashchange', scrollToElement);
      document.removeEventListener('click', handleAnchorClick);
    };
  }, [delay]); // Re-run effect if delay changes
};

export default function AboutUs() {

  useScrollToTopWithDelay(500);
  useDelayedScroll(1500);
  const [isLoading,setIsLoading]=useState(true)

  const {
    homeScreenDetails,
    loading: homeLoading,
    error: homeError,
  } = useContext(HomePageContext);

  const {
    aboutusScreenDetails,
    loading: aboutLoading,
    error: aboutError,
  } = useContext(AboutusPageContext);

  return (
    <LanguageProvider>
      <HomePageProvider>
        <AboutusPageProvider>
          <div id="aboutushead" className={styles.container}>
    
       
            <div className={styles.AboutUsbg}>
              <Filmmaker />
              <OurVisionData />
              {/* <Filmmaker /> */}
            </div>
            <div id="Services"> </div>
            <MaflamImageOffer />
           
            </div>
            <MaflamInstructors />
            <MaflamCard />
        </AboutusPageProvider>
      </HomePageProvider>
    </LanguageProvider>
  );
}

