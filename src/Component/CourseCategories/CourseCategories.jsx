import React, { useContext, useEffect, useRef } from "react";
import { HomePageContext } from "../../store/HomePageContext";
import styles from "./CourseCategories.module.css";
import { Link, useNavigate } from "react-router-dom";

const CourseCategories = () => {
  const { homeScreenDetails, loading, error } = useContext(HomePageContext);

  // Assuming homeScreenDetails contains an array called "specializedCoursesData"
  const specializedCoursesData = homeScreenDetails?.specializedCoursesData || [];
  console.log(specializedCoursesData);
  const specializedCoursesDataTitle = homeScreenDetails?.specializedCoursesDataTitle || {};
  const navigate = useNavigate();

  // Initialize refs for each video only once
  const videoRefs = useRef([]);

  // Define a predefined order for the 9 courses by their `_id`
  const predefinedOrder = {
    "672c62b61f099bf569d0f8eb": 1,
    "672c5ee7da73549420503e9c": 2,
    "672c6953bd321f82ce18327a": 3,
    "672c5bb6a7c24e51d0db091e": 4,
    "672c609ae90c3d8357705c73": 5,
    "672c6420b3e5c110514f52f9": 6,
    "672c6cb662d002aa55e9229c": 7,
    "672c73b06191fae5fb669530": 8,
    "672c6ec66bea317c7bb13078": 9
  };

  // Sort the courses based on the predefined order
  const sortedCourses = [...specializedCoursesData].sort((a, b) => {
    const indexA = predefinedOrder[a._id] || Number.MAX_SAFE_INTEGER; // Default to end if not in the predefinedOrder
    const indexB = predefinedOrder[b._id] || Number.MAX_SAFE_INTEGER;
    return indexA - indexB;
  });

  const handleCourseClick = (courseId) => {
    navigate(`R2/R4/filmproduction/${courseId}`);
  };

  useEffect(() => {
    videoRefs.current = videoRefs.current.slice(0, sortedCourses.length);

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const video = entry.target;
          if (entry.isIntersecting) {
            video.play().catch((error) => {
              console.warn("Video failed to play automatically:", error);
            });
          } else {
            video.pause();
          }
        });
      },
      { threshold: 0.5 }
    );

    videoRefs.current.forEach((videoRef) => {
      if (videoRef) observer.observe(videoRef);
    });

    return () => {
      videoRefs.current.forEach((videoRef) => {
        if (videoRef) observer.unobserve(videoRef);
      });
    };
  }, [sortedCourses]);

  if (loading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>Error loading courses: {error.message}</p>;
  }

  return (
    <div className={styles.courseContainer}>
      <div className={styles.coursesContainer}>
        <h2>{specializedCoursesDataTitle.title}</h2>
        <div className={styles.coursesGrid}>
          {sortedCourses.map((course, index) => (
            <div style={{overflow:'hidden',display:'flex', alignItems:'center', justifyContent:'center'}} key={index} className={styles.coursesCard}>
              <Link to="R2/R3/prc">
                <img style={ {width:'145%', backgroundColor:'color', PaddingTop:'20px',  position:'relative', left:'-20px'}}  src={course.videoUrl} alt="" />
              </Link>
              <div style={{ position: "absolute", bottom: "10px", zIndex: "10" }}>
                <p onClick={() => handleCourseClick(course._id)}>
                  <Link>{course.name}</Link>
                </p>
              </div>
              <div className={styles.overlay}></div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CourseCategories;
