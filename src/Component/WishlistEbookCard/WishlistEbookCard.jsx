import React, { useContext, useEffect, useState } from "react";
import styles from "./WishlistEbookCard.module.css";
import { EbookPageContext } from "../../store/ebookPageContext";

const WishlistEbookCard = () => {
  const { ebookPageContextDetails, setEbookPageContextDetails, loading, error } = useContext(EbookPageContext);
  const [displayCount, setDisplayCount] = useState(8); // Show 8 items initially

  useEffect(() => {
    const fetchEbooks = async () => {
      try {
        const response = await fetch("/api/ebookData"); 
        const data = await response.json();
        setEbookPageContextDetails(data); 
      } catch (err) {       
        console.error("Error fetching data", err);
      }
    };
    fetchEbooks();
  }, [setEbookPageContextDetails]);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error loading data</p>;

  const { EbookDataTitle, ebook } = ebookPageContextDetails || {};
  const { title } = EbookDataTitle || { title: "Default Title" };



  return (
    <>
    <div className={styles.container}>  
    <h1 className={styles.title}>E-Books</h1>


      <div className={styles.cardsContainer}>
        
        {ebook?.slice(0, displayCount).map((ebookItem) => (
            
          <div key={ebookItem.id} className={styles.card}>
            <img src={ebookItem.imgSrc} alt={ebookItem.title} className={styles.image} />
            <div className={styles.content}>
              <h3 className={styles.text}>{ebookItem.title}</h3>

            </div>
          </div>
        ))}
      </div>

     
    </div>
    </>
  );
};

export default WishlistEbookCard;





