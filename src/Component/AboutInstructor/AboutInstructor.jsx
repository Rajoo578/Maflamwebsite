// import React from 'react'
// import styles from './AboutInstructor.module.css';
// import { aboutinstructorData } from '../../assets/assests';



// const AboutInstructor = () => {
//     const [isOpen, setIsOpen] = useState(false);
  
//     const toggleContent = () => {
//       setIsOpen(!isOpen);
//     };
//   return (
//     <div className={styles.maincontainer}>
//     <div className={styles.collapsible}>
//       <div className={styles.header}>
//         {/* Toggle button */}
//         <div 
//           onClick={toggleContent} 
//           className={styles.toggleButton} 
//           style={{ cursor: 'pointer', color: '#39FFFb' }}
//         >
//           {isOpen ? '-' : '+'}
//         </div>
//         {/* Title */}
//         <h5 className={styles.toggle}>
//           About the  Instructor
//         </h5>
//         <hr className={styles.line} />
//       </div>
//       {/* Content collapses/expands when clicked */}
//       {isOpen && (
//         <div>
//           {learnData.map((item, index) => (
//             <p key={index} className={styles.answer}>
//               {item}
//             </p>
//           ))}
//         </div>
//       )}
//     </div>
//   </div>
// );
// };

// export default AboutInstructor




// import React, { useState } from 'react';
// import styles from './AboutInstructor.module.css';
// import { aboutInstructorData } from '../../assets/assests';

// const AboutInstructor = () => {
//   const [isOpen, setIsOpen] = useState(false);

//   const toggleContent = () => {
//     setIsOpen(!isOpen);
//   };

//   return (
//     <div className={styles.maincontainer}>
//       <div className={styles.collapsible}>
//         <div className={styles.header}>
//           {/* Toggle button */}
//           <div
//             onClick={toggleContent}
//             className={styles.toggleButton}
//             style={{ cursor: 'pointer', color: '#39FFFb' }}
//           >
//             {isOpen ? '-' : '+'}
//           </div>
//           {/* Title */}
//           <h5 className={styles.toggle}>
//             About the Instructor
//           </h5>
//           <hr className={styles.line} />
//         </div>

//         {/* Content collapses/expands when clicked */}
//         {isOpen && (
//           <div>
//             {/* Instructor Name */}
//             <h6 className={styles.instructorName}>
//               {aboutInstructorData.name}
//             </h6>
//             {/* Instructor Details */}
//             <p className={styles.instructorDetails}>
//               {aboutInstructorData.details}
//             </p>
//           </div>
//         )}
//       </div>
//     </div>
//   );
// };

// export default AboutInstructor;



import React, { useState } from 'react';
import styles from './AboutInstructor.module.css';
import { aboutInstructorData } from '../../assets/assests';

const AboutInstructor = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleContent = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className={styles.maincontainer}>
      <div className={styles.collapsible}>
        <div className={styles.header}>
          {/* Toggle button */}
          <div 
            onClick={toggleContent} 
            className={styles.toggleButton} 
            style={{ cursor: 'pointer', color: '#39FFFb' }}
          >
            {isOpen ? '-' : '+'}
          </div>
          {/* Title */}
          <h5 className={styles.toggle}>About the Instructor</h5>
          <hr className={styles.line} />
        </div>
        {/* Content collapses/expands when clicked */}
        {isOpen && (
          <div className={styles.instructorContent}>
            <h6 className={styles.instructorName}>{aboutInstructorData.name}</h6>
            {/* Render each line of details as separate paragraphs */}
            {aboutInstructorData.details.map((detail, index) => (
              <p key={index} className={styles.paragraph}>
                {detail}
              </p>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default AboutInstructor;
