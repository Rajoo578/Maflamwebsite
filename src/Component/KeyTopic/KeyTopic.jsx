import React, { useState } from 'react';
import styles from './KeyTopic.module.css';
import { questionsData } from '../../assets/assests';;

const KeyTopic = () => {
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
            Key Topic Covered
          </h5>
          <hr className={styles.line} />
        </div>
        {isOpen && (
          <div>
            {questionsData.map((item, index) => (
              <QuestionItem key={index} question={item.question} answers={item.answers} />
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

const QuestionItem = ({ question, answers }) => {
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
        <div>
          {answers.map((answer, index) => (
            <p key={index} className={styles.answer}>{answer}</p>
          ))}
        </div>
      )}
    </div>
  );
};

export default KeyTopic;
