
// import Navbar from '../../Component/Navbar/Navbar'
// import Footer from '../../Component/Footer/Footer'
// import styles from "./SocialMediaPage.module.css"
// import { LanguageProvider } from '../../Component/LanguageContext/LanguageContext'
// import HomeScreenCarousel from '../../Component/HomeScreenCarousel/HomeScreenCarousel'
// import { HomePageContext, HomePageProvider } from '../../store/HomePageContext'
// import SocialMediaHeroPage from '../../Component/SocialMediaHeroPage/SocialMediaHeroPage'
// import YouTubeChannel from '../../Component/YouTubeChannel/YouTubeChannel'
// import EducationalPost from '../../Component/EducationalPost/EducationalPost'
// import JoinUs from '../../Component/JoinUs/JoinUs'
// import { AboutusPageContext, AboutusPageProvider } from '../../store/AboutUsPageContext'
// import FilmProduction from '../../Component/FilmProduction/FilmProduction'
// // import Podcast from '../../Component/Podcast/Podcast'
// import OSPCarousel from '../../Component/OSPCarousel/OSPCarousel'
// import BTSCarousel from '../../Component/BTSCarousel/BTSCarousel'
// import ShowsPodcast from "../../Component/ShowsPodcast/ShowsPodcast"
// import { useContext, useEffect } from 'react'
// import { SocilaMediaPageContext, SocilaMediaPageProvider } from '../../store/SocilaMediaPageContext'

// export default function SocialMediaPage() {



//   const {
//     homeScreenDetails,
//     loading: homeLoading,
//     error: homeError,
//   } = useContext(HomePageContext);

//   useEffect(() => {
//     if (homeScreenDetails) {
//       console.log("Home Screen Details:", homeScreenDetails);
//     }
//   }, [homeScreenDetails]);

//   const {
//     aboutusScreenDetails,
//     loading: aboutLoading,
//     error: aboutError,
//   } = useContext(AboutusPageContext);

//   useEffect(() => {
//     if (aboutusScreenDetails) {
//       console.log("About Us Screen Details:", aboutusScreenDetails);
//     }
//   }, [aboutusScreenDetails]);



//   const { socilaMediaPageDetails, loading, error } = useContext(SocilaMediaPageContext );

//   useEffect(() => {
//     if (socilaMediaPageDetails) {
//       console.log("About Us Screen Details:", socilaMediaPageDetails);
//     }
//   }, [socilaMediaPageDetails]);

//   return (
//     <div className={styles.bgcointainer}>
//         <LanguageProvider>
//             <HomePageProvider>
//               <AboutusPageProvider>
//                 <SocilaMediaPageProvider>
//         <Navbar></Navbar>
//         <SocialMediaHeroPage></SocialMediaHeroPage>
//         <OSPCarousel/>
//         <ShowsPodcast></ShowsPodcast>
//         <YouTubeChannel></YouTubeChannel>
//         {/* <Podcast></Podcast> */}
//         <EducationalPost></EducationalPost>
//         <BTSCarousel/>
//         <FilmProduction></FilmProduction> 
//         <JoinUs></JoinUs>
//         <Footer></Footer>
//         </SocilaMediaPageProvider>
//         </AboutusPageProvider>
//         </HomePageProvider>
//         </LanguageProvider>

//     </div>
//   )
// }

import {
  SocialMediaHeroPage,
  YouTubeChannel,
  EducationalPost,
  JoinUs,
  OSPCarousel,
  BTSCarousel,
  ShowsPodcast,
  SubscribeFundamentalPackage,
} from "../../Component";

import
{
  useScrollToTopWithDelay
} from  '../../hooks'
import styles from "./SocialMediaPage.module.css";
import {
  LanguageProvider,
  HomePageProvider,
  AboutusPageContext,
  AboutusPageProvider,
  SocialMediaPageContext, 
  SocialMediaPageProvider
} from "../../store";
import { useContext, useEffect } from "react";
export default function SocialMediaPage() {
  // const { homeScreenDetails, loading: homeLoading } =
  //   useContext(HomePageContext);

  // useEffect(() => {
  //   if (homeScreenDetails) {
  //     console.log("Home Screen Details:", homeScreenDetails);
  //   }
  // }, [homeScreenDetails]);
  useScrollToTopWithDelay(1000);

  const { aboutusScreenDetails, loading: aboutLoading } =
    useContext(AboutusPageContext);

  useEffect(() => {
    if (aboutusScreenDetails) {
      console.log("About Us Screen Details:", aboutusScreenDetails);
    }
  }, [aboutusScreenDetails]);

  const { socialMediaPageDetails, loading } = useContext(
    SocialMediaPageContext
  );

  useEffect(() => {
    if (socialMediaPageDetails) {
      console.log("Social Media Page Details:", socialMediaPageDetails);
    }
  }, [socialMediaPageDetails]);

  return (

    <LanguageProvider>
      <HomePageProvider>
        <AboutusPageProvider>
          <SocialMediaPageProvider>
            <div className={styles.bgContainer}>
              <SocialMediaHeroPage />
              <OSPCarousel />
              <ShowsPodcast />
              <YouTubeChannel />
              <EducationalPost />
              <BTSCarousel />
            </div>
          </SocialMediaPageProvider>
        </AboutusPageProvider>
      </HomePageProvider>
    </LanguageProvider>

  );
}