import React, { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import styles from './NotSubscribe.module.css';
import { LanguageContext } from '../LanguageContext/LanguageContext';
import {Link} from 'react-router-dom';

const ContentRequired = () => {
  const navigate = useNavigate();
  const {direction} = useContext(LanguageContext);
  // Function to handle the "Go Back" button
  const goBackHandler = () => {
    navigate(-1); // This will take the user back to the previous page
  };

  // Function to handle the "Contact Support" button
  const contactSupportHandler = () => {
    navigate('/contact'); // Directs to the contact page (assuming it exists)
  };

  return (
    <div className={styles.pageContainer}>
      <div className={styles.contentWrapper}>
        <h1 className={styles.title}> {direction=="ltr"? "Not Enrolled in Any Course Yet!" :"لم تسجل في أي دورة تدريبية بعد!" }</h1>
        <p style={{maxWidth:'100%'}} className={styles.description}>
          {direction=="ltr"? " Get Started Today – Enroll in a Course Now...": "ابدأ اليوم – سجل في دورة الآن..."}
        </p>
        <div className={styles.buttonContainer}>
          <button className={styles.button} onClick={goBackHandler}> {direction=="ltr"?"Go Back": "عد إلى الوراء"}</button>
          <button className={styles.button} >  <Link style={{textDecoration:'none' , color:'black'}}  to="/R2/R3/prc/*"> { direction=="ltr" ? "Enroll Now" : "سجل الآن"} </Link></button>
        </div>
      </div>
    </div>
  );
};

export default ContentRequired;
