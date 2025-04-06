import React, { useState } from 'react';
import styles from './CourseContent.module.css';
// import { CourseContentData } from "../../assets/assests"
import {CourseContentData} from "../../assets/assests"

const CourseContent = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleContent = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className={styles.maincontainer}>
      <div className={styles.collapsible}>
        <div className={styles.header}>
          <div 
            onClick={toggleContent} 
            className={styles.toggleButton} 
            style={{ cursor: 'pointer', color: '#39FFFb' }} 
          >
            {isOpen ? '-' : '+'}
          </div>
          <h5 className={styles.toggle}>
            Course Content
          </h5>
          <hr className={styles.line} />
        </div>
        {isOpen && (
          <div>
            {CourseContentData.map((item, index) => (
              <QuestionItem  key={index} question={item.question} answers={item.answers} timeStamp={item.timeStamp}/>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

const QuestionItem = ({ question, answers, timeStamp }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleContent = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className={styles.questionItem}>
      <div className={styles.questionHeader} onClick={toggleContent}>
        <div className={styles.toggleButton} style={{ cursor: 'pointer', color: '#39FFFb' }}>
          {isOpen ? '-' : '+'}
        </div>
        <h6 className={styles.question}>{question}</h6>
      </div>
      {isOpen && (
        <div className={styles.mainAnsTab}>
            <div>
          {answers.map((answer, index) => (
            <p key={index} className={styles.answer}>{answer}</p>
          ))}
            </div>
            <div>
            {timeStamp.map((timeStamp, index) => (
            <p key={index} className={styles.answer}>{timeStamp}</p>
          ))}
            </div>
        </div>
      )}
    </div>
  );
};

export default CourseContent;
