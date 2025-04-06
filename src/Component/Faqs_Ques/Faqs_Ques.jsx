import React, { useContext, useState } from "react";
import styles from "./Faqs_Ques.module.css";
import { FaqPageContext } from "../../store/FaqPageContext";
import { LanguageContext } from "../../Component/LanguageContext/LanguageContext"; 

const Faqs_Ques = () => {
  const [openTitleIndices, setOpenTitleIndices] = useState([]);
  const [openQuestionIndices, setOpenQuestionIndices] = useState([]);
  const { faqScreenDetails, loading, error } = useContext(FaqPageContext);
  const { language, direction } = useContext(LanguageContext); 

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error loading data</p>;

  const isArabic = language === "ar";
  const faqData = faqScreenDetails?.faq || [];
  const faqDataTitle = isArabic 
    ? faqScreenDetails?.faqDataTitle?.titleInArb 
    : faqScreenDetails?.faqDataTitle?.titleInEng;

  const toggleItem = (setter, index, key = null) => {
    const toggleKey = key ?? index;
    setter((prev) =>
      prev.includes(toggleKey) ? prev.filter((i) => i !== toggleKey) : [...prev, toggleKey]
    );
  };

  const renderQuestions = (faqs, sectionIndex) => {
    return faqs.map((item, questionIndex) => {
      const questionText = isArabic ? item.questionInArb : item.questionInEng;
      const answerText = isArabic ? item.answerInArb : item.answerInEng;

      if (!questionText) return null;

      const questionKey = `${sectionIndex}-${questionIndex}`;

      return (
        <div key={questionIndex} className={styles.faqItem}>
          <div
            className={styles.questionContainer}
            onClick={() => toggleItem(setOpenQuestionIndices, null, questionKey)}
          >
            <span className={styles.questionToggleSign}>
              {openQuestionIndices.includes(questionKey) ? "-" : "+"}
            </span>
            <h3 className={styles.question}>{questionText}</h3>
          </div>
          <div
            className={styles.answer}
            style={{
              maxHeight: openQuestionIndices.includes(questionKey) ? "200px" : "0px",
              overflow: "hidden",
              transition: "max-height 0.3s ease",
            }}
          >
            <p>{answerText}</p>
          </div>
        </div>
      );
    });
  };

  return (
    <div className={styles.mainContainers}>
      <div className={styles.faqContainer}>
        <h1 className={styles.title}>{direction === "rtl" ? "الأسئلة الشائعة" : "FAQ"}</h1>
        {faqData.map((section, sectionIndex) => {
          const faqs = isArabic ? section.faqInArb : section.faqInEng;

          if (!faqs?.length) return null;

          return (
            <div key={sectionIndex}>
              <div
                className={styles.titleContainer}
                onClick={() => toggleItem(setOpenTitleIndices, sectionIndex)}
              >
                <span className={styles.sectionToggleSign}>
                  {openTitleIndices.includes(sectionIndex) ? "-" : "+"}
                </span>
                <h2 className={styles.sectionTitle}>
                  {isArabic ? section.titleInArb : section.titleInEng}
                </h2>
              </div>

              {openTitleIndices.includes(sectionIndex) && renderQuestions(faqs, sectionIndex)}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Faqs_Ques;
