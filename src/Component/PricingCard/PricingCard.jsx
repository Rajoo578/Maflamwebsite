import React from "react";
import styles from "./PricingCard.module.css";
import { assests } from "../../assets/assests.js";
const PricingCard = () => {
  return (
    <div className={styles.card}>
      <div className={styles.videoWrapper}>
        <div className={styles.playButton}>
          <img src={assests.youtubeImage} width={80} />
          {/* <p>Play the Player</p> */}
        </div>
      </div>
      <div className={styles.cardContent}>
        <p className={styles.description}>
          A brief summary of the course and its contents: Our vision is to
          become a leading online platform for all Arab <br /> students who...
        </p>
        <div className={styles.rating}>
          <span className={styles.stars}>★★★★☆</span>
          <span className={styles.ratingValue}>4.3</span>
        </div>
        <button className={styles.subscribeBtn}>
          Subscribe <i className="fas fa-shopping-cart"></i>
        </button>
        <button className={styles.wishlistBtn}>
          Add to wishlist <i className="fas fa-heart"></i>
        </button>
      </div>
    </div>
  );
};

export default PricingCard;
