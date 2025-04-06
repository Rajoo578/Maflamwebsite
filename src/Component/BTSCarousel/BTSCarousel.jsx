import React, { useRef, useContext, useState } from "react";
import styles from "./BTSCarousel.module.css";
import { Link } from "react-router-dom";
import { SocialMediaPageContext } from "../../store/SocilaMediaPageContext";
import Carou from "../OSPCarousel/Carou"; // Adjust the path if necessary

const BTSCarousel = () => {
  const { socialMediaPageDetails, loading, error } = useContext(SocialMediaPageContext);

  if (loading) return <p>Loading...</p>; // Handle loading state
  if (error) return <p>Error loading data</p>; // Handle error state

  const title = socialMediaPageDetails?.pageDataTitle6?.title || "Behind the Scenes";
  const channels = socialMediaPageDetails?.pageData6 || [];

  // Prepare items for Carou
  const carouItems = channels.map((channel, index) => ({
    id: index,
    content: (
      <div className={styles.card}>
        <Link to="/osp">
          <img src={channel.image} alt={channel.title} className={styles.videobook} style={{height:"100%", width:"100%"}} />
          <p className={styles.description}>{channel.title}</p>
        </Link>
      </div>
    ),
  }));

  return (
    <div className={styles.carouselcontainer}>
      <h2>{title}</h2>
      <div className={styles.carousel}>
        <Carou
          itemWidth={465} // Adjust based on your design
          itemHeight={720} // Adjust based on your design
          items={carouItems}
          scalingRatio={1.2} // Control the scaling of the center item
          margin={0} // Space between items
        />
      </div>
    </div>
  );
};

export default BTSCarousel;
