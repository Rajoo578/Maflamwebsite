import React, { useContext, useState } from "react";
import styles from "./OSPCarousel.module.css";
import { SocialMediaPageContext } from "../../store/SocilaMediaPageContext";
import { Link } from "react-router-dom";
import { LanguageContext } from "../LanguageContext/LanguageContext"; 

import Carou from "./Carou"; // Import the Carou component

const OSPCarousel = () => {
  const { socialMediaPageDetails, loading, error } = useContext(SocialMediaPageContext);
  const { direction } = useContext(LanguageContext);

  if (loading) return <p>Loading...</p>; // Handle loading state
  if (error) return <p>Error loading data</p>; // Handle error state

  // Extract data from the context
  const title = socialMediaPageDetails?.pageDataTitle2?.title || "Invest in Yourself and Start Your Journey in Learning Filmmaking";
  const images = socialMediaPageDetails?.pageDataImg2 || [];
  const description = socialMediaPageDetails?.pageDatades2?.description || "";
  const moreText = socialMediaPageDetails?.pageDatades2?.text || "For more episodes";

  // Map the images to items for Carou component
  const carouselItems = images.map((imageObj, index) => ({
    id: index,
    content: (
      <div>
        <Link to="/osp">
          <img  style={{height:'729px', width:'100%'}} src={imageObj.image} alt={`OSP Image ${index + 1}`} className={styles.videobook} />
          <p className={styles.description}>{description}</p>
          <span style={{display:'block', display:'flex', flexDirection:'row',gap:'15px', justifyContent:'center' ,fontSize:'14px', color:'#5AFFFF', width:'100%', textAlign:'center', alignItems:'center'}}>
          {direction === "rtl" ? "للمزيد من الحلقات" : "For More Episodes"}
            <Link to="/osp">
            <svg width="25" height="25" viewBox="0 0 33 33" fill="none" xmlns="http://www.w3.org/2000/svg">
<rect width="33" height="33" rx="16.5" fill="#39FFFB"/>
<g clip-path="url(#clip0_9501_7108)">
<path d="M20.8966 7.97266H12.1034C9.8376 7.97266 8 9.81025 8 12.076V20.8693C8 23.1351 9.8376 24.9727 12.1034 24.9727H20.8966C23.1624 24.9727 25 23.1351 25 20.8693V12.076C25 9.81025 23.1624 7.97266 20.8966 7.97266ZM23.5343 20.5756C23.5343 22.1938 22.2212 23.507 20.603 23.507H12.3962C10.778 23.507 9.46486 22.1938 9.46486 20.5756V12.3689C9.46486 10.7507 10.778 9.43751 12.3962 9.43751H20.603C22.2212 9.43751 23.5343 10.7507 23.5343 12.3689V20.5756Z" fill="#061C2B"/>
<path d="M16.5085 12.0759C14.082 12.0759 12.1123 14.0457 12.1123 16.4721C12.1123 18.8986 14.082 20.8683 16.5085 20.8683C18.935 20.8683 20.9047 18.8986 20.9047 16.4721C20.9047 14.0457 18.935 12.0759 16.5085 12.0759ZM16.5085 19.4035C14.8936 19.4035 13.5772 18.0871 13.5772 16.4721C13.5772 14.8572 14.8936 13.5408 16.5085 13.5408C18.1234 13.5408 19.4398 14.8572 19.4398 16.4721C19.4398 18.0871 18.1234 19.4035 16.5085 19.4035Z" fill="#061C2B"/>
<path d="M21.1976 12.6625C20.7131 12.6625 20.3184 12.2678 20.3184 11.7833C20.3184 11.2988 20.7131 10.9041 21.1976 10.9041C21.6821 10.9041 22.0768 11.2988 22.0768 11.7833C22.0768 12.2678 21.6821 12.6625 21.1976 12.6625Z" fill="#061C2B"/>
</g>
<defs>
<clipPath id="clip0_9501_7108">
<rect width="17" height="17" fill="white" transform="translate(8 7.97266)"/>
</clipPath>
</defs>
</svg>
</Link>
<Link to="/osp">
<svg width="25" height="25" viewBox="0 0 33 33" fill="none" xmlns="http://www.w3.org/2000/svg">
<rect width="33" height="33" rx="16.5" fill="#39FFFB"/>
<g clip-path="url(#clip0_28_595)">
<path d="M19.3335 20.759V12.5696C19.3335 12.5696 20.2731 14.1087 23.6693 14.2027C23.8505 14.2077 24.0003 14.0613 24.0003 13.8832V11.5689C24.0003 11.3966 23.8606 11.2602 23.6854 11.2502C21.051 11.1038 19.7999 9.11804 19.6771 7.29699C19.6661 7.12811 19.5155 7 19.3436 7H16.6576C16.479 7 16.3334 7.14226 16.3334 7.31862V20.3372C16.3334 21.7514 15.2338 22.9818 13.7964 23.0484C12.1533 23.1249 10.8175 21.739 11.0207 20.1009C11.1646 18.9437 12.1093 17.9962 13.2843 17.8356C13.5179 17.804 13.7456 17.8015 13.9665 17.8256C14.1621 17.8473 14.3339 17.7042 14.3339 17.5112V15.191C14.3339 15.0263 14.2061 14.8832 14.0385 14.8732C13.7016 14.8516 13.3562 14.8591 13.0058 14.8982C10.4146 15.1877 8.32283 17.2483 8.03586 19.7956C7.65746 23.1557 10.324 26 13.6669 26C16.7965 26 19.3335 23.5068 19.3335 20.4312" fill="#061C2B"/>
</g>
<defs>
<clipPath id="clip0_28_595">
<rect width="16" height="19" fill="white" transform="translate(8 7)"/>
</clipPath>
</defs>
</svg>
</Link>



            
            </span>
        </Link>
      </div>
    ),
  }));

  return (
    <div className={styles.carouselcontainer}>
      <h2>{title}</h2>
      <div className={styles.carousel}>
        {/* Use Carou component for the carousel */}
        <Carou 
          itemWidth={500}  // Set width for the items
          itemHeight={1000}  // Set height for the items (adjust as needed)
          items={carouselItems}  // Pass the carousel items (images + content)
          scalingRatio={1.3}  // Optional scaling for the center item
          margin={20}  // Margin between items
        />
      </div>
    </div>
  );
};

export default OSPCarousel;
