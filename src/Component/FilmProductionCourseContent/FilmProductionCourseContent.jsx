import React, { useState, useContext } from 'react';
import styles from './FilmProductionCourseContent.module.css';
import { FilmProductionContext } from '../../store/FilmProductionContext';
import { LanguageContext } from '../LanguageContext/LanguageContext';

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






const FilmProductionCourseContent = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { filmproductionScreenDetails, loading, error } = useContext(FilmProductionContext); 
  const { direction } = useContext(LanguageContext); 

  const toggleContent = () => {
    setIsOpen(!isOpen);
  };

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error loading data: {error.message}</p>;

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

  // Retrieve lesson data from the formattedCourseData
  const lessonData = course?.formattedCourseData?.lessions || [];

  // Handle RTL/LTR direction
  const collapsibleClass = direction === 'rtl' ? styles.collapsibleRtl : styles.collapsibleLtr;
  const coursenew = direction === "rtl" 
  ? FundamentalsOfCinematographyAr 
  : FundamentalsOfCinematography;


  return (
    <div className={styles.maincontainer}>
      <div className={styles.collapsibleLtr}>
        <div className={styles.header}>
          <div 
            onClick={toggleContent} 
            className={styles.toggleButton} 
            style={{ cursor: 'pointer', color: '#39FFFb' ,fontSize:'36px', marginLeft:'10px', marginRight:'10px' }} 
          >
            {isOpen ? '-' : '+'}
          </div>
          <h5 className={styles.toggle}>
          {direction === "rtl" ? 'الدروس':"Lessons"}
          </h5>
          <hr style={{ opacity: '0.4' }} className={styles.line} />
        </div>
        {isOpen && (
  <div>
 {direction === "rtl" && course.formattedCourseData._id === "672c5ee7da73549420503e9c" ? (
      FundamentalsOfFilmProductionAr.lessions.map((item, index) => (
        <div key={index}>
          {/* Section Title */}
          <QuestionItem
            question={item.SectionTitle1}
            timeStamp={item.SpendToHrs}
            lessons={item.Lessons}
          />
          
          {/* Mapping through Lectures/Lessons */}
        </div>
      ))
    ) : course.formattedCourseData._id === "672c6953bd321f82ce18327a" ? (
      coursenew.lessions.map((item, index) => (
        <div key={index}>
          {/* Section Title */}
          <QuestionItem
            question={item.SectionTitle1}
            timeStamp={item.SpendToHrs}
            lessons={item.Lessons}
          />
          
          {/* Mapping through Lectures/Lessons */}
        </div>
      ))
    ) : (
      course.formattedCourseData.lessions.map((item, index) => (
        <div key={index}>
          {/* Section Title */}
          <QuestionItem
            question={item.SectionTitle1}
            timeStamp={item.SpendToHrs}
            lessons={item.Lessons}
          />
  
          {/* Mapping through Lectures/Lessons */}
        </div>
      ))
    )}
  </div>
)}

      </div>
    </div>
  );
};


const QuestionItem = ({ question, lessons }) => {
  const [isOpen, setIsOpen] = useState(false);

  // Toggle content visibility when the button is clicked
  const toggleContent = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className={styles.questionItem}>
      <div className={styles.questionHeader} onClick={toggleContent}>
        <div className={styles.toggleButton} style={{ cursor: 'pointer', color: '#39FFFb', fontSize: '16px', marginLeft: '10px', marginRight: '10px' }}>
          {isOpen ? '-' : '+'}
        </div>
        <h6 style={{ fontSize: '16px', fontWeight: '800', color: '#5AFFFF', marginBottom: '0px', fontFamily: 'Noto Kufi Arabic' }} className={styles.question}>
          {question}
        </h6>
      </div>
      
      {/* Main Answer Section (Lessons) */}
      {isOpen && (
        <div className={styles.mainAnsTab}>
          <ul style={{ width: '100%', color: 'white'}}>
            {lessons.map((lesson, index) => (
              <li style={{ width: '100%', display: 'flex', flexDirection: 'row', justifyContent: 'space-between', paddingLeft:'20px', paddingRight:'10px' , fontWeight:'400' }} key={index}>
                <span><strong>{lesson.lesson_name}</strong> </span>
                <span>{lesson.timing}</span>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};


export default FilmProductionCourseContent;
