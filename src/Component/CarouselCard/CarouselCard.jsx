

import React, { useContext } from "react";
import styles from "./CarouselCard.module.css";
import { PricingPageContext } from "../../store/PricingPageContext";
import Carou from "./CarouselCardForPricing"; // Assuming Carou component is available in this path

const CarouselCard = ({ itemWidth, itemHeight }) => {
  const { pricingPageContextDetails, loading, error } = useContext(PricingPageContext);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error loading data</p>;

  const successTitle =
    pricingPageContextDetails?.getPricingCourse1DetailsSec2?.title || "Success Stories";
  const successStories =
    pricingPageContextDetails?.successStoriesCourseData || [];

  return (
    <div className={styles.carouselcontainer}>
      <h2>{successTitle}</h2>
      <Carou
        itemWidth={itemWidth}
        itemHeight={itemHeight}
        scalingRatio={1}
        margin={10}
        items={successStories.map((story) => ({
          id: story.id,
          content: (
            <div className={styles.card} key={story.id}>
              <h3>{story.title}</h3>
            </div>
          ),
        }))}
      />
    </div>
  );
};

export default CarouselCard;
