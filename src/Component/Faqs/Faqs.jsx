


import React, { useState, useContext } from "react";
import styles from "./Faqs.module.css";
import { HomePageContext } from "../../store/HomePageContext.jsx";
import { AiOutlineArrowDown } from "react-icons/ai";
import { Link } from "react-router-dom";
import { LanguageContext } from "../../Component/LanguageContext/LanguageContext.jsx";

const Faqs = () => {
  const [activeIndex, setActiveIndex] = useState(null);
  const { homeScreenDetails, loading, error } = useContext(HomePageContext);
  const { language } = useContext(LanguageContext);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error loading data</p>;

  const faqData = homeScreenDetails?.FAQData || [];
  const faqTitle = homeScreenDetails?.FAQTitle || [];

  const handleToggle = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div className={styles.faqContainer}>
      <Link to="/faqs">{faqTitle.title}</Link>
      <div className={styles.faqList}>
        {faqData.map((item, index) => (
          <div
            key={index}
            className={`${styles.faqItem} ${
              activeIndex === index ? styles.active : ""
            }`}
            onClick={() => handleToggle(index)}
          >
            <div className={styles.question}>
              {activeIndex === index ? "-" : "+"} {item.title}
            </div>
            <div
              className={`${styles.answer} ${
                activeIndex === index ? styles.showAnswer : ""
              }`}
            >
              {item.description || "No answer provided yet."}
            </div>
          </div>
        ))}
        <div className={styles.arrowcontainer}>
          <button className={styles.arrowButton}>
            <AiOutlineArrowDown size={40} />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Faqs;
