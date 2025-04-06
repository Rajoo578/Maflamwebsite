
import React from 'react';
import styles from './SuccessMessage.module.css';
import successtickmark from "../../assets/successtickmark.png";
import { Link } from 'react-router-dom';
// import { useNavigate } from 'react-router-dom';



function SuccessMessage() {

  // const navigate = useNavigate()
  // const clickbtn =()=>{
  //   navigate("https://learn.maflam.com/login/index.php")
  // }

  return (
    <div className={styles.maincontainer}>
      <div className={styles.secondcontainer}> 
        <header className={styles.header}>
        <img src={successtickmark} alt="successmark" className={styles.resetlogo} />
        </header>
        <form className={styles.form}>
            <h2>You have successfully enrolled in the course.</h2>
            <p>Welcome to the Maflam’s family!</p>
            <p>Get ready to learn and grow with top experts in the film industry.</p>
            <p>Together, we will turn your passion for films into reality.</p>
            <button  className={styles.btn}> 
            <a href="https://learn.maflam.com/login/index.php"  >
            Go To Dashboard
          </a>
            </button>
           
        </form>
      </div>
    </div>
  );
}

export default SuccessMessage;

// import React from "react";
// import styles from "./SuccessMessage.module.css";
// import successtickmark from "../../assets/successtickmark.png";
// import { useResponseData } from "../../store/ResponseDataContext";
// // import { useResponseData } from "../../path-to/ResponseDataContext";



// function SuccessMessage() {
//   const { responseData } = useResponseData(); // Access data from context

//   return (
//     <div className={styles.maincontainer}>
//       <div className={styles.secondcontainer}>
//         <header className={styles.header}>
//           <img src={successtickmark} alt="successmark" className={styles.resetlogo} />
//         </header>
//         <form className={styles.form}>
//           <h2>You have successfully enrolled in the course.</h2>
//           <p>Transaction ID: {responseData?.tran_ref || "N/A"}</p>
//           <p>Status: {responseData?.status || "N/A"}</p>
//           <p>Welcome to the Maflam’s family!</p>
//           <p>Get ready to learn and grow with top experts in the film industry.</p>
//           <p>Together, we will turn your passion for films into reality.</p>
//           <button className={styles.btn}>
//             <a href="https://learn.maflam.com/login/index.php">Go To Dashboard</a>
//           </button>
//         </form>
//       </div>
//     </div>
//   );
// }

// export default SuccessMessage;
