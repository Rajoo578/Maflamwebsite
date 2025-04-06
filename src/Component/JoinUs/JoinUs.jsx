import { useContext, useState } from "react";
import axios from "axios";
import { AboutusPageContext } from "../../store/AboutUsPageContext";
import styles from "./JoinUs.module.css";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import joinUsIcon from "../../assets/joinUsIcon.png";

const JoinUs = () => {
  const { aboutusScreenDetails, loading, error } =
    useContext(AboutusPageContext);

  // State to hold the email input and response messages
  const [email, setEmail] = useState("");
  const [submitStatus, setSubmitStatus] = useState("");

  if (loading) return <p>Loading...</p>; // Handle loading state
  if (error) return <p>Error loading data</p>; // Handle error state

  // Destructure the aboutUsDetails60 data
  const aboutUsDetails60 = aboutusScreenDetails?.aboutUsDetails60 || [];

  // Extract the relevant titles
  const joinTitle = aboutUsDetails60[0]?.title || "Join our newsletter now";
  const emailPlaceholder =
    aboutUsDetails60[1]?.title || "Your email address...";
  const buttonText = aboutUsDetails60[2]?.title || "Send";

  // Extract imageUrl if available
  const imageUrl = aboutUsDetails60[0]?.imageUrl || "";

  // Email validation function
  const isValidEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  // Function to handle email submission
  const submitEmail = async () => {
    if (!email) {
      toast.error("Email is required");
      return;
    }
    if (!isValidEmail(email)) {
      toast.error("Please enter a valid email address");
      return;
    }
    try {
      const response = await axios.post(
        "https://backend.maflam.com/maflam/create-newsletter",
        {
          emailId: email,
        }
      );
      // setSubmitStatus("Thank you for subscribing!");
      toast.success(response.data.message);
      setEmail("");
    } catch (error) {
      setSubmitStatus("Failed to subscribe. Please try again.");
      console.error("Error submitting email:", error);
    }
  };

  return (
    <div>
          <div className={styles.joinBackground}></div>
    <div className={styles.joinUsParent}>
      <div
        className={styles.maincontainer}
        style={{ backgroundImage: `url(${imageUrl})` }}
      >
        <div className={styles.container}>
          <div className={styles.JoinUsBox}>
            <div className={styles.flexbox}>
              <img src={joinUsIcon} style={{ width: "40px" }} alt="" />
              <h2 className={styles.heading}>{joinTitle}</h2>
            </div>
            <div className={styles.serachoption}>
              <div className={styles.inputBox}>
                <input
                  type="email"
                  className={styles.inputField}
                  placeholder={emailPlaceholder}
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
              <div>
                <button
                  className={styles.button}
                  onClick={submitEmail}
                >
                  {buttonText}
                </button>
              </div>
            </div>
            {/* Display submission status message */}
            {submitStatus && (
              <p style={{ color: "white" }} className={styles.statusMessage}>
                {submitStatus}
              </p>
            )}
          </div>
        </div>
        <ToastContainer />
      </div>
    </div>
    </div>
  );
};

export default JoinUs;
