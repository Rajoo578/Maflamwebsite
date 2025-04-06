import React from "react";
import styles from "./BundleCourse.module.css";
import { BundleCourseCard } from "../../assets/assests"; 

function BundleCourse() {


  
  return (
    <div className={styles.container}>
      <h1 className={styles.heading}>Specialized Courses</h1>
      <div className={styles.cardGrid}>
        {BundleCourseCard.map((course) => (
          <div key={course.id} className={styles.card}>
            <img
              src={course.imageUrl}
              alt={course.title}
              className={styles.cardImage}
            />
            <div className={styles.cardContent}>
              <h3 className={styles.cardTitle}>{course.title}</h3>
              <p className={styles.cardDescription}>{course.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default BundleCourse;             

