// import React from 'react'

// import styles from "./EducationaPost.module.css"
// import { assests, EducationPost } from '../../assets/assests'

// export default function EducationaPost() {
//   return (
//     <div>
//         <div> 
//             <h1> Content of Our Educational Posts</h1>
            
//         </div>
        
//         <div>
//             { EducationPost.map((index , educationpost)=>(
//                 <div key={index} className={styles.card}>  
//                   <img src={educationpost.imageurl} alt=" not Found" />
//                   <h5> {educationpost.title}</h5>

// <div> 
//     <p>{educationpost.episode}</p>
//     <img src={assests.instagramlogo} alt="" />

// </div>

//                    </div>
//             ))
//             }
            
//         </div>
//          </div>
//   )
// }

// import React from 'react';
// import styles from './EducationaPost.module.css';
// import { assests, EducationPost } from '../../assets/assests';

// export default function EducationaPost() {
//   return (
//     <div className={styles.container}>
//       <div> 
//         <h1>Content of Our Educational Posts</h1>
//       </div>

//       <div className={styles.cardsWrapper}>
//         {EducationPost.map((educationpost, index) => (
//           <div key={index} className={styles.card}>
//             <img src={educationpost.imageurl} alt="Not Found" />
//             <h5>{educationpost.title}</h5>

//             <div className={styles.mores}> 
//               <p>{educationpost.episode}</p>
//              <div> <img src={assests.instagramlogo} alt="Instagram Logo" /></div>
//             </div>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// }


import React, { useContext } from 'react';
import styles from './EducationalPost.module.css';
import { SocialMediaPageContext } from '../../store/SocilaMediaPageContext';
import { assests } from '../../assets/assests';
// Example: Importing assets directly if needed
// import instagramLogo from '../../assets/instagramlogo.png';

export default function EducationalPost() {
  const { socialMediaPageDetails, loading, error } = useContext(SocialMediaPageContext);

  if (loading) return <p>Loading...</p>; // Handle loading state
  if (error) return <p>Error loading data</p>; // Handle error state

  // Extract data from the context
  const title = socialMediaPageDetails?.pageDataTitle5?.title || "Educational Posts";
  const educationPosts = socialMediaPageDetails?.pageData5 || []; // Default to empty array if undefined

  return (
    <div className={styles.container}>
      <div>
        <h1>{title}</h1>
      </div>

      <div className={styles.cardsWrapper}>
        {educationPosts.map((educationpost, index) => (
          <div key={index} className={styles.card}>
            <img src={educationpost.image} alt="Educational Post" />
            <h5>{educationpost.title}</h5>
            <div className={styles.mores}>
              <p>{educationpost.text}</p>
              <div>
                {/* Replace the below `src` with the appropriate logo source */}
                {/* <img src="path_to_instagram_logo" alt="Instagram Logo" /> */}
                <div> <img src={assests.instagramlogo} alt="Instagram Logo" /></div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
