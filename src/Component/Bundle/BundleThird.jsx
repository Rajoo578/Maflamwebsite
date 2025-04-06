import React from 'react'
import styles from "./BundleThird.module.css";
import Rectangle from "../../assets/Rectangle 100.png"
function BundleThird() {
  return (
    <div>
      <div className={styles.MainContainer}>
       <div className={styles.contentContainer}>
        <p>في الكورسات أخذت امكن أسبوع ومرة استفدت 
        أكثر من الأربعة السنين (حقت الجامعة) بالنسبة لي</p>
       </div>
       <div className={styles.IngContainer}>
          <img src={Rectangle} alt='my Image'></img>
       </div>
       <div className={styles.backImg}>
           <div className={styles.cirContainer}>
             <h1>30%</h1>
           </div>
           <div className={styles.squContainer}>
               <p>احصل على خصم عند استخدام كلام </p>
               <p>بمناسبة كلام كلام</p>
           </div>
       </div>
      </div>
    </div>
  )
}

export default BundleThird;