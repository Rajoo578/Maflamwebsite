import React from "react";
import styles from "./PopularResources.module.css";
import { resources } from "../../assets/assests";

const PopularResources = () => {
  return (
    <section className={styles.resourcesSection}>
      <h2 className={styles.heading}>Popular Resources</h2>
      <div className={styles.resourcesContainer}>
        {resources.map((resource) => (
          <div key={resource.id} className={styles.resourceCard}>
            <img
              src={resource.imageUrl}
              alt={resource.description}
              className={styles.resourceImage}
            />
            <div className={styles.overlay}>
              <span className={styles.category}>{resource.category}</span>
              <p className={styles.description}>{resource.description}</p>
              <a href="#" className={styles.readMore}>
                ←
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default PopularResources;
