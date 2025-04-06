import React, { useContext } from "react";
import stylesArabic from "./HomeHero.module.css";
import styles from "./HomeHero_arabic.module.css";
import { HomePageContext } from "../../store/HomePageContext.jsx";
import vid from "../../assets/file.mp4";
import { LanguageContext } from "../../Component/LanguageContext/LanguageContext.jsx";

const HomeHero = () => {
  const { homeScreenDetails, loading, error } = useContext(HomePageContext);
  const { language } = useContext(LanguageContext);
  // console.log(language);
  const stylesSelected = language === "ar" ? styles : stylesArabic;

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error loading data</p>;

  const title =
    homeScreenDetails?.homeScreenDetailsSec1?.title || "Default Title";
  const description =
    homeScreenDetails?.homeScreenDetailsSec1?.description ||
    "Default description";
  const videoUrl = homeScreenDetails?.homeScreenDetailsSec1?.videoUrl || "";
  const signUpText =
    homeScreenDetails?.homeScreenDetailsSec1?.signUpText || "Sign Up";

  return (
    <div className={stylesSelected.herosection}>
      <div className={stylesSelected.heroContainer}>
        {videoUrl && (
          <video
            className={stylesSelected.backgroundVideo}
            src={vid}
            autoPlay
            muted
            loop
          />
        )}
        <div className={stylesSelected.overlay}></div>
        <div className={stylesSelected.rightoverlay}> </div>
        <div className={stylesSelected.leftoverlay}></div>
        <div className={stylesSelected.bottomoverlay}></div>
        <div className={stylesSelected.content}>
          <h1 className={stylesSelected.title} >
            {title}
          </h1>
          <p className={stylesSelected.description}>{description}</p>
          {/* {signUpText && (
          <button className={styles.signUpButton}>{signUpText}</button>
        )}  */}
        </div>
      </div>
    </div>
  );
};

export default HomeHero;


