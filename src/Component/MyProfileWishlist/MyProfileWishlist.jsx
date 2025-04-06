

import React from 'react';
import styles from './MyProfileWishlist.module.css';
import Arrow from "../../assets/Arrow.png";
import profilecoursefirst from "../../assets/profilecoursefirst.png";
import profilecourse from "../../assets/profilecourse.png";
import { Link } from 'react-router-dom';

function MyProfileWishlist() {
  return (
    <div className={styles.profileContainer}>
         <header className={styles.profileHeader}>
             <h1>My Profile</h1>
          </header>
         <nav>
             <ul className={styles.profileTabs}>
                 <li>
                     <Link to="/personalInformation">Personal Information</Link>
                  </li>
                  <li>
                     <Link to="/mycourses">My Courses</Link>
                  </li>
                   <li>
                      <Link to="/mycertificate">My Certificates</Link>
                    </li>
                   <li className={styles.activeTab}>
                      <Link to="/mywishlist">My Wishlist</Link>
                    </li>
              </ul>
             <hr className={styles.footerHr} />

            </nav>
          </div>
  );
}
export default MyProfileWishlist;

