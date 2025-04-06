import React, { useState } from "react";
import styles from "./CourseDetailsHeader.module.css";
import {
  FaLessThan,
  FaShoppingCart,
  FaHeart,
  FaStar,
  FaStarHalfAlt,
} from "react-icons/fa";
import { AiTwotoneEye } from "react-icons/ai";
import { CiClock2 } from "react-icons/ci";
import videoCrc1Image from "../../assets/videocrc1.png";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import auth from "../../Auth/Auth";

function CourseDetailsHeader() {
  const userDetails = auth.getAuthData();
  const navigate = useNavigate();

  const checkoutpage = () => {
    if (userDetails) {
      navigate("/checkout");
    } else {
      navigate("/login");
    }
  };

  return (
    <>
      <div className={styles.coursedetailsheader}>
        <div className={styles.courseOption}>
          <div className={styles.courseFundamental}>
            <p>Fundamentals of acting</p>
          </div>
          <div className={styles.courseArabic}>
            <p>
              <FaLessThan /> &nbsp;Arabic &nbsp;
              <FaLessThan />
            </p>
          </div>
          <div className={styles.courseCourse}>
            <p>Courses</p>
          </div>
        </div>

        <div className={styles.videoTheory}>
          <div className={styles.courseVideo}>
            <img src={videoCrc1Image} alt="Video" />
            <div className={styles.videocontent}>
              <p>
                A brief summary of the content and its contents: Our vision to
                become a leading online platform for all Arab students who...
              </p>

              <div className={styles.starRating}>
                <FaStarHalfAlt className={styles.starFilled} />
                <FaStar className={styles.starFilled} />
                <FaStar className={styles.starFilled} />
                <FaStar className={styles.starFilled} />
                <FaStar className={styles.starFilled} />
                <span> 4.3</span>
              </div>

              <button onClick={checkoutpage} className={styles.subcribebtn}>
                <FaShoppingCart /> &nbsp;&nbsp;Subscribe
              </button>
              <button className={styles.addtowishlist}>
                <FaHeart />
                &nbsp;&nbsp;Add to wishlist
              </button>
            </div>
          </div>
          <div className={styles.headerText}>
            <button className={styles.buttonOnTop}>
              نظري <AiTwotoneEye />
            </button>
            <h6>Fundamentals of Scriptwriting</h6>
            <p>
              This course is designed for imaginative writers who aspire to
              bring their ideas and stories to the screen. It focuses on
              learning how to craft a professional screenplay and understanding
              the key elements of a successful script that producers are looking
              for.
            </p>

            <div className={styles.lessonsprice}>
              <div className={styles.riyals}>
                750 riyals <CiClock2 className={styles.icon} />
              </div>
              <div className={styles.lessons}>
                54 lessons <CiClock2 className={styles.icon} />
              </div>
              <div className={styles.time}>
                +6 hours <CiClock2 className={styles.icon} />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.bgimage}>
        {/* <WhatWeLearn />
        <KeyTopic />
        <AboutInstructor /> */}
      </div>
      <ToastContainer />
    </>
  );
}

export default CourseDetailsHeader;
