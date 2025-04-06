
import React, { useState } from 'react';
import styles from './WhatWeLearn.module.css';
import { learnData } from '../../assets/assests';

const WhatWeLearn = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleContent = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className={styles.maincontainer}>
      <div className={styles.collapsible}>
        <div className={styles.header}>
          {/* Toggle button */}
          <div 
            onClick={toggleContent} 
            className={styles.toggleButton} 
            style={{ cursor: 'pointer', color: '#39FFFb' }}
          >
            {isOpen ? '-' : '+'}
          </div>
          {/* Title */}
          <h5 className={styles.toggle}>What you will learn</h5>
          <hr className={styles.line} />
        </div>
        {/* Content collapses/expands when clicked */}
        {isOpen && (
          <div>
            {learnData.map((item, index) => (
              <p key={index} className={styles.answer}>{item}</p>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default WhatWeLearn;
