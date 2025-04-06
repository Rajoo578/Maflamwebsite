


import React, { useContext } from "react";
import stylesSelected from "./Community.module.css";
import { HomePageContext } from "../../store/HomePageContext";
import Carou from "./Carou/Carou"

const CarouselCommunity = () => {
  const { homeScreenDetails } = useContext(HomePageContext);
  const communityTitle = homeScreenDetails?.maflamCommunityTitle?.title || "Community Stories";
  const communityData = homeScreenDetails?.maflamCommunityData || [];

  const videoItems = communityData.map((story, index) => ({
    id: index,
    content: (
      <video
        key={index}
        src={story.videoUrl}
        loop
        playsInline
        muted
        controls
        style={{ width: "100%", height: "100%" }}
      />
    ),
  }));

  return (
    <div className={stylesSelected.carouselWrapper}>
      <h2>{communityTitle}</h2>
      <Carou
        itemWidth={619}
        itemHeight={417}
        items={videoItems}
        scalingRatio={1.05}
        margin={10}
      />
    </div>
  );
};

export default CarouselCommunity;


// import React, { useRef, useContext, useEffect, useState } from "react";
// import stylesSelected from "./Community.module.css";
// import { HomePageContext } from "../../store/HomePageContext";
// import Carou from "./../../Component/Carou/Carou.jsx";

// const Community = () => {
//   const { homeScreenDetails } = useContext(HomePageContext);
//   const successStoriesArray = homeScreenDetails?.maflamCommunity || [];
//   const videoItems = successStoriesArray.map((story, index) => ({
//     id: index,
//     content: (
//       <video
//         src={story.videoUrl}
//         loop
//         playsInline
//         muted
//         controls
//         style={{ width: "100%", height: "100%" }}
//       />
//     ),
//   }));

//   return (
//     <div className={stylesSelected.carouselWrapper}>
//       <h2>{successStoriesArray[0]?.title}</h2>
//       <Carou
//         itemWidth={619}
//         itemHeight={417}
//         items={videoItems}
//         scalingRatio={1.05}
//         margin={10} // Pass video items array to Carou
//       />
//     </div>
//   );
// };

// export default Community;
