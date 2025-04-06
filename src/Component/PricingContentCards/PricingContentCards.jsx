import React from "react";
import styles from "./PricingContentCards.module.css";

const PricingContentCards = () => {
  return (
    <>
      <div className={styles.container}>
        <div className={styles.card}>
          <h2 className={styles.title}>ماذا ستتعلم</h2>
          <p className={styles.description}>
            ستتعلم في هذه الدورة كيف تجيد تطوير موقع ويب وتدير مشروع تطوير،
            بالاضافة التي تضعها في اعتبارك عند اختيار استراتيجيات وما إلى ذلك.
            تتعامل بعض من الحلول الشائعة في المشاريع ...
          </p>
        </div>
        <div className={styles.card2}>
          <h2 className={styles.title}>Key Topic covered</h2>
        </div>
        <div className={styles.card3}>
          <h2 className={styles.title}>About the Instructor</h2>
          <h3>Odai Abed</h3>
          <p className={styles.description2}>
            Odai began his directing career in 2011, after leaving his primary
            job to pursue his <br /> passion for content creation. He founded
            his production company, 77 Films, where he took on various roles
            including screenwriting, directing, and producing.
          </p>
          <p className={styles.description2}>
            Throughout his career, Odai has directed over six television
            programs and two seasons of the comedy series Al Aila, which aired
            during Ramadan on SBC Channel. He has also directed more than 120
            commercials and promotional videos for companies.
          </p>
        </div>
      </div>
    </>
  );
};

export default PricingContentCards;
