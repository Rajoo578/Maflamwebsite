import React, { useContext, useEffect } from "react";
import {
  FundamentalFilmProduction,
  JoinUs,
  SubscribeFundamentalPackage
} from "../../Component";

import {
  LanguageProvider,
  FilmProductionProvider,
  FilmProductionContext,
  AboutusPageContext,
  AboutusPageProvider,
  PricingPageContext,
  PricingPageContextProvider
} from "../../store";
import
{
  useScrollToTopWithDelay
} from  '../../hooks'
import styles from "./FilmProduction.module.css"

function FilmProduction() {
  useScrollToTopWithDelay(1000);
  const {
    filmproductionScreenDetails,
    loading: filmproductionLoading,
    error: filmproductionError,
  } = useContext(FilmProductionContext);

  useEffect(() => {
    if (filmproductionScreenDetails) {
      console.log(
        "Film Production Screen Details:",
        filmproductionScreenDetails
      );
    }
  }, [filmproductionScreenDetails]);

  const {
    aboutusScreenDetails,
    loading: aboutLoading,
    error: aboutError,
  } = useContext(AboutusPageContext);



  // const {
  //   pricingPageContextDetails,
  //   loading: pricingLoading,
  //   error: pricingerror,
  // } = useContext(PricingPageContext);

  // useEffect(() => {
  //   if (pricingPageContextDetails) {
  //     console.log("Home Screen Details:", pricingPageContextDetails);
  //   }
  // }, [pricingPageContextDetails]);


  return (
    <div>
      <LanguageProvider>
        <FilmProductionProvider>
          <AboutusPageProvider>

            <div className={styles.elements}>
              <FundamentalFilmProduction />
            </div>
          </AboutusPageProvider>
        </FilmProductionProvider>
      </LanguageProvider>
    </div>
  );
}

export default FilmProduction;
