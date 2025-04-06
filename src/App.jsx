// Library Imports
import { Navigate, Route, Routes } from "react-router-dom";
import React,{useRef} from "react";


// Page Imports
import {
  Home,
  BlogDetails,
  TermsAndConditionsPage,
  FaqPage,
  Checkouts,
  PricingDetails,
  LoginPage,
  SignUpPage,
  PurchaseCancellationPage,
  CommunityGuidelinesPage,
  MyCertificate,
  PersonalInformation,
  MyCousesPages,
  EbookTwo,
  MyWishlist,
  PageNotFoundPage,
  ContentRequiredPage,
  BlogEjsPage,
  PrivacyPolicyPage,
  ResetPasswordPage,
  SuccessMessagePage,
  FalioursMassagePage,
  NoSubscriptionPage,
  // BundlePage
} from "./Pages";

//  Language Context Import
import { LanguageContext, LanguageProvider } from "./Component/LanguageContext/LanguageContext.jsx";
import BundlePage from "./Pages/BundlePage/BundlePage.jsx";


// Context and State Management Imports
import {
  AboutusPageProvider,
  CheckoutPaymentContextProvider,
  CommunityGuidelinesProvider,
  EbookPageContextProvider,
  HomePageProvider,
  LoginPageContextProvider,
  PrivacyPolicyProvider,
  PurchaseCancellationProvider,
  SingupPageContextProvider,
  TermsConditionProvider,
} from './store';


// Utility and Configuration Imports
import PaymentGateWayApi from './Pages/PaymentGateWayApi.jsx'
import auth from "./Auth/Auth.js";
import "./App.css";
import { Navbar ,Footer} from "./Component/index.js";
import Route2 from "./paths/Route2.jsx";
const userDetails = auth.getAuthData();
const PrivateRoute = ({ children }) => {
  return userDetails ? children : <Navigate to="/login" />;
};

import { useEffect ,useState} from "react";
import ContentRequiredPage2 from "./Pages/ContentRequiredPage2/ContentRequiredPage2.jsx";
import Checkouts2 from "./Pages/Checkouts2/index.js";

import SuccessMessage2 from "./Component/SuccessMessage2/SuccessMessage2.jsx";
import TransationReciept from "./Component/TransationReciept/TransationReciept.jsx";
import SuccessMessage3 from "./Component/SuccessMessage3/index.js";


const App = () => { 
  return (

    <LanguageProvider>
      <Navbar/>
        
      <Routes>
        
      
        <Route path="/R2/*" element={<Route2/>} />
         
        <Route path="/checkout2" element={ <Checkouts2/>} />
        <Route path="/checkout/:paymentId" element={<CheckoutPaymentContextProvider><Checkouts /></CheckoutPaymentContextProvider>} />
        <Route path="/login" element={<LoginPageContextProvider><LoginPage /></LoginPageContextProvider>} />
        <Route path="/signUp" element={<SingupPageContextProvider><SignUpPage /></SingupPageContextProvider>} />
        <Route path="/" element={<HomePageProvider><Home /></HomePageProvider>} />
        <Route path="/pagenotfound" element={<PageNotFoundPage />} />
        <Route path="/contentrequired" element={<ContentRequiredPage />} />
        <Route path="/contentrequired2" element={<ContentRequiredPage2 />} />
        <Route path="/reset" element={<ResetPasswordPage />} />
        <Route path="/success" element={<SuccessMessagePage />} />
        <Route path="/success2" element={<SuccessMessage2/>} />
        <Route path="/success3" element={<SuccessMessage3/>} />
        <Route path="/transaction" element={<TransationReciept/>} />

        <Route path="/failuremessage" element={<FalioursMassagePage />} />
        <Route path="/personalinformation" element={<PrivateRoute><PersonalInformation /></PrivateRoute>} />
        <Route path="/paymentgateway" element={<PaymentGateWayApi />} />
        <Route path="/mycourses" element={<MyCousesPages />} />
        <Route path="/pricing" element={<PricingDetails />} />
        <Route path="/mycertificate" element={<MyCertificate />} />
        <Route path="/ebooktwo" element={<EbookTwo />} />
        <Route path="/blogDetails/:id" element={<BlogEjsPage />} />
        <Route path="/NotSubscribedyet" element={<NoSubscriptionPage/>}/>
        <Route path="/terms&condition" element={<HomePageProvider> <TermsConditionProvider><TermsAndConditionsPage /></TermsConditionProvider></HomePageProvider>} />
        <Route path="/faqs" element={<FaqPage />} />
        <Route path="/bundle" element={<BundlePage />} />
        {/* <Route path="/blogDetails" element={<HomePageProvider><AboutusPageProvider><BlogDetails /></AboutusPageProvider></HomePageProvider>} /> */}
        <Route path="/terms&condition" element={<HomePageProvider><TermsConditionProvider><TermsAndConditionsPage /></TermsConditionProvider></HomePageProvider>} />
        <Route path="/purchaseCancellation" element={<HomePageProvider><PurchaseCancellationProvider><PurchaseCancellationPage /></PurchaseCancellationProvider></HomePageProvider>} />
        <Route path="/CommunityGuidelines" element={<HomePageProvider><CommunityGuidelinesProvider><CommunityGuidelinesPage /></CommunityGuidelinesProvider></HomePageProvider>} />
        <Route path="/privacypolicy" element={<HomePageProvider><PrivacyPolicyProvider><PrivacyPolicyPage /></PrivacyPolicyProvider></HomePageProvider>} />
        <Route path="/mywishlist" element={<HomePageProvider><EbookPageContextProvider><AboutusPageProvider><MyWishlist /></AboutusPageProvider></EbookPageContextProvider></HomePageProvider>} />
        <Route path="/*" element={<PageNotFoundPage/>}/>
        
      </Routes>
      <Footer/>
    </LanguageProvider>

  );
};

export default App;
