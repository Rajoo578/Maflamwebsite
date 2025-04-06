import React, { useContext } from "react";
import { HomePageContext } from "../../store/HomePageContext"; 
import styles from "./WishlistSpecializedCourses.module.css"; 


const WishlistSpecializedCourses = () => {
  const { homeScreenDetails, loading, error } = useContext(HomePageContext); 

  // Handle loading and error states
  if (loading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>Error loading courses: {error.message}</p>;
  }

  // Assuming homeScreenDetails contains an array called "specializedCoursesData"
  const specializedCoursesData = homeScreenDetails?.specializedCoursesData || [];
  const specializedCoursesDataTitle = homeScreenDetails?.specializedCoursesDataTitle || [];


  return (
    <div className={styles.courseContainer}>
      <div className={styles.coursesContainer}>
        <h2>{specializedCoursesDataTitle.title}</h2>
        <div className={styles.coursesGrid}>
          {specializedCoursesData.map((course, index) => (
            <div key={index} className={styles.coursesCard}>
              {/* Render the video using videoUrl */}
              <video
                 src={course.videoUrl}
                //  autoPlay
                //  muted
                 controls
                 loop
                 playsInline
                 className={styles.coursesImage}
              />
              <p>{course.title}</p>
              <div className={styles.overlay}></div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default WishlistSpecializedCourses;
