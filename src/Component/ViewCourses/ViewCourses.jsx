  import React, { useContext } from "react";
  import styles from "./ViewCourses.module.css";
  import { HomePageContext } from "../../store/HomePageContext.jsx";
  import { useNavigate } from "react-router-dom";
  import { Link } from "react-router-dom";


  const redirectionMap = {
    "Scriptwriting": "/R2/R4/filmproduction/672c62b61f099bf569d0f8eb",
    "Production": "/R2/R4/filmproduction/672c5ee7da73549420503e9c",
    "Directing": "/R2/R4/filmproduction/672c6953bd321f82ce18327a",
    "Cinematography": "/R2/R4/filmproduction/672c5bb6a7c24e51d0db091e",
    "Sound Recording": "/R2/R4/filmproduction/672c609ae90c3d8357705c73",
    "Acting": "/R2/R4/filmproduction/672c6420b3e5c110514f52f9",
    "Editing": "/R2/R3/prc/Editing",
    "كتابة السيناريو": "/R2/R4/filmproduction/672c62b61f099bf569d0f8eb",
    "الإنتاج": "/R2/R4/filmproduction/672c5ee7da73549420503e9c",
    "التصوير": "/R2/R4/filmproduction/672c6953bd321f82ce18327a",
    "الإخراج": "/R2/R4/filmproduction/672c5bb6a7c24e51d0db091e",
    "تسجيل الصوت": "/R2/R4/filmproduction/672c609ae90c3d8357705c73",
    "التمثيل": "/R2/R4/filmproduction/672c6420b3e5c110514f52f9",
    "المونتاج": "/R2/R3/prc/Editing",
  };


  function  ViewCourses() {
    const { homeScreenDetails, loading, error } = useContext(HomePageContext);
  const navigate = useNavigate()
    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error loading data</p>;

    // const coursestitle = homeScreenDetails?.specializedCoursesDataTitle?.title || [];
    const coursesData = [...(homeScreenDetails?.coursesData || [])].reverse();
    const viewAllCoursesTitle = homeScreenDetails?.viewAllCourses?.title || "View All Courses";

    console.log(coursesData,"view")


      const Courses = ()=>{
        navigate("R2/R3/prc/All")
      }

    const getCardClassName = (index) => {
      return `${styles.courseCard} ${styles[`courseCard--${index + 1}`]}`;
    };



    return (
      <div className={styles.viewcoursecontainer}>
      <div className={styles.container}>
        <div className={styles.courseGrid}>
          {coursesData.slice(1,8).map((course, index) => (
            <div
              key={index}
              className={getCardClassName(index)}
              style={{
                backgroundImage: `url(${course.backgroundImage})`,
                backgroundSize: "cover",
                borderRadius:"10px",              
                backgroundPosition: "center",
                fontSize: "15px",
                color: "white",
              }}
            >
            <Link to={redirectionMap[course.name]}>   {course.name}</Link>
            </div>
          ))}
        </div>
        <div className={styles.btnpadding}>
          <button  onClick={Courses} className={styles.fullWidthButton}>
          <p>  {viewAllCoursesTitle} </p>
          </button>
        </div>
        <div className={styles.playButtonContainer}>
          {/* <svg xmlns="http://www.w3.org/2000/svg" width="190" height="189" viewBox="0 0 190 189" fill="none">
    <rect x="190" y="188.271" width="190" height="187.543" rx="93.7715" transform="rotate(-180 190 188.271)" fill="white" fill-opacity="0.2"/>
    <path d="M82.2246 63.6997L123.282 91.1755C125.65 92.7596 125.65 96.24 123.282 97.8241L82.2246 125.3C79.5669 127.079 76 125.174 76 121.976L76 67.024C76 63.826 79.5669 61.9211 82.2246 63.6997Z" stroke="#39FFFB" stroke-width="2.5"/>
  </svg> */}
        </div>
        <div className={styles.textContainer}>
          {/* <p className={styles.infoText}>
            {coursesData.find((course) => course.title)?.title ||
              "Explore the paths and choose the one that's right for you"}
          </p> */}
        </div>
      </div>
      </div>
    );
  }

  export default ViewCourses;
