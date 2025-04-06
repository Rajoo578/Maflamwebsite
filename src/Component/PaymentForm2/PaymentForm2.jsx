



import { useContext, useState } from "react";
import styles from "./PaymentForm2.module.css";
import { Link } from "react-router-dom";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import auth from "../../Auth/Auth";
import "react-toastify/dist/ReactToastify.css";
import { LanguageContext } from "../../store";
import Checkout   from "../../assets/Checkout.png"
import  Visa from "../../assets/Visa.png"
import MasterCard  from "../../assets/MasterCard.png"
import  Mada  from "../../assets/Mada.png"


const PaymentForm2 = () => {
  const {direction, language } = useContext(LanguageContext);

  const cardDetails = {
    en: {
      title: "Subscribe To The Full Filmmaking Fundamentals Package",
      paymentTitle: "Payment by credit or debit card",
      cardImg: Visa,
      cardImg1: MasterCard,
      cardImg2: Mada,
      priceHead: "2200 SAR",
      price: "Pay 2200 SAR",
      imageSrc: Checkout,
      termcondition1: "By clicking the 'Pay' button above, you agree to the ",
      termcondition2: " and acknowledge that you have read our .",
    },
    ar: {
      title: "اشترك في باقة  أساسيات صناعة الأفلام الكاملة",
      paymentTitle: "الدفع بواسطة بطاقة الائتمان أو بطاقة الخصم",
      cardImg: Visa,
      cardImg1: MasterCard,
      cardImg2: Mada,
      priceHead: "٢٢٠٠ ريال ",
      price: "دفع ٢٢٠٠ ر.س",
      imageSrc: Checkout,
      termcondition1: "بالنقر على زر 'إدفع' أعلاه، فإنك توافق على ",
      termcondition2: "وتقر بأنك قد قرأت .",
    },
  };
  const localizedDetails = cardDetails[language === "en" ? "en" : "ar"];
  const coupuntext = direction=="rtl"? "أدخل كود الخصم، إذا كان لديك" : "Enter the discount code if you have one" ;
  // const checkoutPage = async () => {
  //   const userDetails = auth.getAuthData();
  //   const token = userDetails?.token;

  //   const requestBody = {
  //     amount: 2200,
  //     callback: "https://maflam.web.app/success",
  //     return: "https://maflam.web.app/success",
  //     token,
  //   };

  //   try {
  //     const response = await axios.post(
  //       `http://localhost:3001/maflam/paymenttransction`,
  //       requestBody,
  //       {
  //         headers: {
  //           Authorization: `Bearer ${token}`,
  //         },
  //       }
  //     );

  //     const data = response?.data;
  //     if (data?.data?.redirect_url) {
  //       window.location.href = data.data.redirect_url;
  //     } else {
  //       throw new Error("Invalid response from server");
  //     }
  //   } catch (err) {
  //     console.error("Checkout Error:", err);
  //     const errorMessage = err.response?.data?.message || err.message;
  //     toast.error(`Error: ${errorMessage}`);
  //   }
  // };
  
  const [coupon, setCoupon] = useState("");
  const checkoutpage = async () => {
    const userdetails = auth.getAuthData();
    const token = userdetails?.token; // Ensure token is available
    const requestBody = {
      amount: 2200,
      cuponCode: coupon,
      courseId: "673c7b865b27b048813c59cc",
      callback: "https://maflam.web.app/success",
      return :"https://maflam.web.app/success",
      // callback: "https://maflam.web.app/success",
      // return:  "https://maflam.web.app/success",
      token,
      //  callback: "http://localhost:5173/success",
      // callback: `https://maflam.web.app/checkout/${courseId}`,
    };
  
    try {
      const response = await axios.post(
        `https://backend.maflam.com/maflam/paymenttransction`,
        requestBody,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
  
      const data = response?.data;
      if (data) {
        // toast.success(data.message);
        // window.open(data.data?.redirect_url, "_blank"); // Ensure URL opens in a new tab
        window.location.href = data.data?.redirect_url;  

      } else {
        throw new Error("Invalid response from server");
      }
    } catch (err) {
      console.error("Checkout Error:", err);
      const errorMessage = err.response?.data?.message || err.message;
      toast.error(`Error: ${errorMessage}`);
    }
  };

  return (
    <div className={styles.maincontainer}>
      <div className={styles.container}>
        <div className={styles.card}>
          <img
            src={localizedDetails.imageSrc}
            alt="Course"
            className={styles.image}
          />
          <h2 className={styles.price}>{localizedDetails.priceHead}</h2>
          <h3 className={styles.title}>{localizedDetails.title}</h3>
          <hr />
          <div className={styles.paymentCard}>
            <p className={styles.titles}>{localizedDetails.paymentTitle}</p>
            <img src={localizedDetails.cardImg} alt="Visa" />
            <img src={localizedDetails.cardImg1} alt="MasterCard" />
            <img src={localizedDetails.cardImg2} alt="Mada" />
          </div>
          <hr />
          <div className={styles.coupon}>
              <label>{coupuntext}</label>
              <input
                type="text"
                placeholder={coupuntext}
                name="coupon"
                value={coupon}
                onChange={(e) => setCoupon(e.target.value)} // Update coupon state
              />
            </div>
          <button
            type="button"
            onClick={checkoutpage}
            className={styles.payBtn}
          >
            {localizedDetails.price}
          </button>
        </div>
        {/* <div>
          <p className={styles.termconditions}>
            {localizedDetails.termcondition1}
            <Link to="/terms&condition">Terms and Conditions</Link>
            {localizedDetails.termcondition2}
            <Link to="/privacy-policy">Privacy Policy</Link>
          </p>
        </div> */}
      </div>
      <ToastContainer />
    </div>
  );
};

export default PaymentForm2;


// import { useContext, useEffect, useState } from "react";
// import styles from "./PaymentForm2.module.css";
// import { Link } from "react-router-dom";
// import axios from "axios";
// import { ToastContainer, toast } from "react-toastify";
// import auth from "../../Auth/Auth";
// import "react-toastify/dist/ReactToastify.css";
// import { cardDetails } from "../../assets/assests";
// import { LanguageContext } from "../../store";

// const PaymentForm2 = () => {
//   const checkoutpage = async () => {
//     const userDetails = auth.getAuthData();
//     const token = userDetails?.token;

//     const requestBody = {
//       amount: 2200,
//       // courseId: "paymentID", // Replace with dynamic paymentID if applicable
//       callback: "https://maflam.web.app/success",
//       return: "https://maflam.web.app/success",
//       token,
//     };

//     try {
//       const response = await axios.post(
//         `http://localhost:3001/maflam/paymenttransction`,
//         requestBody,
//         {
//           headers: {
//             Authorization: `Bearer ${token}`,
//           },
//         }
//       );

//       const data = response?.data;
//       if (data?.data?.redirect_url) {
//         window.location.href = data.data.redirect_url;
//       } else {
//         throw new Error("Invalid response from server");
//       }
//     } catch (err) {
//       console.error("Checkout Error:", err);
//       const errorMessage = err.response?.data?.message || err.message;
//       toast.error(`Error: ${errorMessage}`);
//     }
//   };

//   const {language} =useContext(LanguageContext)

//   const cardDetails = 
//   language === "ar" ? "":"en";
//   return (
//     <div className={styles.maincontainer}>
//       <div className={styles.container}>
//         <div className={styles.card}>
//           <img
//             src={cardDetails.imageSrc}
//             alt="Course"
//             className={styles.image}
//           />
//           <h2 className={styles.price}>{cardDetails.priceHead}</h2>
//           <h3 className={styles.title}>{cardDetails.title}</h3>
//           <hr />
//           <div className={styles.paymentCard}>
//             <p className={styles.titles}>{cardDetails.paymentTitle}</p>
//             <img src={cardDetails.cardImg} alt="Visa" />
//             <img src={cardDetails.cardImg1} alt="MasterCard" />
//             <img src={cardDetails.cardImg2} alt="Mada" />
//           </div>
//           <hr />
//           <button
//             type="button"
//             onClick={checkoutpage}
//             className={styles.payBtn}
//           >
//        {cardDetails.price}
//           </button>
//         </div>

//         <div>
//           {/* <p className={styles.termconditions}>{cardDetails.terms.fullText}</p> */}
//         </div>
//         <div>
//           {/* <p className={styles.termconditions1}>
//             {cardDetails.terms.part1}
//             <Link to="/terms&condition">Terms and Conditions</Link>
//             {cardDetails.terms.part2}
//             <Link to="/privacy-policy">Privacy Policy</Link>
//           </p> */}
//         </div>
//       </div>
//       <ToastContainer />
//     </div>
//   );
// };

// export default PaymentForm2;