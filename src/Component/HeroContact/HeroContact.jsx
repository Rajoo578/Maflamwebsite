import React, { useContext }from "react";
import styles from "./HeroContact.module.css";
import { ContactUsContext } from "../../store/ContactUsContext.jsx";
import { Link } from "react-router-dom";

const HeroContact = () => {
  const { contactUsContextDetails, loading, error } =
    useContext(ContactUsContext);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error loading data</p>;
  const contactDetailsSec1 = contactUsContextDetails?.contactDetailsSec1 || {};
  const contactDetailsSec2 = contactUsContextDetails?.contactDetailsSec2 || [];

  const title = contactDetailsSec2[0]?.title || "";
  const title1 = contactDetailsSec2[1]?.title || "";
  const title2 = contactDetailsSec2[2]?.title || "";
  return (
    <div className={styles.heroContainer}>
      <div className={styles.content}>
        <h1 className={styles.title}>{contactDetailsSec1.title}</h1>
        <p className={styles.description}>{contactDetailsSec1.description}</p>
        <div className={styles.cardsContainer}>
        <div  className={styles.card}>
            <div className={styles.cardText}>
              <Link to="*#form_container">{title}</Link>
            </div>
          </div>
        <div className={styles.card}>
            <div className={styles.cardText}>
              <Link to="form#form_container"> {title1}</Link>
            </div>
          </div>

          <div className={styles.card}>
            <div className={styles.cardText}>
              <Link to="form2#form_container">{title2}</Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroContact;
