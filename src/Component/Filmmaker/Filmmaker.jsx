import { useContext } from "react";
import { featuresData } from "../../assets/assests";
import { AboutusPageContext } from "../../store/AboutUsPageContext";
import styles from "./Filmmaker.module.css";

const Filmmaker = () => {
  const { aboutusScreenDetails, loading, error } =
    useContext(AboutusPageContext);

  if (loading) return <p>Loading...</p>; // Handle loading state
  if (error) return <p>Error loading data</p>; // Handle error state

  // Destructure the aboutUsDetails122 and aboutUsDetails data
  const aboutUsDetails1 = aboutusScreenDetails?.aboutUsDetails || [];
  const aboutUsDetails122 = aboutusScreenDetails?.aboutUsDetails122 || {};

  return (
    <div className={styles.container}>
      {/* Title and description from aboutUsDetails122 */}
      <h1 className={styles.title}>
        {aboutUsDetails122.title ||
          "A Saudi platform designed to empower Filmmakers with expertise and knowledge"}
      </h1>
      <p className={styles.subtitle}>
        {aboutUsDetails122.description ||
          "Maflam offers comprehensive educational content across all areas of Filmmaking."}
      </p>

      {/* Display the image if the URL is provided */}
      {/* {aboutUsDetails122.imageUrl && (
        <img src={aboutUsDetails122.imageUrl} alt="About Us" className={styles.image} />
      )} */}

      {/* Render aboutUsDetails as feature items */}
      <div className={styles.features}>
        {aboutUsDetails1.map((feature, index) => (
          <div key={index} className={styles.featureItem}>
            <h3 className={styles.featureTitle}>
              {feature.title} <hr className={styles.hrrr} />
            </h3>
          </div>
        ))}
      </div>

      {/* Render features from static featuresData */}
      {/* <div className={styles.features}>
        {featuresData.map((feature, index) => (
          <div key={index} className={styles.featureItem}>
            <h3 className={styles.featureTitle}>{feature.title} <hr className={styles.hrrr}/></h3>
          </div>
        ))}
      </div> */}
    </div>
  );
};

export default Filmmaker;
