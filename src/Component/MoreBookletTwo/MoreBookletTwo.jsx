import React from 'react';
import styles from './MoreBookletTwo.module.css';
import onebooklet from "../../assets/onebooklet.png";
import twobooklet from "../../assets/twobooklet.png";
import threebooklet from "../../assets/threebooklet.png";


function MoreBookletTwo() {
  return (
    <div className={styles.articleSection}>
      <h2 className={styles.heading}>More Booklets</h2>
      <div className={styles.articlesContainer}>
        <div className={styles.articleCard}>
        <img src={onebooklet} alt="Course" className={styles.articleImage} />

          <div className={styles.articleContent}>
            <p>Our mission is to provide high-quality educational content.</p>
            <a href="#" className={styles.readMore}>
            For more information →
            </a>
          </div>
        </div>

        <div className={styles.articleCard}>
        <img src={twobooklet} alt="Course" className={styles.articleImage} />

          <div className={styles.articleContent}>
            <p>Our mission is to provide high-quality educational content.</p>
            <a href="#" className={styles.readMore}>
            For more information →
            </a>
          </div>
        </div>

        <div className={styles.articleCard}>
        <img src={threebooklet} alt="Course" className={styles.articleImage} />

          <div className={styles.articleContent}>
            <p>Our mission is to provide high-quality educational content.</p>
            <a href="#" className={styles.readMore}>
            For more information →
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MoreBookletTwo;
