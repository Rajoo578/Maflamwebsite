import React, { useContext } from "react";
import styles from "./HomeScreenCarousel.module.css";
import { HomePageContext } from "../../store/HomePageContext"; // Import the context
import { Link } from "react-router-dom";
import { StandardCarousel } from "../../utilities";

const HomeScreenCarousel = () => {
  const { homeScreenDetails, loading, error } = useContext(HomePageContext); // Access the context

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error loading eBooklets: {error.message}</p>;

  const eBookletData = homeScreenDetails?.eBookletData || {};
  const eBookletImages = homeScreenDetails?.eBookletVideo || []; // Assuming these are images
  const imageUrls = eBookletImages.map((image) => image.ebookVideoUrl); // Extract URLs

  if (!imageUrls || imageUrls.length === 0) {
    return <p>No images available to display.</p>;
  }

  // Modify the image URLs for looping
  const modifiedImageUrls = [
    imageUrls[imageUrls.length - 1], // Add the last image at the beginning
    ...imageUrls, // Include all images
    imageUrls[0], // Add the first image at the end
  ];

  // Create an array of items for the carousel
  const items = modifiedImageUrls.map((imageUrl, index) => ({
    id: index,
    imageSrc: imageUrl,
    content: (
      <img
        key={index}
        src={imageUrl}
        alt={`Ebook Image ${index + 1}`}
        className={styles.imagebook}
        onError={() => console.error(`Error loading image: ${imageUrl}`)}
      />
    ),
  }));

  return (
    <div className={styles.carouselcontainer}>
      <h2 style={{ marginBottom: "150px" }}>
        <Link className={styles.linking} to="/R2/ebooks">
          {eBookletData.title || "Ebook Title"}
        </Link>
      </h2>

      {/* Use Carou Component to handle the image carousel */}
      <StandardCarousel
        itemWidth={390} // Adjust the width of the image items
        itemHeight={670} // Adjust the height of the image items
        items={items} // Pass the image items
        scalingRatio={1.1}
        margin={10}
      />

      <div className={styles.contentpara}>
        <p>{eBookletData.description || "No description available."}</p>
      </div>
    </div>
  );
};

export default HomeScreenCarousel;
