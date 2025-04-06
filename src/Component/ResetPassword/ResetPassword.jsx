
import React from 'react';
import styles from './ResetPassword.module.css';
import logo1 from "../../assets/logo1.png";


function ResetPassword() {
  return (
    <>
  
    <div className={styles.maincontainer}>
      <div className={styles.secondcontainer}> 
        <header className={styles.header}>
          <img src={logo1} alt="resetlogo" className={styles.resetlogo} />
          <h1> Reset Password</h1>
        </header>
        <form className={styles.form}>
          <label htmlFor="email">Email</label>
          <input type="email" id="email" name="email" placeholder='adi.abed@gmail.com' className={styles.input} />
          <a href="#" className={styles.link}>Didn’t receive the message</a>
        </form>
      </div>
    </div>
 
    </>
  );
}

export default ResetPassword;

