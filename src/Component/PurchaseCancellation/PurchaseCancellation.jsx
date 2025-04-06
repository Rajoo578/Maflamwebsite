import React, { useContext } from "react";
import styles from "./PurchaseCancellation.module.css";
import { PurchaseCancellationContext } from "../../store/PurchaseCancellationContext";

const PurchaseCancellation = () => {
  const { purchaseCancellationDetails, loading, error } = useContext(
    PurchaseCancellationContext
  ); // Access the context

  // Handle loading and error states
  if (loading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>Error loading terms and conditions: {error.message}</p>;
  }

  // Check if purchaseCancellationDetails exist
  const terms = purchaseCancellationDetails || [];

  return (
    <div className={styles.mainContainer}>
      <div className={styles.container}>
        {terms.map((term, index) => (
          <div key={index}>
            {/* Display title */}
            <h1 className={styles.title}>{term.title}</h1>

            {/* Display descriptions if they exist */}
            {term.description && term.description.map((desc, idx) => (
              <p key={idx} className={styles.description}>{desc}</p>
            ))}

            {/* Display items if sections are not present */}
            {term.sections && term.sections.length > 0 ? (
              term.sections.map((section, secIdx) => (
                <div key={secIdx} className={styles.section}>
                  <h2 className={styles.sectionTitle}>{section.title}</h2>
                  <ul className={styles.list}>
                    {section.items.map((item, itemIdx) => (
                      <li key={itemIdx} className={styles.listItem}>
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              ))
            ) : (
              term.items && (
                <ul className={styles.list}>
                  {term.items.map((item, idx) => (
                    <li key={idx} className={styles.listItem}>{item}</li>
                  ))}
                </ul>
              )
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default PurchaseCancellation;
