import React, { useContext, useEffect } from "react";
import { useLocation } from "react-router-dom";
import styles from "./ContactInformation.module.css";
import { ContactUsContext } from "../../store/ContactUsContext";
import { LanguageContext } from "../LanguageContext/LanguageContext";
import maflamContent from "../maflamContent/maflamContent";

const ContactInformation = () => {
  const { contactUsContextDetails, loading, error } = useContext(ContactUsContext);
  const { direction } = useContext(LanguageContext); // Get direction from context
  const location = useLocation();

  const scrollToTop = () => {
    window.scrollTo({ top: 1000, behavior: "smooth" });
  };

  useEffect(() => {
    scrollToTop();
  }, [location]);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error loading data</p>;

  const contactDetailsSec3 = contactUsContextDetails?.contactDetailsSec3 || [];

  const title = contactDetailsSec3[0]?.title || "";
  const emailTitle = contactDetailsSec3[1]?.title || "";
  const emailCategory = contactDetailsSec3[1]?.category || [];
  const contactNumberTitle = contactDetailsSec3[2]?.title || "";
  const contactNumberDescription = contactDetailsSec3[2]?.description || "";
  const locationTitle = contactDetailsSec3[3]?.title || "";
  const locationDescription = contactDetailsSec3[3]?.description || "";

  return (
    <>
      <div className={styles.maincontainer}>
        <div className={styles.bgimage}></div>
        <div className={styles.contactContainer}>
          <h2  className={styles.heading}>{title}</h2>
          <div style={{width:'100%', overflow:'hidden', display:'flex', justifyContent:'center'}}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="963"
            height="3"
            viewBox="0 0 963 3"
            fill="none"
          >
            <path
              opacity="0.1"
              d="M1 2L962 1.00008"
              stroke="#F1F2FA"
              strokeWidth="2"
              strokeLinecap="round"
            />
          </svg>
          </div>
          <div className={styles.contactSection}>
            <h3>{emailTitle}</h3>
            {
              /*            {emailCategory.map((item, index) => (
              <p key={index}>{item}</p>
            ))}*/
            }
            
                {direction=="ltr"? <span><p>For inquiries related to Maflam services <span style={{color:'#5AFFFF'}}> Info@maflam.com </span></p>
                <p>For technical support for the platform  <span style={{color:'#5AFFFF'}}> support@maflam.com </span></p></span>: <span><p> للاستفسارات المتعلقة بخدمات مَفلَم <span style={{color:'#5AFFFF'}}> Info@maflam.com </span></p>
                <p>للدعم الفني لمنصة مَفلَم<span style={{color:'#5AFFFF'}}> support@maflam.com </span></p></span> }

            

          </div>

          <div className={styles.contactSection}>
            <div
              className={styles.hrline}
              style={{ transform: direction === "rtl" ? "scaleX(-1)" : "none" }}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="584"
                height="4"
                viewBox="0 0 584 4"
                fill="none"
              >
                <path
                  d="M2.00002 1.99995L582 2"
                  stroke="url(#paint0_linear_9476_6570)"
                  strokeWidth="4"
                  strokeLinecap="round"
                />
                <defs>
                  <linearGradient
                    id="paint0_linear_9476_6570"
                    x1="2"
                    y1="1.99988"
                    x2="575.556"
                    y2="1.99996"
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop stopColor="#5AFFFF" />
                    <stop offset="1" stopColor="#5AFFFF" stopOpacity="0" />
                  </linearGradient>
                </defs>
              </svg>
            </div>
            <h3>{contactNumberTitle}</h3>
            <p style={{color:"rgb(90, 255, 255)", direction:"ltr", alignItems:'start' , display:'inline'}} >{contactNumberDescription}</p>
          </div>

          <div className={styles.contactSection}>
            <div
              className={styles.hrline}
              style={{ transform: direction === "rtl" ? "scaleX(-1)" : "none" }}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="584"
                height="4"
                viewBox="0 0 584 4"
                fill="none"
              >
                <path
                  d="M2.00002 1.99995L582 2"
                  stroke="url(#paint0_linear_9476_6570)"
                  strokeWidth="4"
                  strokeLinecap="round"
                />
                <defs>
                  <linearGradient
                    id="paint0_linear_9476_6570"
                    x1="2"
                    y1="1.99988"
                    x2="575.556"
                    y2="1.99996"
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop stopColor="#5AFFFF" />
                    <stop offset="1" stopColor="#5AFFFF" stopOpacity="0" />
                  </linearGradient>
                </defs>
              </svg>
            </div>
            <h3>{locationTitle}</h3>
            <p>
              <span className={styles.blueText}> <a href="https://maps.app.goo.gl/stUysFNg4J4ioDfZ7"> {locationDescription} </a></span>
            </p>
          </div>
        </div>
        <maflamContent />
      </div>
    </>
  );
};

export default ContactInformation;





/* ***************************
 Tarun code Added In Above   
 ************************** */


// import React, { useContext, useEffect } from "react";
// import { useLocation } from "react-router-dom";  // Import to detect route changes
// import styles from "./ContactInformation.module.css";
// import { ContactUsContext } from "../../store/ContactUsContext";
// import FocusLock from 'react-focus-lock';
// import maflamContent from "../maflamContent/maflamContent";
// import JoinUs from "../JoinUs/JoinUs";
// const ContactInformation = () => {
//   const { contactUsContextDetails, loading, error } = useContext(ContactUsContext);
//   const location = useLocation();  // Hook to detect route changes

//   const scrollToTop = () => {
//     window.scrollTo({ top: 1000, behavior: "smooth" });
//   };

//   useEffect(() => {
//     // Whenever the location changes (i.e., on page reload or route change), scroll to the top
//     scrollToTop();
//   }, [location]);  // Trigger when the route changes

//   if (loading) return <p>Loading...</p>; // Handle loading state
//   if (error) return <p>Error loading data</p>; // Handle error state

//   const contactDetailsSec3 = contactUsContextDetails?.contactDetailsSec3 || [];

//   const title = contactDetailsSec3[0]?.title || "";
//   const emailTitle = contactDetailsSec3[1]?.title || "";
//   const emailCategory = contactDetailsSec3[1]?.category || [];
//   const contactNumberTitle = contactDetailsSec3[2]?.title || "";
//   const contactNumberDescription = contactDetailsSec3[2]?.description || "";
//   const locationTitle = contactDetailsSec3[3]?.title || "";
//   const locationDescription = contactDetailsSec3[3]?.description || "";

//   return (
//     <>
//    <div className={styles.maincontainer}>
//       <div className={styles.bgimage}></div>
//       <div className={styles.contactContainer}>
//         <h2 className={styles.heading}>{title}</h2>

//         <div className={styles.contactSection}>
//           <h3>{emailTitle}</h3>
//           {emailCategory.map((item, index) => (
//             <p key={index}>{item}</p>
//           ))}
//         </div>

//         <div className={styles.contactSection}>
//           <h3>{contactNumberTitle}</h3>
//           <p>{contactNumberDescription}</p>
//         </div>

//         <div className={styles.contactSection}>
//           <h3>{locationTitle}</h3>
//           <p>
//             <span className={styles.blueText}>{locationDescription}</span>
//           </p>
          
//         </div>
//       </div>
//       <maflamContent />
    
//       </div>

      
//     </>
//   );
// };

// export default ContactInformation;
