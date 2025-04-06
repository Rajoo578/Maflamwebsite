import React, { useContext, useRef, useEffect, useState } from "react";
import styles from "./HomeCommunityCarousel.module.css";
import { HomePageContext } from "../../store/HomePageContext";
import { Link } from "react-router-dom";
import {FourElementsCarousel} from "../../utilities" 

const HomeCommunityCarousel = ({ itemWidth, itemHeight, items }) => {
  const { homeScreenDetails } = useContext(HomePageContext);
  const maflamShowsData = homeScreenDetails?.maflamShowsData || [];
  const maflamShowsDataTitle = homeScreenDetails?.maflamShowsTitle || [];

  return (
    <div className={styles.parent}>
      <div className={styles.carouselcontainer}>
 
        <Link to="R2/R4/socialmedia">{maflamShowsDataTitle.title}</Link>
        <FourElementsCarousel
          itemWidth={itemWidth}
          itemHeight={itemHeight}
          items={maflamShowsData.map((item) => ({
            id: item.id,
            content: (
              <div className={styles.card}>
                <img
                  src={item.logoUrl}
                  alt={`Show logo`}
                  className={styles.logo89}
                  style={{ width: itemWidth, height: itemHeight }}
                />
                <video
                  src={item.videoUrl}
                  className={styles.img89}
                  muted
                  loop
                  playsInline
                  controls
                  poster={item.thumbNailUrl}
                  style={{ width: itemWidth, height: itemHeight }}
                >
                  Your browser does not support the video tag.
                </video>
              </div>
            ),
          }))}
        />
      </div>
    </div>
  );
};

export default HomeCommunityCarousel;
