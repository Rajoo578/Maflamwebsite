import React from 'react';
import styles from './MyProfileCertificate.module.css';
import Arrow from "../../assets/CertificateDownloadArrow.png";
import profilecoursefirst from "../../assets/profilecoursefirst.png";
import profilecourse from "../../assets/profilecourse.png";
import { Link } from 'react-router-dom';

function MyProfileCertificate() {

const courses = [
  {
    id: 1,
    title: "Full Course Name 1",
    category: "Course Type and Category 1",
    progress: "100%",
    image: profilecoursefirst,
  },
  {
    id: 2,
    title: "Full Course Name 2",
    category: "Course Type and Category 2",
    progress: "100%",
    image: profilecourse,
  },
  {
    id: 3,
    title: "Full Course Name 3",
    category: "Course Type and Category 3",
    progress: "100%",
    image: profilecourse,
  },
  // Add more courses as needed
];

  return (
    <div className={styles.profileContainer}>

      <div className={styles.CertificatePageData}>
      <header className={styles.profileHeader}>
        <h1>My Certificate</h1>
      </header>

      <nav>
        <ul className={styles.profileTabs}>
          <li className={styles.activeTab1}><a href="/personalInformation">Personal Information</a></li>
          <li className={styles.activeTab1}><Link to="/mycourses">My Courses</Link></li>
          <li className={styles.activeTab}><a href="/mycertificate">My Certificates</a></li>
          <li className={styles.activeTab1}><a href="mywishlist">My Wishlist</a></li>
        </ul>
        <hr className={styles.footerHr} />
      </nav>

      <div className={styles.certificateSection}>
        <h2>Finished Courses</h2>

          {courses.map((course) => (
        <div key={course.id} className={styles.courseCard}>
          <div className={styles.getCertificateDiv}>
            Get the Certificate
            <img src={Arrow} alt="Arrow" className={styles.resetlogo} />
          </div>

          <div className={styles.courseImageWrapper}>
            <img src={course.image} alt="Course" className={styles.courseImage} />
          </div>

          <div className={styles.courseInfo}  style={{
    backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 1)), url(${course.image})`
  }}>
            <p className={styles.courseCategory}>{course.category}</p>
            <h3 className={styles.courseTitle}>{course.title}</h3>
            <div className={styles.progress}>
            <div className={styles.progressBarWrapper}></div>
            <div className={styles.progressText}>{course.progress}</div>
            </div>
            <p className={styles.courseProgress}>Overall Progress</p>
          </div>
        </div>
      ))}

      
        {/* Add more course cards as needed */}
      </div>
      </div>
    </div>
  );
}
export default MyProfileCertificate;