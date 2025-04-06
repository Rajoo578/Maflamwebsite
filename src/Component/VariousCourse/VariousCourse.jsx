import { useContext } from "react";
import styles from "./VariousCourse.module.css";
import { PricingPageContext } from "../../store/PricingPageContext";
import { useNavigate } from "react-router-dom";
import { BiDirections } from "react-icons/bi";
import { LanguageContext } from "../LanguageContext/LanguageContext";

const VariousCourse = () => {
  const { pricingPageContextDetails, loading, error } = useContext(PricingPageContext);
  const navigate = useNavigate();
  const { direction } = useContext(LanguageContext);
  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error loading data</p>;

  const courses = pricingPageContextDetails?.formattedCourseData || [];
  const buttonTitle = direction === 'rtl' ? "اشترك الآن" : "Buy now";
  const Currency = direction === "SAR";


  // Define a predefined order for the 11 courses by their `_id`

  const handleCourseClick = (courseId) => {
    navigate(`/R2/R4/filmproduction/${courseId}`);
  };

  return (
    <div className={styles.maincontainer}>
      <div className={styles.container}>
        <h2>{pricingPageContextDetails?.getPricingCourse1DetailsSec4?.title || "Or, choose from our various courses"}</h2>
        <div className={styles.cardsContainer}>
          {courses.map((course) => (
            <div style={{ overflow: 'hidden' }} key={course.courseId} className={styles.card}>
              <div style={{ height: '280px', overflow: 'hidden' }}>
                <img style={{ paddingTop: '40px', width: '100%' }}
                  src={course.promoVideo ? course.promoVideo : course.banner}
                >
                </img>

              </div>

              <div
                style={{
                  display: "flex",
                  flexDirection: "row",
                  flexWrap: "wrap",
                  alignItems: "center",
                  paddingRight: "10px",
                  paddingLeft: "10px"
                }}
              >
                {course.instructors.map((instructor, index) => (
                  <div
                    key={index}
                    style={{
                      display: "flex",
                      alignItems: "center",
                      marginTop: "15px"
                    }}
                  >
                    <img
                      src={course.banner}
                      alt={instructor.photoUrl}
                      style={{
                        width: "40px",
                        height: "40px",
                        borderRadius: "20px",
                        marginRight: "10px",
                        marginLeft: "10px"
                      }}
                    />
                    <p>{instructor.name}</p>
                  </div>
                ))}
              </div>

              {/* Card Content */}
              <div className={styles.cardContent}>
                <h3 className={styles.title}>{course.title}</h3>
                {/* <p className={styles.description}>{course.description.split(" ").slice(0, 23).join(" ")}...</p> */}
                <p className={styles.description}>{course.description.split(" ").slice(0, 23).join(" ")}...</p>
                <hr
                  style={{
                    color: "#39FFFB",
                    opacity: "0.3",
                    strokeWidth: "0.5px"
                  }}
                />
                <div className={styles.footer}>
                  <div className={styles.footerblocks}>
                    <div style={{ display: 'flex', flexDirection: 'row', textAlign: 'center', alignItems: 'center', justifyContent: 'center' }} className={styles.footerblocks}>

                      {/* 
<div className={styles.priceContainer}>
<span className={styles.price}>
  {course.price === "0" ? (
    "Only Available With Bundle"
  ) : (
    <>
      <div className={styles.display}>
        
      </div>
      <div className={styles.oldprices}>
      <p className={styles.oldPrice}><span className={styles.newprice}>{`${course.price} SAR`} </span>  &nbsp;<span className={styles.newpricess}>  {`${(course.price / 2)} SAR`}</span></p>
     
        <span className={styles.discount}>
          50% OFF Special Launch Offer
        </span>
        
      </div>
   
    </>
  )}
     </span>
</div> */}


                      <span className={styles.price}>
                        {direction === "rtl"
                          ? (course.price === "0"
                            ? "متاح فقط ضمن الباقة الكاملة"
                            : <>
                              {course.price} <span style={{color:'white'}}>ريال</span>
                            </>
                          )
                          : (course.price === "0"
                            ? "Only Available with Bundle"
                            : <>
                              {course.price} <span style={{color:'white'}}>SAR</span>
                            </>)}
                      </span>


                    </div>
                    <span className={styles.line}>|</span>
                    <div className={styles.footerblocks}>
                      &nbsp;
                      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
                        <path d="..." fill="#39FFFB" />
                        <path d="..." fill="#39FFFB" />
                      </svg>
                      &nbsp;
                      <p style={{ fontSize: "14px" }}>{course.estimatedLearningTime?.time}</p>
                    </div>
                  </div>
                  <button
                    className={styles.buyNow}
                    onClick={() => handleCourseClick(course.id)}
                  >
                    {buttonTitle}
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default VariousCourse;



// import { useContext } from "react";
// import styles from "./VariousCourse.module.css";
// import { PricingPageContext } from "../../store/PricingPageContext";
// import { useNavigate } from "react-router-dom";

// const VariousCourse = () => {
//   const { pricingPageContextDetails, loading, error } =
//     useContext(PricingPageContext);
//   const navigate = useNavigate();

//   if (loading) return <p>Loading...</p>;
//   if (error) return <p>Error loading data</p>;

//   const courses = pricingPageContextDetails?.formattedCourseData || [];
//   const buttonTitle = pricingPageContextDetails?.getPricingCourse1DetailsSecButton?.title ||
//     "Buy now";

//   return (
//     <div className={styles.maincontainer}>
//       <div className={styles.container}>
//         <h2>
//           {pricingPageContextDetails?.getPricingCourse1DetailsSec4?.title ||
//             "Or, choose from our various courses"}
//         </h2>
//         <div className={styles.cardsContainer}>
//           {courses.map((course) => (
//             <div key={course.courseId} className={styles.card}>
//               <img
//                 src={course.promoPhoto}
//                 alt={course.title}
//                 className={styles.cardImage}
//               />
//               <div className={styles.cardContent}>
//                 <div className={styles.instructorContainer}>
//                   {course.instructors.map((instructor) => (
//                     <div key={instructor.name} className={styles.instructor}>
//                       <img
//                         src={instructor.photoUrl}
//                         alt={instructor.name}
//                         className={styles.instructorImage}
//                       />
//                       <p>{instructor.name}</p>
//                     </div>
//                   ))}
//                 </div>
//                 <h3 className={styles.title}>{course.title}</h3>
//                 <p className={styles.description}>
//                   {course.description.split(" ").slice(0, 23).join(" ")}...
//                 </p>
//                 <div className={styles.footer}>
//                   <span className={styles.para}>{course.para}</span>
//                   &nbsp;
//                   <span className={styles.price}>{course.price}</span>
//                   <span className={styles.line}>|</span>
//                   &nbsp;
//                   <svg
//                     width="20"
//                     height="20"
//                     viewBox="0 0 20 20"
//                     fill="none"
//                     xmlns="http://www.w3.org/2000/svg"
//                   >
//                     <path
//                       d="M10 0C8.02219 0 6.08879 0.58649 4.4443 1.6853C2.79981 2.78412 1.51809 4.3459 0.761209 6.17316C0.00433284 8.00043 -0.1937 10.0111 0.192152 11.9509C0.578004 13.8907 1.53041 15.6725 2.92894 17.0711C4.32746 18.4696 6.10929 19.422 8.0491 19.8078C9.98891 20.1937 11.9996 19.9957 13.8268 19.2388C15.6541 18.4819 17.2159 17.2002 18.3147 15.5557C19.4135 13.9112 20 11.9778 20 10C20 8.68678 19.7413 7.38642 19.2388 6.17316C18.7362 4.95991 17.9997 3.85752 17.0711 2.92893C16.1425 2.00035 15.0401 1.26375 13.8268 0.761205C12.6136 0.258658 11.3132 0 10 0ZM10 18C8.41775 18 6.87103 17.5308 5.55544 16.6518C4.23985 15.7727 3.21447 14.5233 2.60897 13.0615C2.00347 11.5997 1.84504 9.99112 2.15372 8.43928C2.4624 6.88743 3.22433 5.46197 4.34315 4.34314C5.46197 3.22433 6.88743 2.4624 8.43928 2.15372C9.99113 1.84504 11.5997 2.00346 13.0615 2.60896C14.5233 3.21446 15.7727 4.23984 16.6518 5.55544C17.5308 6.87103 18 8.41775 18 10C18 12.1217 17.1571 14.1566 15.6569 15.6569C14.1566 17.1571 12.1217 18 10 18Z"
//                       fill="#39FFFB"
//                     />
//                     <path
//                       d="M14.0858 6.31325L9.24264 11.1564L7.12132 9.03508C6.93378 8.84754 6.67943 8.74219 6.41421 8.74219C6.149 8.74219 5.89464 8.84754 5.70711 9.03508C5.51957 9.22262 5.41421 9.47697 5.41421 9.74219C5.41421 10.0074 5.51957 10.2618 5.70711 10.4493L8.53553 13.2777C8.72307 13.4653 8.97742 13.5706 9.24264 13.5706C9.50786 13.5706 9.76221 13.4653 9.94975 13.2777L15.5 7.72747C15.6875 7.53993 15.7929 7.28558 15.7929 7.02036C15.7929 6.75514 15.6875 6.50079 15.5 6.31326C15.3125 6.12572 15.0581 6.02036 14.7929 6.02036C14.5277 6.02036 14.2733 6.12572 14.0858 6.31325Z"
//                       fill="#39FFFB"
//                     />
//                   </svg>
//                   &nbsp;
//                   <p>{course.estimatedLearningTime?.time}</p>
//                   {/* <button className={styles.buyNow}>{buttonTitle}</button> */}
//                   <button
//                     className={styles.buyNow}
//                     onClick={() => navigate("/filmproduction")}
//                   >
//                     {course?.btnTitle}
//                   </button>
//                 </div>
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default VariousCourse;

// import { useContext } from "react";
// import styles from "./VariousCourse.module.css";
// import { PricingPageContext } from "../../store/PricingPageContext";
// // import { PricingPageContext } from "../../context/PricingPageContext";

// const VariousCourse = () => {
//   const { pricingPageContextDetails, loading, error } = useContext(PricingPageContext);

//   if (loading) return <p>Loading...</p>; // Handle loading state
//   if (error) return <p>Error loading data</p>; // Handle error state

//   // Fetching the course data from context
//   const courses = pricingPageContextDetails?.formattedCourseData || [];
//   const buttonTitle = pricingPageContextDetails?.getPricingCourse1DetailsSecButton?.title || "Buy now";

//   return (
//     <div className={styles.maincontainer}>
//       <div className={styles.container}>
//         <h2>Or, choose from our various courses</h2>
//         <div className={styles.cardsGrid}>
//           {courses.map((course) => (
//             <div key={course.courseId} className={styles.card}>
//               <img
//                 src={course.promoPhoto}
//                 alt={course.title}
//                 className={styles.cardImage}
//               />
//               <div className={styles.cardContent}>
//                 <div className={styles.imageflex}>
//                   {course.instructors.map((instructor) => (
//                     <div key={instructor.name}>
//                       <img src={instructor.photoUrl} alt={instructor.name} />
//                       <p className={styles.instructor}>{instructor.name}</p>
//                     </div>
//                   ))}
//                 </div>
//                 <h3 className={styles.title}>{course.title}</h3>
//                 <p className={styles.description}>{course.description}</p>
//                 <div className={styles.footer}>
//                   <p>{course.para}</p>
//                   <img src={course.icon} alt="" />
//                   <span>{course.price}</span>
//                   <p>{course.duration}</p>
//                   <button className={styles.buyNow}>{buttonTitle}</button>
//                 </div>
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default VariousCourse;
// import { VariousCard } from "../../assets/assests";

// import styles from "./VariousCourse.module.css";
// import { VariousCard } from "../../assets/assests";
// const VariousCourse = () => {
//   return (
//     <div className={styles.maincontainer}>
//     <div className={styles.container}>
//       <h2>Or, choose from our various courses.</h2>
//       <div className={styles.cardsGrid}>
// {VariousCard.map((course) => (
//   <div key={course.id} className={styles.card}>
//     <img src={course.imageUrl} alt={course.title} className={styles.cardImage} />
//     <div className={styles.cardContent}>
//       <div className={styles.imageflex}>  <img src={course.image} alt="" />
//       <p className={styles.instructor}>{course.instructor}</p></div>
//       <h3 className={styles.title}>{course.title}</h3>
//       <p className={styles.description}>{course.description}</p>
//       <div className={styles.footer}>
//         <p> {course.para}</p>
//         <span>{course.price}</span>
//         <img src={course.icon} alt="" />
//         <p>{course.duration}</p>
//         <button className={styles.buyNow}>Buy now</button>
//       </div>
//     </div>
//   </div>
// ))}
//       </div>
//     </div>
//     </div>
//   );
// };

// export default VariousCourse;
