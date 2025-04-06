import React from "react";
import { Link } from "react-router-dom";
import styles from "./Navbar.module.css";
import { assests } from "../../assets/assests";

const SearchContainer = ({ placeHolderTitle }) => (
  <div className={styles.searchContainer}>
    <input type="text" placeholder={placeHolderTitle} />
    <Link to="/filmproduction">
      <img src={assests.Magnifine} alt="Search Icon" />
    </Link>
  </div>
);

export default SearchContainer;
