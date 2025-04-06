import React, { useState, useContext } from "react";
import styles from "./Login.module.css";
import auth from "../../Auth/Auth.js";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { assests } from "../../assets/assests.js";
import { LoginPageContext } from "../../store/LoginPageContext.jsx";
import { ToastContainer, toast } from "react-toastify";
import { GoogleOAuthProvider, GoogleLogin } from "@react-oauth/google";
import { LanguageContext } from "../../Component/LanguageContext/LanguageContext.jsx";
import "react-toastify/dist/ReactToastify.css";
import { useLastUrl } from "../../store/LastUrlContext.jsx";

const Login = () => {
  const lastUrl=useLastUrl();
  console.log(lastUrl);
  const [emailOrPhone, setEmailOrPhone] = useState("");
  const [password, setPassword] = useState("");
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);
  const { language} = useContext(LanguageContext);
  const navigate = useNavigate();
  const signupText = language === "ar"?"انشئ حساب":"Create an Account";
  const orText = language === "ar"? "أو":"or";
  const {
    loginPageContexttDetails,
    loading,
    error: apiError,
  } = useContext(LoginPageContext);

  if (loading) return <p>Loading...</p>;
  if (apiError) return <p>Error loading data</p>;

  const loginData = loginPageContexttDetails?.loginData || [];
  const title = loginData[0]?.title || "Together to make your first movie";
  const emailLabel = loginData[1]?.title || "Email or Phone";
  const passwordLabel = loginData[2]?.title || "Password";
  const rememberMeLabel = loginData[3]?.title || "Remember me";
  const loginButtonLabel = loginData[4]?.title || "Log in";
  const reset = loginData[5]?.title || "Forget Password";
  const googleLoginText = loginData[7]?.title || "Continue with Google";

  const handleSubmit = async (e) => {
    e.preventDefault();
    const isEmail = emailOrPhone.includes("@");
    try {
      const response = await axios.post(
        "https://backend.maflam.com/maflam/sign-in",
        {
          phone: isEmail ? "" : emailOrPhone,
          emailId: isEmail ? emailOrPhone : "",
          password,
        }
      );
   
      toast.success(response.data.message);
      auth.login(response.data);
      // console.log(response.data)
     
      setTimeout(() => {
        window.location.href=lastUrl;
      }, 5000);
      // navigate("/");
    } catch (err) {
      const errorMessage = err.response?.data?.message || err.message;
      toast.error(`Error: ${errorMessage}`);
    }
  };

  const handleGoogleLoginSuccess = async (credentialResponse) => {
    try {

      const response = await axios.post(
        "https://backend.maflam.com/maflam/sign-in-with-google",
        { googleCredential: credentialResponse.credential }
      );

      toast.success(response.data.message);
      auth.login(response.data);
      // navigate("/");
      setTimeout(() => {
        window.location.href=lastUrl;
      }, 2000);
    } catch (error) {
      console.error("Google Login Error:", error);
      // toast.error("Google Login failed. Please try again.");
      const errorMessage = error.response?.data?.message || error.message;
      toast.error(`Error: ${errorMessage}`);
    }
  };

  const togglePasswordVisibility = () => {
    setIsPasswordVisible(!isPasswordVisible);
  };

  return (
    <div className={styles.container}>
      <div className={styles.Subcontainer}>
        <div className={styles.loginBox}>
          <img
            src={assests.logo1}
            alt="resetlogo"
            className={styles.resetlogo}
          />
          <h1 className={styles.title}>{title}</h1>
          <form className={styles.form} onSubmit={handleSubmit}>
            <label htmlFor="email">{emailLabel}</label>
            <input
              type="text"
              required
              maxLength={40}
              placeholder={emailLabel}
              className={styles.input}
              value={emailOrPhone}
              onChange={(e) => setEmailOrPhone(e.target.value)}
            />
            <label style={{marginTop:'15px'}} htmlFor="password">{passwordLabel}</label>
            <div className={styles.passwordContainer}>
              <input
                type={isPasswordVisible ? "text" : "password"}
                placeholder={passwordLabel}
                className={styles.input}
                required
                maxLength={20}
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
                            <div
                className={styles.eyeIcon}
                onClick={togglePasswordVisibility}
                role="button"
                aria-label="Toggle password visibility"
              />
            </div>
            <div className={styles.rememberMeContainer}>
              <input
                type="checkbox"
                id="rememberMe"
                className={styles.checkbox}
              />
              <label htmlFor="rememberMe" className={styles.checkboxLabel}>
                {rememberMeLabel}
              </label>
            </div>
            <button type="submit" className={styles.loginButton}>
              {loginButtonLabel}
            </button>
          </form>
          <div className={styles.forgotpassword}>
           <p>  <Link to="/reset">  {reset}</Link></p>
          </div>
          <div className={styles.divider}>
            <hr className={styles.hrLine} />
            <span style={{fontSize:'22px'}} >{orText}</span>
            <hr className={styles.hrLine} />
          </div>
          <div className={styles.socialLogin}>
            <GoogleLogin
              onSuccess={handleGoogleLoginSuccess}
              onError={() => toast.error("Google Login failed.")}
              text={googleLoginText}
            />
          </div>
          <div style={{width:'100%'}}>
            <a href="/signUp" className={styles.createAccount}>
            {signupText}
            </a>
          </div>
        </div>
      </div>
      <ToastContainer />
    </div>
  );
};

export default Login;

// import React, { useState } from "react";
// import styles from "./Login.module.css";
// import auth from "../../Auth/Auth.js";
// import { useNavigate } from "react-router-dom";
// import axios from "axios"; // Ensure axios is imported
// import { assests } from "../../assets/assests.js";

// const Login = () => {
//   // State management for phone (or email) and password
//   const [phone, setPhone] = useState("");
//   const [password, setPassword] = useState("");
//   const [error, setError] = useState("");
//   const [popupMessage, setPopupMessage] = useState("");
//   const [isPasswordVisible, setIsPasswordVisible] = useState(false);
//   const navigate = useNavigate();

//   const handleSubmit = async (e) => {

//     e.preventDefault();

//     try {
//       const response = await axios.post(
//         "https://prominenttrades.in/maflam/sign-in",
//         {
//           phone,
//           password,
//         }
//       );

//       const data = response.data;
//       console.log("API Response:", data);

//       if (data) {
//         auth.login(data);
//         alert("Login Successfully");
//         setPopupMessage("Login Successfully");
//         setPhone("");
//         setPassword("");
//         navigate("/");
//       } else {
//         throw new Error("Invalid response from server");
//       }
//     } catch (err) {
//       console.error("Login Error:", err);
//       setError("Login failed. Please check your credentials.");
//     }
//   };

//   const togglePasswordVisibility = () => {
//     setIsPasswordVisible(!isPasswordVisible);
//   };

//   return (
//     <div className={styles.container}>
//       <div className={styles.Subcontainer}>
//         <div className={styles.loginBox}>
//           <img src={assests.logo1} alt="resetlogo" className={styles.resetlogo} />
//           <h1 className={styles.title}>Together to make your first movie</h1>
//           <form className={styles.form} onSubmit={handleSubmit}>
//             <label htmlFor="email">Email</label>
//             <input
//               type="text"
//               placeholder="Email"
//               className={styles.input}
//               value={phone}
//               onChange={(e) => setPhone(e.target.value)}
//             />
//             <label htmlFor="password">Password</label>
//             <div className={styles.passwordContainer}> {/* Wrap password input and eye icon */}
//               <input
//                 type={isPasswordVisible ? "text" : "password"} // Toggle visibility
//                 placeholder="Password"
//                 className={styles.input}
//                 value={password}
//                 onChange={(e) => setPassword(e.target.value)}
//               />
//               <div
//                 className={styles.eyeIcon}
//                 onClick={togglePasswordVisibility}
//                 role="button"
//                 aria-label="Toggle password visibility"
//               />
//             </div>
//             <div className={styles.rememberMeContainer}>
//               <input
//                 type="checkbox"
//                 id="rememberMe"
//                 className={styles.checkbox}
//               />
//               <label htmlFor="rememberMe" className={styles.checkboxLabel}>
//                 Remember me
//               </label>
//             </div>
//             <button type="submit" className={styles.loginButton}>
//               Log in
//             </button>
//           </form>
//           {error && <p className={styles.errorMessage}>{error}</p>}
//           <a href="#" className={styles.forgotPassword}>
//             Forgot password?
//           </a>
//           <div className={styles.divider}>
//             <hr className={styles.hrLine} />
//             <span>or</span>
//             <hr className={styles.hrLine} />
//           </div>
//           <div className={styles.socialLogin}>
//             <button className={styles.socialButton}>
//               <img src={assests.googlelogin} alt="Google" className={styles.socialIconImage} />
//               <span>&nbsp;Continue with Google</span>
//             </button>
//             <button className={styles.socialButton}>
//               <img src={assests.applelogin} alt="Apple" className={styles.socialIconImage} id={styles.applelogo} />
//               <span>&nbsp;&nbsp;&nbsp;&nbsp;Continue with Apple</span>
//             </button>
//             <button className={styles.socialButton}>
//               <img src={assests.Facebooklogin} alt="Facebook" className={styles.socialIconImage} />
//               <span>Continue with Facebook</span>
//             </button>
//           </div>
//           <a href="#" className={styles.createAccount}>
//             Create an account
//           </a>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Login;

// import React, { useState } from "react";
// import styles from "./Login.module.css";
// import auth from "../../Auth/Auth.js";
// import { useNavigate } from "react-router-dom";
// import axios from "axios"; // Ensure axios is imported
// import { FaGoogle, FaApple, FaFacebookF } from "react-icons/fa";
// import { assests } from "../../assets/assests.js";

// const Login = () => {
//   // State management for phone (or email) and password
//   const [phone, setPhone] = useState("");
//   const [password, setPassword] = useState("");
//   const [error, setError] = useState("");
//   const [popupMessage, setPopupMessage] = useState("");
//   const navigate = useNavigate();
//   const handleSubmit = async (e) => {
//     e.preventDefault();

//     try {
//       const response = await axios.post(
//         "https://prominenttrades.in/maflam/sign-in",
//         {
//           phone,
//           password,
//         }
//       );

//       const data = response.data;
//       console.log("API Response:", data);

//       if (data) {
//         auth.login(data);
//         alert("Login Successfully");
//         setPopupMessage("Login Successfully");
//         setPhone("");
//         setPassword("");
//         navigate("/");
//       } else {
//         throw new Error("Invalid response from server");
//       }
//     } catch (err) {
//       console.error("Login Error:", err);
//       setError("Login failed. Please check your credentials.");
//     }
//   };

//   return (
//     <div className={styles.container}>
//       <div className={styles.Subcontainer}>
//         <div className={styles.loginBox}>
//         <img src={assests.logo1} alt="resetlogo" className={styles.resetlogo} />

//           <h1 className={styles.title}>Together to make your first movie</h1>
//           <form className={styles.form} onSubmit={handleSubmit}>
//           <label htmlFor="email">Email</label>

//             <input
//               type="text"
//               placeholder="Email"
//               className={styles.input}
//               value={phone}
//               onChange={(e) => setPhone(e.target.value)}
//             />
//              <label htmlFor="password">Password</label>

//             <input
//               type="password"
//               placeholder="Password"
//               className={styles.input}
//               value={password}

//              id={styles.eyesymbol}

//               onChange={(e) => setPassword(e.target.value)}
//             />

//             <div className={styles.rememberMeContainer}>
//               <input
//                 type="checkbox"
//                 id="rememberMe"
//                 className={styles.checkbox}
//               />
//               <label htmlFor="rememberMe" className={styles.checkboxLabel}>
//                 Remember me
//               </label>
//             </div>
//             <button type="submit" className={styles.loginButton}>
//               Log in
//             </button>
//           </form>
//           {error && <p className={styles.errorMessage}>{error}</p>}
//           <a href="#" className={styles.forgotPassword}>
//             Forgot password?
//           </a>

//           <div className={styles.divider}>
//                 <hr className={styles.hrLine} />
//                      <span>or</span>
//                  <hr className={styles.hrLine} />
//                  </div>

//                  <div className={styles.socialLogin}>
//                      <button className={styles.socialButton}>
//                         <img src={assests.googlelogin} alt="Google" className={styles.socialIconImage} />
//                         <span>&nbsp;Continue with Google</span>
//                      </button>
//                    <button className={styles.socialButton}>
//                      <img src={assests.applelogin} alt="Apple" className={styles.socialIconImage} id={styles.applelogo} />
//                        <span>&nbsp;&nbsp;&nbsp;&nbsp;Continue with Apple</span>
//                    </button>
//                    <button className={styles.socialButton}>
//                     <img src={assests.Facebooklogin} alt="Facebook" className={styles.socialIconImage} />
//                      <span>Continue with Facebook</span>
//                        </button>
//                        </div>
//           <a href="#" className={styles.createAccount}>
//             Create an account
//           </a>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Login;
