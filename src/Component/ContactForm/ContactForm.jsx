
import { useContext, useState } from "react";
import axios from "axios";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import styles from "./ContactForm.module.css";
import { ContactUs2Context } from "../../store/ContactUs2Context";
import downloadIcon from "../../assets/ContactFormUploadPng.png";
import { LanguageContext } from "../LanguageContext/LanguageContext";
import { MdDelete } from "react-icons/md";
// import { useNavigate } from "react-router-dom";

const RequiredAsteriskIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="7" height="7" viewBox="0 0 7 7" fill="none">
    <path fill-rule="evenodd" clip-rule="evenodd" d="M3.49489 7C5.42742 7 7 5.43707 7 3.50383C7 1.57059 5.42487 0 3.49489 0C1.56492 0 0 1.57315 0 3.50383C0 5.43451 1.56236 7 3.49489 7ZM0.857768 3.35826L1.22794 2.22437C2.07039 2.52317 2.68308 2.77855 3.06601 2.99818C2.96645 2.03028 2.91284 1.37395 2.90518 1.01386H4.06929C4.05398 1.53484 3.99271 2.19373 3.88549 2.99051C4.43691 2.71215 5.06492 2.45677 5.77206 2.22437L6.13968 3.35826C5.46572 3.583 4.79942 3.72601 4.14843 3.80263C4.47775 4.0861 4.93217 4.59175 5.52188 5.31448L4.57221 5.9938C4.25821 5.57242 3.8957 5.00037 3.47702 4.28019C3.07877 5.02846 2.73414 5.60306 2.4329 5.9938L1.49088 5.31448C2.10357 4.55345 2.55033 4.04779 2.81583 3.80263C2.12655 3.67494 1.47557 3.51915 0.860321 3.35826H0.857768Z" fill="#5AFFFF"/>
  </svg>
);

const ContactForm = () => {
  const { contactUs2ContextDetails, loading, error } = useContext(ContactUs2Context);
  const { language } = useContext(LanguageContext);
  // const navigate  = useNavigate()
  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error loading data</p>;

  const contactDetailsSec3 = contactUs2ContextDetails?.contactDetails2Sec3 || [];
  const title = contactDetailsSec3[0]?.title || "";
  const fullNameTitle = contactDetailsSec3[1]?.title || "Full Name";
  const emailTitle = contactDetailsSec3[2]?.title || "Email";
  const emailPlaceholder = contactDetailsSec3[2]?.description || "adi.abed@gmail.com";
  const phoneTitle = contactDetailsSec3[3]?.title || "Phone Number";
  const phonePlaceholder = contactDetailsSec3[3]?.description || "966-354-2011";
  const jobRoleTitle = contactDetailsSec3[4]?.title || "I Would Like to Join the world of Maflam as:";
  const jobRoleCategories = contactDetailsSec3[4]?.category || [];
  const currentJobTitle = contactDetailsSec3[5]?.title || "Current Job Title";
  const experienceTitle = contactDetailsSec3[6]?.title || "Years of experience";
  const experienceCategories = contactDetailsSec3[6]?.category || [];
  const coverLetterTitle = contactDetailsSec3[7]?.title || "Cover Letter";
  const coverLetterPlaceholder = contactDetailsSec3[7]?.description || "Write...";
  const resumeTitle = contactDetailsSec3[8]?.title || "Resume";
  const portfolioTitle = contactDetailsSec3[9]?.title || "Portfolio";
  const submitButtonTitle = contactDetailsSec3[10]?.title || "Send";

  const [resume, setResume] = useState(null);
  const [portfolio, setPortfolio] = useState(null);
  const [selectedJobRole, setSelectedJobRole] = useState(null);
  const [selectedExperience, setSelectedExperience] = useState(null);
  const [formData, setFormData] = useState({
    fullNameInEng: "",
    email: "",
    phoneNo: "",
    jobTitleInEng: "",
    coverLetterInEng: "",
  });
 

  const handleFileUpload = (e, setter) => {
    setter(e.target.files[0]);
  };

  const handleDeleteFile = (setter) => {
    setter(null);
  };

  const handlePhoneInput = (e) => {
    e.target.value = e.target.value.replace(/\D/g, "");
  };

  const handleSelect = (index, setter) => {
    setter((prev) => (prev === index ? null : index));
  };

  const triggerFileUpload = (id) => {
    document.getElementById(id).click();
  };

  const handleInputChange = (e) => {
    setFormData({ ...formData, [e.target.id]: e.target.value });
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 1000, behavior: "smooth" });
  };
  const handleSubmit = async (e) => {
    e.preventDefault();

    const payload = new FormData();
    payload.append("fullNameInEng", formData.fullNameInEng);
    payload.append("email", formData.email);
    payload.append("phoneNo", formData.phoneNo);
    payload.append("maflamWorldAsInEng", jobRoleCategories[selectedJobRole]);
    payload.append("jobTitleInEng", formData.jobTitleInEng);
    payload.append("experienceInEng", experienceCategories[selectedExperience]);
    payload.append("coverLetterInEng", formData.coverLetterInEng);

    // Include files if present
    if (resume) payload.append("resume", resume);
    if (portfolio) payload.append("portfolio", portfolio);

    try {
     const res = await axios.post("https://backend.maflam.com/maflam/create-job-form", payload);
      // toast.success("Form submitted successfully!");
      toast.success(res.data.message);
      setTimeout(() => {
        scrollToTop();
      }, 2000);
    } catch (err) {
      const errorMessage = err.res?.data?.message || err.message;
      toast.error(`Error: ${errorMessage}`);
    }
  };

  const btnText = language === "en" ? "Upload file" : "تحميل الملف";

  return (
    <div className={styles.container}>
      <div className={styles.formContainer}>
        <div className={styles.formcontact}>
        <h2 className={styles.title}>{title}</h2>
        <div style={{width:'100%', overflow:'hidden', display:'flex', justifyContent:'center'}}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="963"
            height="3"
            viewBox="0 0 963 3"
            fill="none"
          >
            <path
              opacity="0.1"
              d="M1 2L962 1.00008"
              stroke="#F1F2FA"
              strokeWidth="2"
              strokeLinecap="round"
            />
          </svg>
          </div>
        <form className={styles.contactForm} onSubmit={handleSubmit}>
          <div className={styles.inputGroup}>
            <label htmlFor="fullNameInEng">
              {fullNameTitle} <span style={{position:'relative', top:'-12px'}}>< RequiredAsteriskIcon/></span>
            </label>
            <input 
              style={{backgroundColor:'rgb(26, 55, 75)'}}
              autoFocus
              type="text"
              required
              id="fullNameInEng"
              maxLength={50}
              placeholder="Full Name"
              value={formData.fullNameInEng}
              onChange={handleInputChange}
            />
          </div>

          <div className={styles.inputGroup}>
            <label htmlFor="email">
              {emailTitle} <span style={{position:'relative', top:'-12px'}}>< RequiredAsteriskIcon/></span>
            </label>
            <input 
            style={{backgroundColor:'rgb(26, 55, 75)'}}
              type="email"
              id="email"
              required
              placeholder={emailPlaceholder}
              value={formData.email}
              onChange={handleInputChange}
            />
          </div>

          <div className={styles.inputGroup}>
            <label htmlFor="phoneNo">
              {phoneTitle} <span style={{position:'relative', top:'-12px'}}>< RequiredAsteriskIcon/></span>
            </label>
            <input
            style={{backgroundColor:'rgb(26, 55, 75)'}}
              type="text"
              id="phoneNo"
              required
              maxLength={16}
              placeholder={phonePlaceholder}
              onInput={handlePhoneInput}
              value={formData.phoneNo}
              onChange={handleInputChange}
            />
          </div>

          <div className={styles.inputGroup}>
            <label>{jobRoleTitle} <span style={{position:'relative', top:'-12px'}}>< RequiredAsteriskIcon/></span></label>
            <div className={styles.radioGroup}>
              {jobRoleCategories.map((role, index) => (
                <button
                  key={index}
                  type="button"
                  required
                  className={`${styles.radioButton} ${selectedJobRole === index ? styles.selected : ""}`}
                  onClick={() => handleSelect(index, setSelectedJobRole)}
                >
                  {role}
                </button>
              ))}
            </div>
          </div>

          <div className={styles.inputGroup}>
            <label htmlFor="jobTitleInEng">
              {currentJobTitle} <span style={{position:'relative', top:'-12px'}}>< RequiredAsteriskIcon/></span>
            </label>
            <input
            style={{backgroundColor:'rgb(26, 55, 75)'}}
              type="text"
              id="jobTitleInEng"
              required
              maxLength={60}
              placeholder="Answer"
              value={formData.jobTitleInEng}
              onChange={handleInputChange}
            />
          </div>

          <div className={styles.inputGroup}>
            <label>{experienceTitle}</label>
            <div className={styles.radioGroup}>
              {experienceCategories.map((exp, index) => (
                <button
                  key={index}
                  type="button"
                  className={`${styles.radioButton} ${selectedExperience === index ? styles.selected : ""}`}
                  onClick={() => handleSelect(index, setSelectedExperience)}
                >
                  {exp}
                </button>
              ))}
            </div>
          </div>

          <div className={styles.inputGroup}>
            <label htmlFor="coverLetterInEng">
              {coverLetterTitle} <span style={{position:'relative', top:'-12px'}}>< RequiredAsteriskIcon/></span>
            </label>
            <textarea
              style={{backgroundColor:'rgb(26, 55, 75)'}}
              id="coverLetterInEng"
              required
              placeholder={coverLetterPlaceholder}
              value={formData.coverLetterInEng}
              onChange={handleInputChange}
            />
          </div>

          <div className={styles.inputGroup}>
            <label htmlFor="resumeUpload">
              {resumeTitle} 
              <span style={{position:'relative', top:'-12px'}}>< RequiredAsteriskIcon/></span>
            </label>
            <div className={styles.imgUpload}>
              {resume ? (
                <>
                  <span>{resume.name}</span> 
                  <button type="button" onClick={() => handleDeleteFile(setResume)} className={styles.deleteButtons}>
                  <i> <MdDelete /></i>
                  </button>
                </>
              ) : (
                <div className={styles.btnstyless}>
                  <button
                    type="button"
                    onClick={() => triggerFileUpload("resumeUpload")}
                    className={styles.downloadIcon}
                  >
                    <img style={{position:'relative', top:'10px'}}  src={downloadIcon} alt="Upload Resume" />
                  </button>
                  <p className="uploadFile">{btnText}</p>
                </div>
              )}
              <input
                type="file"
                id="resumeUpload"
                style={{ display: "none" }}
                onChange={(e) => handleFileUpload(e, setResume)}
              />
            </div>
          </div>

          <div className={styles.inputGroup}>
            <label htmlFor="portfolioUpload">{portfolioTitle}</label>
            <div className={styles.imgUpload}>
              {portfolio ? (
                <>
                  <span>{portfolio.name}</span>
                  <button type="button" onClick={() => handleDeleteFile(setPortfolio)} className={styles.deleteButtons}>
                  <i> <MdDelete /></i>
                  </button>
                </>
              ) : (
                <div className={styles.btnstyless}>
                  <button
                    type="button"
                    onClick={() => triggerFileUpload("portfolioUpload")}
                    className={styles.downloadIcon}
                  >
                    <img style={{position:'relative', top:'10px'}} src={downloadIcon} alt="Upload Portfolio" />
                  </button>
                  <p className="uploadFile">{btnText}</p>
                </div>
              )}
              <input
                type="file"
                id="portfolioUpload"
                style={{ display: "none" }}
                onChange={(e) => handleFileUpload(e, setPortfolio)}
              />
            </div>
          </div>

          <button type="submit" className={styles.submitButton}>
            {submitButtonTitle}
          </button>
        </form>
        </div>
      </div>
      <ToastContainer />
    </div>
  );
};

export default ContactForm;



/* ***************************
 Tarun code Added In Above   
 ************************** */




// import { useContext, useState } from "react";
// import axios from "axios";
// import { ToastContainer, toast } from 'react-toastify';
// import 'react-toastify/dist/ReactToastify.css';
// import styles from "./ContactForm.module.css";
// import { ContactUs2Context } from "../../store/ContactUs2Context";
// import downloadIcon from "../../assets/downloadIcon.png";
// import { LanguageContext } from "../LanguageContext/LanguageContext";
// import { MdDelete } from "react-icons/md";
// // import { useNavigate } from "react-router-dom";

// const ContactForm = () => {
//   const { contactUs2ContextDetails, loading, error } = useContext(ContactUs2Context);
//   const { language } = useContext(LanguageContext);
//   // const navigate  = useNavigate()
//   if (loading) return <p>Loading...</p>;
//   if (error) return <p>Error loading data</p>;

//   const contactDetailsSec3 = contactUs2ContextDetails?.contactDetails2Sec3 || [];
//   const title = contactDetailsSec3[0]?.title || "";
//   const fullNameTitle = contactDetailsSec3[1]?.title || "Full Name";
//   const emailTitle = contactDetailsSec3[2]?.title || "Email";
//   const emailPlaceholder = contactDetailsSec3[2]?.description || "adi.abed@gmail.com";
//   const phoneTitle = contactDetailsSec3[3]?.title || "Phone Number";
//   const phonePlaceholder = contactDetailsSec3[3]?.description || "966-354-2011";
//   const jobRoleTitle = contactDetailsSec3[4]?.title || "I Would Like to Join the world of Maflam as:";
//   const jobRoleCategories = contactDetailsSec3[4]?.category || [];
//   const currentJobTitle = contactDetailsSec3[5]?.title || "Current Job Title";
//   const experienceTitle = contactDetailsSec3[6]?.title || "Years of experience";
//   const experienceCategories = contactDetailsSec3[6]?.category || [];
//   const coverLetterTitle = contactDetailsSec3[7]?.title || "Cover Letter";
//   const coverLetterPlaceholder = contactDetailsSec3[7]?.description || "Write...";
//   const resumeTitle = contactDetailsSec3[8]?.title || "Resume";
//   const portfolioTitle = contactDetailsSec3[9]?.title || "Portfolio";
//   const submitButtonTitle = contactDetailsSec3[10]?.title || "Send";

//   const [resume, setResume] = useState(null);
//   const [portfolio, setPortfolio] = useState(null);
//   const [selectedJobRole, setSelectedJobRole] = useState(null);
//   const [selectedExperience, setSelectedExperience] = useState(null);
//   const [formData, setFormData] = useState({
//     fullNameInEng: "",
//     email: "",
//     phoneNo: "",
//     jobTitleInEng: "",
//     coverLetterInEng: "",
//   });
 

//   const handleFileUpload = (e, setter) => {
//     setter(e.target.files[0]);
//   };

//   const handleDeleteFile = (setter) => {
//     setter(null);
//   };

//   const handlePhoneInput = (e) => {
//     e.target.value = e.target.value.replace(/\D/g, "");
//   };

//   const handleSelect = (index, setter) => {
//     setter((prev) => (prev === index ? null : index));
//   };

//   const triggerFileUpload = (id) => {
//     document.getElementById(id).click();
//   };

//   const handleInputChange = (e) => {
//     setFormData({ ...formData, [e.target.id]: e.target.value });
//   };

//   const scrollToTop = () => {
//     window.scrollTo({ top: 1000, behavior: "smooth" });
//   };
//   const handleSubmit = async (e) => {
//     e.preventDefault();

//     const payload = new FormData();
//     payload.append("fullNameInEng", formData.fullNameInEng);
//     payload.append("email", formData.email);
//     payload.append("phoneNo", formData.phoneNo);
//     payload.append("maflamWorldAsInEng", jobRoleCategories[selectedJobRole]);
//     payload.append("jobTitleInEng", formData.jobTitleInEng);
//     payload.append("experienceInEng", experienceCategories[selectedExperience]);
//     payload.append("coverLetterInEng", formData.coverLetterInEng);

//     // Include files if present
//     if (resume) payload.append("resume", resume);
//     if (portfolio) payload.append("portfolio", portfolio);

//     try {
//      const res = await axios.post("https://backend.maflam.com/maflam/create-job-form", payload);
//       // toast.success("Form submitted successfully!");
//       toast.success(res.data.message);
//       setTimeout(() => {
//         scrollToTop();
//       }, 2000);
//     } catch (err) {
//       const errorMessage = err.res?.data?.message || err.message;
//       toast.error(`Error: ${errorMessage}`);
//     }
//   };

//   const btnText = language === "en" ? "Upload file" : "تحميل الملف";

//   return (
//     <div className={styles.container}>
//       <div className={styles.formContainer}>
//         <h2 className={styles.title}>{title}</h2>
//         <form className={styles.contactForm} onSubmit={handleSubmit}>
//           <div className={styles.inputGroup}>
//             <label htmlFor="fullNameInEng">
//               {fullNameTitle} <span>*</span>
//             </label>
//             <input autoFocus
//               type="text"
//               required
//               id="fullNameInEng"
//               maxLength={50}
//               placeholder="Full Name"
//               value={formData.fullNameInEng}
//               onChange={handleInputChange}
//             />
//           </div>

//           <div className={styles.inputGroup}>
//             <label htmlFor="email">
//               {emailTitle} <span>*</span>
//             </label>
//             <input 
//               type="email"
//               id="email"
//               required
//               placeholder={emailPlaceholder}
//               value={formData.email}
//               onChange={handleInputChange}
//             />
//           </div>

//           <div className={styles.inputGroup}>
//             <label htmlFor="phoneNo">
//               {phoneTitle} <span>*</span>
//             </label>
//             <input
//               type="text"
//               id="phoneNo"
//               required
//               maxLength={16}
//               placeholder={phonePlaceholder}
//               onInput={handlePhoneInput}
//               value={formData.phoneNo}
//               onChange={handleInputChange}
//             />
//           </div>

//           <div className={styles.inputGroup}>
//             <label>{jobRoleTitle} <span>*</span></label>
//             <div className={styles.radioGroup}>
//               {jobRoleCategories.map((role, index) => (
//                 <button
//                   key={index}
//                   type="button"
//                   required
//                   className={`${styles.radioButton} ${selectedJobRole === index ? styles.selected : ""}`}
//                   onClick={() => handleSelect(index, setSelectedJobRole)}
//                 >
//                   {role}
//                 </button>
//               ))}
//             </div>
//           </div>

//           <div className={styles.inputGroup}>
//             <label htmlFor="jobTitleInEng">
//               {currentJobTitle} <span>*</span>
//             </label>
//             <input
//               type="text"
//               id="jobTitleInEng"
//               required
//               maxLength={60}
//               placeholder="Answer"
//               value={formData.jobTitleInEng}
//               onChange={handleInputChange}
//             />
//           </div>

//           <div className={styles.inputGroup}>
//             <label>{experienceTitle}</label>
//             <div className={styles.radioGroup}>
//               {experienceCategories.map((exp, index) => (
//                 <button
//                   key={index}
//                   type="button"
//                   className={`${styles.radioButton} ${selectedExperience === index ? styles.selected : ""}`}
//                   onClick={() => handleSelect(index, setSelectedExperience)}
//                 >
//                   {exp}
//                 </button>
//               ))}
//             </div>
//           </div>

//           <div className={styles.inputGroup}>
//             <label htmlFor="coverLetterInEng">
//               {coverLetterTitle} <span>*</span>
//             </label>
//             <textarea
//               id="coverLetterInEng"
//               required
//               placeholder={coverLetterPlaceholder}
//               value={formData.coverLetterInEng}
//               onChange={handleInputChange}
//             />
//           </div>

//           <div className={styles.inputGroup}>
//             <label htmlFor="resumeUpload">
//               {resumeTitle} <span>*</span>
//             </label>
//             <div className={styles.imgUpload}>
//               {resume ? (
//                 <>
//                   <span>{resume.name}</span>
//                   <button type="button" onClick={() => handleDeleteFile(setResume)} className={styles.deleteButtons}>
//                   <i> <MdDelete /></i>
//                   </button>
//                 </>
//               ) : (
//                 <div className={styles.btnstyless}>
//                   <button
//                     type="button"
//                     onClick={() => triggerFileUpload("resumeUpload")}
//                     className={styles.downloadIcon}
//                   >
//                     <img src={downloadIcon} alt="Upload Resume" />
//                   </button>
//                   <p className="uploadFile">{btnText}</p>
//                 </div>
//               )}
//               <input
//                 type="file"
//                 id="resumeUpload"
//                 style={{ display: "none" }}
//                 onChange={(e) => handleFileUpload(e, setResume)}
//               />
//             </div>
//           </div>

//           <div className={styles.inputGroup}>
//             <label htmlFor="portfolioUpload">{portfolioTitle}</label>
//             <div className={styles.imgUpload}>
//               {portfolio ? (
//                 <>
//                   <span>{portfolio.name}</span>
//                   <button type="button" onClick={() => handleDeleteFile(setPortfolio)} className={styles.deleteButtons}>
//                   <i> <MdDelete /></i>
//                   </button>
//                 </>
//               ) : (
//                 <div className={styles.btnstyless}>
//                   <button
//                     type="button"
//                     onClick={() => triggerFileUpload("portfolioUpload")}
//                     className={styles.downloadIcon}
//                   >
//                     <img src={downloadIcon} alt="Upload Portfolio" />
//                   </button>
//                   <p className="uploadFile">{btnText}</p>
//                 </div>
//               )}
//               <input
//                 type="file"
//                 id="portfolioUpload"
//                 style={{ display: "none" }}
//                 onChange={(e) => handleFileUpload(e, setPortfolio)}
//               />
//             </div>
//           </div>

//           <button type="submit" className={styles.submitButton}>
//             {submitButtonTitle}
//           </button>
//         </form>
//       </div>
//       <ToastContainer />
//     </div>
//   );
// };

// export default ContactForm;


// // import { useContext, useState } from "react";
// // import axios from "axios";
// // // import { toast } from "react-toastify";
// // // import "react-toastify/dist/ReactToastify.css";
// // import styles from "./ContactForm.module.css";
// // import { ContactUs2Context } from "../../store/ContactUs2Context";
// // import downloadIcon from "../../assets/downloadIcon.png";
// // import { LanguageContext } from "../LanguageContext/LanguageContext";
// // import { MdDelete } from "react-icons/md";
// // import { ToastContainer, toast } from 'react-toastify';
// // import 'react-toastify/dist/ReactToastify.css';



// // const ContactForm = () => {
// //   const { contactUs2ContextDetails, loading, error } = useContext(ContactUs2Context);
// //   const { language } = useContext(LanguageContext);

// //   if (loading) return <p>Loading...</p>;
// //   if (error) return <p>Error loading data</p>;

// //   const contactDetailsSec3 = contactUs2ContextDetails?.contactDetails2Sec3 || [];
// //   const title = contactDetailsSec3[0]?.title || "";
// //   const fullNameTitle = contactDetailsSec3[1]?.title || "Full Name";
// //   const emailTitle = contactDetailsSec3[2]?.title || "Email";
// //   const emailPlaceholder = contactDetailsSec3[2]?.description || "adi.abed@gmail.com";
// //   const phoneTitle = contactDetailsSec3[3]?.title || "Phone Number";
// //   const phonePlaceholder = contactDetailsSec3[3]?.description || "966-354-2011";
// //   const jobRoleTitle = contactDetailsSec3[4]?.title || "I Would Like to Join the world of Maflam as:";
// //   const jobRoleCategories = contactDetailsSec3[4]?.category || [];
// //   const currentJobTitle = contactDetailsSec3[5]?.title || "Current Job Title";
// //   const experienceTitle = contactDetailsSec3[6]?.title || "Years of experience";
// //   const experienceCategories = contactDetailsSec3[6]?.category || [];
// //   const coverLetterTitle = contactDetailsSec3[7]?.title || "Cover Letter";
// //   const coverLetterPlaceholder = contactDetailsSec3[7]?.description || "Write...";
// //   const resumeTitle = contactDetailsSec3[8]?.title || "Resume";
// //   const portfolioTitle = contactDetailsSec3[9]?.title || "Portfolio";
// //   const submitButtonTitle = contactDetailsSec3[10]?.title || "Send";

// //   const [resume, setResume] = useState(null);
// //   const [portfolio, setPortfolio] = useState(null);
// //   const [selectedJobRole, setSelectedJobRole] = useState(null);
// //   const [selectedExperience, setSelectedExperience] = useState(null);
// //   const [formData, setFormData] = useState({
// //     name: "",
// //     email: "",
// //     phone: "",
// //     jobTitle: "",
// //     coverLetter: "",
// //   });

// //   const handleFileUpload = (e, setter) => {
// //     setter(e.target.files[0]);
// //   };

// //   const handleDeleteFile = (setter) => {
// //     setter(null);
// //   };

// //   const handlePhoneInput = (e) => {
// //     e.target.value = e.target.value.replace(/\D/g, "");
// //   };

// //   const handleSelect = (index, setter) => {
// //     setter((prev) => (prev === index ? null : index));
// //   };

// //   const triggerFileUpload = (id) => {
// //     document.getElementById(id).click();
// //   };

// //   const handleInputChange = (e) => {
// //     setFormData({ ...formData, [e.target.id]: e.target.value });
// //   };

// //   const handleSubmit = async (e) => {
// //     e.preventDefault();

// //     const payload = new FormData();
// //     payload.append("name", formData.name);
// //     payload.append("email", formData.email);
// //     payload.append("phone", formData.phone);
// //     payload.append("jobTitle", formData.jobTitle);
// //     payload.append("coverLetter", formData.coverLetter);
// //     payload.append("jobRole", jobRoleCategories[selectedJobRole]);
// //     payload.append("experience", experienceCategories[selectedExperience]);
// //     // if (resume) payload.append("resume", resume);
// //     // if (portfolio) payload.append("portfolio", portfolio);

// //     try {
// //       await axios.post("https://backend.maflam.com/maflam/create-job-form", payload);
// //       toast.success("Form submitted successfully!");
// //     } catch (err) {
// //       // toast.error("Failed to submit form. Please try again.");
// //       const errorMessage = err.response?.data?.message || err.message;
// //       toast.err(`Error: ${errorMessage}`);
// //     }
// //   };

// //   const btnText = language === "en" ? "Upload file" : "تحميل الملف";

// //   return (
// //     <div className={styles.container}>
// //       <div className={styles.formContainer}>
// //         <h2 className={styles.title}>{title}</h2>
// //         <form className={styles.contactForm} onSubmit={handleSubmit}>
// //           <div className={styles.inputGroup}>
// //             <label htmlFor="name">
// //               {fullNameTitle} <span>*</span>
// //             </label>
// //             <input
// //               type="text"
// //               id="name"
// //               maxLength={50}
// //               placeholder="Full Name"
// //               value={formData.name}
// //               onChange={handleInputChange}
// //             />
// //           </div>

// //           <div className={styles.inputGroup}>
// //             <label htmlFor="email">
// //               {emailTitle} <span>*</span>
// //             </label>
// //             <input
// //               type="email"
// //               id="email"
// //               placeholder={emailPlaceholder}
// //               value={formData.email}
// //               onChange={handleInputChange}
// //             />
// //           </div>

// //           <div className={styles.inputGroup}>
// //             <label htmlFor="phone">
// //               {phoneTitle} <span>*</span>
// //             </label>
// //             <input
// //               type="text"
// //               id="phone"
// //               maxLength={16}
// //               placeholder={phonePlaceholder}
// //               onInput={handlePhoneInput}
// //               value={formData.phone}
// //               onChange={handleInputChange}
// //             />
// //           </div>

// //           <div className={styles.inputGroup}>
// //             <label>{jobRoleTitle} <span>*</span></label>
// //             <div className={styles.radioGroup}>
// //               {jobRoleCategories.map((role, index) => (
// //                 <button
// //                   key={index}
// //                   type="button"
// //                   className={`${styles.radioButton} ${selectedJobRole === index ? styles.selected : ""}`}
// //                   onClick={() => handleSelect(index, setSelectedJobRole)}
// //                 >
// //                   {role}
// //                 </button>
// //               ))}
// //             </div>
// //           </div>

// //           <div className={styles.inputGroup}>
// //             <label htmlFor="jobTitle">
// //               {currentJobTitle} <span>*</span>
// //             </label>
// //             <input
// //               type="text"
// //               id="jobTitle"
// //               maxLength={60}
// //               placeholder="Answer"
// //               value={formData.jobTitle}
// //               onChange={handleInputChange}
// //             />
// //           </div>

// //           <div className={styles.inputGroup}>
// //             <label>{experienceTitle}</label>
// //             <div className={styles.radioGroup}>
// //               {experienceCategories.map((exp, index) => (
// //                 <button
// //                   key={index}
// //                   type="button"
// //                   className={`${styles.radioButton} ${selectedExperience === index ? styles.selected : ""}`}
// //                   onClick={() => handleSelect(index, setSelectedExperience)}
// //                 >
// //                   {exp}
// //                 </button>
// //               ))}
// //             </div>
// //           </div>

// //           <div className={styles.inputGroup}>
// //             <label htmlFor="coverLetter">
// //               {coverLetterTitle} <span>*</span>
// //             </label>
// //             <textarea
// //               id="coverLetter"
// //               placeholder={coverLetterPlaceholder}
// //               value={formData.coverLetter}
// //               onChange={handleInputChange}
// //             />
// //           </div>

// //           <div className={styles.inputGroup}>
// //             <label htmlFor="resumeUpload">
// //               {resumeTitle} <span>*</span>
// //             </label>
// //             <div className={styles.imgUpload}>
// //               {resume ? (
// //                 <>
// //                   <span>{resume.name}</span>
// //                   <button type="button" onClick={() => handleDeleteFile(setResume)} className={styles.deleteButton}>
// //                     <MdDelete />
// //                   </button>
// //                 </>
// //               ) : (
// //                 <div className={styles.btnstyles}>
// //                   <button
// //                     type="button"
// //                     onClick={() => triggerFileUpload("resumeUpload")}
// //                     className={styles.downloadIcon}
// //                   >
// //                     <img src={downloadIcon} alt="Upload Resume" />
// //                   </button>
// //                   <p className="uploadFile">{btnText}</p>
// //                 </div>
// //               )}
// //               <input
// //                 type="file"
// //                 id="resumeUpload"
// //                 style={{ display: "none" }}
// //                 onChange={(e) => handleFileUpload(e, setResume)}
// //               />
// //             </div>
// //           </div>

// //           <div className={styles.inputGroup}>
// //             <label htmlFor="portfolioUpload">{portfolioTitle}</label>
// //             <div className={styles.imgUpload}>
// //               {portfolio ? (
// //                 <>
// //                   <span>{portfolio.name}</span>
// //                   <button type="button" onClick={() => handleDeleteFile(setPortfolio)} className={styles.deleteButton}>
// //                     <MdDelete />
// //                   </button>
// //                 </>
// //               ) : (
// //                 <div className={styles.btnstyles}>
// //                   <button
// //                     type="button"
// //                     onClick={() => triggerFileUpload("portfolioUpload")}
// //                     className={styles.downloadIcon}
// //                   >
// //                     <img src={downloadIcon} alt="Upload Portfolio" />
// //                   </button>
// //                   <p className="uploadFile">{btnText}</p>
// //                 </div>
// //               )}
// //               <input
// //                 type="file"
// //                 id="portfolioUpload"
// //                 style={{ display: "none" }}
// //                 onChange={(e) => handleFileUpload(e, setPortfolio)}
// //               />
// //             </div>
// //           </div>

// //           <button type="submit" className={styles.submitButton}>{submitButtonTitle}</button>
// //         </form>
// //       </div>
// //       <ToastContainer />
// //     </div>
// //   );
// // };

// // export default ContactForm;
