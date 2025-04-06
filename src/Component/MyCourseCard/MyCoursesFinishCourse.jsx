import React from "react";
import styles from "./myCoursesFinishCourses.module.css";
import Arrow from "../../assets/Arrow.png";
import profilecoursefirst from "../../assets/profilecoursefirst.png";
import profilecourse from "../../assets/profilecourse.png";
import downloadIcon from "../../assets/downloadIcon.png";
export default function MyCoursesFinishCourse() {
  return (
    <div>
      <div className={styles.certificateSection}>
        <h2>Find your transactions here</h2>

        {/* Course 1 */}
        <div className={styles.courseCard}>
          <div className={styles.courseImageWrapper}>
            <img
              src={profilecoursefirst}
              alt="Course"
              className={styles.courseImage}
            />
          </div>

          <div className={styles.courseInfo}>
            <p className={styles.courseCategory}>Course Type and Category</p>
            <h3 className={styles.courseTitle}>Full Course Name</h3>
            <div className={styles.progressBarWrapper}>
              <div className={styles.progress}>
                <div className={styles.progressText}>100%</div>
              </div>
            </div>
            <p className={styles.courseProgress}>Overall Progress</p>
          </div>
          <div className={styles.getCertificateDiv}>
            Get the Certificate
            <button
              type="button"
              onClick={() => triggerFileUpload("portfolioUpload")}
              className={styles.downloadIcon}
            >
              <img src={downloadIcon} alt="Upload Portfolio" />
            </button>
          </div>
        </div>

        {/* Course 2 */}
        <div className={styles.courseCard}>
          <div className={styles.courseImageWrapper}>
            <img
              src={profilecourse}
              alt="Course"
              className={styles.courseImage}
            />
          </div>

          <div className={styles.courseInfo}>
            <p className={styles.courseCategory}>Course Type and Category</p>
            <h3 className={styles.courseTitle}>Full Course Name</h3>
            <div className={styles.progressBarWrapper}>
              <div className={styles.progress}>
                <div className={styles.progressText}>100%</div>
              </div>
            </div>
            <p className={styles.courseProgress}>Overall Progress</p>
          </div>
          <div className={styles.getCertificateDiv}>
            Get the Certificate
            <button
              type="button"
              onClick={() => triggerFileUpload("portfolioUpload")}
              className={styles.downloadIcon}
            >
              <img src={downloadIcon} alt="Upload Portfolio" />
            </button>
          </div>
        </div>

        {/* Course 3 */}
        <div className={styles.courseCard}>
          <div className={styles.courseImageWrapper}>
            <img
              src={profilecourse}
              alt="Course"
              className={styles.courseImage}
            />
          </div>

          <div className={styles.courseInfo}>
            <p className={styles.courseCategory}>Course Type and Category</p>
            <h3 className={styles.courseTitle}>Full Course Name</h3>
            <div className={styles.progressBarWrapper}>
              <div className={styles.progress}>
                <div className={styles.progressText}>100%</div>
              </div>
            </div>
            <p className={styles.courseProgress}>Overall Progress</p>
          </div>
          <div className={styles.getCertificateDiv}>
            Get the Certificate
            <button
              type="button"
              onClick={() => triggerFileUpload("portfolioUpload")}
              className={styles.downloadIcon}
            >
              <img src={downloadIcon} alt="Upload Portfolio" />
            </button>
          </div>
        </div>

        {/* Add more course cards as needed */}
      </div>
    </div>
  );
}
