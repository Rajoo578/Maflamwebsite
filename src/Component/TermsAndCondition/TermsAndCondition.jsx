import React, { useContext } from 'react';
import styles from './TermsAndCondition.module.css';
import { TermsConditionContext } from '../../store/TermsConditionContext';

const TermsAndCondition = () => {
  const { termsConditionDetails, loading, error } = useContext(TermsConditionContext); // Access the context

  // Handle loading and error states
  if (loading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>Error loading terms and conditions: {error.message}</p>;
  }

  // Check if termsConditionDetails exist and has TermsData
  const terms = termsConditionDetails?.TermsData?.[0] || {};

  return (
    <div className={styles.mainContainer}>
      <div className={styles.container}>
        <h1 className={styles.title}>{terms.title}</h1>
        
        {terms.description?.map((desc, index) => (
          <p key={index} className={styles.description}>{desc}</p>
        ))}

        {terms.sections?.map((section, index) => (
          <div key={index} className={styles.section}>
            <h2 className={styles.sectionTitle}>{section.title}</h2>
            <ul className={styles.list}>
              {section.items.map((item, idx) => (
                <li key={idx} className={styles.listItem}>{item}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TermsAndCondition;
