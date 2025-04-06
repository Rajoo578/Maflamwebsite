import React from 'react';
import { useNavigate } from 'react-router-dom';
import styles from './ContentRequired2.module.css';

const ContentRequired2 = () => {
  const navigate = useNavigate();

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
        <h1 className={styles.title}>Content Required</h1>
        <p style={{maxWidth:'100%'}} className={styles.description}>
        We’re working on the content you’re looking for! It will be available shortly. In the meantime, if you have any questions or need assistance, feel free to contact our support team by clicking on the 'Contact Support' button. Thank you for your patience and understanding!
        </p>
        <div className={styles.buttonContainer}>
          <button className={styles.button} onClick={goBackHandler}>Go Back</button>
          <button className={styles.button} onClick={contactSupportHandler}>Contact Support</button>
        </div>
      </div>
    </div>
  );
};

export default ContentRequired2;
