import React, { useContext } from "react";
import styles from "./PrivacyPolicy.module.css";
// import { TermsConditionContext } from '../../store/TermsConditionContext';
import { PrivacyPolicyContext } from "../../store/PrivacyPolicy";

const PrivacyPolicy = () => {
  const { PrivacyPolicyDetails, loading, error } =
    useContext(PrivacyPolicyContext); // Access the context

  // Handle loading and error states
  if (loading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>Error loading terms and conditions: {error.message}</p>;
  }

  // Check if termsConditionDetails exist and has TermsData
  const terms = PrivacyPolicyDetails || [];

  "terms data" + terms[0].title;

  return (
    <div className={styles.mainContainer}>
      <div className={styles.container}>
        {/* <h1 className={styles.title}>{terms.title}</h1> */}
        {/* <h1 className={styles.title}>Privacy Policy </h1> */}
        <h1 className={styles.title}>{terms[0].title}</h1>

        {terms[0].description?.map((desc, index) => (
          <p style={{paddingLeft:'0px', paddingRight:'0px'}} key={index} className={styles.description}>
            {desc}
          </p>
        ))}

        {terms[0].sections?.map((section, index) => (
          <div key={index} className={styles.section}>
            <h2 className={styles.sectionTitle}>{section.title}</h2>
            <ul className={styles.list}>
              {section.items.map((item, idx) => (
                <li key={idx} className={styles.listItem}>
                  {item}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PrivacyPolicy;
