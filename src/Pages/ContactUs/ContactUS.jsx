import React, {useState} from "react";
import { Route, Routes } from "react-router-dom"; // Import Routes and Route
import {
  HeroContact,
  ContactInformation,
  JoinUs,
  ContactForm,
  ContactForm2
} from "../../Component";
import styles from "./ContactUs.module.css";
import { 
  LanguageProvider, 
  AboutusPageProvider, 
  ContactUsContextProvider, 
  ContactUs2ContextProvider,
  ContactUs3ContextProvider,
  ContactUs2Context
} from "../../store"; 
import 
{
  Loader
} from "../../utilities"
import
{
  useScrollToElementWithDelay
} from '../../hooks'

const ContactUS = () => {
  useScrollToElementWithDelay('formhere',1000)
  const [isLoading, setIsLoading] = useState(true);
  return (
    <div>
      <LanguageProvider>
        <AboutusPageProvider>
          <ContactUsContextProvider>
          <Loader isLoading={isLoading} timeout={500} />
            <div className={styles.container}>
              <HeroContact />
           <div id="formhere" className={styles.formcontainer}>
              <Routes> {/* Wrap the routes inside Routes component */}
                {/* Define routes for different sections */}
                <Route path="" element={<ContactInformation/> } />
                <Route path="form" element={<ContactUs2ContextProvider><ContactForm /></ContactUs2ContextProvider>} />
              <Route path="form2" element={<ContactUs3ContextProvider> <ContactForm2/> </ContactUs3ContextProvider> } />
              <Route path="*" element={<ContactInformation/> } />
              </Routes>
              
              
              </div>
 
              <div className={styles.bottombg}>
              </div>
            </div>
          </ContactUsContextProvider>
        </AboutusPageProvider>
      </LanguageProvider>
    </div>
  );
};

export default ContactUS;
