

import { useState } from "react";
import { useContext } from "react";
import styles from "./ContactForm2.module.css";
import downloadIcon from "../../assets/downloadIcon.png";
import axios from "axios";
import { toast } from "react-toastify";
import { MdDelete } from "react-icons/md";
import { ContactUs3Context } from "../../store/ContactUs3Context";
import { LanguageContext } from "../LanguageContext/LanguageContext";

const RequiredAsteriskIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="7" height="7" viewBox="0 0 7 7" fill="none">
    <path fill-rule="evenodd" clip-rule="evenodd" d="M3.49489 7C5.42742 7 7 5.43707 7 3.50383C7 1.57059 5.42487 0 3.49489 0C1.56492 0 0 1.57315 0 3.50383C0 5.43451 1.56236 7 3.49489 7ZM0.857768 3.35826L1.22794 2.22437C2.07039 2.52317 2.68308 2.77855 3.06601 2.99818C2.96645 2.03028 2.91284 1.37395 2.90518 1.01386H4.06929C4.05398 1.53484 3.99271 2.19373 3.88549 2.99051C4.43691 2.71215 5.06492 2.45677 5.77206 2.22437L6.13968 3.35826C5.46572 3.583 4.79942 3.72601 4.14843 3.80263C4.47775 4.0861 4.93217 4.59175 5.52188 5.31448L4.57221 5.9938C4.25821 5.57242 3.8957 5.00037 3.47702 4.28019C3.07877 5.02846 2.73414 5.60306 2.4329 5.9938L1.49088 5.31448C2.10357 4.55345 2.55033 4.04779 2.81583 3.80263C2.12655 3.67494 1.47557 3.51915 0.860321 3.35826H0.857768Z" fill="#5AFFFF"/>
  </svg>
);


const ContactForm2 = () => {
  const { ContactUs3ContextDetails, loading, error } =
    useContext(ContactUs3Context);
  const { language, direction } = useContext(LanguageContext);
  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error loading data</p>;

  const contactDetailsSec3 =
    ContactUs3ContextDetails?.contactDetails3Sec3 || [];
  const title =
    contactDetailsSec3[0]?.title || "Apply for Maflam Training Program";
  const fullNameDescription = contactDetailsSec3[1]?.description || "Full Name";
  const fullNameTitle = contactDetailsSec3[1]?.title || "Full Name";

  const maletitle = contactDetailsSec3[2]?.title || "Gender";
  const categoryMale = contactDetailsSec3[2]?.category[0] || "Male";
  const categoryFemale = contactDetailsSec3[2]?.category[1] || "Female";
  const age = contactDetailsSec3[3]?.title || "Age";
  const categoryage = contactDetailsSec3[3]?.category[0] || "Under 18";
  const categoryage1 = contactDetailsSec3[3]?.category[1] || "From 18 to 20";

  const categoryage2 = contactDetailsSec3[3]?.category[2] || "From 20 to 30";
  const categoryage3 = contactDetailsSec3[3]?.category[3] || "other";

  const Natinality = contactDetailsSec3[4]?.title || "";
  const categoryNatinality = contactDetailsSec3[4]?.category[0] || "";
  const categoryNatinality1 = contactDetailsSec3[4]?.category[1] || "";
  const categoryNatinality2 = contactDetailsSec3[4]?.category[2] || "";

  const city = contactDetailsSec3[5]?.title || "";
  const categorycity = contactDetailsSec3[5]?.category[0] || "";
  const categorycity1 = contactDetailsSec3[5]?.category[1] || "";
  const categorycity2 = contactDetailsSec3[5]?.category[2] || "";

  const Degree = contactDetailsSec3[6]?.title || "";
  const categoryDegree1 = contactDetailsSec3[6]?.category[0] || "";
  const categoryDegree2 = contactDetailsSec3[6]?.category[1] || "";
  const categoryDegree3 = contactDetailsSec3[6]?.category[2] || "";
  const categoryDegree4 = contactDetailsSec3[6]?.category[3] || "";
  const categoryDegree5 = contactDetailsSec3[6]?.category[4] || "";

  const emailTitle = contactDetailsSec3[7]?.title || "";
  const emailPlaceholder = contactDetailsSec3[7]?.description || "";
  const phoneTitle = contactDetailsSec3[8]?.title || "";
  const phonePlaceholder = contactDetailsSec3[8]?.description || "";
  const experianceTitle = contactDetailsSec3[9]?.title || "";
  const experiancePlaceholder = contactDetailsSec3[9]?.description || "";

  const Traning = contactDetailsSec3[10]?.title || "";
  const categoryTraning = contactDetailsSec3[10]?.category || "";

  const workingHoursTitle =
    contactDetailsSec3[11]?.title || "Current Working Hours";
  const workingHoursOptions = contactDetailsSec3[11]?.category || [
    "Employed",
    "I am Not Currently Working",
    "About to Graduate (Training University)",
    "Student",
  ];

  const internship = contactDetailsSec3[12]?.title || "";
  const internshipPlaceholder = contactDetailsSec3[12]?.description || "";

  const university = contactDetailsSec3[13]?.title || "";
  const univercityPlaceholder = contactDetailsSec3[13]?.description || "";

  const TrainingHoursTitle = contactDetailsSec3[14]?.title || "";
  const TrainingHoursPlaceholder = contactDetailsSec3[14]?.description || "";

  const TrainingTitleDate = contactDetailsSec3[15]?.title || "";
  const TrainingDatePlaceholder = contactDetailsSec3[15]?.description || "";

  const TrainingWeekDate = contactDetailsSec3[16]?.title || "";
  const TrainingWeekPlaceholder = contactDetailsSec3[16]?.description || "";

  const TrainingDate = contactDetailsSec3[17]?.title || "";
  const TrainingPlaceholder = contactDetailsSec3[17]?.category[0] || "";
  const TrainingPlaceholder1 = contactDetailsSec3[17]?.category[0] || "";
  const TrainingPlaceholder2 = contactDetailsSec3[17]?.category[0] || "";
  // const TrainingPlaceholder = contactDetailsSec3[17]?.description || "";

  const About = contactDetailsSec3[18]?.title || "";
  const AboutPlaceholder = contactDetailsSec3[18]?.description || "";
  const resumetitle = contactDetailsSec3[19]?.title || "";
  const resumePlaceholder = contactDetailsSec3[19]?.description || "";
  const portfoliyo = contactDetailsSec3[20]?.title || "";
  const portfoliyoPlaceholder = contactDetailsSec3[20]?.description || "";
  const sendbtn1 = contactDetailsSec3[21]?.title || "";

  const [formData, setFormData] = useState({
    fullNameInEng: "",
    genderInEng: "",
    age: "",
    nationalityInEng: "",
    cityInEng: "",
    degreeInEng: "",
    email: "",
    phoneNo: "",
    hasPreviousExperienceInEng: "",
    trainingFieldsInEng: [],
    currentWorkingHoursInEng: "",
    reasonForMaflamInEng: "",
    universityInEng: "",
    requiredTrainingHours: "",
    dateForTraining: "",
    weeksForTraining: "",
    startDate: { day: "", month: "", year: "" },
    howDidYouKnowMaflamInEng: "",
    // resumeFile: null,
    // portfolioFile: null,
  });
  const [resume, setResume] = useState(null);
  const [portfolio, setPortfolio] = useState(null);

  const handleDeleteFile = (setter) => {
    setter(null);
  };

  const handlePhoneInput = (e) => {
    e.target.value = e.target.value.replace(/\D/g, "");
  };
  const triggerFileUpload = (inputId) => {
    document.getElementById(inputId).click();
  };

  const handleFileUpload = (e, setFileField) => {
    const file = e.target.files[0];
    if (file) {
      setFileField(file); // Update resume or portfolio state
      setFormData((prevData) => ({
        ...prevData,
        [setFileField === setResume ? "resume" : "portfolio"]: file,
      }));
    }
  };

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  // Trigger file input by button click
  // const triggerFileUpload = (inputId) => {
  //   document.getElementById(inputId).click();
  // };

  // // Handle file upload and set file in form data
  // const handleFileUpload = (e, setFileField) => {
  //   setFormData((prevData) => ({
  //     ...prevData,
  //     [setFileField]: e.target.files[0],
  //   }));
  // };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const payload = new FormData();
    payload.append("fullNameInEng", formData.fullNameInEng);
    payload.append("email", formData.email);
    payload.append("phoneNo", formData.phoneNo);
    payload.append("genderInEng", formData.genderInEng);
    payload.append("ageInEng", formData.ageInEng);
    payload.append("nationalityInEng", formData.nationalityInEng);
    payload.append("cityInEng", formData.cityInEng);
    payload.append("degreeInEng", formData.degreeInEng);
    payload.append("email", formData.email);
    payload.append(
      "hasPreviousExperienceInEng",
      formData.hasPreviousExperienceInEng
    );
    payload.append("trainingFieldsInEng", formData.trainingFieldsInEng);
    payload.append(
      "currentWorkingHoursInEng",
      formData.currentWorkingHoursInEng
    );
    payload.append("reasonForMaflamInEng", formData.reasonForMaflamInEng);
    payload.append("universityInEng", formData.universityInEng);
    payload.append("requiredTrainingHours", formData.requiredTrainingHours);
    payload.append("dateForTraining", formData.dateForTraining);
    payload.append("weeksForTraining", formData.weeksForTraining);
    payload.append("startDate", formData.startDate);
    payload.append(
      "howDidYouKnowMaflamInEng",
      formData.howDidYouKnowMaflamInEng
    );

    // // Include files if present
    // if (resume) payload.append("resume", resume);
    // if (portfolio) payload.append("portfolio", portfolio);

    try {
      const res = await axios.post(
        "https://backend.maflam.com/maflam/create-internship-form",
        payload
      );
      // toast.success("Form submitted successfully!");
      toast.success(res.data.message);
      setTimeout(() => {
        window.location.reload();
      }, 2000);
    } catch (err) {
      const errorMessage = err.res?.data?.message || err.message;
      toast.error(`Error: ${errorMessage}`);
    }
  };

  // const { language, direction, toggleLanguage } = useContext(LanguageContext);
  // const btnText = language === "en" ? "Upload file" : "تحميل الملف";
  return (
    <div className={styles.container}>
      {/* <h2 className={styles.title}>Apply for Maflam Training Program</h2> */}
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
      <form onSubmit={handleSubmit}>
        <div className={styles.inputGroup}>
          <label htmlFor="fullNameInEng">
            {fullNameTitle}
            <span style={{position:'relative', top:'-12px'}}>< RequiredAsteriskIcon/></span>
          </label>
          <input style={{border:'none'}}
            autoFocus
            type="text"
            id="fullNameInEng"
            required
            maxLength={50}
            name="fullNameInEng"
            value={formData.fullNameInEng}
            onChange={handleInputChange}
            className={styles.input}
            placeholder={fullNameDescription}
          />
        </div>

        {/*  genderInEng */}
        <div className={styles.inputGroup}>
          <label>
            {maletitle}
            <span style={{position:'relative', top:'-12px'}}>< RequiredAsteriskIcon/></span>
          </label>
          <div className={styles.options}>
            <button
              type="button"
              required
              className={`${styles.optionButton} ${
                formData.genderInEng === "Male" ? styles.active : ""
              }`}
              onClick={() => setFormData({ ...formData, genderInEng: "Male" })}
            >
              {categoryMale}
            </button>
            <button
              type="button"
              className={`${styles.optionButton} ${
                formData.genderInEng === "Female" ? styles.active : ""
              }`}
              onClick={() =>
                setFormData({ ...formData, genderInEng: "Female" })
              }
            >
              {categoryFemale}
            </button>
          </div>
        </div>

        {/* Age */}
        <div className={styles.inputGroup}>
          <label>
            {age}
            <span style={{position:'relative', top:'-12px'}}>< RequiredAsteriskIcon/></span>
          </label>
          <div className={styles.options}>
            <button
              type="button"
              required
              className={`${styles.optionButton} ${
                formData.age === "Under 18" ? styles.active : ""
              }`}
              onClick={() => setFormData({ ...formData, age: "Under 18" })}
            >
              {categoryage}
            </button>
            <button
              type="button"
              className={`${styles.optionButton} ${
                formData.age === "18 to 20" ? styles.active : ""
              }`}
              onClick={() => setFormData({ ...formData, age: "18 to 20" })}
            >
              {categoryage1}
            </button>
            <button
              type="button"
              className={`${styles.optionButton} ${
                formData.age === "20 to 30" ? styles.active : ""
              }`}
              onClick={() => setFormData({ ...formData, age: "20 to 30" })}
            >
              {categoryage2}
            </button>
            <button
              type="button"
              className={`${styles.optionButton} ${
                formData.age === "Over 30" ? styles.active : ""
              }`}
              onClick={() => setFormData({ ...formData, age: "Over 30" })}
            >
              {categoryage3}
            </button>
          </div>
        </div>

        {/* nationalityInEng */}
        <div className={styles.inputGroup}>
          <label>
            {Natinality}
            <span style={{position:'relative', top:'-12px'}}>< RequiredAsteriskIcon/></span>
          </label>
          <div className={styles.options}>
            <button
              type="button"
              required
              className={`${styles.optionButton2} ${
                formData.nationalityInEng === "Saudi" ? styles.active : ""
              }`}
              onClick={() =>
                setFormData({ ...formData, nationalityInEng: "Saudi" })
              }
            >
              {categoryNatinality}
            </button>
            <button
              type="button"
              className={`${styles.optionButton2} ${
                formData.nationalityInEng === "Non-Saudi" ? styles.active : ""
              }`}
              onClick={() =>
                setFormData({ ...formData, nationalityInEng: "Non-Saudi" })
              }
            >
              {/* Non-Saudi resident in Saudi Arabia */}
              {categoryNatinality1}
            </button>
            <input style={{border:'none'}}
              type="text"
              name="nationalityInEng"
              placeholder={categoryNatinality2}
              className={styles.input2}
              onChange={handleInputChange}
            />
          </div>
        </div>

        {/* cityInEng */}
        <div className={styles.inputGroup}>
          <label>
            {city}
            <span style={{position:'relative', top:'-12px'}}>< RequiredAsteriskIcon/></span>
          </label>
          <div className={styles.options}>
            <button
              type="button"
              required
              className={`${styles.optionButton2} ${
                formData.cityInEng === "Jeddah" ? styles.active : ""
              }`}
              onClick={() => setFormData({ ...formData, cityInEng: "Jeddah" })}
            >
              {categorycity1}
            </button>
            <button
              type="button"
              className={`${styles.optionButton2} ${
                formData.cityInEng === "Riyadh" ? styles.active : ""
              }`}
              onClick={() => setFormData({ ...formData, cityInEng: "Riyadh" })}
            >
              {categorycity}
            </button>
            <input style={{border:'none'}}
              type="text"
              name="cityInEng"
              placeholder={categorycity2}
              className={styles.input2}
              onChange={handleInputChange}
            />
          </div>
        </div>

        {/* Your degreeInEng */}
        <div className={styles.inputGroup}>
          <label>
            {Degree}
            <span style={{position:'relative', top:'-12px'}}>< RequiredAsteriskIcon/></span>
          </label>
          <div className={styles.options}>
            <button
              type="button"
              required
              className={`${styles.optionButton} ${
                formData.degreeInEng === "Secondary" ? styles.active : ""
              }`}
              onClick={() =>
                setFormData({ ...formData, degreeInEng: "Secondary" })
              }
            >
              {categoryDegree1}
            </button>
            <button
              type="button"
              required
              className={`${styles.optionButton} ${
                formData.degreeInEng === "Diploma" ? styles.active : ""
              }`}
              onClick={() =>
                setFormData({ ...formData, degreeInEng: "Diploma" })
              }
            >
              {categoryDegree2}
            </button>
            <button
              type="button"
              className={`${styles.optionButton} ${
                formData.degreeInEng === "Bachelor's" ? styles.active : ""
              }`}
              onClick={() =>
                setFormData({ ...formData, degreeInEng: "Bachelor's" })
              }
            >
              {categoryDegree3}
            </button>
            <button
              type="button"
              className={`${styles.optionButton} ${
                formData.degreeInEng === "Masters" ? styles.active : ""
              }`}
              onClick={() =>
                setFormData({ ...formData, degreeInEng: "Masters" })
              }
            >
              {categoryDegree4}
            </button>
            <button
              type="button"
              className={`${styles.optionButton} ${
                formData.degreeInEng === "PhD" ? styles.active : ""
              }`}
              onClick={() => setFormData({ ...formData, degreeInEng: "PhD" })}
            >
              {categoryDegree5}
            </button>
          </div>
        </div>

        {/* email */}
        <div className={styles.inputGroup}>
          <label htmlFor="email">
            {emailTitle}
            <span style={{position:'relative', top:'-12px'}}>< RequiredAsteriskIcon/></span>
          </label>
          <input style={{border:'none'}}
            type="email"
            id="email"
            required
            name="email"
            value={formData.email}
            onChange={handleInputChange}
            className={styles.input}
            placeholder={emailPlaceholder}
          />
        </div>

        {/* Phone Number */}
        {/* <div className={styles.inputGroup}>
          <label htmlFor="phoneNo">
            Phone Number<span style={{position:'relative', top:'-12px'}}>< RequiredAsteriskIcon/></span>
          </label>
          <input style={{border:'none'}}
           type="number"
           id="phoneNo"
           maxLength={16}
        required
            name="phoneNo"
            value={formData.phoneNo}
            onChange={handleInputChange}
            className={styles.input}
            placeholder="Phone Number"
          />
        </div> */}
        <div className={styles.inputGroup}>
          <label htmlFor="phoneNo">
            {phoneTitle}
            <span style={{position:'relative', top:'-12px'}}>< RequiredAsteriskIcon/></span>
          </label>
          <input style={{border:'none'}}
            type="number"
            id="phoneNo"
            required
            name="phoneNo"
            value={formData.phoneNo}
            onChange={(e) => {
              const value = e.target.value.replace(/\D/g, ""); // Remove any non-numeric characters
              if (value.length <= 16) {
                setFormData({ ...formData, phoneNo: value });
              }
            }}
            onInput={(e) => {
              if (e.target.value.length > 10)
                e.target.value = e.target.value.slice(0, 16);
            }}
            className={styles.input}
            placeholder={phonePlaceholder}
            maxLength={16}
            pattern="\d{10}"
            title="Phone number should be 10 digits"
          />
        </div>
        <div className={styles.inputGroup}>
          <label htmlFor="hasPreviousExperienceInEng">
            {experianceTitle}
            <span style={{position:'relative', top:'-12px'}}>< RequiredAsteriskIcon/></span>
          </label>
          <input style={{border:'none'}}
            type="text"
            id="hasPreviousExperienceInEng"
            name="hasPreviousExperienceInEng"
            value={formData.hasPreviousExperienceInEng}
            onChange={handleInputChange}
            className={styles.input}
            placeholder={experiancePlaceholder}
          />
        </div>

        <div className={styles.inputGroup}>
  <label>
    {Traning}
    <span style={{ position: "relative", top: "-12px" }}>
      <RequiredAsteriskIcon />
    </span>
  </label>
  <div className={styles.options2}>
    {categoryTraning.map((field, index) =>
      index === categoryTraning.length - 1 ? ( // Check if it's the last item
        formData.trainingFieldsInEng === field ? (
          <input
            type="text"
            key={field}
            className={styles.inputField} // Add appropriate styling for input
            value={formData.trainingFieldsInEng}
            onChange={(e) =>
              setFormData({ ...formData, trainingFieldsInEng: e.target.value })
            }
            onBlur={() =>
              setFormData({ ...formData, trainingFieldsInEng: "" }) // Reset field after editing
            }
          />
        ) : (
          <button
            type="button"
            key={field}
            className={`${styles.optionButton2} ${
              formData.trainingFieldsInEng === field ? styles.active : ""
            }`}
            onClick={() =>
              setFormData({ ...formData, trainingFieldsInEng: field })
            }
          >
            {field}
          </button>
        )
      ) : (
        <button
          type="button"
          key={field}
          className={`${styles.optionButton2} ${
            formData.trainingFieldsInEng === field ? styles.active : ""
          }`}
          onClick={() =>
            setFormData({ ...formData, trainingFieldsInEng: field })
          }
        >
          {field}
        </button>
      )
    )}
  </div>
</div>


        {/* <div className={styles.inputGroup}>
          <label>
            {Traning}
            <span style={{position:'relative', top:'-12px'}}>< RequiredAsteriskIcon/></span>
          </label>
          <div className={styles.options2}>
            {
              // [
              //   "Camera Department",
              //   "Editing Department",
              //   "Production Department",
              //   "Content Writing Department",
              //   "Sound Department",
              //   "Directing Department",
              //   "Acting Department",
              //   "Voiceover Department",
              //   "Research Department",
              //   "Marketing Department",
              //   "Design/Graphics Department",

              // ]
              categoryTraning.map((field) => (
                <button
                  type="button"
                  key={field}
                  required
                  className={`${styles.optionButton2} ${
                    formData.trainingFieldsInEng.includes(field)
                      ? styles.active
                      : ""
                  }`}
                  // onClick={() =>

                  //   //  handletrainingFieldsInEngChange(field)
                  //   }
                  onClick={() =>
                    setFormData({ ...formData, trainingFieldsInEng: field })
                  }
                >
                  {field}
                  
                </button>
                
              ))
            }
            
          </div>
        </div> */}

        {/* Current Working Hours */}
        <div className={styles.inputGroup}>
          <label>
            {workingHoursTitle}
            <span style={{position:'relative', top:'-12px'}}>< RequiredAsteriskIcon/></span>
          </label>
          <div className={styles.options1}>
            {
              // [
              //   "Employed",
              //   "I am Not Currently Working",
              //   "About to Graduate",
              //   "Student",
              // ]
              workingHoursOptions.map((status) => (
                <button
                  type="button"
                  key={status}
                  className={`${styles.optionButton1} ${
                    formData.currentWorkingHoursInEng === status
                      ? styles.active
                      : ""
                  }`}
                  onClick={() =>
                    setFormData({
                      ...formData,
                      currentWorkingHoursInEng: status,
                    })
                  }
                >
                  {status}
                </button>
              ))
            }
          </div>
        </div>

        {/* Reason for Internship */}
        <div className={styles.inputGroup}>
          <label htmlFor="reasonForMaflamInEng">
            {internship}
            <span style={{position:'relative', top:'-12px'}}>< RequiredAsteriskIcon/></span>
          </label>
          <input style={{border:'none'}}
            type="text"
            id="reasonForMaflamInEng"
            required
            name="reasonForMaflamInEng"
            value={formData.reasonForMaflamInEng}
            onChange={handleInputChange}
            className={styles.input}
            placeholder={internshipPlaceholder}
          />
        </div>

        {/* universityInEng */}
        <div className={styles.inputGroup}>
          <label htmlFor="universityInEng">
            {university}
            <span style={{position:'relative', top:'-12px'}}>< RequiredAsteriskIcon/></span>
          </label>
          <input style={{border:'none'}}
            type="text"
            id="universityInEng"
            required
            maxLength={70}
            name="universityInEng"
            value={formData.universityInEng}
            onChange={handleInputChange}
            className={styles.input}
            placeholder={univercityPlaceholder}
          />
        </div>

        {/* Number of Training Hours Required */}
        <div className={styles.inputGroup}>
          <label htmlFor="requiredTrainingHours">
            {TrainingHoursTitle}
            <span style={{position:'relative', top:'-12px'}}>< RequiredAsteriskIcon/></span>
          </label>
          <input style={{border:'none'}}
            type="number"
            id="requiredTrainingHours"
            name="requiredTrainingHours"
            value={formData.requiredTrainingHours}
            onChange={handleInputChange}
            className={styles.input}
            placeholder={TrainingHoursPlaceholder}
          />
        </div>

        {/* Specific Date for Training Completion */}
        <div className={styles.inputGroup}>
          <label>{TrainingTitleDate}</label>
          <input style={{border:'none'}}
            type="date"
            name="dateForTraining"
            value={formData.dateForTraining}
            onChange={handleInputChange}
            className={styles.input}
            placeholder={TrainingDatePlaceholder}
          />
        </div>

        <div className={styles.inputGroup}>
          <label htmlFor="weeksForTraining">
            {TrainingWeekDate}
            <span style={{position:'relative', top:'-12px'}}>< RequiredAsteriskIcon/></span>
          </label>
          <input style={{border:'none'}}
            type="number"
            id="weeksForTraining"
            name="weeksForTraining"
            value={formData.weeksForTraining}
            onChange={handleInputChange}
            className={styles.input}
            placeholder={TrainingWeekPlaceholder}
          />
        </div>

        {/* Start Date */}
        <div className={styles.inputGroup}>
          <label>
            {TrainingDate}
            <span style={{position:'relative', top:'-12px'}}>< RequiredAsteriskIcon/></span>
          </label>
          <div className={styles.dateInputs}>
            <input
              style={{
                border:"none",
                width: "153px",
                background: "#1A374B",
                textAlign: "right",
              }}
              type="text"
              name="day"
              maxLength={15}
              required
              value={formData.startDate.day}
              onChange={(e) =>
                setFormData({
                  ...formData,
                  startDate: { ...formData.startDate, day: e.target.value },
                })
              }
              className={styles.input}
              // placeholder={TrainingPlaceholder}
              placeholder={direction=="rtl"?"اليوم":"Day"}
            />

            <input 
              style={{
                border:'none',
                width: "153px",
                backgroundColor: "#1A374B",
                color: "white",
                textAlign: "right",
              }}
              type="text"
              name="month"
              maxLength={15}
          
              value={formData.startDate.month}
              onChange={(e) =>
                setFormData({
                  ...formData,
                  startDate: { ...formData.startDate, month: e.target.value },
                })
              }
              className={styles.input}
              // placeholder={TrainingPlaceholder1}
                 
              placeholder={direction=="rtl"?"الشهر":"Month"}
            />
            <input 
              style={{
                border:'none',
                width: "200px",
                background: "#1A374B",
                textAlign: "right",
              }}
              type="text"
              maxLength={15}
              name="year"
              value={formData.startDate.year}
              onChange={(e) =>
                setFormData({
                  ...formData,
                  startDate: { ...formData.startDate, year: e.target.value },
                })
              }
              className={styles.input}
              // placeholder={TrainingPlaceholder2}
              placeholder={direction=="rtl"?"السنة":"Year"}
            />
          </div>
        </div>

        {/* Referral Source */}
        <div className={styles.inputGroup}>
          <label htmlFor="howDidYouKnowMaflamInEng">
            {About}
            <span style={{position:'relative', top:'-12px'}}>< RequiredAsteriskIcon/></span>
          </label>
          <input style={{border:'none'}}
            type="text"
            id="howDidYouKnowMaflamInEng"
            name="howDidYouKnowMaflamInEng"
            value={formData.howDidYouKnowMaflamInEng}
            onChange={handleInputChange}
            className={styles.input}
            placeholder={AboutPlaceholder}
          />
        </div>

        {/* Resume Upload */}
        {/* <div className={styles.inputGroup}>
          <label htmlFor="resumeUpload">
            Resume<span style={{position:'relative', top:'-12px'}}>< RequiredAsteriskIcon/></span>
          </label>
          <div className={styles.imgUpload}>
            <button
              type="button"
              required
              onClick={() => triggerFileUpload("resumeUpload")}
              className={styles.downloadIcon}
            >
              <img src={downloadIcon} alt="Upload Resume" />
            </button>
            <p>{btnText}</p>
          </div>
          <input style={{border:'none'}}
            type="file"
            id="resumeUpload"
            style={{ display: "none" }}
            onChange={(e) => handleFileUpload(e, "resumeFile")}
          />
        </div> */}

        <div className={styles.inputGroup}>
          <label htmlFor="resumeUpload">
            {resumetitle}
            <span style={{position:'relative', top:'-12px'}}>< RequiredAsteriskIcon/></span>
          </label>
          <div className={styles.imgUpload}>
            {resume ? (
              <>
                <span>{resume.name}</span>
                <button
                  type="button"
                  
                  onClick={() => handleDeleteFile(setResume)}
                  className={styles.deleteButton}
                >
                  <i>
                    {" "}
                    <MdDelete />
                  </i>
                </button>
              </>
            ) : (
              <div className={styles.btnstyles}>
                <button
                  type="button"
                  onClick={() => triggerFileUpload("resumeUpload")}
                  className={styles.downloadIcon}
                >
                  {/* <img src={downloadIcon} alt="Upload Resume" /> */}
                  <img style={{position:'relative', top:'0px'}} src={downloadIcon} alt="Upload Portfolio" />
                </button>
                <p className="uploadFile">{resumePlaceholder}</p>
              </div>
            )}
            <input 
            // style={{border:'none'}}
            style={{ display: "none" }}
              type="file"
              id="resumeUpload"
              onChange={(e) => handleFileUpload(e, setResume)}
            />
          </div>
        </div>

        {/* Portfolio Upload */}
        <div className={styles.inputGroup}>
          <label htmlFor="portfolioUpload">{portfoliyo}</label>
          <div className={styles.imgUpload}>
            {portfolio ? (
              <>
                <span>{portfolio.name}</span>
                <button
                  type="button"
                  
                  onClick={() => handleDeleteFile(setPortfolio)}
                  className={styles.deleteButton}
                >
                  <i>
                    {" "}
                    <MdDelete />
                  </i>
                </button>
              </>
            ) : (
              <div className={styles.btnstyles}>
                <button
                  type="button"
                  onClick={() => triggerFileUpload("portfolioUpload")}
                  className={styles.downloadIcon}
                >
                  {/* <img src={downloadIcon} alt="Upload Portfolio" /> */}
                  <img style={{position:'relative', top:'0px'}} src={downloadIcon} alt="Upload Portfolio" />
                </button>
                <p className="uploadFile">{portfoliyoPlaceholder}</p>
              </div>
            )}
            <input
            //  style={{border:'none'}}
            style={{ display: "none" }}
              type="file"
              
              id="portfolioUpload"
  
              onChange={(e) => handleFileUpload(e, setPortfolio)}
            />
          </div>
        </div>

        {/* Portfolio Upload
        <div className={styles.inputGroup}>
          <label htmlFor="portfolioUpload">Portfolio</label>{" "}
          <div className={styles.imgUpload}>
            <button
              type="button"
              required
              onClick={() => triggerFileUpload("portfolioUpload")}
              className={styles.downloadIcon}
            >
              <img src={downloadIcon} alt="Upload Portfolio" />
            </button>
            <p>{btnText}</p>
          </div>
          <input style={{border:'none'}}
            type="file"
            id="portfolioUpload"
            style={{ display: "none" }}
            onChange={(e) => handleFileUpload(e, "portfolioFile")}
          />
        </div> */}

        {/* Submit Button */}
        <div className={styles.inputGroup}>
          <button
            type="submit"
            className={styles.submitButton}
            style={{ width: "185px" }}
          >
            {sendbtn1}
          </button>
        </div>
      </form>
    </div>
  );
};

export default ContactForm2;

/* ***************************
 Tarun code Added In Above   
 ************************** */

// import { useState } from "react";
// import { useContext } from "react";
// import styles from "./ContactForm2.module.css";
// import downloadIcon from "../../assets/downloadIcon.png";
// import axios from "axios";
// import { toast } from "react-toastify";
// import { MdDelete } from "react-icons/md";
// import { ContactUs3Context } from "../../store/ContactUs3Context";
// import { LanguageContext } from "../LanguageContext/LanguageContext";

// const ContactForm2 = () => {
//   const { ContactUs3ContextDetails, loading, error } =
//     useContext(ContactUs3Context);
//   const { language } = useContext(LanguageContext);
//   if (loading) return <p>Loading...</p>;
//   if (error) return <p>Error loading data</p>;

//   const contactDetailsSec3 =
//     ContactUs3ContextDetails?.contactDetails3Sec3 || [];
//   const title =
//     contactDetailsSec3[0]?.title || "Apply for Maflam Training Program";
//   const fullNameDescription = contactDetailsSec3[1]?.description || "Full Name";
//   const fullNameTitle = contactDetailsSec3[1]?.title || "Full Name";

//   const maletitle = contactDetailsSec3[2]?.title || "Gender";
//   const categoryMale = contactDetailsSec3[2]?.category[0] || "Male";
//   const categoryFemale = contactDetailsSec3[2]?.category[1] || "Female";
//   const age = contactDetailsSec3[3]?.title || "Age";
//   const categoryage = contactDetailsSec3[3]?.category[0] || "Under 18";
//   const categoryage1 = contactDetailsSec3[3]?.category[1] || "From 18 to 20";

//   const categoryage2 = contactDetailsSec3[3]?.category[2] || "From 20 to 30";
//   const categoryage3 = contactDetailsSec3[3]?.category[3] || "other";

//   const Natinality = contactDetailsSec3[4]?.title || "";
//   const categoryNatinality = contactDetailsSec3[4]?.category[0] || "";
//   const categoryNatinality1 = contactDetailsSec3[4]?.category[1] || "";
//   const categoryNatinality2 = contactDetailsSec3[4]?.category[2] || "";

//   const city = contactDetailsSec3[5]?.title || "";
//   const categorycity = contactDetailsSec3[5]?.category[0] || "";
//   const categorycity1 = contactDetailsSec3[5]?.category[1] || "";
//   const categorycity2 = contactDetailsSec3[5]?.category[2] || "";

//   const Degree = contactDetailsSec3[6]?.title || "";
//   const categoryDegree1 = contactDetailsSec3[6]?.category[0] || "";
//   const categoryDegree2 = contactDetailsSec3[6]?.category[1] || "";
//   const categoryDegree3 = contactDetailsSec3[6]?.category[2] || "";
//   const categoryDegree4 = contactDetailsSec3[6]?.category[3] || "";
//   const categoryDegree5 = contactDetailsSec3[6]?.category[4] || "";

//   const emailTitle = contactDetailsSec3[7]?.title || "";
//   const emailPlaceholder = contactDetailsSec3[7]?.description || "";
//   const phoneTitle = contactDetailsSec3[8]?.title || "";
//   const phonePlaceholder = contactDetailsSec3[8]?.description || "";
//   const experianceTitle = contactDetailsSec3[9]?.title || "";
//   const experiancePlaceholder = contactDetailsSec3[9]?.description || "";

//   const Traning = contactDetailsSec3[10]?.title || "";
//   const categoryTraning = contactDetailsSec3[10]?.category || "";

//   const workingHoursTitle =
//     contactDetailsSec3[11]?.title || "Current Working Hours";
//   const workingHoursOptions = contactDetailsSec3[11]?.category || [
//     "Employed",
//     "I am Not Currently Working",
//     "About to Graduate (Training University)",
//     "Student",
//   ];

//   const internship = contactDetailsSec3[12]?.title || "";
//   const internshipPlaceholder = contactDetailsSec3[12]?.description || "";

//   const university = contactDetailsSec3[13]?.title || "";
//   const univercityPlaceholder = contactDetailsSec3[13]?.description || "";

//   const TrainingHoursTitle = contactDetailsSec3[14]?.title || "";
//   const TrainingHoursPlaceholder = contactDetailsSec3[14]?.description || "";

//   const TrainingTitleDate = contactDetailsSec3[15]?.title || "";
//   const TrainingDatePlaceholder = contactDetailsSec3[15]?.description || "";

//   const TrainingWeekDate = contactDetailsSec3[16]?.title || "";
//   const TrainingWeekPlaceholder = contactDetailsSec3[16]?.description || "";

//   const TrainingDate = contactDetailsSec3[17]?.title || "";
//   const TrainingPlaceholder = contactDetailsSec3[17]?.category[0] || "";
//   const TrainingPlaceholder1 = contactDetailsSec3[17]?.category[0] || "";
//   const TrainingPlaceholder2 = contactDetailsSec3[17]?.category[0] || "";
//   // const TrainingPlaceholder = contactDetailsSec3[17]?.description || "";

//   const About = contactDetailsSec3[18]?.title || "";
//   const AboutPlaceholder = contactDetailsSec3[18]?.description || "";
//   const resumetitle = contactDetailsSec3[19]?.title || "";
//   const resumePlaceholder = contactDetailsSec3[19]?.description || "";
//   const portfoliyo = contactDetailsSec3[20]?.title || "";
//   const portfoliyoPlaceholder = contactDetailsSec3[20]?.description || "";
//   const sendbtn1 = contactDetailsSec3[21]?.title || "";

//   const [formData, setFormData] = useState({
//     fullNameInEng: "",
//     genderInEng: "",
//     age: "",
//     nationalityInEng: "",
//     cityInEng: "",
//     degreeInEng: "",
//     email: "",
//     phoneNo: "",
//     hasPreviousExperienceInEng: "",
//     trainingFieldsInEng: [],
//     currentWorkingHoursInEng: "",
//     reasonForMaflamInEng: "",
//     universityInEng: "",
//     requiredTrainingHours: "",
//     dateForTraining: "",
//     weeksForTraining: "",
//     startDate: { day: "", month: "", year: "" },
//     howDidYouKnowMaflamInEng: "",
//     // resumeFile: null,
//     // portfolioFile: null,
//   });
//   const [resume, setResume] = useState(null);
//   const [portfolio, setPortfolio] = useState(null);

//   const handleDeleteFile = (setter) => {
//     setter(null);
//   };

//   const handlePhoneInput = (e) => {
//     e.target.value = e.target.value.replace(/\D/g, "");
//   };
//   const triggerFileUpload = (inputId) => {
//     document.getElementById(inputId).click();
//   };

//   const handleFileUpload = (e, setFileField) => {
//     const file = e.target.files[0];
//     if (file) {
//       setFileField(file); // Update resume or portfolio state
//       setFormData((prevData) => ({
//         ...prevData,
//         [setFileField === setResume ? "resume" : "portfolio"]: file,
//       }));
//     }
//   };

//   const handleInputChange = (e) => {
//     setFormData({
//       ...formData,
//       [e.target.name]: e.target.value,
//     });
//   };

//   // Trigger file input by button click
//   // const triggerFileUpload = (inputId) => {
//   //   document.getElementById(inputId).click();
//   // };

//   // // Handle file upload and set file in form data
//   // const handleFileUpload = (e, setFileField) => {
//   //   setFormData((prevData) => ({
//   //     ...prevData,
//   //     [setFileField]: e.target.files[0],
//   //   }));
//   // };

//   const handleSubmit = async (e) => {
//     e.preventDefault();

//     const payload = new FormData();
//     payload.append("fullNameInEng", formData.fullNameInEng);
//     payload.append("email", formData.email);
//     payload.append("phoneNo", formData.phoneNo);
//     payload.append("genderInEng", formData.genderInEng);
//     payload.append("ageInEng", formData.ageInEng);
//     payload.append("nationalityInEng", formData.nationalityInEng);
//     payload.append("cityInEng", formData.cityInEng);
//     payload.append("degreeInEng", formData.degreeInEng);
//     payload.append("email", formData.email);
//     payload.append(
//       "hasPreviousExperienceInEng",
//       formData.hasPreviousExperienceInEng
//     );
//     payload.append("trainingFieldsInEng", formData.trainingFieldsInEng);
//     payload.append(
//       "currentWorkingHoursInEng",
//       formData.currentWorkingHoursInEng
//     );
//     payload.append("reasonForMaflamInEng", formData.reasonForMaflamInEng);
//     payload.append("universityInEng", formData.universityInEng);
//     payload.append("requiredTrainingHours", formData.requiredTrainingHours);
//     payload.append("dateForTraining", formData.dateForTraining);
//     payload.append("weeksForTraining", formData.weeksForTraining);
//     payload.append("startDate", formData.startDate);
//     payload.append(
//       "howDidYouKnowMaflamInEng",
//       formData.howDidYouKnowMaflamInEng
//     );

//     // // Include files if present
//     // if (resume) payload.append("resume", resume);
//     // if (portfolio) payload.append("portfolio", portfolio);

//     try {
//       const res = await axios.post(
//         "https://backend.maflam.com/maflam/create-internship-form",
//         payload
//       );
//       // toast.success("Form submitted successfully!");
//       toast.success(res.data.message);
//       setTimeout(() => {
//         window.location.reload();
//       }, 2000);
//     } catch (err) {
//       const errorMessage = err.res?.data?.message || err.message;
//       toast.error(`Error: ${errorMessage}`);
//     }
//   };

//   // const { language, direction, toggleLanguage } = useContext(LanguageContext);
//   // const btnText = language === "en" ? "Upload file" : "تحميل الملف";
//   return (
//     <div className={styles.container}>
//       {/* <h2 className={styles.title}>Apply for Maflam Training Program</h2> */}
//       <h2 className={styles.title}>{title}</h2>
//       {/* <hr style={{ width: "100%", color: "#F1F2FA", height: "0.1px" }} /> */}
//       <form onSubmit={handleSubmit}>
//         <div className={styles.inputGroup}>
//           <label htmlFor="fullNameInEng">
//             {fullNameTitle}
//             <span>*</span>
//           </label>
//           <input
//             autoFocus
//             type="text"
//             id="fullNameInEng"
//             required
//             maxLength={50}
//             name="fullNameInEng"
//             value={formData.fullNameInEng}
//             onChange={handleInputChange}
//             className={styles.input}
//             placeholder={fullNameDescription}
//           />
//         </div>

//         {/*  genderInEng */}
//         <div className={styles.inputGroup}>
//           <label>
//             {maletitle}
//             <span>*</span>
//           </label>
//           <div className={styles.options}>
//             <button
//               type="button"
//               required
//               className={`${styles.optionButton} ${
//                 formData.genderInEng === "Male" ? styles.active : ""
//               }`}
//               onClick={() => setFormData({ ...formData, genderInEng: "Male" })}
//             >
//               {categoryMale}
//             </button>
//             <button
//               type="button"
//               className={`${styles.optionButton} ${
//                 formData.genderInEng === "Female" ? styles.active : ""
//               }`}
//               onClick={() =>
//                 setFormData({ ...formData, genderInEng: "Female" })
//               }
//             >
//               {categoryFemale}
//             </button>
//           </div>
//         </div>

//         {/* Age */}
//         <div className={styles.inputGroup}>
//           <label>
//             {age}
//             <span>*</span>
//           </label>
//           <div className={styles.options}>
//             <button
//               type="button"
//               required
//               className={`${styles.optionButton} ${
//                 formData.age === "Under 18" ? styles.active : ""
//               }`}
//               onClick={() => setFormData({ ...formData, age: "Under 18" })}
//             >
//               {categoryage}
//             </button>
//             <button
//               type="button"
//               className={`${styles.optionButton} ${
//                 formData.age === "18 to 20" ? styles.active : ""
//               }`}
//               onClick={() => setFormData({ ...formData, age: "18 to 20" })}
//             >
//               {categoryage1}
//             </button>
//             <button
//               type="button"
//               className={`${styles.optionButton} ${
//                 formData.age === "20 to 30" ? styles.active : ""
//               }`}
//               onClick={() => setFormData({ ...formData, age: "20 to 30" })}
//             >
//               {categoryage2}
//             </button>
//             <button
//               type="button"
//               className={`${styles.optionButton} ${
//                 formData.age === "Over 30" ? styles.active : ""
//               }`}
//               onClick={() => setFormData({ ...formData, age: "Over 30" })}
//             >
//               {categoryage3}
//             </button>
//           </div>
//         </div>

//         {/* nationalityInEng */}
//         <div className={styles.inputGroup}>
//           <label>
//             {Natinality}
//             <span>*</span>
//           </label>
//           <div className={styles.options}>
//             <button
//               type="button"
//               required
//               className={`${styles.optionButton2} ${
//                 formData.nationalityInEng === "Saudi" ? styles.active : ""
//               }`}
//               onClick={() =>
//                 setFormData({ ...formData, nationalityInEng: "Saudi" })
//               }
//             >
//               {categoryNatinality}
//             </button>
//             <button
//               type="button"
//               className={`${styles.optionButton2} ${
//                 formData.nationalityInEng === "Non-Saudi" ? styles.active : ""
//               }`}
//               onClick={() =>
//                 setFormData({ ...formData, nationalityInEng: "Non-Saudi" })
//               }
//             >
//               {/* Non-Saudi resident in Saudi Arabia */}
//               {categoryNatinality1}
//             </button>
//             <input
//               type="text"
//               name="nationalityInEng"
//               placeholder={categoryNatinality2}
//               className={styles.input2}
//               onChange={handleInputChange}
//             />
//           </div>
//         </div>

//         {/* cityInEng */}
//         <div className={styles.inputGroup}>
//           <label>
//             {city}
//             <span>*</span>
//           </label>
//           <div className={styles.options}>
//             <button
//               type="button"
//               required
//               className={`${styles.optionButton2} ${
//                 formData.cityInEng === "Jeddah" ? styles.active : ""
//               }`}
//               onClick={() => setFormData({ ...formData, cityInEng: "Jeddah" })}
//             >
//               {categorycity1}
//             </button>
//             <button
//               type="button"
//               className={`${styles.optionButton2} ${
//                 formData.cityInEng === "Riyadh" ? styles.active : ""
//               }`}
//               onClick={() => setFormData({ ...formData, cityInEng: "Riyadh" })}
//             >
//               {categorycity}
//             </button>
//             <input
//               type="text"
//               name="cityInEng"
//               placeholder={categorycity2}
//               className={styles.input2}
//               onChange={handleInputChange}
//             />
//           </div>
//         </div>

//         {/* Your degreeInEng */}
//         <div className={styles.inputGroup}>
//           <label>
//             {Degree}
//             <span>*</span>
//           </label>
//           <div className={styles.options}>
//             <button
//               type="button"
//               required
//               className={`${styles.optionButton} ${
//                 formData.degreeInEng === "Secondary" ? styles.active : ""
//               }`}
//               onClick={() =>
//                 setFormData({ ...formData, degreeInEng: "Secondary" })
//               }
//             >
//               {categoryDegree1}
//             </button>
//             <button
//               type="button"
//               required
//               className={`${styles.optionButton} ${
//                 formData.degreeInEng === "Diploma" ? styles.active : ""
//               }`}
//               onClick={() =>
//                 setFormData({ ...formData, degreeInEng: "Diploma" })
//               }
//             >
//               {categoryDegree2}
//             </button>
//             <button
//               type="button"
//               className={`${styles.optionButton} ${
//                 formData.degreeInEng === "Bachelor's" ? styles.active : ""
//               }`}
//               onClick={() =>
//                 setFormData({ ...formData, degreeInEng: "Bachelor's" })
//               }
//             >
//               {categoryDegree3}
//             </button>
//             <button
//               type="button"
//               className={`${styles.optionButton} ${
//                 formData.degreeInEng === "Masters" ? styles.active : ""
//               }`}
//               onClick={() =>
//                 setFormData({ ...formData, degreeInEng: "Masters" })
//               }
//             >
//               {categoryDegree4}
//             </button>
//             <button
//               type="button"
//               className={`${styles.optionButton} ${
//                 formData.degreeInEng === "PhD" ? styles.active : ""
//               }`}
//               onClick={() => setFormData({ ...formData, degreeInEng: "PhD" })}
//             >
//               {categoryDegree5}
//             </button>
//           </div>
//         </div>

//         {/* email */}
//         <div className={styles.inputGroup}>
//           <label htmlFor="email">
//             {emailTitle}
//             <span>*</span>
//           </label>
//           <input
//             type="email"
//             id="email"
//             required
//             name="email"
//             value={formData.email}
//             onChange={handleInputChange}
//             className={styles.input}
//             placeholder={emailPlaceholder}
//           />
//         </div>

//         {/* Phone Number */}
//         {/* <div className={styles.inputGroup}>
//           <label htmlFor="phoneNo">
//             Phone Number<span>*</span>
//           </label>
//           <input
//            type="number"
//            id="phoneNo"
//            maxLength={16}
//         required
//             name="phoneNo"
//             value={formData.phoneNo}
//             onChange={handleInputChange}
//             className={styles.input}
//             placeholder="Phone Number"
//           />
//         </div> */}
//         <div className={styles.inputGroup}>
//           <label htmlFor="phoneNo">
//             {phoneTitle}
//             <span>*</span>
//           </label>
//           <input
//             type="number"
//             id="phoneNo"
//             required
//             name="phoneNo"
//             value={formData.phoneNo}
//             onChange={(e) => {
//               const value = e.target.value.replace(/\D/g, ""); // Remove any non-numeric characters
//               if (value.length <= 16) {
//                 setFormData({ ...formData, phoneNo: value });
//               }
//             }}
//             onInput={(e) => {
//               if (e.target.value.length > 10)
//                 e.target.value = e.target.value.slice(0, 16);
//             }}
//             className={styles.input}
//             placeholder={phonePlaceholder}
//             maxLength={16}
//             pattern="\d{10}"
//             title="Phone number should be 10 digits"
//           />
//         </div>
//         <div className={styles.inputGroup}>
//           <label htmlFor="hasPreviousExperienceInEng">
//             {experianceTitle}
//             <span>*</span>
//           </label>
//           <input
//             type="text"
//             id="hasPreviousExperienceInEng"
//             name="hasPreviousExperienceInEng"
//             value={formData.hasPreviousExperienceInEng}
//             onChange={handleInputChange}
//             className={styles.input}
//             placeholder={experiancePlaceholder}
//           />
//         </div>
//         <div className={styles.inputGroup}>
//           <label>
//             {Traning}
//             <span>*</span>
//           </label>
//           <div className={styles.options2}>
//             {
//               // [
//               //   "Camera Department",
//               //   "Editing Department",
//               //   "Production Department",
//               //   "Content Writing Department",
//               //   "Sound Department",
//               //   "Directing Department",
//               //   "Acting Department",
//               //   "Voiceover Department",
//               //   "Research Department",
//               //   "Marketing Department",
//               //   "Design/Graphics Department",

//               // ]
//               categoryTraning.map((field) => (
//                 <button
//                   type="button"
//                   key={field}
//                   required
//                   className={`${styles.optionButton2} ${
//                     formData.trainingFieldsInEng.includes(field)
//                       ? styles.active
//                       : ""
//                   }`}
//                   // onClick={() =>

//                   //   //  handletrainingFieldsInEngChange(field)
//                   //   }
//                   onClick={() =>
//                     setFormData({ ...formData, trainingFieldsInEng: field })
//                   }
//                 >
//                   {field}
//                 </button>
//               ))
//             }
//           </div>
//         </div>

//         {/* Current Working Hours */}
//         <div className={styles.inputGroup}>
//           <label>
//             {workingHoursTitle}
//             <span>*</span>
//           </label>
//           <div className={styles.options1}>
//             {
//               // [
//               //   "Employed",
//               //   "I am Not Currently Working",
//               //   "About to Graduate",
//               //   "Student",
//               // ]
//               workingHoursOptions.map((status) => (
//                 <button
//                   type="button"
//                   key={status}
//                   className={`${styles.optionButton1} ${
//                     formData.currentWorkingHoursInEng === status
//                       ? styles.active
//                       : ""
//                   }`}
//                   onClick={() =>
//                     setFormData({
//                       ...formData,
//                       currentWorkingHoursInEng: status,
//                     })
//                   }
//                 >
//                   {status}
//                 </button>
//               ))
//             }
//           </div>
//         </div>

//         {/* Reason for Internship */}
//         <div className={styles.inputGroup}>
//           <label htmlFor="reasonForMaflamInEng">
//             {internship}
//             <span>*</span>
//           </label>
//           <input
//             type="text"
//             id="reasonForMaflamInEng"
//             required
//             name="reasonForMaflamInEng"
//             value={formData.reasonForMaflamInEng}
//             onChange={handleInputChange}
//             className={styles.input}
//             placeholder={internshipPlaceholder}
//           />
//         </div>

//         {/* universityInEng */}
//         <div className={styles.inputGroup}>
//           <label htmlFor="universityInEng">
//             {university}
//             <span>*</span>
//           </label>
//           <input
//             type="text"
//             id="universityInEng"
//             required
//             maxLength={70}
//             name="universityInEng"
//             value={formData.universityInEng}
//             onChange={handleInputChange}
//             className={styles.input}
//             placeholder={univercityPlaceholder}
//           />
//         </div>

//         {/* Number of Training Hours Required */}
//         <div className={styles.inputGroup}>
//           <label htmlFor="requiredTrainingHours">
//             {TrainingHoursTitle}
//             <span>*</span>
//           </label>
//           <input
//             type="number"
//             id="requiredTrainingHours"
//             name="requiredTrainingHours"
//             value={formData.requiredTrainingHours}
//             onChange={handleInputChange}
//             className={styles.input}
//             placeholder={TrainingHoursPlaceholder}
//           />
//         </div>

//         {/* Specific Date for Training Completion */}
//         <div className={styles.inputGroup}>
//           <label>{TrainingTitleDate}</label>
//           <input
//             type="date"
//             name="dateForTraining"
//             value={formData.dateForTraining}
//             onChange={handleInputChange}
//             className={styles.input}
//             placeholder={TrainingDatePlaceholder}
//           />
//         </div>

//         <div className={styles.inputGroup}>
//           <label htmlFor="weeksForTraining">
//             {TrainingWeekDate}
//             <span>*</span>
//           </label>
//           <input
//             type="number"
//             id="weeksForTraining"
//             name="weeksForTraining"
//             value={formData.weeksForTraining}
//             onChange={handleInputChange}
//             className={styles.input}
//             placeholder={TrainingWeekPlaceholder}
//           />
//         </div>

//         {/* Start Date */}
//         <div className={styles.inputGroup}>
//           <label>
//             {TrainingDate}
//             <span>*</span>
//           </label>
//           <div className={styles.dateInputs}>
//             <input
//               style={{
//                 width: "153px",
//                 background: "#1A374B",
//                 textAlign: "right",
//               }}
//               type="text"
//               name="day"
//               maxLength={15}
//               required
//               value={formData.startDate.day}
//               onChange={(e) =>
//                 setFormData({
//                   ...formData,
//                   startDate: { ...formData.startDate, day: e.target.value },
//                 })
//               }
//               className={styles.input}
//               // placeholder={TrainingPlaceholder}
//               placeholder="Day"
//             />

//             <input
//               style={{
//                 width: "153px",
//                 backgroundColor: "#1A374B",
//                 color: "white",
//                 textAlign: "right",
//               }}
//               type="text"
//               name="month"
//               maxLength={15}
          
//               value={formData.startDate.month}
//               onChange={(e) =>
//                 setFormData({
//                   ...formData,
//                   startDate: { ...formData.startDate, month: e.target.value },
//                 })
//               }
//               className={styles.input}
//               // placeholder={TrainingPlaceholder1}
//                  placeholder="Month"
//             />
//             <input
//               style={{
//                 width: "200px",
//                 background: "#1A374B",
//                 textAlign: "right",
//               }}
//               type="text"
//               maxLength={15}
//               name="year"
//               value={formData.startDate.year}
//               onChange={(e) =>
//                 setFormData({
//                   ...formData,
//                   startDate: { ...formData.startDate, year: e.target.value },
//                 })
//               }
//               className={styles.input}
//               // placeholder={TrainingPlaceholder2}
//                  placeholder="Year"
//             />
//           </div>
//         </div>

//         {/* Referral Source */}
//         <div className={styles.inputGroup}>
//           <label htmlFor="howDidYouKnowMaflamInEng">
//             {About}
//             <span>*</span>
//           </label>
//           <input
//             type="text"
//             id="howDidYouKnowMaflamInEng"
//             name="howDidYouKnowMaflamInEng"
//             value={formData.howDidYouKnowMaflamInEng}
//             onChange={handleInputChange}
//             className={styles.input}
//             placeholder={AboutPlaceholder}
//           />
//         </div>

//         {/* Resume Upload */}
//         {/* <div className={styles.inputGroup}>
//           <label htmlFor="resumeUpload">
//             Resume<span>*</span>
//           </label>
//           <div className={styles.imgUpload}>
//             <button
//               type="button"
//               required
//               onClick={() => triggerFileUpload("resumeUpload")}
//               className={styles.downloadIcon}
//             >
//               <img src={downloadIcon} alt="Upload Resume" />
//             </button>
//             <p>{btnText}</p>
//           </div>
//           <input
//             type="file"
//             id="resumeUpload"
//             style={{ display: "none" }}
//             onChange={(e) => handleFileUpload(e, "resumeFile")}
//           />
//         </div> */}

//         <div className={styles.inputGroup}>
//           <label htmlFor="resumeUpload">
//             {resumetitle}
//             <span>*</span>
//           </label>
//           <div className={styles.imgUpload}>
//             {resume ? (
//               <>
//                 <span>{resume.name}</span>
//                 <button
//                   type="button"
//                   onClick={() => handleDeleteFile(setResume)}
//                   className={styles.deleteButton}
//                 >
//                   <i>
//                     {" "}
//                     <MdDelete />
//                   </i>
//                 </button>
//               </>
//             ) : (
//               <div className={styles.btnstyles}>
//                 <button
//                   type="button"
//                   onClick={() => triggerFileUpload("resumeUpload")}
//                   className={styles.downloadIcon}
//                 >
//                   <img src={downloadIcon} alt="Upload Resume" />
//                 </button>
//                 <p className="uploadFile">{resumePlaceholder}</p>
//               </div>
//             )}
//             <input
//               type="file"
//               id="resumeUpload"
//               style={{ display: "none" }}
//               onChange={(e) => handleFileUpload(e, setResume)}
//             />
//           </div>
//         </div>

//         {/* Portfolio Upload */}
//         <div className={styles.inputGroup}>
//           <label htmlFor="portfolioUpload">{portfoliyo}</label>
//           <div className={styles.imgUpload}>
//             {portfolio ? (
//               <>
//                 <span>{portfolio.name}</span>
//                 <button
//                   type="button"
//                   onClick={() => handleDeleteFile(setPortfolio)}
//                   className={styles.deleteButton}
//                 >
//                   <i>
//                     {" "}
//                     <MdDelete />
//                   </i>
//                 </button>
//               </>
//             ) : (
//               <div className={styles.btnstyles}>
//                 <button
//                   type="button"
//                   onClick={() => triggerFileUpload("portfolioUpload")}
//                   className={styles.downloadIcon}
//                 >
//                   <img src={downloadIcon} alt="Upload Portfolio" />
//                 </button>
//                 <p className="uploadFile">{portfoliyoPlaceholder}</p>
//               </div>
//             )}
//             <input
//               type="file"
//               id="portfolioUpload"
//               style={{ display: "none" }}
//               onChange={(e) => handleFileUpload(e, setPortfolio)}
//             />
//           </div>
//         </div>

//         {/* Portfolio Upload
//         <div className={styles.inputGroup}>
//           <label htmlFor="portfolioUpload">Portfolio</label>{" "}
//           <div className={styles.imgUpload}>
//             <button
//               type="button"
//               required
//               onClick={() => triggerFileUpload("portfolioUpload")}
//               className={styles.downloadIcon}
//             >
//               <img src={downloadIcon} alt="Upload Portfolio" />
//             </button>
//             <p>{btnText}</p>
//           </div>
//           <input
//             type="file"
//             id="portfolioUpload"
//             style={{ display: "none" }}
//             onChange={(e) => handleFileUpload(e, "portfolioFile")}
//           />
//         </div> */}

//         {/* Submit Button */}
//         <div className={styles.inputGroup}>
//           <button
//             type="submit"
//             className={styles.submitButton}
//             style={{ width: "185px" }}
//           >
//             {sendbtn1}
//           </button>
//         </div>
//       </form>
//     </div>
//   );
// };

// export default ContactForm2;
