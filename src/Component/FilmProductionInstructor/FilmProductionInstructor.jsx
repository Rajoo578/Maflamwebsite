import React, { useState, useContext } from "react";
import styles from "./FilmProductionInstructor.module.css";
import { FilmProductionContext } from "../../store/FilmProductionContext";
import { LanguageContext } from "../LanguageContext/LanguageContext";


import {
  AdobePremiereProBasics,
  FundamentalsOfCinematography,
  DaVinciResolveBasics,
  AudioRecordingBasics,
  ActingBasics,
  FundamentalsOfFilmProduction,
  VegasProBasics,
  WorkingInTheFilmIndustry,
  FundamentalsOfFilmDirecting,
  ScreenwritingBasics,
  IntroductionToFilmMaking,
  AdobePremiereProBasicsAr,
  FundamentalsOfCinematographyAr,
  DaVinciResolveBasicsAr,
  AudioRecordingBasicsAr,
  ActingBasicsAr,
  FundamentalsOfFilmProductionAr,
  VegasProBasicsAr,
  WorkingInTheFilmIndustryAr,
  FundamentalsOfFilmDirectingAr,
  ScreenwritingBasicsAr,
  IntroductionToFilmMakingAr
} from "../../DataImports/Courses"



// LTR mapping
const courseDataMappingLTR = {
  "672c6cb662d002aa55e9229c": AdobePremiereProBasics,
  "672c6953bd321f82ce18327a": FundamentalsOfCinematography,
  "672c6ec66bea317c7bb13078": DaVinciResolveBasics,
  "672c609ae90c3d8357705c73": AudioRecordingBasics,
  "672c6420b3e5c110514f52f9": ActingBasics,
  "672c5ee7da73549420503e9c": FundamentalsOfFilmProduction,
  "672c73b06191fae5fb669530": VegasProBasics,
  "672c7f444f6f4724a95a8e1e": WorkingInTheFilmIndustry,
  "672c5bb6a7c24e51d0db091e": FundamentalsOfFilmDirecting,
  "672c62b61f099bf569d0f8eb": ScreenwritingBasics,
  "672c76cc9a9df20599166ca0": IntroductionToFilmMaking
};

// RTL mapping
const courseDataMappingRTL = {
  "672c6cb662d002aa55e9229c": AdobePremiereProBasicsAr,
  "672c6953bd321f82ce18327a": FundamentalsOfCinematographyAr,
  "672c6ec66bea317c7bb13078": DaVinciResolveBasicsAr,
  "672c609ae90c3d8357705c73": AudioRecordingBasicsAr,
  "672c6420b3e5c110514f52f9": ActingBasicsAr,
  "672c5ee7da73549420503e9c": FundamentalsOfFilmProductionAr,
  "672c73b06191fae5fb669530": VegasProBasicsAr,
  "672c7f444f6f4724a95a8e1e": WorkingInTheFilmIndustryAr,
  "672c5bb6a7c24e51d0db091e": FundamentalsOfFilmDirectingAr,
  "672c62b61f099bf569d0f8eb": ScreenwritingBasicsAr,
  "672c76cc9a9df20599166ca0": IntroductionToFilmMakingAr
};


const FilmProductionInstructor = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { filmproductionScreenDetails, loading, error } = useContext(
    FilmProductionContext
  );
  const { direction } = useContext(LanguageContext);

  const toggleContent = () => setIsOpen(!isOpen);



  const collapsibleClass =
    direction === "rtl" ? styles.collapsibleRtl : styles.collapsibleLtr;

    const courseId=filmproductionScreenDetails?.formattedCourseData.id;
    function getCourseData(courseId, direction) {
      // Determine the correct mapping based on direction
      const courseDataMapping = direction === "ltr" ? courseDataMappingLTR : courseDataMappingRTL;
    
      // Fetch the course data
      const courseData = courseDataMapping[courseId];
    
      if (!courseData) {
        throw new Error(`Course with ID ${courseId} not found for direction ${direction}`);
      }
    
      return courseData;
    }
    const course = getCourseData(courseId, direction);

      // Access the instructor's data
  const instructorData =
  course?.formattedCourseData.instructors?.[0] || {}; // Assuming the first instructor is selected
const instructorTitle =
  course?.formattedCourseData.instructors.nameInEng ||
  [];
  // console.log("Instructor Title:", instructorTitle);

  return (
    <div style={{ background: ` linear-gradient(0deg, rgba(10, 23, 31, 0.70) 0%, rgba(10, 23, 31, 0.70) 100%), url(${instructorData.photoUrl}) lightgray 50% / cover no-repeat` }} className={styles.maincontainer}>
      <div className={styles.collapsibleLtr}>
        <div className={styles.header}>
          <div
            onClick={toggleContent}
            className={styles.toggleButton}
            style={{ cursor: "pointer", color: "#39FFFb" }}
          >
            {isOpen ? "-" : "+"}
          </div>

          {/* Render Instructor Title */}
          {Array.isArray(instructorTitle) && instructorTitle.length > 0 ? (
            instructorTitle.map((lesson, index) => (
              <h5 key={index}>{lesson.name}</h5>
            ))
          ) : (
            <h5 className={styles.toggle}>{direction === "rtl" ? "عن المدرب" : "About the Instructor"}</h5>
          )}

          <hr style={{opacity:'0.4'}} className={styles.line} />
        </div>

        {loading && <p style={{fontSize:'16px'}}>Loading instructor data...</p>}
        {error && <p style={{fontSize:'16px'}} >Error loading instructor data: {error.message}</p>}

        {isOpen && instructorData && (
          <div  className={styles.instructorContent}>
            {/* Display instructor name and photo */}
            {instructorData.name && (
              <h6   className={styles.instructorName}>{instructorData.name}</h6>
            )}

            {/* Display each description item */}
            {Array.isArray(instructorData.description) &&
            instructorData.description.length > 0 ? (
              instructorData.description.map((detail, index) => (
                <p key={index} className={styles.paragraph} style={{fontSize:'16px'}}>
                  {detail}
                </p>
              ))
            ) : (
              <p style={{fontSize:'16px'}} >No description available.</p>
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default FilmProductionInstructor;
