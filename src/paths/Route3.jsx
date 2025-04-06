import { Navigate, Route, Routes } from "react-router-dom";
import React from "react";

// Page Imports
import {
  AboutUs,
  ContactUs,
  Pricing,
  PageNotFoundPage
} from "../Pages";


// Context and State Management Imports
import {
  AboutusPageProvider,
  ContactUsContextProvider,
  HomePageProvider,
  PricingPageContextProvider,
  LanguageProvider
} from '../store';
import { MaflamContent } from "../Component";


export default function Route3() {
  return (
    <LanguageProvider>
      <HomePageProvider>
        <AboutusPageProvider>
          <div>
            <Routes>
              <Route path="aboutus/*" element={<AboutUs />} />
              <Route path="prc/:category" element={<PricingPageContextProvider><Pricing /></PricingPageContextProvider>} />
              <Route path="contact/*" element={<ContactUsContextProvider><ContactUs /></ContactUsContextProvider>} />
              <Route path="*" element={<PageNotFoundPage/>}/>
            </Routes>
            <MaflamContent/>
          </div>
        </AboutusPageProvider>
      </HomePageProvider>
    </LanguageProvider>
  )
}
