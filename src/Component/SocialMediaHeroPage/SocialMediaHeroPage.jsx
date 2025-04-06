

import { useContext } from "react";
// import { SocialMediaPageContext } from "../../store/SocialMediaPageContext";
import { SocialMediaPageContext } from "../../store/SocilaMediaPageContext";
import styles from "./SocialMediaHeroPage.module.css";

export default function SocialMediaHeroPage() {
  const { socialMediaPageDetails, loading, error } = useContext(SocialMediaPageContext);

  if (loading) return <p>Loading...</p>; // Handle loading state
  if (error) return <p>Error loading data</p>; // Handle error state

  // Extract data from the context
  const title = socialMediaPageDetails?.pageDataTitle1?.title || "Invest in Yourself and Start Your Journey in Learning Filmmaking";
  const description = socialMediaPageDetails?.pageDatades1?.description || "Learn the technical and creative skills that will help you make a feature film from scratch.";
  const platforms = socialMediaPageDetails?.pageData1?.category[0] || [];
  const platforms1 = socialMediaPageDetails?.pageData1?.category[1] || [];
  const platforms2 = socialMediaPageDetails?.pageData1?.category[2] || [];

  return (
  
    <div className={styles.cointainer}> 

    <div className={styles.titles}>
    <h1>{title}</h1>
    <p>{description}</p>
    </div>
    
    <div className={styles.btndiv}> 
        <button className={styles.btnyoutube}> 
       <a target="_blank" href="https://www.youtube.com/@maflamcom"> {platforms} </a>
       {/* <a href="https://www.youtube.com/@maflamcom"> YouTube </a> */}
        </button>
        <button className={styles.btntiktok}> 
       <a target="_blank" href="https://www.tiktok.com/@maflam.com">{platforms1}</a>
        </button>
    
        <button className={styles.btninsta}> 
         <a target="_blank" href="https://www.instagram.com/maflam.com_/profilecard/?igsh=MThidXJubTVwNWFrZQ%3D%3D">{platforms2}</a>
        </button>
    
    </div>
    
        
        </div>
  );
}







// // import { useContext } from "react";
// import { useContext } from "react";
// import { SocialMediaPageContext } from "../../store/SocilaMediaPageContext";
// import styles from "./SocialMediaHeroPage.module.css"

// export default function SocialMediaHeroPage() {


//   const { socilaMediaPageDetails, loading, error } = useContext(SocialMediaPageContext);

//   if (loading) return <p>Loading...</p>; // Handle loading state
//   if (error) return <p>Error loading data</p>; // Handle error state

//   // Fetching the title and description from the context API
//   const title = socilaMediaPageDetails?.pageDataTitle1?.title || "Invest in Yourself and Start Your Journey in Learning Filmmaking";
//   const description = socilaMediaPageDetails?.getPricingCourse1DetailsSec1?.description || "Learn the technical and creative skills that will help you make a feature film from scratch.";
//   return (
//     <div className={styles.cointainer}> 

// <div className={styles.titles}>
// <h1> {title}</h1>
// <p> Educate yourself with our collection of free videos.</p>
// </div>

// <div className={styles.btndiv}> 
//     <button className={styles.btnyoutube}> 
//    <a target="_blank" href="https://www.youtube.com/@maflamcom"> YouTube </a>
//    {/* <a href="https://www.youtube.com/@maflamcom"> YouTube </a> */}
//     </button>
//     <button className={styles.btntiktok}> 
//    <a target="_blank" href="https://www.tiktok.com/@maflam.com">TikTok</a>
//     </button>

//     <button className={styles.btninsta}> 
//      <a target="_blank" href="https://www.instagram.com/maflam.com_/profilecard/?igsh=MThidXJubTVwNWFrZQ%3D%3D">Instagram</a>
//     </button>

// </div>

    
//     </div>
//   )
// }
