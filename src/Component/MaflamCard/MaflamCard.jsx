




import { useContext } from 'react';
import styles from './MaflamCard.module.css';
import { AboutusPageContext } from '../../store/AboutUsPageContext';

const MaflamCard = () => {
  const { aboutusScreenDetails, loading, error } = useContext(AboutusPageContext);

  if (loading) return <p>Loading...</p>; // Handle loading state
  if (error) return <p>Error loading data</p>; // Handle error state

  // Extract the title and mentors array from the context
  const mentorsTitle = aboutusScreenDetails?.aboutUsDetailsSec70?.mentorTitle || 'Maflam Mentors';
  const mentors = aboutusScreenDetails?.aboutUsDetailsSec7 || [];

  return (
    <div className={styles.container}>
      <h2 className={styles.title}>{mentorsTitle}</h2>
      <div className={styles.grid}>
        {mentors.map((mentor, index) => (
          <div className={styles.card} key={index}>
            <img src={mentor.imageUrl} alt={mentor.title} className={styles.image} />
            <div className={styles.overlay}>
              <p className={styles.name}>{mentor.title}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MaflamCard;

// import { useContext } from 'react';
// import styles from './MaflamCard.module.css';
// import { AboutusPageContext } from '../../store/AboutUsPageContext';

// const MaflamCard = () => {
//   const { aboutusScreenDetails, loading, error } = useContext(AboutusPageContext);

//   if (loading) return <p>Loading...</p>; // Handle loading state
//   if (error) return <p>Error loading data</p>; // Handle error state

//   // Ensure that the API data exists before rendering
//   // const maflamOffersTitle = aboutusScreenDetails?.maflamOffersTitle || {
//   //   title: 'What Maflam Offers',
//   //   description: 'Together, we can discover and empower the new generation of filmmakers',
//   // };


//   const mentors = aboutusScreenDetails?.aboutUsDetailsSec70?.mentorTitle || []; // Exclude the first item (title)
//   const mentorsTitle = aboutusScreenDetails?.aboutUsDetailsSec7 || 'Maflam Mentors';

//   return (
//     <div className={styles.container}>
//       <h2 className={styles.title}>{mentors}</h2>
//       <div className={styles.grid}>
//         {mentorsTitle.map((mentor, index) => (
//           <div className={styles.card} key={index}>
//             <img src={mentor.imageUrl} alt={mentor.title} className={styles.image} />
//             <div className={styles.overlay}>
//               <p className={styles.name}>{mentor.title}</p>
//             </div>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default MaflamCard;




// import styles from './MaflamCard.module.css';
// import { MaflamCards } from '../../assets/assests';



// const MaflamCard = () => {
  
//   return (
//     <div className={styles.container}>
//       <h2 className={styles.title}>مرشدين مُفلم</h2>
//       <div className={styles.grid}>
//         {MaflamCards.map((mentor, index) => (
//           <div className={styles.card} key={index}>
//             <img src={mentor.image} alt={mentor.name} className={styles.image} />
//             <div className={styles.overlay}> <p className={styles.name}>{mentor.title}</p></div>
//             {/* <p className={styles.name}>{mentor.title}</p> */}
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default MaflamCard;
