

import { useContext } from 'react';
import { assests } from '../../assets/assests';
import { SocialMediaPageContext } from '../../store/SocilaMediaPageContext';
import styles from './FilmProduction.module.css';
import { Link } from 'react-router-dom';

const FilmProduction = () => {
  const { socialMediaPageDetails, loading, error } = useContext(SocialMediaPageContext);

  if (loading) return <p>Loading...</p>; // Handle loading state
  if (error) return <p>Error loading data</p>; // Handle error state

  // Extract data from the context
  const title = socialMediaPageDetails?.pageDataTitle8?.title || "Educational Posts";
  const image = socialMediaPageDetails?.ageDataTitle7?.image || "";
  const Subtitle = socialMediaPageDetails?.ageDataTitle9?.title|| "";

// film 
  return (
    <div className={styles.hovercointainer}>
    <div className={styles.hoverimagecontainer}>
      <div className={styles.imagewrapper}>
        <img 
          src={assests.Maflammac}
          // src={image1}
          alt="Description"
          className={styles.hoverimage}
        />
        <div className={styles.overlay}>
          <p> Subscribe To The Full Filmmaking Fundamentals Package.</p>
          {/* <p> {title}</p> */}
          <Link to="/prc" className={styles.subscribebutton}>
        Subscribe
        {/* {Subtitle} */}
          </Link>
        </div>
      </div>
    </div>
    </div>
  );
};

export default FilmProduction;
