import { Navigate, Route, Routes } from "react-router-dom";
import React from "react";
import { JoinUs } from "../Component";
import './Route2.css'
// Page Imports
import {
  Ebooks,
  Blogs,
  PageNotFoundPage
} from "../Pages";


// Context and State Management Imports
import {
  AboutusPageProvider,
  EbookPageContextProvider,
  HomePageProvider,
  LanguageProvider
} from '../store';

import Route3 from "./Route3"
import Route4 from "./Route4"

export default function Route2() {
  return (
    <LanguageProvider>
      <HomePageProvider>
        <AboutusPageProvider>
          <div>
            <Routes>
              <Route path="R3/*" element={<Route3 />} />
              <Route path="R4/*" element={<Route4 />} />
              <Route path="ebooks" element={<AboutusPageProvider><EbookPageContextProvider><Ebooks /></EbookPageContextProvider></AboutusPageProvider>} />
              <Route path="blogs" element={<AboutusPageProvider><Blogs /></AboutusPageProvider>} />
              <Route path="*" element={<PageNotFoundPage/>}/>
            </Routes>
            <div className="JoinUsContainer" id="JoinNow">
              <JoinUs />
            </div>
          </div>
        </AboutusPageProvider>
      </HomePageProvider>
    </LanguageProvider>
  )
}
