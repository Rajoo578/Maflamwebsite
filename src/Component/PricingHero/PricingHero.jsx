import React from "react";
import { assests } from "../../assets/assests.js";
import styles from "./PricingHero.module.css";
import PricingCard from "../PricingCard/PricingCard";

const PricingHero = () => {
  return (
    <div className={styles.heroContainer}>
      <div className={styles.cardContainer}>
        <PricingCard></PricingCard>
      </div>
      <div className={styles.content}>
        <h1 className={styles.title}>
          Fundamentals of Film <br /> Directing
        </h1>
        <p className={styles.description}>
          This course is for anyone passionate about learning the art of <br />
          film directing, who wants to bring stories to the big screen. It’s
          <br />
          for those with a creative flair for engaging storytelling, a keen
          <br /> eye for detail, and a distinctive personal style.
        </p>
      </div>
      <img
        src={assests.PricingHeroBackground}
        alt="Background"
        className={styles.backgroundImage}
      />
    </div>
  );
};

export default PricingHero;
