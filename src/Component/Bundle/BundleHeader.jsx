import React from 'react';
import styles from "./BundleHeader.module.css"; 
import lifetime from "../../assets/lifetime.png";
import free from "../../assets/free.png";
import educational from "../../assets/educational.png";
import community from "../../assets/community.png";
import certificate from "../../assets/certificate.png";
import play from "../../assets/play.png";

function BundleHeader() {
  return (
    <div className={styles.bundlecontainer}>
      <div className={styles.bundlesection}>
        <h6 className={styles.bundleheading}>
          Full Package of Fundamentals Film Making
        </h6>
        <p className={styles.bundleparagraph}>
          This package guarantees you the study of all specialized courses in the field of filmmaking, which include scriptwriting, production, cinematography, sound recording, directing, and acting. It also gives you 5 free and exclusive courses that any filmmaker needs.
        </p>
        <div className={styles.bundleicon}>
          <div className={styles.imagesec}>
            <img src={lifetime} alt="bundle" className={styles.bundleimage} />
            <p>Lifetime Access to Content</p>
          </div>
          <div className={styles.imagesec}>
            <img src={free} alt="bundle" className={styles.bundleimage} />
            <p>Interactive Community</p>
          </div>
          <div className={styles.imagesec}>
            <img src={educational} alt="bundle" className={styles.bundleimage} />
            <p>600+ Video Lessons, 9 Courses</p>
          </div>
          <div className={styles.imagesec}>
            <img src={community} alt="bundle" className={styles.bundleimage} />
            <p>Exclusive Free Resources</p>
          </div>
          <div className={styles.imagesec}>
            <img src={certificate} alt="bundle" className={styles.bundleimage} />
            <p>Certificate of Completion</p>
          </div>
          <div className={styles.imagesec}>
            <img src={play} alt="bundle" className={styles.bundleimage} />
            <p>More than 70 Educational Attached Files</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default BundleHeader; 