import React, { useContext, useEffect } from "react";
import Navbar from "../../Component/Navbar/Navbar";
import Footer from "../../Component/Footer/Footer";
import {TermsAndCondition} from "../../Component";
// import { LanguageProvider } from "../../Component/LanguageContext/LanguageContext";
import {
  HomePageContext,
  HomePageProvider,
} from "../../store/HomePageContext.jsx";
import {
  AboutusPageContext,
  AboutusPageProvider,
} from "../../store/AboutUsPageContext.jsx";
import {
  TermsConditionProvider,
  TermsConditionContext,
} from "../../store/TermsConditionContext.jsx";
import
{
  useScrollToTopWithDelay
} from  '../../hooks'
import { LanguageProvider } from "../../store/LanguageContext.jsx";
const TermsAndConditionsPage = () => {
  useScrollToTopWithDelay(500);
  const {
    homeScreenDetails,
    loading: homeLoading,
    error: homeError,
  } = useContext(HomePageContext);

  // useEffect(() => {
  //   if (homeScreenDetails) {
  //     console.log("Home Screen Details:", homeScreenDetails);
  //   }
  // }, [homeScreenDetails]);

  const {
    termsConditionScreenDetails,
    loading: aboutLoading,
    error: aboutError,
  } = useContext(TermsConditionContext);

  // useEffect(() => {
  //   if (termsConditionScreenDetails) {
  //     console.log(
  //       "TermsCondition Screen Details:",
  //       termsConditionScreenDetails
  //     );
  //   }
  // }, [termsConditionScreenDetails]);

  return (
    <div>
      <LanguageProvider>
        <HomePageProvider>
          <TermsConditionProvider>

            <TermsAndCondition></TermsAndCondition>
   
          </TermsConditionProvider>
        </HomePageProvider>
      </LanguageProvider>
    </div>
  );
};

export default TermsAndConditionsPage;