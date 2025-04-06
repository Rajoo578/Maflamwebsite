// import { instructors } from '../../assets/assests';
// import styles from './MaflamInstructors.module.css';
// import { HomePageContext } from "../../store/HomePageContext.jsx";
// import { useContext } from 'react';

// const MaflamInstructors = () => {
//   const { homeScreenDetails, loading, error } = useContext(HomePageContext);

//   if (loading) return <p>Loading...</p>; // Handle loading state
//   if (error) return <p>Error loading data</p>; // Handle error state

//   // Ensure that the API data exists before rendering
//   const instructorTitle = homeScreenDetails?.instructorTitle|| [];
//   const   maflamInstructorData = homeScreenDetails?.maflamInstructorData || [];
//   return (
//    <div className={styles.instructorsContainerss}>
//      <div className={styles.instructorsContainer}>
//       <h2> {instructorTitle?.instructorTitle }</h2>
//       <div className={styles.instructorsGrid}>
//         {maflamInstructorData.map((instructor, index) => (
//           <div key={index} className={styles.instructorCard}>
//             <img src={instructor.image} alt={instructor.name} className={styles.instructorImage} />
//             <p>{instructor.title}</p>
//           </div>
//         ))}
//       </div>
//     </div>
//    </div>
//   );
// };

// export default MaflamInstructors;

import { useContext } from "react";
import styles from "./MaflamInstructors.module.css";
import { HomePageContext } from "../../store/HomePageContext.jsx";
import { Link } from "react-router-dom";
const redirectionMap = {
  "Afnan Linjawi": "/R2/R4/filmproduction/672c62b61f099bf569d0f8eb",
  "Ayman Khoja": "/R2/R4/filmproduction/672c5ee7da73549420503e9c",
  "Oday Abid": "/R2/R4/filmproduction/672c5bb6a7c24e51d0db091e",
  "Khalid AlSudairy": "/R2/R4/filmproduction/672c6953bd321f82ce18327a",
  "Aseel Radwan": "/R2/R4/filmproduction/672c609ae90c3d8357705c73",
  "Khalid Yaslam": "/R2/R4/filmproduction/672c6420b3e5c110514f52f9",
  "أفنان لنجاوي": "/R2/R4/filmproduction/672c62b61f099bf569d0f8eb",
  "أيمن خوجة": "/R2/R4/filmproduction/672c5ee7da73549420503e9c",
  "عدي عابد": "/R2/R4/filmproduction/672c5bb6a7c24e51d0db091e",
  "خالد السديري": "/R2/R4/filmproduction/672c6953bd321f82ce18327a",
  "أصيل رضوان": "/R2/R4/filmproduction/672c609ae90c3d8357705c73",
  "خالد يسلم": "/R2/R4/filmproduction/672c6420b3e5c110514f52f9",
};
const MaflamInstructors = () => {
  const { homeScreenDetails, loading, error } = useContext(HomePageContext);

  if (loading) return <p>Loading...</p>; // Handle loading state
  if (error) return <p>Error loading data</p>; // Handle error state

  // Ensure that the API data exists before rendering
  const instructorTitle =
    homeScreenDetails?.instructorTitle?.title || "Instructors";
  const maflamInstructorData = homeScreenDetails?.maflamInstructorData || [];

  return (
    <div className={styles.instructorsContainerss}>
      <div className={styles.instructorsContainer}>
        <h2>{instructorTitle}</h2>
        <div className={styles.instructorsGrid}>
          {maflamInstructorData.map((instructor, index) => (
            <div key={index} className={styles.instructorCard}>
              <img
                src={instructor.imageUrl}
                alt={instructor.title}
                className={styles.instructorImage}
              />
              <p>
                <Link to={redirectionMap[instructor.title]}> {instructor.title}</Link>
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default MaflamInstructors;
