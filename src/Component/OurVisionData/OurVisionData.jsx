import { useContext } from 'react';
import { LanguageContext } from '../LanguageContext/LanguageContext';  // Assuming this is the correct path to your context
import { AboutusPageContext } from '../../store/AboutUsPageContext';  // Same here for the aboutus context
import stylesEn from './OurVisionDataEn.module.css';
import stylesAr from './OurVisionDataAr.module.css';

const OurVisionData = () => {
  const { language } = useContext(LanguageContext); // Access current language from context
  const { aboutusScreenDetails, loading, error } = useContext(AboutusPageContext);

  // Error and Loading State Handling
  if (loading === undefined) return <p>Loading...</p>; // Handle undefined loading state
  if (error) return <p>{error || 'Error loading data'}</p>; // Display actual error message if exists

  // Destructure the data from context, ensuring it's safe
  const { aboutUsDetailsSec3, aboutUsDetailsSec4 } = aboutusScreenDetails || {};

  // Choose the appropriate styles based on language
  const styles = language === 'ar' ? stylesAr : stylesEn;

  return (
    <div className={styles.container}>
      {/* Heading Section */}
      <div className={styles.headingSection}>
        <h1>{aboutUsDetailsSec3?.title || 'Default Title'}</h1>
        <p>{aboutUsDetailsSec3?.description?.split('\n').map((line, index) => (
          <span key={index}>
            {line}
            <br />
          </span>
        )) || 'Default Description'}
        </p>
        {/* SVG with Conditional Transformation */}
        <div className={styles.linehr}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="584"
            height="4"
            viewBox="0 0 584 4"
            fill="none"
            style={{
              transform: language === 'ar' ? 'scaleX(-1)' : 'scaleX(1)', // Flip for Arabic
              transition: 'transform 0.3s ease', // Smooth transition
            }}
          >
            <path
              d="M2.00002 1.99995L582 2"
              stroke="url(#paint0_linear_9427_9569)"
              strokeWidth="4"
              strokeLinecap="round"
            />
            <defs>
              <linearGradient
                id="paint0_linear_9427_9569"
                x1="2"
                y1="2.00002"
                x2="575.556"
                y2="2.00003"
                gradientUnits="userSpaceOnUse"
              >
                <stop stopColor="#5AFFFF" />
                <stop offset="1" stopColor="#5AFFFF" stopOpacity="0" />
              </linearGradient>
            </defs>
          </svg>
        </div>
      </div>

      {/* Cards Section */}
      <div className={styles.cards}>
        {aboutUsDetailsSec4?.map((card, index) => (
          <div key={index} className={styles.card}>
            <h3>{card.title}</h3>
            <p>{card.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default OurVisionData;
