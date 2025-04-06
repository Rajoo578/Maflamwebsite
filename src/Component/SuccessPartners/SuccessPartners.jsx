

import { useContext } from "react";
import styles from "./SuccessPartners.module.css";
import { HomePageContext } from "../../store/HomePageContext.jsx";

const SuccessPartners = () => {
  const { homeScreenDetails, loading, error } = useContext(HomePageContext);

  if (loading) return <p>Loading...</p>; // Handle loading state
  if (error) return <p>Error loading data</p>; // Handle error state

  // Ensure that the API data exists before rendering
  const successPartnersData1 = homeScreenDetails?.successPartnerTitle || [];
  const successPartnersData = homeScreenDetails?.successPartnersData || [];

  return (
    <div>
      <div className={styles.success}>
        {/* <OurSuccessStory />
        <Community></Community> */}
      </div>
      <div className={styles.rverlay}></div>
      <div className={styles.successPartnersSection}>
   
      <div className={styles.overlay}></div>
        <h2 className={styles.successPartnersTitle} >
          {successPartnersData1.title}
        </h2>
        <div className={styles.partnersLogos}>
          {successPartnersData.map((partner, index) => (
            <div
  key={index}
  className={styles.partnerLogo}
  style={{
    backgroundImage: `url(${partner.logoUrl})`, // Set the logo image as the background
    backgroundPosition: 'center', // Center the image
    backgroundSize: 'cover', 
    width:'282.783px', height:'160px',// Make sure the image covers the entire container (may crop)
    backgroundRepeat: 'no-repeat', // Prevent the image from repeating
  }}
>
  {/* <p>{partner.title}</p> */}
</div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SuccessPartners;
