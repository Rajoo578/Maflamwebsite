import { 
  PricingPage, 
  FundamentalPackage, 
  CarouselCard, 
  VariousCourse, 
  JoinUs, 
  MaflamContent
} from "../../Component";

import
{
  useScrollToElementWithDelay
} from "../../hooks";

import { LanguageProvider ,
  HomePageContext,
  HomePageProvider ,
  AboutusPageContext,
  AboutusPageProvider,
  PricingPageContext,
  PricingPageContextProvider,
} from "../../store";

import styles from "./Pricing.module.css"

import { useContext, useEffect,useRef } from "react";

function Pricing() {
  const {
    homeScreenDetails,
    loading: homeLoading,
    error: homeError,
  } = useContext(HomePageContext);

  useEffect(() => {
    if (homeScreenDetails) {
      console.log("Home Screen Details:", homeScreenDetails);
    }
  }, [homeScreenDetails]);

  const {
    aboutusScreenDetails,
    loading: aboutLoading,
    error: aboutError,
  } = useContext(AboutusPageContext);

  useEffect(() => {
    if (aboutusScreenDetails) {
      console.log("About Us Screen Details:", aboutusScreenDetails);
    }
  }, [aboutusScreenDetails]);

  const {
    pricingPageContextDetails,
    loading: pricingLoading,
    error: pricingerror,
  } = useContext(PricingPageContext);

  useEffect(() => {
    if (pricingPageContextDetails) {
      console.log("Home Screen Details:", pricingPageContextDetails);
    }
  }, [pricingPageContextDetails]);

  useScrollToElementWithDelay("CourseContainer",1200)
  return (
    <>
      <div>
        <LanguageProvider>
          <HomePageProvider>
            <AboutusPageProvider>
              <PricingPageContextProvider>
                <PricingPage></PricingPage>
                <FundamentalPackage></FundamentalPackage>
                <div  className={styles.CarouselGradient}>
                <div id="CourseContainer" >
                <VariousCourse></VariousCourse> 
                </div>
                <CarouselCard></CarouselCard>
                </div>   
              </PricingPageContextProvider>
            </AboutusPageProvider>
          </HomePageProvider>
        </LanguageProvider>
      </div>
    </>
  );
}

export default Pricing;