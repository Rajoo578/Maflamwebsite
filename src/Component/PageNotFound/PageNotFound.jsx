import React from 'react';
import { FaExclamationTriangle } from 'react-icons/fa'; 
import styles from './PageNotFound.module.css';

function PageNotFound() {
  return (
    <div className={styles.maincontainer}>
      <div className={styles.iconContainer}>
        <FaExclamationTriangle className={styles.icon} />
      </div>
      <h5 className={styles.errorCode}>404</h5>
      <h5 className={styles.message}>Page Not Found</h5>
    </div>
  );
}

export default PageNotFound;
