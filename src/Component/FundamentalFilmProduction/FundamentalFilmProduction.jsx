
import React, { useState, useContext, lazy } from "react";
import styles from "./FundamentalFilmProduction.module.css";
import { FaShoppingCart, FaHeart } from "react-icons/fa";
import { CiClock2 } from "react-icons/ci";
import { FilmProductionContext } from "../../store/FilmProductionContext";
import auth from "../../Auth/Auth";
import { useNavigate,Link } from "react-router-dom";
import FilmProductionInstructor from "../FilmProductionInstructor/FilmProductionInstructor";
import FilmProductionCourseContent from "../../Component/FilmProductionCourseContent/FilmProductionCourseContent";
import { LanguageContext } from "../../Component/LanguageContext/LanguageContext";
import { numberToArabicMap } from "./lessoncountarabic";
import { lessonCountMap } from "./lessonCountMap";
import {wwlMap} from "./wwlMap";
import  {wwlMapAr} from "./wwlMapAr"
const FundamentalFilmProduction = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { filmproductionScreenDetails, loading, error } = useContext(
    FilmProductionContext
  );
  
  // const {
  //   pricingPageContextDetails,
  //   loading: pricingLoading,
  //   error: pricingerror,
  // } = useContext(PricingPageContext);

  // const courses = pricingPageContextDetails?.formattedCourseData || [];
  // console.log(courses,"course v bid ")
  // console.log(courses._id,"course v bid ")
  const userDetails = auth.getAuthData();
  const navigate = useNavigate();

 
  const toggleContent = () => {
    setIsOpen(!isOpen);
  }

const checkoutpage = (paymentId) => {
  if (courseData.price === "0") {
   
    navigate("/checkout2");
  } 
  else if (userDetails) {
    
    navigate(`/checkout/${paymentId}`);
  } else {
   
    navigate("/login");
  }
};


  // const checkoutpage = (paymentId) => {
  //   if (userDetails) {
  //     if (courseData.price === "0") {
  //       // Navigate to /checkout2 for "Only Available With Bundle"
  //       navigate("/checkout2");
  //     } 
  //     else {
  //       // Navigate to /checkout/${paymentId} otherwise
  //       navigate(`/checkout/${paymentId}`);
  //     }
  //   } else {
  //     // Redirect to login if the user is not logged in
  //     navigate("/login");
  //   }
  // };

  // const checkoutpage = (paymentId) => {
  //   // console.log("Button was clicked");
  //   if (userDetails) {
  //     navigate(`/checkout/${paymentId}`);
  //   } else {
  //     navigate("/login");
  //   }
  // };

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error loading data: {error.message}</p>;

  // Destructure required data from filmproductionScreenDetails
  const courseDataId =
    filmproductionScreenDetails?.formattedCourseData || {};
  const courseData =
    filmproductionScreenDetails?.formattedCourseData?.description || {};
   console.log(courseDataId);
  const courseImg = filmproductionScreenDetails?.formattedCourseData || {};
  const buttonData =
    filmproductionScreenDetails?.getPricingCourse1DetailsSecButton || {};
  const learningTitle =
    filmproductionScreenDetails?.formattedCourseData?.description ||
    "What you will learn";

    const instructorData =
    filmproductionScreenDetails?.formattedCourseData.instructors?.[1] || {};

    const courseIdhere=courseDataId.courseId;
  // console.log("hello by id");
    const { direction } = useContext(LanguageContext);



  return (
    <>
      <div className={styles.coursedetailsheader}>
        <div className={styles.videoTheory}>
          <div className={styles.headerText}>
            <h6>{courseImg.title || "Fundamentals of Film Production"}</h6>
            <p> {courseData || "Course description not available."}</p>
            <div className={styles.lessonsprice}>
            <div className={styles.time}>
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="21" viewBox="0 0 20 21" fill="none">
  <path d="M10 0.5C8.02219 0.5 6.08879 1.08649 4.4443 2.1853C2.79981 3.28412 1.51809 4.8459 0.761209 6.67316C0.00433284 8.50043 -0.1937 10.5111 0.192152 12.4509C0.578004 14.3907 1.53041 16.1725 2.92894 17.5711C4.32746 18.9696 6.10929 19.922 8.0491 20.3078C9.98891 20.6937 11.9996 20.4957 13.8268 19.7388C15.6541 18.9819 17.2159 17.7002 18.3147 16.0557C19.4135 14.4112 20 12.4778 20 10.5C20 9.18678 19.7413 7.88642 19.2388 6.67316C18.7362 5.45991 17.9997 4.35752 17.0711 3.42893C16.1425 2.50035 15.0401 1.76375 13.8268 1.2612C12.6136 0.758658 11.3132 0.5 10 0.5ZM10 18.5C8.41775 18.5 6.87103 18.0308 5.55544 17.1518C4.23985 16.2727 3.21447 15.0233 2.60897 13.5615C2.00347 12.0997 1.84504 10.4911 2.15372 8.93928C2.4624 7.38743 3.22433 5.96197 4.34315 4.84314C5.46197 3.72433 6.88743 2.9624 8.43928 2.65372C9.99113 2.34504 11.5997 2.50346 13.0615 3.10896C14.5233 3.71446 15.7727 4.73984 16.6518 6.05544C17.5308 7.37103 18 8.91775 18 10.5C18 12.6217 17.1571 14.6566 15.6569 16.1569C14.1566 17.6571 12.1217 18.5 10 18.5Z" fill="#39FFFB"/>
  <path d="M14 9.5H11V6.5C11 6.23478 10.8946 5.98043 10.7071 5.79289C10.5196 5.60536 10.2652 5.5 10 5.5C9.73478 5.5 9.48043 5.60536 9.29289 5.79289C9.10536 5.98043 9 6.23478 9 6.5V10.5C9 10.7652 9.10536 11.0196 9.29289 11.2071C9.48043 11.3946 9.73478 11.5 10 11.5H14C14.2652 11.5 14.5196 11.3946 14.7071 11.2071C14.8946 11.0196 15 10.7652 15 10.5C15 10.2348 14.8946 9.98043 14.7071 9.79289C14.5196 9.60536 14.2652 9.5 14 9.5Z" fill="#39FFFB"/>
</svg>
                {courseDataId.estimatedLearningTime?.time}
              </div>
              <div className={styles.lessons}>
<svg xmlns="http://www.w3.org/2000/svg" width="21" height="21" viewBox="0 0 21 21" fill="none">
  <path d="M10.5 20C9.21772 20 7.97365 19.7488 6.80214 19.2533C5.67078 18.7748 4.65492 18.09 3.78268 17.2175C2.91043 16.3451 2.22539 15.3292 1.74687 14.1981C1.25118 13.0264 1 11.7823 1 10.5C1 9.21772 1.25118 7.97365 1.74666 6.80214C2.22518 5.67078 2.91 4.65492 3.78246 3.78268C4.65492 2.91043 5.67078 2.22539 6.80193 1.74687C7.97344 1.25118 9.21772 1 10.5 1C11.7823 1 13.0264 1.25118 14.1979 1.74666C15.3292 2.22518 16.3451 2.91 17.2173 3.78246C18.0896 4.65492 18.7746 5.67078 19.2531 6.80193C19.7486 7.97344 19.9998 9.21772 19.9998 10.4998C19.9998 11.7819 19.7486 13.0261 19.2531 14.1979C18.7746 15.3292 18.0898 16.3451 17.2173 17.2173C16.3449 18.0896 15.329 18.7746 14.1979 19.2531C13.0264 19.7486 11.7821 20 10.5 20ZM10.5 1.97314C9.34867 1.97314 8.23213 2.19856 7.18105 2.64294C6.16583 3.0723 5.25388 3.68736 4.47051 4.47051C3.68714 5.25366 3.0723 6.16562 2.64294 7.18105C2.19834 8.23191 1.97314 9.34867 1.97314 10.5C1.97314 11.6513 2.19856 12.7679 2.64294 13.8189C3.0723 14.8342 3.68736 15.7461 4.47051 16.5295C5.25366 17.3126 6.16562 17.9277 7.18105 18.3571C8.23191 18.8017 9.34867 19.0269 10.5 19.0269C11.6513 19.0269 12.7679 18.8014 13.8189 18.3571C14.8342 17.9277 15.7461 17.3126 16.5295 16.5295C17.3129 15.7463 17.9277 14.8344 18.3571 13.8189C18.8017 12.7681 19.0269 11.6513 19.0269 10.5C19.0269 9.34867 18.8014 8.23213 18.3571 7.18105C17.9277 6.16583 17.3126 5.25388 16.5295 4.47051C15.7463 3.68736 14.8344 3.0723 13.8189 2.64294C12.7681 2.19834 11.6513 1.97314 10.5 1.97314Z" fill="#5AFFFF" stroke="#5AFFFF"/>
  <path d="M9.22714 14.9998C9.03534 14.9998 8.84278 14.9544 8.66497 14.8621C8.25491 14.6495 8 14.2289 8 13.7647V7.23521C8 6.77094 8.25472 6.35041 8.66497 6.13777C9.07502 5.92513 9.56311 5.9607 9.93878 6.23021L14.4858 9.49494C14.8078 9.72603 15 10.1019 15 10.4999C15 10.898 14.8078 11.2737 14.4858 11.5049L9.93878 14.7697C9.72619 14.9224 9.47732 15 9.22714 15V14.9998ZM9.23016 6.86109C9.15287 6.86109 9.09014 6.88696 9.05707 6.90407C8.99679 6.93527 8.85658 7.03017 8.85658 7.23502V13.7645C8.85658 13.9693 8.99679 14.0642 9.05707 14.0954C9.11735 14.1266 9.27551 14.1865 9.44123 14.0675L13.9883 10.8027C14.0869 10.732 14.1434 10.6215 14.1434 10.4996C14.1434 10.3776 14.0869 10.2673 13.9883 10.1964L9.44123 6.93165C9.36659 6.87802 9.29346 6.86071 9.23016 6.86071V6.86109Z" fill="#5AFFFF" stroke="#5AFFFF" stroke-width="0.1"/>
</svg> 

{direction=="ltr"?(`${lessonCountMap[courseDataId.courseId]} lessons`):(`${numberToArabicMap[lessonCountMap[courseIdhere]]} دروس`) }

                
              </div>

              <div className={styles.riyals}>
              <svg xmlns="http://www.w3.org/2000/svg" width="23" height="16" viewBox="0 0 23 16" fill="none">
  <g clip-path="url(#clip0_9474_5649)">
    <path d="M0 6.10547V16.1476H23V6.10547H0ZM22.0994 14.3813C21.6035 14.3813 21.1988 14.779 21.1988 15.2662C21.1988 15.277 21.1988 15.2913 21.1988 15.3021H1.79756C1.79756 15.3021 1.79756 15.2806 1.79756 15.2662C1.79756 14.779 1.39648 14.3813 0.896956 14.3813C0.886018 14.3813 0.875079 14.3813 0.860495 14.3813V7.86812C0.860495 7.86812 0.886018 7.86812 0.896956 7.86812C1.39283 7.86812 1.79756 7.47403 1.79756 6.98321C1.79756 6.97246 1.79756 6.95813 1.79756 6.94738H21.2061C21.2061 6.94738 21.2061 6.96888 21.2061 6.98321C21.2061 7.47045 21.6072 7.86812 22.1067 7.86812C22.1176 7.86812 22.1322 7.86812 22.1432 7.86812V14.3813C22.1432 14.3813 22.1213 14.3813 22.1067 14.3813H22.0994ZM13.9648 11.1283C13.9648 12.9841 12.86 14.4888 11.5 14.4888C10.14 14.4888 9.03519 12.9841 9.03519 11.1283C9.03519 9.27251 10.14 7.76781 11.5 7.76781C12.86 7.76781 13.9648 9.27251 13.9648 11.1283Z" fill="#5AFFFF"/>
    <path d="M10.5588 4.39202C10.1322 4.50309 9.77125 4.75745 9.49414 5.10497H12.7939C12.1376 4.48159 11.3245 4.1914 10.5588 4.39202Z" fill="#5AFFFF"/>
    <path d="M5.21 5.10524L19.7545 1.27541C19.7545 1.27541 19.7545 1.29691 19.7618 1.31124C19.8895 1.78415 20.3853 2.06359 20.863 1.9382C20.8739 1.9382 20.8849 1.92745 20.8958 1.92387L21.7636 5.10524H22.6569L21.2641 0L1.87012 5.10524H5.20636H5.21Z" fill="#5AFFFF"/>
  </g>
  <defs>
    <clipPath id="clip0_9474_5649">
      <rect width="23" height="16" fill="white"/>
    </clipPath>
  </defs>
</svg>
                  
              
{direction === "rtl" 
  ? (courseDataId.price === "0" 
      ? "متاح فقط ضمن الباقة الكاملة" 
      : `${courseDataId.price} ريال `) 
  : (courseDataId.price === "0" 
      ? "Only Available with Bundle" 
      : `${courseDataId.price} SAR` )}

              </div>
            </div>
            <div className={styles.maincontainer}>
              <div className={styles.collapsible}>
                <div className={styles.header}>
                  <div
                    onClick={toggleContent}
                    className={styles.toggleButton}
                    style={{ cursor: "pointer", color: "#39FFFb" }}
                  >
                    {isOpen ? "-" : "+"}
                  </div>
                  <h5 className={styles.toggle}>
                  {direction === "rtl" ? "ماذا ستتعلم": "What you will learn"}
                  </h5>
                  <hr  style={{opacity:'0.4'}} className={styles.line} />
                </div>
                {isOpen && (
                  <div>
                    <p
                      className={styles.answer}>
                     {direction=="rtl"? wwlMapAr[courseDataId.courseId] : wwlMap[courseDataId.courseId]}
                    </p>
                  </div>
                )}
              </div>

              {/* {course.isfree==="false"? <FilmProductionInstructor /> :null}; */}
          {courseDataId.price==="0"?null:<FilmProductionInstructor />} 
              <FilmProductionCourseContent />
            </div>
          </div>
          <div className={styles.courseVideo}>
            {/* <img src={courseImg.promoPhoto || ""} alt="Course Preview" />
            <div className={styles.videofixed}> <video src={courseImg.promoVideo } controls alt="Course Preview" /></div> */}
          
              <div className={styles.videofixed}>
                <img src={courseImg.promoVideo?courseImg.promoVideo:courseImg.banner}  alt="Course Preview" />
              </div>
          

            <div className={styles.videocontent}>
              <p>
             {direction=="rtl"?"نبذة عن الدورة":"An Overview of the Course"}  
              </p>
              
              {
courseDataId.courseId === "26" || courseDataId.courseId=="29"||courseDataId.courseId === "30" || courseDataId.courseId=="27"|| courseDataId.courseId === "28" ? (
    <button
      // onClick={checkoutpage}
      className={styles.subcribebtn}
      // onClick={() => checkoutpage(courseDataId.id)}
    >
      <Link style={{textDecoration:'none', display:'block', width:'100%'}} to={"/R2/R3/prc/All"}>
      <span style={{ width: '100%' }}>
  {courseDataId && courseDataId.price == "0"
    ? (direction == "rtl" ? "متاح فقط ضمن الباقة الكاملة" : "Only Available With Bundle")
    : buttonData?.title}
</span>
      </Link>
    </button>
  ) : (
    <button
      // onClick={checkoutpage}
      className={styles.subcribebtn}
      onClick={() => checkoutpage(courseDataId.id)}
    >
      <FaShoppingCart style={{ height: '24px', width: '24px' }} /> &nbsp;&nbsp;
      <span style={{ width: '100%' }}>
        {courseDataId.price === "0"
          ? ("Only Available With Bundle")
          : buttonData.title}
      </span>
    </button>
  )
}
                <button className={styles.addtowishlist}>
                  <FaHeart style={{height:'24px',width:'24px'} }  />
                  <span style={{width:'100%'}}>
                  {direction === "rtl" ? "قائمة المفضلات ": "Add to Wishlist"}
                  </span>
                </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default FundamentalFilmProduction



// import React, { useState, useContext } from "react";
// import styles from "./FundamentalFilmProduction.module.css";
// import { FaShoppingCart, FaHeart } from "react-icons/fa";
// import { CiClock2 } from "react-icons/ci";
// import { FilmProductionContext } from "../../store/FilmProductionContext";
// import auth from "../../Auth/Auth";
// import { useNavigate } from "react-router-dom";
// import { PricingPageContext } from "../../store/PricingPageContext";
// import FilmProductionInstructor from "../FilmProductionInstructor/FilmProductionInstructor";
// import FilmProductionCourseContent from "../../Component/FilmProductionCourseContent/FilmProductionCourseContent";
// import { LanguageContext } from "../LanguageContext/LanguageContext";

// import {
//   AdobePremiereProBasics,
//   FundamentalsOfCinematography,
//   DaVinciResolveBasics,
//   AudioRecordingBasics,
//   ActingBasics,
//   FundamentalsOfFilmProduction,
//   VegasProBasics,
//   WorkingInTheFilmIndustry,
//   FundamentalsOfFilmDirecting,
//   ScreenwritingBasics,
//   IntroductionToFilmMaking,
//   AdobePremiereProBasicsAr,
//   FundamentalsOfCinematographyAr,
//   DaVinciResolveBasicsAr,
//   AudioRecordingBasicsAr,
//   ActingBasicsAr,
//   FundamentalsOfFilmProductionAr,
//   VegasProBasicsAr,
//   WorkingInTheFilmIndustryAr,
//   FundamentalsOfFilmDirectingAr,
//   ScreenwritingBasicsAr,
//   IntroductionToFilmMakingAr
// } from "../../DataImports/Courses"



// // LTR mapping
// const courseDataMappingLTR = {
//   "672c6cb662d002aa55e9229c": AdobePremiereProBasics,
//   "672c6953bd321f82ce18327a": FundamentalsOfCinematography,
//   "672c6ec66bea317c7bb13078": DaVinciResolveBasics,
//   "672c609ae90c3d8357705c73": AudioRecordingBasics,
//   "672c6420b3e5c110514f52f9": ActingBasics,
//   "672c5ee7da73549420503e9c": FundamentalsOfFilmProduction,
//   "672c73b06191fae5fb669530": VegasProBasics,
//   "672c7f444f6f4724a95a8e1e": WorkingInTheFilmIndustry,
//   "672c5bb6a7c24e51d0db091e": FundamentalsOfFilmDirecting,
//   "672c62b61f099bf569d0f8eb": ScreenwritingBasics,
//   "672c76cc9a9df20599166ca0": IntroductionToFilmMaking
// };

// // RTL mapping
// const courseDataMappingRTL = {
//   "672c6cb662d002aa55e9229c": AdobePremiereProBasicsAr,
//   "672c6953bd321f82ce18327a": FundamentalsOfCinematographyAr,
//   "672c6ec66bea317c7bb13078": DaVinciResolveBasicsAr,
//   "672c609ae90c3d8357705c73": AudioRecordingBasicsAr,
//   "672c6420b3e5c110514f52f9": ActingBasicsAr,
//   "672c5ee7da73549420503e9c": FundamentalsOfFilmProductionAr,
//   "672c73b06191fae5fb669530": VegasProBasicsAr,
//   "672c7f444f6f4724a95a8e1e": WorkingInTheFilmIndustryAr,
//   "672c5bb6a7c24e51d0db091e": FundamentalsOfFilmDirectingAr,
//   "672c62b61f099bf569d0f8eb": ScreenwritingBasicsAr,
//   "672c76cc9a9df20599166ca0": IntroductionToFilmMakingAr
// };

// const FundamentalFilmProduction = () => {
//   const [isOpen, setIsOpen] = useState(false);
//   const { filmproductionScreenDetails, loading, error } = useContext(
//     FilmProductionContext
//   );
//   const { direction } = useContext(LanguageContext);
//   const userDetails = auth.getAuthData();
//   const navigate = useNavigate();
//   const toggleContent = () => {
//     setIsOpen(!isOpen);
//   }

//   const checkoutpage = (paymentId) => {
//     // console.log("Button was clicked");
//     if (userDetails) {
//       navigate(`/checkout/${paymentId}`);
//     } else {
//       navigate("/login");
//     }
//   };

//   if (loading) return <p>Loading...</p>;
//   if (error) return <p>Error loading data: {error.message}</p>;



//   const courseId=filmproductionScreenDetails?.formattedCourseData.id;
//   function getCourseData(courseId, direction) {
//     // Determine the correct mapping based on direction
//     const courseDataMapping = direction === "ltr" ? courseDataMappingLTR : courseDataMappingRTL;
  
//     // Fetch the course data
//     // const courseData = courseDataMapping[courseId];
//     const courseData = filmproductionScreenDetails.formattedCourseData
  
//     if (!courseData) {
//       throw new Error(`Course with ID ${courseId} not found for direction ${direction}`);
//     }
  
//     return courseData;
//   }
//   const course = getCourseData(courseId, direction);

//   // Destructure required data from filmproductionScreenDetails
//   const courseDataId=course?.formattedCourseData || {};
//   const courseData =course?.formattedCourseData.whatyoulearn || {};
//   const courseImg = course?.formattedCourseData || {};
//   const buttonData =course?.getPricingCourse1DetailsSecButton || {};
//   const learningTitle =course?.formattedCourseData?.whatyoulearn ||
//     "What you will learn";
// console.log(course.formattedCourseData.estimatedLearningTime)
// console.log(course)

//   return (
//     <>
//       <div  className={styles.coursedetailsheader}>
//         <div className={styles.videoTheory}>
//           <div className={styles.headerText}>
//             <h6>{courseImg.title || "Fundamentals of Film Production"}</h6>
//             <p> {course.formattedCourseData.description}</p>
//             <div className={styles.lessonsprice}>
//             <div className={styles.time}>
//               <svg xmlns="http://www.w3.org/2000/svg" width="20" height="21" viewBox="0 0 20 21" fill="none">
//   <path d="M10 0.5C8.02219 0.5 6.08879 1.08649 4.4443 2.1853C2.79981 3.28412 1.51809 4.8459 0.761209 6.67316C0.00433284 8.50043 -0.1937 10.5111 0.192152 12.4509C0.578004 14.3907 1.53041 16.1725 2.92894 17.5711C4.32746 18.9696 6.10929 19.922 8.0491 20.3078C9.98891 20.6937 11.9996 20.4957 13.8268 19.7388C15.6541 18.9819 17.2159 17.7002 18.3147 16.0557C19.4135 14.4112 20 12.4778 20 10.5C20 9.18678 19.7413 7.88642 19.2388 6.67316C18.7362 5.45991 17.9997 4.35752 17.0711 3.42893C16.1425 2.50035 15.0401 1.76375 13.8268 1.2612C12.6136 0.758658 11.3132 0.5 10 0.5ZM10 18.5C8.41775 18.5 6.87103 18.0308 5.55544 17.1518C4.23985 16.2727 3.21447 15.0233 2.60897 13.5615C2.00347 12.0997 1.84504 10.4911 2.15372 8.93928C2.4624 7.38743 3.22433 5.96197 4.34315 4.84314C5.46197 3.72433 6.88743 2.9624 8.43928 2.65372C9.99113 2.34504 11.5997 2.50346 13.0615 3.10896C14.5233 3.71446 15.7727 4.73984 16.6518 6.05544C17.5308 7.37103 18 8.91775 18 10.5C18 12.6217 17.1571 14.6566 15.6569 16.1569C14.1566 17.6571 12.1217 18.5 10 18.5Z" fill="#39FFFB"/>
//   <path d="M14 9.5H11V6.5C11 6.23478 10.8946 5.98043 10.7071 5.79289C10.5196 5.60536 10.2652 5.5 10 5.5C9.73478 5.5 9.48043 5.60536 9.29289 5.79289C9.10536 5.98043 9 6.23478 9 6.5V10.5C9 10.7652 9.10536 11.0196 9.29289 11.2071C9.48043 11.3946 9.73478 11.5 10 11.5H14C14.2652 11.5 14.5196 11.3946 14.7071 11.2071C14.8946 11.0196 15 10.7652 15 10.5C15 10.2348 14.8946 9.98043 14.7071 9.79289C14.5196 9.60536 14.2652 9.5 14 9.5Z" fill="#39FFFB"/>
// </svg>
//                 {course.formattedCourseData.estimatedLearningTime}
//               </div>
//               <div className={styles.lessons}>
// <svg xmlns="http://www.w3.org/2000/svg" width="21" height="21" viewBox="0 0 21 21" fill="none">
//   <path d="M10.5 20C9.21772 20 7.97365 19.7488 6.80214 19.2533C5.67078 18.7748 4.65492 18.09 3.78268 17.2175C2.91043 16.3451 2.22539 15.3292 1.74687 14.1981C1.25118 13.0264 1 11.7823 1 10.5C1 9.21772 1.25118 7.97365 1.74666 6.80214C2.22518 5.67078 2.91 4.65492 3.78246 3.78268C4.65492 2.91043 5.67078 2.22539 6.80193 1.74687C7.97344 1.25118 9.21772 1 10.5 1C11.7823 1 13.0264 1.25118 14.1979 1.74666C15.3292 2.22518 16.3451 2.91 17.2173 3.78246C18.0896 4.65492 18.7746 5.67078 19.2531 6.80193C19.7486 7.97344 19.9998 9.21772 19.9998 10.4998C19.9998 11.7819 19.7486 13.0261 19.2531 14.1979C18.7746 15.3292 18.0898 16.3451 17.2173 17.2173C16.3449 18.0896 15.329 18.7746 14.1979 19.2531C13.0264 19.7486 11.7821 20 10.5 20ZM10.5 1.97314C9.34867 1.97314 8.23213 2.19856 7.18105 2.64294C6.16583 3.0723 5.25388 3.68736 4.47051 4.47051C3.68714 5.25366 3.0723 6.16562 2.64294 7.18105C2.19834 8.23191 1.97314 9.34867 1.97314 10.5C1.97314 11.6513 2.19856 12.7679 2.64294 13.8189C3.0723 14.8342 3.68736 15.7461 4.47051 16.5295C5.25366 17.3126 6.16562 17.9277 7.18105 18.3571C8.23191 18.8017 9.34867 19.0269 10.5 19.0269C11.6513 19.0269 12.7679 18.8014 13.8189 18.3571C14.8342 17.9277 15.7461 17.3126 16.5295 16.5295C17.3129 15.7463 17.9277 14.8344 18.3571 13.8189C18.8017 12.7681 19.0269 11.6513 19.0269 10.5C19.0269 9.34867 18.8014 8.23213 18.3571 7.18105C17.9277 6.16583 17.3126 5.25388 16.5295 4.47051C15.7463 3.68736 14.8344 3.0723 13.8189 2.64294C12.7681 2.19834 11.6513 1.97314 10.5 1.97314Z" fill="#5AFFFF" stroke="#5AFFFF"/>
//   <path d="M9.22714 14.9998C9.03534 14.9998 8.84278 14.9544 8.66497 14.8621C8.25491 14.6495 8 14.2289 8 13.7647V7.23521C8 6.77094 8.25472 6.35041 8.66497 6.13777C9.07502 5.92513 9.56311 5.9607 9.93878 6.23021L14.4858 9.49494C14.8078 9.72603 15 10.1019 15 10.4999C15 10.898 14.8078 11.2737 14.4858 11.5049L9.93878 14.7697C9.72619 14.9224 9.47732 15 9.22714 15V14.9998ZM9.23016 6.86109C9.15287 6.86109 9.09014 6.88696 9.05707 6.90407C8.99679 6.93527 8.85658 7.03017 8.85658 7.23502V13.7645C8.85658 13.9693 8.99679 14.0642 9.05707 14.0954C9.11735 14.1266 9.27551 14.1865 9.44123 14.0675L13.9883 10.8027C14.0869 10.732 14.1434 10.6215 14.1434 10.4996C14.1434 10.3776 14.0869 10.2673 13.9883 10.1964L9.44123 6.93165C9.36659 6.87802 9.29346 6.86071 9.23016 6.86071V6.86109Z" fill="#5AFFFF" stroke="#5AFFFF" stroke-width="0.1"/>
// </svg>     {course.formattedCourseData.lecturecount}
                
//               </div>

//               <div className={styles.riyals}>
//               <svg xmlns="http://www.w3.org/2000/svg" width="23" height="16" viewBox="0 0 23 16" fill="none">
//   <g clip-path="url(#clip0_9474_5649)">
//     <path d="M0 6.10547V16.1476H23V6.10547H0ZM22.0994 14.3813C21.6035 14.3813 21.1988 14.779 21.1988 15.2662C21.1988 15.277 21.1988 15.2913 21.1988 15.3021H1.79756C1.79756 15.3021 1.79756 15.2806 1.79756 15.2662C1.79756 14.779 1.39648 14.3813 0.896956 14.3813C0.886018 14.3813 0.875079 14.3813 0.860495 14.3813V7.86812C0.860495 7.86812 0.886018 7.86812 0.896956 7.86812C1.39283 7.86812 1.79756 7.47403 1.79756 6.98321C1.79756 6.97246 1.79756 6.95813 1.79756 6.94738H21.2061C21.2061 6.94738 21.2061 6.96888 21.2061 6.98321C21.2061 7.47045 21.6072 7.86812 22.1067 7.86812C22.1176 7.86812 22.1322 7.86812 22.1432 7.86812V14.3813C22.1432 14.3813 22.1213 14.3813 22.1067 14.3813H22.0994ZM13.9648 11.1283C13.9648 12.9841 12.86 14.4888 11.5 14.4888C10.14 14.4888 9.03519 12.9841 9.03519 11.1283C9.03519 9.27251 10.14 7.76781 11.5 7.76781C12.86 7.76781 13.9648 9.27251 13.9648 11.1283Z" fill="#5AFFFF"/>
//     <path d="M10.5588 4.39202C10.1322 4.50309 9.77125 4.75745 9.49414 5.10497H12.7939C12.1376 4.48159 11.3245 4.1914 10.5588 4.39202Z" fill="#5AFFFF"/>
//     <path d="M5.21 5.10524L19.7545 1.27541C19.7545 1.27541 19.7545 1.29691 19.7618 1.31124C19.8895 1.78415 20.3853 2.06359 20.863 1.9382C20.8739 1.9382 20.8849 1.92745 20.8958 1.92387L21.7636 5.10524H22.6569L21.2641 0L1.87012 5.10524H5.20636H5.21Z" fill="#5AFFFF"/>
//   </g>
//   <defs>
//     <clipPath id="clip0_9474_5649">
//       <rect width="23" height="16" fill="white"/>
//     </clipPath>
//   </defs>
// </svg>
//                {course.formattedCourseData.price}
              
//               </div>
//             </div>
//             <div className={styles.maincontainer}>
//               <div className={styles.collapsible}>
//                 <div className={styles.header}>
//                   <div
//                     onClick={toggleContent}
//                     className={styles.toggleButton}
//                     style={{ cursor: "pointer", color: "#39FFFb" }}
//                   >
//                     {isOpen ? "-" : "+"}
//                   </div>
//                   <h5 style={{marginLeft:'5px'}} className={styles.toggle}>
//                   {direction === "rtl" ? "ماذا ستتعلم": "What you will learn"}
//                   </h5>
//                   <hr  style={{opacity:'0.4'}} className={styles.line} />
//                 </div>
//                 {isOpen && (
//                   <div>
//                     <p
//                       className={styles.answer}>
//                       {courseData}
//                     </p>
//                   </div>
//                 )}
//               </div>

//               {course.isfree==="false"? <FilmProductionInstructor /> :null};
              
//               <FilmProductionCourseContent />
//             </div>
//           </div>
//           <div className={styles.courseVideo}>
//             {/* <img src={courseImg.promoPhoto || ""} alt="Course Preview" />
//             <div className={styles.videofixed}> <video src={courseImg.promoVideo } controls alt="Course Preview" /></div> */}
//             {courseImg.promoVideo ? (
//               <div className={styles.videofixed}>
//                 <video src={courseImg.promoVideo} controls alt="Course Preview" />
//               </div>
//             ) : (
//               <img src={courseImg.promoPhoto || ""} alt="Course Preview" />
//             )}

//             <div className={styles.videocontent}>
//               <p>
//                 {course.getPricingCourse1DetailsSec1
//                   ?.videotitle || "No summary available."}
//               </p>
//               <button
//                 //  onClick={checkoutpage}
//                 className={styles.subcribebtn}
//                 // onClick={() => checkoutpage(courseDataId.id)}>
//                 onClick={() => checkoutpage(courseDataId.id)}>
//                 <FaShoppingCart style={{height:'24px',width:'24px'}} /> &nbsp;&nbsp;
//                 <span style={{width:'100%' }}>{buttonData.SubscribeBtn }</span>
//               </button>
//               <button className={styles.addtowishlist}>
//                 <FaHeart style={{height:'24px',width:'24px'} }  />
//                 <span style={{width:"100%"}}>{buttonData.Addtowhishlist}</span>
//               </button>
//             </div>
//           </div>
//         </div>
//       </div>
//     </>
//   );
// };

// export default FundamentalFilmProduction
// import React, { useState, useContext } from "react";
// import styles from "./FundamentalFilmProduction.module.css";
// import { FaShoppingCart, FaHeart } from "react-icons/fa";
// import { CiClock2 } from "react-icons/ci";
// import { FilmProductionContext } from "../../store/FilmProductionContext";
// import auth from "../../Auth/Auth";
// import { useNavigate } from "react-router-dom";

// const
// FundamentalFilmProduction = () => {
//   const [isOpen, setIsOpen] = useState(false);
//   const { filmproductionScreenDetails, loading, error } = useContext(
//     FilmProductionContext
//   );
//   const userDetails = auth.getAuthData();
//   const navigate = useNavigate();

//   const toggleContent = () => {
//     setIsOpen(!isOpen);
//   };

//   const checkoutpage = () => {
//     // console.log("Button was clicked");
//     if (userDetails) {
//       navigate("/checkout");
//     } else {
//       navigate("/login");
//     }
//   };

//   if (loading) return <p>Loading...</p>;
//   if (error) return <p>Error loading data: {error.message}</p>;

//   // Destructure required data from filmproductionScreenDetails
//   const courseData =
//     filmproductionScreenDetails?.formattedCourseData?.description || {};
//   const courseImg = filmproductionScreenDetails?.formattedCourseData || {};
//   const buttonData =
//     filmproductionScreenDetails?.getPricingCourse1DetailsSecButton || {};
//   const learningTitle =
//     filmproductionScreenDetails?.formattedCourseData?.descriptio ||
//     "What you will learn";

//   console.log("hello", courseData);

//   return (
//     <>
//       <div className={styles.coursedetailsheader}>
//         <div className={styles.videoTheory}>
//           <div className={styles.headerText}>
//             <h6>{courseImg.title || "Fundamentals of Film Production"}</h6>
//             <p> {courseData || "Course description not available."}</p>
//             <div className={styles.lessonsprice}>
//               <div className={styles.riyals}>
//                 {courseData.price
//                   ? `${courseData.price} ${courseData.para}`
//                   : "750 SAR"}
//                 <CiClock2 className={styles.icon} />
//               </div>
//               <div className={styles.time}>
//                 {courseData.estimatedLearningTime?.time || "+6 hours"}
//                 <CiClock2 className={styles.icon} />
//               </div>
//             </div>
//             <div className={styles.maincontainer}>
//               <div className={styles.collapsible}>
//                 <div className={styles.header}>
//                   <div
//                     onClick={toggleContent}
//                     className={styles.toggleButton}
//                     style={{ cursor: "pointer", color: "#39FFFb" }}
//                   >
//                     {isOpen ? "-" : "+"}
//                   </div>
//                   <h5 className={styles.toggle}>{learningTitle}</h5>
//                   <hr className={styles.line} />
//                 </div>
//                 {isOpen && (
//                   <div>
//                     <p
//                       className={styles.answer}
//                       style={{
//                         margin: "0",
//                         padding: "0",
//                         lineHeight: "145%",
//                         fontSize: "20px",
//                       }}
//                     >
//                       {courseData}
//                     </p>
//                   </div>
//                 )}
//               </div>
//             </div>
//           </div>
//           <div className={styles.courseVideo}>
//             {/* <img src={courseImg.promoPhoto || ""} alt="Course Preview" />
//             <div className={styles.videofixed}> <video src={courseImg.promoVideo } controls alt="Course Preview" /></div> */}
//             {courseImg.promoVideo ? (
//   <div className={styles.videofixed}>
//     <video src={courseImg.promoVideo} controls alt="Course Preview" />
//   </div>
// ) : (
//   <img src={courseImg.promoPhoto || ""} alt="Course Preview" />
// )}

//             <div className={styles.videocontent}>
//               <p>
//                 {filmproductionScreenDetails.getPricingCourse1DetailsSec1
//                   ?.description || "No summary available."}
//               </p>
//               <button onClick={checkoutpage} className={styles.subcribebtn}>
//                 <FaShoppingCart /> &nbsp;&nbsp;
//                 {buttonData.title || "Subscribe"}
//               </button>
//               <button className={styles.addtowishlist}>
//                 <FaHeart />
//                 &nbsp;&nbsp;Add to wishlist
//               </button>
//             </div>
//           </div>
//         </div>
//       </div>
//     </>
//   );
// };

// export default FundamentalFilmProduction;