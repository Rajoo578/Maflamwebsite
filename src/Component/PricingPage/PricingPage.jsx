
import React, { useContext } from 'react';

import styles from './PricinPage.module.css';
import { PricingPageContext } from '../../store/PricingPageContext';

function PricingPage() {
  // Fetching data from the PricingPageContext
  const { pricingPageContextDetails, loading, error } = useContext(PricingPageContext);

  if (loading) return <p>Loading...</p>; // Handle loading state
  if (error) return <p>Error loading data</p>; // Handle error state

  // Fetching the title and description from the context API
  const title = pricingPageContextDetails?.getPricingCourse1DetailsSec1?.title || "and Start Your Journey in Learning Filmmaking";
  const description = pricingPageContextDetails?.getPricingCourse1DetailsSec1?.description || "Learn the technical and creative skills that will help you make a feature film from scratch.";

  return (
    <div>
      <div className={styles.invsetMainContainer}>
           <div className={styles.backimgcontainer}></div>
           <div className={styles.paracontainer}>
          <h2>{title}</h2>
            <p>{description}</p>
             {/* <h2>Invest in yourself and start your journey in learning filmmaking</h2>
             <p>Learn the technical and creative skills that will help you make a feature film from scratch.</p> */}
           </div>
      </div>
    </div>
  );
}

export default PricingPage;






// import React from 'react'
// import styles from './PricinPage.module.css';
// function PricingPage() {
//   return (
//     <div>
//       <div className={styles.invsetMainContainer}>
//            <div className={styles.backimgcontainer}></div>
//            <div className={styles.paracontainer}>
//              <h2>Invest in yourself and start your journey in learning filmmaking</h2>
//              <p>Learn the technical and creative skills that will help you make a feature film from scratch.</p>
//            </div>
//       </div>
//     </div>
//   )
// }

// export default PricingPage
