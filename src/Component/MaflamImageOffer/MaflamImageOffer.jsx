




import React, { useContext } from 'react';
import styles from './MaflamImageOffer.module.css';
import { AboutusPageContext } from '../../store/AboutUsPageContext';

const MaflamImageOffer = () => {
  const { aboutusScreenDetails, loading, error } = useContext(AboutusPageContext);

  if (loading) return <p>Loading...</p>; // Handle loading state
  if (error) return <p>Error loading data</p>; // Handle error state

  // Ensure that the API data exists before rendering
  const maflamOffersTitle = aboutusScreenDetails?.maflamOffersTitle || {
    title: 'What Maflam Offers',
    description: 'Together, we can discover and empower the new generation of filmmakers',
  };

  const aboutUsDetailsSec5 = aboutusScreenDetails?.aboutUsDetailsSec5 || [];

  return (
    <div className={styles.offersContainer}>
      <div className={styles.offersHeader}>
      {/* <p>{maflamOffersTitle.description}</p> */}
        <h2>{maflamOffersTitle.title}</h2>
        <p>{maflamOffersTitle.description}</p>
      </div>

      <div className={styles.offersGrid}>
        {aboutUsDetailsSec5.map((offer, index) => (
          <div className={styles.offerCard} key={index}>
            <img src={offer.imageUrl} alt={offer.title} className={styles.offerImage} />
            <div className={styles.offerTitle}>
              <p >{offer.title}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MaflamImageOffer;



// import styles from './MaflamImageOffer.module.css';
// import { offersData } from '../../assets/assests';
// import { AboutusPageContext } from '../../store/AboutUsPageContext';


// const MaflamImageOffer = () => {
//   const { aboutusScreenDetails, loading, error } = useContext(AboutusPageContext);

//   if (loading) return <p>Loading...</p>; // Handle loading state
//   if (error) return <p>Error loading data</p>; // Handle error state

//   // Ensure that the API data exists before rendering
//   const instructorTitle = homeScreenDetails?.instructorTitle?.title || 'Instructors';
//   const maflamInstructorData = homeScreenDetails?.maflamInstructorData || [];
//   return (
//     <div className={styles.offersContainer}>
//       <div className={styles.offersHeader}>
//         <h2>What Maflam Offers</h2>
//         <p> Together, we can discover and empower the new generation of filmmakers
//         </p>
//       </div>

//       <div className={styles.offersGrid}>
//         {offersData.map((offer, index) => (
//           <div className={styles.offerCard} key={index}>
//             <img src={offer.image} alt={offer.title} className={styles.offerImage} />
//             <div className={styles.offerTitle}>
//               <p>{offer.title}</p>
//             </div>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default MaflamImageOffer;
