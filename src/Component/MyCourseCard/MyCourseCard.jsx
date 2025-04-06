import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import styles from "./MyCourseCard.module.css";
// import { crousel } from "../../assets/assets";
import { useEffect, useState } from "react";
import { VariousCard } from "../../assets/assests";
import MyCoursesFinishCourse from "./MyCoursesFinishCourse";
import { Link } from "react-router-dom";

export default function MyCourseCard() {
  const [deviceType, setDeviceType] = useState(null);

  useEffect(() => {
    const handleResize = () => {
      const width = window.innerWidth;
      if (width >= 1150) {
        setDeviceType("large");
      } else if (width >= 1005) {
        setDeviceType("desktop");
      } else if (width >= 700) {
        setDeviceType("tablet");
      } else {
        setDeviceType("mobile");
      }
    };

    handleResize();
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const responsive = {
    large: {
      breakpoint: { max: 3000, min: 1450 },
      items: 3,
    },
    desktop: {
      breakpoint: { max: 1450, min: 1005 },
      items: 2,
    },
    tablet: {
      breakpoint: { max: 1005, min: 700 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 700, min: 0 },
      items: 1,
    },
  };

  return (
    // <div className="container department ">
    //   <h1>You May Be Interested in the Following Courses</h1>

    <div className={styles.maincontainer}>
      <div className={styles.CertificatePageData}>
        <header className={styles.profileHeader}>
          <h1>My Courses</h1>
        </header>

        <nav>
          <ul className={styles.profileTabs}>
            <li className={styles.activeTab1}>
              <a href="/personalInformation">Personal Information</a>
            </li>
            <li className={styles.activeTab}>
              <Link to="/mycourses">My Transactions</Link>
            </li>
            {/* <li className={styles.activeTab1}><a href="/mycertificate">My Certificates</a></li>
          <li className={styles.activeTab1}><a href="/mywishlist">My Wishlist</a></li> */}
          </ul>
          <hr className={styles.footerHr} />
        </nav>

        <MyCoursesFinishCourse></MyCoursesFinishCourse>
        <div className={styles.container}>
          {/* <h2>You May Be Interested in the Following Courses</h2> */}

          {/* <Carousel
            responsive={responsive}
            removeArrowOnDeviceType={["tablet", "mobile"]}
            infinite={true}
            autoPlay={deviceType !== "mobile"}
            autoPlaySpeed={1000}
          >
            {VariousCard.map((course) => (
              <div key={course.id} className={styles.card}>
                <img
                  src={course.imageUrl}
                  alt={course.title}
                  className={styles.cardImage}
                />
                <div className={styles.cardContent}>
                  <div className={styles.imageflex}>
                    {" "}
                    <img src={course.image} alt="" />
                    <p className={styles.instructor}>{course.instructor}</p>
                  </div>
                  <h3 className={styles.title}>{course.title}</h3>
                  <p className={styles.description}>{course.description}</p>
                  <div className={styles.footer}>
                    <p> {course.para}</p>
                    <span>{course.price}</span>
                    <img src={course.icon} alt="" />
                    <p>{course.duration}</p>
                    <button className={styles.buyNow}>Buy now</button>
                  </div>
                </div>
              </div>
            ))}
          </Carousel> */}
        </div>
      </div>
    </div>
  );
}
