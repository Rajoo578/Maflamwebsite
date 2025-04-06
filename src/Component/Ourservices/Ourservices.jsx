import React, { useContext } from "react";
import styles from "./Ourservices.module.css";
import stylesEng from "./OurservicesEnglish.module.css";
import { assests } from "../../assets/assests";
import { HomePageContext } from "../../store/HomePageContext.jsx"; // Import the context
import { LanguageContext } from "../../Component/LanguageContext/LanguageContext.jsx";

function Ourservices() {
  const { homeScreenDetails, loading, error } = useContext(HomePageContext);
  const { language } = useContext(LanguageContext);
  const stylesSelected = language === "ar" ? styles : stylesEng;
  const quoteimage = language === "ar" ? assests.quotesArabic : assests.quotes;

  if (loading) return <p>Loading...</p>; // Handle loading state
  if (error) return <p>Error loading data</p>; // Handle error state

  // Ensure that the API data exists before rendering
  const countData = homeScreenDetails?.countData || [];

  const title1 = countData[0]?.title || "Default Title";

  const title2 = countData[1]?.title || "Default Title";

  const title3 = countData[2]?.title || "Default Title";

  const title4 = countData[3]?.title || "Default Title";
  const description1 = countData[1]?.description || "No Description";
  const description2 = countData[2]?.description || "No Description";
  const description3 = countData[3]?.description || "No Description";
  const testimonial = countData[4]?.title || "No Testimonial";

  return (
    <>
      <div className={stylesSelected.OurservicesContainer}>
        <div className={stylesSelected.text}>
          <div className={stylesSelected.ourservicesvector}>
            <p style={{marginLeft:'10px', marginRight:'10px'}}>{title1}</p>
          </div>

          <div className={stylesSelected.text2}>
            <div className={stylesSelected.flexx}>
              {/* <h1>+550</h1> */}
              <h1>{title2}</h1>
              <p>{description1}</p>
            </div>
            <div className={stylesSelected.flexx}>
              {/* <h1>+600</h1> */}
              <h1>{title3}</h1>
              <p>{description2}</p>
            </div>
            <div className={stylesSelected.flexx}>
              {/* <h1>+9</h1> */}
              <h1>{title4}</h1>
              <p>{description3}</p>
            </div>
          </div>

          <div className={stylesSelected.frane64}>
            <img
              src={quoteimage}
              className={stylesSelected.quotesIcon}
              alt="Quotes"
            />
            <p className={stylesSelected.para}>{testimonial}</p>
          </div>
        </div>
      </div>
    </>
  );
}

export default Ourservices;

// import React, { useContext } from 'react';
// import styles from "./Ourservices.module.css";
// import { assests } from '../../assets/assests';
// // import { assests } from "../../assets/assests";
// import { HomePageContext } from "../../store/HomePageContext.jsx"; // Import the context

// function Ourservices() {
//   const { homeScreenDetails, loading, error } = useContext(HomePageContext);

//   if (loading) return <p>Loading...</p>; // Handle loading state
//   if (error) return <p>Error loading data</p>; // Handle error state

//   // Ensure that the API data exists before rendering
//   const title1 =
//     homeScreenDetails?.countData?.title;
//   const description1 = homeScreenDetails?.countData?.description;
//   return (
//     <>
//       <div className={styles.OurservicesContainer}>
//         <div className={styles.text}>
//           <div className={styles.ourservicesvector}>
//             <p>{title1?.title || "Default Title"}</p>
//           </div>

//           <div className={styles.text2}>
//           <div className={styles.flexx}>  <h1>+550</h1>
//           <p>Educational Materials</p></div>
//             <div className={styles.flexx}> <h1>+600</h1>
//             <p>Videos</p></div>
//            <div className={styles.flexx}  >  <h1>+9</h1>
//            <p>Specialized Courses</p></div>
//           </div>

//           <div className={styles.frane64}>
//             <img src={assests.quotes} className={styles.quotesIcon} alt="Quotes"/>
//             <p className={styles.para}>With Maflam, I learned more than I did in my four years at university.</p>
//           </div>
//         </div>
//       </div>
//     </>
//   );
// }

// export default Ourservices;
