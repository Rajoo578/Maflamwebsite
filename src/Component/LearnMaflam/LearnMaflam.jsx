import styles from "./LearnMaflam.module.css";
import { useContext } from "react";
import { HomePageContext } from "../../store/HomePageContext.jsx";

const LearnMaflam = () => {
  const { homeScreenDetails, loading, error } = useContext(HomePageContext);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error loading data</p>;

  // Extracting title and video URL from the API response
  const title =
    homeScreenDetails?.homeScreenDetailsSec2?.title || "Default Title";
  const videoUrl = homeScreenDetails?.homeScreenDetailsSec2?.videoUrl || "";

  return (
    <div className={styles.coursecontainermain}>
      <svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" viewBox="0 0 1750 903" fill="none" style={{position:'absolute', top:'0px', zIndex:'0'}}>
  <g filter="url(#filter0_f_8593_4682)">
    <path fill-rule="evenodd" clip-rule="evenodd" d="M-89.0616 532.172C-67.6237 518.114 111.635 507.926 165.488 499.602C246.515 484.333 326.649 475.863 348.866 460.662C375.735 442.279 589.882 366.794 645.031 351.785C698.98 337.103 778.85 324.574 842.413 325.686C915.88 326.971 919.593 362.373 997.755 357.954C1098.51 352.258 1163.38 309.302 1264.47 301.827C1343.57 295.976 1449.52 304.387 1449.31 324.56C1449.01 353.297 1272.79 380.735 1263.35 410.082C1257.21 429.194 1385.62 423.794 1412.48 439.109C1439.01 454.239 1469.29 478.713 1410.83 494.185C1335.15 514.211 1199.28 491.5 1131.85 513.374C1053.92 538.656 1188.1 578.492 1090.45 598.117C1002.13 615.867 956.908 571.908 873.283 565.34C828.934 561.857 773.635 565.995 721.72 569.156C644.828 573.838 564.594 589.917 492.588 588.522C422.357 587.161 335.388 580.403 331.374 561.593C326.588 539.167 -125.206 555.873 -89.0616 532.172Z" fill="#5AFFFF" fill-opacity="0.3"/>
  </g>
  <defs>
    <filter id="filter0_f_8593_4682" x="-391.12" y="0.00439453" width="2140.43" height="902.305" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
      <feFlood flood-opacity="0" result="BackgroundImageFix"/>
      <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
      <feGaussianBlur stdDeviation="150" result="effect1_foregroundBlur_8593_4682"/>
    </filter>
  </defs>
</svg>
      <div className={styles.loverlay}></div>
      <div className={styles.coursesContainer}>
        <span className={styles.learnMaflamTitle}>
          <h2>{title}</h2>
        </span>

        <div className={styles.LearnMaflam}>
          {videoUrl && <video src={videoUrl} controls unmuted />}
        </div>
        <div className={styles.boverlay}></div>
      </div>
    </div>
  );
};

export default LearnMaflam;
