import React, { useState } from 'react';
import styles from './CourseTopic.module.css';

const CourseTopic = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleContent = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className={styles.maincontainer}> 
    <div className={styles.collapsible}>
      <div className={styles.header}>
        <h5 className={styles.toggle}>
        ماذا ستتعلم
        </h5>
        <hr className={styles.line} />
        <div 
          onClick={toggleContent} 
          className={styles.toggleButton} 
          style={{ cursor: 'pointer', color: '#39FFFb' }} 
        >
          {isOpen ? '-' : '+'}
        </div>
      </div>
      {isOpen && (
        <p className={styles.content}>In this course, you will learn how to become a director and manage a film set, including key considerations when choosing a script and what to focus on during the preparation phase. You will also learn how to select and work with actors, delve deeply into camera handling and the significance of camera movements, establish scenes, manage production, and make the most of each day until the film reaches the editing room. Together, we will explore essential directing principles to help you professionally direct your first film.</p>
      )}
    </div>
    </div>
  );
};

export default CourseTopic;




