import { useContext } from "react";
import stylesArabic from "./ShowsPodcast.module.css";
import styles from "./ShowsPodcastEnglish.module.css";
import { Link } from "react-router-dom";
import { CiCircleCheck } from "react-icons/ci";
import { HomePageContext } from "../../store/HomePageContext.jsx";
import { LanguageContext } from "../../Component/LanguageContext/LanguageContext.jsx";
import { useNavigate } from "react-router-dom";
import podcastImg from "../../assets/podcast.png"
import pdlogo from "../../assets/pdlogo.png"
import { SocialMediaPageContext } from "../../store/SocilaMediaPageContext.jsx";

function Podcast() {
  // const { homeScreenDetails, loading, error } = useContext(HomePageContext);
  const { language } = useContext(LanguageContext);
  const navigate = useNavigate();
  const stylesSelected = language === "ar" ? stylesArabic : styles;

  // if (loading) return <p>Loading...</p>;
  // if (error) return <p>Error loading data</p>;

  // // Extract the relevant data from homeScreenDetailsSec7
  // const sectionData = homeScreenDetails?.homeScreenDetailsSec7 || [];
  // const title =
  //   sectionData[0]?.title ||
  //   "Subscribe 60 The Full Filmmaking Fundamentals Package";
  // const imageUrl = sectionData[0]?.imageUrl || ""; // Use context imageUrl or a fallback
  // const categories = sectionData[0]?.category || [];
  // const subscribeText = sectionData[1]?.title || "Subscribe";
  // const price = sectionData[2]?.title || "2.200 SAR";
  
  const { socialMediaPageDetails, loading, error } = useContext(SocialMediaPageContext);

  if (loading) return <p>Loading...</p>; // Handle loading state
  if (error) return <p>Error loading data</p>; // Handle error state

  // Extract data from the context
  const title = socialMediaPageDetails?.pageDataTitle3?.title || "";
  const description = socialMediaPageDetails?.pageDatades3?.description || "";
  const text = socialMediaPageDetails?.pageDatades3?.text || "";

  const Subscribe = () => {

    navigate("/prc");
  };

  return (
    <>
    <h1 className={stylesSelected.title}>{title}</h1>
    <div className={stylesSelected.parentfundamental}>
      <div className={stylesSelected.Fundamental}>
        <div className={stylesSelected.content}>          
            
           
            <div className={stylesSelected.ctn}>
                <img  style={{paddingLeft:'20px', paddingRight:'20px'}} src={pdlogo} alt="" />
             <p>{description}</p> 
              <h6>{text}</h6>
              <span style={{display:'flex', flexDirection:'row', gap:'10px', paddingLeft:'20px', paddingRight:'20px'}}>
              <Link to="/osp">
              <svg width="33" height="33" viewBox="0 0 33 33" fill="none" xmlns="http://www.w3.org/2000/svg">
<rect width="33" height="33" rx="16.5" fill="#39FFFB"/>
<g clip-path="url(#clip0_9501_7021)">
<path d="M22.024 10.9727H10.9767C9.88512 10.9727 9 11.869 9 12.9738V19.9709C9 21.0763 9.88512 21.972 10.9767 21.972H22.024C23.1149 21.972 24 21.0763 24 19.9709V12.9738C24 11.869 23.1149 10.9727 22.024 10.9727ZM18.2744 16.9551L15.2023 18.51C14.8475 18.6897 14.4307 18.429 14.4307 18.0279V14.9181C14.4307 14.5169 14.8481 14.2563 15.2023 14.4353L18.2744 15.9902C18.6667 16.1888 18.6667 16.7565 18.2744 16.9551Z" fill="#061C2B"/>
</g>
<defs>
<clipPath id="clip0_9501_7021">
<rect width="15" height="11" fill="white" transform="translate(9 10.9727)"/>
</clipPath>
</defs>
</svg>
</Link>
<Link to="/osp">
<svg width="33" height="33" viewBox="0 0 33 33" fill="none" xmlns="http://www.w3.org/2000/svg">
<rect width="33" height="33" rx="16.5" fill="#39FFFB"/>
<g clip-path="url(#clip0_9501_7024)">
<path d="M24.9735 24.1711C24.6351 24.1122 24.312 24.0561 23.9366 23.991C23.9366 23.8299 23.9366 23.6688 23.9366 23.5087C23.9366 21.0211 23.9384 18.5336 23.9366 16.0452C23.9339 12.0257 21.0875 8.70473 17.1337 8.10389C12.8207 7.44966 8.69096 10.5688 8.13865 14.8978C7.57279 19.3353 10.5744 23.2978 15.0101 23.8688C15.8856 23.9819 16.8241 23.9159 17.6878 23.724C18.5605 23.5304 19.3339 23.7548 20.2725 23.8978C19.4377 24.3955 18.6453 24.6615 17.8178 24.8226C12.6032 25.8415 7.79299 22.373 7.07642 17.0849C6.46003 12.5396 9.69091 8.04055 14.1934 7.17276C19.1327 6.22082 23.7687 9.28477 24.8093 14.2119C24.9392 14.8263 24.9844 15.4679 24.9889 16.0977C25.0087 18.6911 24.997 21.2845 24.9961 23.877C24.9961 23.9656 24.9826 24.0543 24.9735 24.1711Z" fill="#061C2B"/>
<path d="M23.3259 23.8517C23.0037 23.8055 22.696 23.7621 22.3106 23.7069C22.3106 23.534 22.3106 23.3612 22.3106 23.1884C22.3106 20.852 22.3106 18.5146 22.3106 16.1782C22.3088 12.8835 20.1726 10.2666 16.93 9.76439C13.3751 9.21331 10.2372 11.6818 9.78506 15.0851C9.31126 18.6504 11.5241 21.6139 15.0528 22.2401C16.0582 22.4183 17.0591 22.3115 18.0319 21.9885C18.1583 21.9469 18.2837 21.9025 18.4236 21.8555V22.9884C15.7252 23.7947 13.2488 23.4046 11.1406 21.5216C8.88619 19.5082 8.13713 16.9248 8.93583 14.021C9.73723 11.1081 11.7353 9.30561 14.691 8.75001C19.1998 7.90123 23.3078 11.3353 23.3557 15.904C23.3828 18.4667 23.3647 21.0293 23.3647 23.5929C23.3647 23.6653 23.3439 23.7376 23.3268 23.8526L23.3259 23.8517Z" fill="#061C2B"/>
<path d="M18.4243 20.0257C18.4424 21.3912 18.7303 21.2166 17.3017 21.565C14.1682 22.3278 11.0583 20.2981 10.4202 17.1292C9.78579 13.9811 11.8994 10.8991 15.0662 10.3543C18.4622 9.76976 21.5848 12.2844 21.7049 15.7999C21.7906 18.3146 21.7256 20.8338 21.7256 23.3503C21.7256 23.4082 21.7067 23.4652 21.6886 23.5666C21.4007 23.5177 21.1101 23.5077 20.8556 23.4055C20.7564 23.3657 20.6941 23.1186 20.6941 22.9657C20.6842 20.6899 20.6923 18.4141 20.686 16.1374C20.6796 13.6933 19.1563 11.8492 16.7728 11.3832C13.9914 10.8393 11.2072 13.2726 11.3615 16.1121C11.5537 19.652 14.9958 21.6844 18.1753 20.1361C18.2411 20.1045 18.3088 20.0764 18.4243 20.0248V20.0257Z" fill="#061C2B"/>
<path d="M18.4404 17.818C18.4404 18.3175 18.4594 18.7202 18.4287 19.1202C18.4197 19.2369 18.2879 19.3735 18.1769 19.4477C15.8575 20.9824 12.5508 19.5835 12.0211 16.8498C11.5807 14.5785 12.9867 12.4195 15.1888 11.9824C17.4387 11.5363 19.5577 12.9678 20.0171 15.2545C20.0667 15.5033 20.0766 15.7639 20.0766 16.0191C20.0812 18.3266 20.0803 20.634 20.0784 22.9415C20.0784 23.0447 20.0595 23.1469 20.0478 23.2636C19.7193 23.2021 19.4106 23.1433 19.0325 23.0718C19.0325 22.9098 19.0325 22.7343 19.0325 22.5596C19.0325 20.4178 19.0415 18.2768 19.0298 16.1349C19.0207 14.5668 18.1381 13.4139 16.6959 13.0429C15.1013 12.633 13.4669 13.6284 13.0553 15.2599C12.6483 16.877 13.6329 18.5428 15.2348 18.9283C16.4821 19.2278 17.5091 18.8306 18.4395 17.8198L18.4404 17.818Z" fill="#061C2B"/>
</g>
<defs>
<clipPath id="clip0_9501_7024">
<rect width="18" height="18" fill="white" transform="translate(7 7)"/>
</clipPath>
</defs>
</svg>
</Link>
<Link to="/osp">
<svg width="33" height="33" viewBox="0 0 33 33" fill="none" xmlns="http://www.w3.org/2000/svg">
<rect width="33" height="33" rx="16.5" fill="#39FFFB"/>
<g clip-path="url(#clip0_9501_7031)">
<path d="M16.9457 25.9975C11.4992 26.0678 6.97165 21.5084 7.00013 16.0051C7.02908 10.4375 11.4588 5.98006 17.0288 5.99982C22.6439 6.02004 27.0047 10.5551 27.0001 16.0414C26.9955 21.5438 22.4629 26.1161 16.9452 25.9975H16.9457ZM15.6979 11.2453C15.2849 11.2453 14.8714 11.2292 14.4593 11.2485C13.172 11.3087 11.9026 11.4903 10.6686 11.874C10.1922 12.0219 9.88714 12.6175 10.0337 13.0775C10.1931 13.5779 10.7747 13.9262 11.2479 13.7713C12.0754 13.5002 12.9285 13.3702 13.7881 13.2875C15.4719 13.1262 17.1506 13.1946 18.8165 13.4878C20.248 13.7401 21.6244 14.1629 22.8952 14.8875C23.4107 15.1816 23.9859 15.0465 24.2725 14.5617C24.5634 14.0696 24.4108 13.5117 23.8981 13.2015C22.8024 12.538 21.6111 12.1079 20.3767 11.7977C18.8426 11.4121 17.2806 11.2269 15.6984 11.2458L15.6979 11.2453ZM15.4291 14.695C13.9314 14.6849 12.6092 14.8567 11.3201 15.2552C10.8515 15.3999 10.5873 15.8434 10.7044 16.2606C10.8354 16.7256 11.27 16.9747 11.7671 16.8437C12.6345 16.6158 13.5092 16.443 14.4069 16.3966C16.9981 16.2629 19.4656 16.6866 21.7333 18.0165C21.9479 18.1424 22.173 18.192 22.4146 18.1047C22.7372 17.9889 22.9434 17.7642 22.9926 17.4255C23.0473 17.0496 22.8695 16.7734 22.558 16.5818C21.4944 15.9279 20.3459 15.4721 19.1399 15.1642C17.8746 14.8411 16.5883 14.6674 15.4291 14.6945V14.695ZM15.2541 17.9416C14.615 17.9976 13.9728 18.0335 13.3374 18.1162C12.793 18.1874 12.2545 18.3083 11.7152 18.4149C11.2865 18.4999 11.0325 18.8441 11.1106 19.2163C11.1951 19.6193 11.5737 19.8105 12.012 19.7383C12.9078 19.5903 13.8055 19.4185 14.7092 19.3606C16.8437 19.2236 18.8822 19.5811 20.7419 20.7139C20.8613 20.7865 21.0368 20.8099 21.1793 20.7934C21.4646 20.7603 21.709 20.5057 21.7448 20.2351C21.7852 19.9285 21.6502 19.6845 21.3874 19.5471C20.8338 19.2572 20.282 18.9557 19.7031 18.7246C18.2789 18.1562 16.7858 17.9457 15.2546 17.9416H15.2541Z" fill="#061C2B"/>
</g>
<defs>
<clipPath id="clip0_9501_7031">
<rect width="20" height="20" fill="white" transform="translate(7 6)"/>
</clipPath>
</defs>
</svg>
</Link>



              </span>
            </div>
          </div>
          <div className={stylesSelected.imgcontainer}>
              <img
                src={podcastImg}
                alt="Filmmaking Package"
                className={styles.imgcontainer}
              />
            </div>
          </div>
       
      </div>
    </>
  );

}

export default Podcast;
