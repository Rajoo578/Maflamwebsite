import { useContext, useEffect , useState } from "react";
import {
  HomeHero,
  LearnMaflam,
  ViewCourses,
  CourseCategories,
  FundamentalPackage,
  Ourservices,
  SuccessPartners,
  LearnAbout,
  MaflamInstructors,
  HomeScreenCarousel,
  BlogContainer,
  HomeCommunityCarousel,
  Community,
  Faqs,
} from "../../Component";

import 
{
  Loader
} from "../../utilities"

import Styles from "./Home.module.css";
import { 
  LanguageProvider ,
  HomePageContext,
  HomePageProvider,
} from "../../store";

import
{
  useScrollPosition
} from "../../hooks"

const Home = () => {
  const { homeScreenDetails, loading, error     } = useContext(HomePageContext);

  useScrollPosition("HomePage", 3900);
  const [isLoading, setIsLoading] = useState(true); // Start with the loader visible

  return (
    <LanguageProvider>
      <HomePageProvider>
        <div className={Styles.Home}>
        <Loader isLoading={isLoading} timeout={4000} />
          <HomeHero />
          <LearnMaflam />
          <ViewCourses />
          <CourseCategories />
          <FundamentalPackage />
          <div id="ourservices">
          <Ourservices />
          </div>
          <SuccessPartners />
          <LearnAbout />
          <MaflamInstructors />
          <div className={Styles.BlogContainer}>
            <HomeScreenCarousel />
            <BlogContainer />
            <HomeCommunityCarousel />
          </div>
          <Community />
          <div className={Styles.Footer}>
            <Faqs />
          </div>
          {/* <SubFooter/> */}
        </div>
      </HomePageProvider>
    </LanguageProvider>
  );
};

export default Home;