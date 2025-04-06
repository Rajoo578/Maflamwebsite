// import { useContext } from "react";
// import stylesArabic from "./Fundamental.module.css";
// import styles from "./FundamentalEnglish.module.css";
// import { CiCircleCheck } from "react-icons/ci";
// import { HomePageContext } from "../../store/HomePageContext.jsx";
// import { LanguageContext } from "../../Component/LanguageContext/LanguageContext.jsx";
// import { useNavigate } from "react-router-dom";

// function Fundamental() {
//   const { homeScreenDetails, loading, error } = useContext(HomePageContext);
//   const { language } = useContext(LanguageContext);
//   const navigate = useNavigate();
//   const stylesSelected = language === "ar" ? stylesArabic : styles;

//   if (loading) return <p>Loading...</p>;
//   if (error) return <p>Error loading data</p>;

//   // Extract the relevant data from homeScreenDetailsSec7
//   const sectionData = homeScreenDetails?.homeScreenDetailsSec7 || [];
//   const title =
//     sectionData[0]?.title ||
//     "Subscribe 60 The Full Filmmaking Fundamentals Package";
//   const imageUrl = sectionData[0]?.imageUrl || ""; // Use context imageUrl or a fallback
//   const categories = sectionData[0]?.category || [];
//   const subscribeText = sectionData[1]?.title || "Subscribe";
//   const price = sectionData[2]?.title || "2.200 SAR";
//   const Subscribe = () => {
//     navigate("/prc");
//   };

//   return (
//     <div className="parentfundamental">
//       <div className={stylesSelected.Fundamental}>
//         <div className={stylesSelected.secondcontainer}>
//           <div className={stylesSelected.content}>
//             <p style={{ maxWidth: "100%"}}>{title}</p>
//             <div className={stylesSelected.imgcontainer}>
//               <img
//                 src={imageUrl}
//                 alt="Filmmaking Package"
//                 className={styles.imgcontainer}
//               />
//             </div>
//           </div>
//           <div className={stylesSelected.subscribe}>
//             <div className={stylesSelected.ctn}>
//               {categories.map((item, index) => (
//                 <div key={index} className={stylesSelected.item}>
//                   <CiCircleCheck className={stylesSelected.checkico} />
//                   <p>{item}</p>
//                 </div>
//               ))}
//               <div className={stylesSelected.item}>
//                 <button
//                   onClick={Subscribe}
//                   className={stylesSelected.checkicobuttun}
//                 >
//                   {subscribeText}
//                 </button>
//                 <p>
//                   <b>{price}</b>
//                 </p>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );

// }

// export default Fundamental;



import { useContext } from "react";
import stylesArabic from "./FundamentalPackage.module.css";
import styles from "./FundamentalPackageEnglish.module.css";
import { CiCircleCheck } from "react-icons/ci";
import { HomePageContext } from "../../store/HomePageContext.jsx";
import { LanguageContext } from "../../Component/LanguageContext/LanguageContext.jsx";
import { useNavigate } from "react-router-dom";

function FundamentalPackage() {
  const { homeScreenDetails, loading, error } = useContext(HomePageContext);
  const { direction,language } = useContext(LanguageContext);
  const navigate = useNavigate();
  const stylesSelected = language === "ar" ? stylesArabic : styles;

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error loading data</p>;

  // Extract the relevant data from homeScreenDetailsSec7
  const sectionData = homeScreenDetails?.homeScreenDetailsSec7 || {};
  const title = sectionData?.title || "Subscribe To The Full Filmmaking Fundamentals Package";
  const imageUrl = sectionData?.imageUrl || "";
  const categories = sectionData?.category || [];
  const subscribeText = direction=="rtl"?"اشترك الآن":"Subscribe";
  const price = homeScreenDetails?.priceDetail?.price || "2,200 SAR";
  

  const handleSubscribe = () => {
    navigate("/checkout2");
  };

  return (
    <div className="parentfundamental">
      <div className={stylesSelected.Fundamental}>
        <div className={stylesSelected.secondcontainer}>
          <div className={stylesSelected.content}>
            <p style={{ maxWidth: "100%" }}>{title}</p>
            <div className={stylesSelected.imgcontainer}>
              <img
                src={imageUrl}
                alt="Filmmaking Package"
                className={styles.imgcontainer}
              />
            </div>
          </div>
          <div className={stylesSelected.subscribe}>
            <div className={stylesSelected.ctn}>
              {categories.map((item, index) => (
                <div key={index} className={stylesSelected.item}>
                  <CiCircleCheck className={stylesSelected.checkico} />
                  <p>{item}</p>
                </div>
              ))}
              <div className={stylesSelected.item}>
                <button
                  onClick={handleSubscribe}
                  className={stylesSelected.checkicobuttun}
                >
                  {subscribeText}
                </button>
                {/* <p className={styles.mrpprice}>
              <span className={styles.mrpprice}>  <b>{mrp }</b>SAR </span> &nbsp; &nbsp;
                 
              <b>{price}</b>
                </p> */}
               <p className={styles.lines }>
 
               &nbsp;&nbsp;<b className= {styles.lines1}>&nbsp;{direction=="rtl"?"٦٤٠٠ ريال":"6400 SAR"}&nbsp;</b>

  &nbsp;&nbsp;
  <b className={styles.price}>{price}</b>
</p>


              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default FundamentalPackage ;
