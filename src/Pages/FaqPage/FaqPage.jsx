// import React, { useContext } from "react";
// import Navbar from "../../Component/Navbar/Navbar";
// import Footer from "../../Component/Footer/Footer";
// import Faq_Ques from "../../Component/Faqs_Ques/Faq_Ques";
// import { LanguageProvider } from "../../Component/LanguageContext/LanguageContext";
// import { FaqPageContext ,FaqPageProvider } from "../../store/FaqPageContext";

// const FaqPage  = () => {
//   const {  faqScreenDetails, loading, error } = useContext(FaqPageContext);

//   useEffect(() => {
//     if (faqScreenDetails) {
//       console.log("Faq Screen Details:", faqScreenDetails);
      
//     }
//   }, [faqScreenDetails]);
//   return (
//     <div>
//    <LanguageProvider >
//     <FaqPageProvider >

//     <Navbar></Navbar>
//     <Faq_Ques></Faq_Ques>
//     <Footer></Footer>

//     </FaqPageProvider>    
//    </LanguageProvider >

//     </div>
//   );
// };

// export default FaqPage ;


import React from "react";
import {  Faqs_Ques } from "../../Component";
import { LanguageProvider, FaqPageProvider } from "../../store";  // Importing from store/index.js

const FaqPage = () => {
  return (
    <div>
      <LanguageProvider>
        <FaqPageProvider>
          <Faqs_Ques />
        </FaqPageProvider>
      </LanguageProvider>
    </div>
  );
};

export default FaqPage;
