

import { assests } from "../../assets/assests";
import styles from "./Podcast.module.css"

const Podcast = () => {


  return (
    <div className={styles.hovercointainer}>
    <div className={styles.hoverimagecontainer}>
      <div className={styles.imagewrapper}>
        <img 
          src={assests.Assestsmaflamscreen}
          alt={styles.Description}
          className={styles.hoverimage}
        />
        <div className={styles.overlay}>
          <p>تمتع باستفادة غير محدودة من أفضل محتوى تعليمي في العالم العربي</p>
          <button className={styles.subscribebutton}>اشترك الآن</button>
        </div>
      </div>
    </div>
    </div>
  );
};

export default Podcast ;
