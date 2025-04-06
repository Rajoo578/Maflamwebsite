import React from 'react'
import styles from "./ShowCase.module.css"; 
import ebook4 from "../../assets/ebook4.png";
import downarrow from "../../assets/downarrow.png";
import showcase from "../../assets/showcase.png";



function ShowCase() {
  return (
    <div className={styles.showcasecontainer}>
        <h2 className={styles.heading}>How to Showcase Your Unique Writing Style (Free Booklet)</h2>
        <div className={styles.secondarycontainer}>
            <div className={styles.imagesec}>
            <img src={showcase} alt="ebook" className={styles.ebookimage} />
            </div>

            <div className={styles.textsec}>
                <h6 className={styles.textheader}> E-books</h6>
                <p className={styles.textpara}>This eBook presents practical steps to help writers discover and highlight their unique writing style. </p>
                <p className={styles.textpara}>Through guided techniques and creative exercises, the book aids in developing a distinctive voice that reflects the writer’s personality and sets them apart from others.</p>
                <button className={styles.downloadsbtn}>                     
                     Download Booklet
                     <img src={downarrow} alt="Download" className={styles.icon}/>
                 </button>                
            </div>

        </div>





     </div>
  )
}

export default ShowCase