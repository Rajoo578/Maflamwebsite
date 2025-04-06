import React, { useEffect, useState } from "react";
// import FooterLogo from '../../assets/footerLogo.svg';
import styles from "./SubFooter.module.css";
import axios from "axios";
import { assests } from "../../assets/assests";
// import {  footerColumnData } from '../../assets/assests';
import { useContext } from "react";
import { LanguageContext } from "../LanguageContext/LanguageContext";

// const Footer = () => {

const SubFooter = () => {
  const [footerSubColumnData1, setFooterSubColumnData1] = useState([]);
  const { language, direction, toggleLanguage } = useContext(LanguageContext);
  const SubFooterGetApi = (lang) => {
    // Fetch footer data based on the selected language
    // axios.get(`https://prominenttrades.in/maflam/fetch-footerdata?lang=${lang}`)
    axios
      .get(`https://backend.maflam.com/maflam/fetch-footerdata?lang=${lang}`)
      // get(`http://192.168.1.39:3001/maflam/fetch-footerdata?lang=${lang}`)

      // axios.get('http://3.29.240.167:3001/maflam/fetch-footerdata?lang=${lang}')
      .then((response) => {
        setFooterSubColumnData1(response.data); // Set the fetched data in state
        // console.log("Footer data fetched successfully:", response.data);
        // console.log("SubFooter data fetched successfully:", response.data[1]);
      })
      .catch((error) => {
        console.error("Error fetching footer data:", error);
      });
  };

  useEffect(() => {
    // Call the API when the component loads or when language changes
    SubFooterGetApi(language === "ar" ? 0 : 1);
  }, [language]);

  // const [footerColumnData1, setFooterColumnData1] = useState([])

  // const FooterGetApi = () =>{
  //   // axios.get('http://192.168.1.39:3001/maflam/get-footer-data')
  //   axios.get('http://192.168.1.39:3001/maflam/fetch-footerdata?lang=0')
  //   // axios.get('http://3.29.240.167:3001/maflam/get-footer-data')
  // .then(response => {
  //   setFooterColumnData1(response.data);
  //     console.log("Data fetched successfully:", response.data);
  // })
  // .catch(error => {
  //     console.error('Error fetching data:', error);
  // });
  // }

  // useEffect(()=>{
  //   FooterGetApi()
  // })

  return (
    <footer className={styles.footer}>
      <hr className={styles.footerHr} />

      <div className={styles.container}>
        <div className={styles.footerColumns}>
          {/* Logo and Social Icons in the First Column */}
          <div className={styles.footerColumn}>
            <img
              src={assests.Footerlogo1}
              alt="Footer Logo"
              className={styles.footerLogo}
            />
            {/* <ul>
              <li className={styles.socialIcons}>
                <a href="#" aria-label="LinkedIn">
                  <svg
                    width="33"
                    height="33"
                    viewBox="0 0 33 33"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <rect width="33" height="33" rx="16.5" fill="#39FFFB" />
                    <path
                      d="M19.8236 13.8819C19.1489 13.8796 18.4803 14.0103 17.8562 14.2666C17.2321 14.523 16.6646 14.8998 16.1863 15.3757C15.708 15.8516 15.3282 16.4171 15.0687 17.0399C14.8092 17.6626 14.675 18.3305 14.6738 19.0052V24.1814C14.6738 24.3915 14.7573 24.593 14.9059 24.7416C15.0545 24.8902 15.256 24.9736 15.4661 24.9736H17.3147C17.5249 24.9736 17.7264 24.8902 17.8749 24.7416C18.0235 24.593 18.107 24.3915 18.107 24.1814V19.0052C18.1068 18.7652 18.1572 18.5279 18.2549 18.3087C18.3526 18.0896 18.4954 17.8934 18.674 17.7331C18.8525 17.5728 19.0629 17.452 19.2913 17.3784C19.5197 17.3048 19.7611 17.2803 19.9996 17.3062C20.4275 17.3601 20.8207 17.5691 21.1046 17.8937C21.3886 18.2182 21.5436 18.6356 21.5402 19.0668V24.1814C21.5402 24.3915 21.6236 24.593 21.7722 24.7416C21.9208 24.8902 22.1223 24.9736 22.3324 24.9736H24.1811C24.3912 24.9736 24.5927 24.8902 24.7413 24.7416C24.8899 24.593 24.9733 24.3915 24.9733 24.1814V19.0052C24.9722 18.3305 24.838 17.6626 24.5785 17.0399C24.3189 16.4171 23.9391 15.8516 23.4608 15.3757C22.9825 14.8998 22.4151 14.523 21.7909 14.2666C21.1668 14.0103 20.4983 13.8796 19.8236 13.8819Z"
                      fill="#061C2B"
                    />
                    <path
                      d="M12.298 14.6733H9.92118C9.48362 14.6733 9.12891 15.0281 9.12891 15.4656V24.1806C9.12891 24.6181 9.48362 24.9729 9.92118 24.9729H12.298C12.7355 24.9729 13.0903 24.6181 13.0903 24.1806V15.4656C13.0903 15.0281 12.7355 14.6733 12.298 14.6733Z"
                      fill="#061C2B"
                    />
                    <path
                      d="M11.1096 13.0888C12.2035 13.0888 13.0903 12.202 13.0903 11.1081C13.0903 10.0142 12.2035 9.12744 11.1096 9.12744C10.0157 9.12744 9.12891 10.0142 9.12891 11.1081C9.12891 12.202 10.0157 13.0888 11.1096 13.0888Z"
                      fill="#061C2B"
                    />
                  </svg>
                </a>

                <a href="#" aria-label="TikTok">
                  <svg
                    width="33"
                    height="33"
                    viewBox="0 0 33 33"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <rect width="33" height="33" rx="16.5" fill="#39FFFB" />
                    <g clip-path="url(#clip0_9797_441)">
                      <path
                        d="M19.3335 20.759V12.5696C19.3335 12.5696 20.2731 14.1087 23.6693 14.2027C23.8505 14.2077 24.0003 14.0613 24.0003 13.8832V11.5689C24.0003 11.3966 23.8606 11.2602 23.6854 11.2502C21.051 11.1038 19.7999 9.11804 19.6771 7.29699C19.6661 7.12811 19.5155 7 19.3436 7H16.6576C16.479 7 16.3334 7.14226 16.3334 7.31862V20.3372C16.3334 21.7514 15.2338 22.9818 13.7964 23.0484C12.1533 23.1249 10.8175 21.739 11.0207 20.1009C11.1646 18.9437 12.1093 17.9962 13.2843 17.8356C13.5179 17.804 13.7456 17.8015 13.9665 17.8256C14.1621 17.8473 14.3339 17.7042 14.3339 17.5112V15.191C14.3339 15.0263 14.2061 14.8832 14.0385 14.8732C13.7016 14.8516 13.3562 14.8591 13.0058 14.8982C10.4146 15.1877 8.32283 17.2483 8.03586 19.7956C7.65746 23.1557 10.324 26 13.6669 26C16.7965 26 19.3335 23.5068 19.3335 20.4312"
                        fill="#061C2B"
                      />
                    </g>
                    <defs>
                      <clipPath id="clip0_9797_441">
                        <rect
                          width="16"
                          height="19"
                          fill="white"
                          transform="translate(8 7)"
                        />
                      </clipPath>
                    </defs>
                  </svg>
                </a>

                <a href="#" aria-label="Instagram">
                  <svg
                    width="33"
                    height="33"
                    viewBox="0 0 33 33"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <rect width="33" height="33" rx="16.5" fill="#39FFFB" />
                    <g clip-path="url(#clip0_9797_444)">
                      <path
                        d="M20.8966 7.97266H12.1034C9.8376 7.97266 8 9.81025 8 12.076V20.8693C8 23.1351 9.8376 24.9727 12.1034 24.9727H20.8966C23.1624 24.9727 25 23.1351 25 20.8693V12.076C25 9.81025 23.1624 7.97266 20.8966 7.97266ZM23.5343 20.5756C23.5343 22.1938 22.2212 23.507 20.603 23.507H12.3962C10.778 23.507 9.46486 22.1938 9.46486 20.5756V12.3689C9.46486 10.7507 10.778 9.43751 12.3962 9.43751H20.603C22.2212 9.43751 23.5343 10.7507 23.5343 12.3689V20.5756Z"
                        fill="#061C2B"
                      />
                      <path
                        d="M16.5095 12.0762C14.083 12.0762 12.1133 14.0459 12.1133 16.4724C12.1133 18.8988 14.083 20.8686 16.5095 20.8686C18.936 20.8686 20.9057 18.8988 20.9057 16.4724C20.9057 14.0459 18.936 12.0762 16.5095 12.0762ZM16.5095 19.4037C14.8946 19.4037 13.5781 18.0873 13.5781 16.4724C13.5781 14.8574 14.8946 13.541 16.5095 13.541C18.1244 13.541 19.4408 14.8574 19.4408 16.4724C19.4408 18.0873 18.1244 19.4037 16.5095 19.4037Z"
                        fill="#061C2B"
                      />
                      <path
                        d="M21.1976 12.6623C20.7131 12.6623 20.3184 12.2675 20.3184 11.783C20.3184 11.2986 20.7131 10.9038 21.1976 10.9038C21.6821 10.9038 22.0768 11.2986 22.0768 11.783C22.0768 12.2675 21.6821 12.6623 21.1976 12.6623Z"
                        fill="#061C2B"
                      />
                    </g>
                    <defs>
                      <clipPath id="clip0_9797_444">
                        <rect
                          width="17"
                          height="17"
                          fill="white"
                          transform="translate(8 7.97266)"
                        />
                      </clipPath>
                    </defs>
                  </svg>
                </a>
              </li>

              <li className={styles.socialIcons}>
                <a href="#" aria-label="Whatsapp">
                  <svg
                    width="33"
                    height="33"
                    viewBox="0 0 33 33"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <rect width="33" height="33" rx="16.5" fill="#39FFFB" />
                    <g clip-path="url(#clip0_9797_451)">
                      <path
                        d="M16.2176 7.97677C11.8429 8.11924 8.23048 11.6619 8.01107 16.033C7.932 17.6087 8.27963 19.0983 8.95567 20.3912L8.00608 24.6441C7.96619 24.8364 8.13645 25.0067 8.32879 24.9668L12.5816 24.0172H12.5845C13.8689 24.6883 15.3428 25.0359 16.9071 24.9632C21.2711 24.7609 24.8251 21.1756 24.994 16.8102C25.1849 11.8656 21.155 7.81649 16.2176 7.97677ZM16.5004 23.2137C15.2637 23.2137 14.1054 22.8795 13.1095 22.2961C13.0155 22.2434 12.925 22.1878 12.8367 22.1287L10.1197 22.8525L10.8435 20.1355C10.1574 19.0805 9.75923 17.8231 9.75923 16.4718C9.75923 12.7553 12.7839 9.73062 16.5004 9.73062C20.2168 9.73062 23.2415 12.7553 23.2415 16.4718C23.2415 20.1882 20.2168 23.2129 16.5004 23.2129V23.2137Z"
                        fill="#061C2B"
                      />
                      <path
                        d="M20.4973 19.4406C20.3797 19.6173 20.2565 19.7819 20.0591 19.9785C19.6274 20.4102 19.0276 20.6281 18.4193 20.5662C17.3293 20.4543 15.7807 19.8524 14.4492 18.5238C13.1178 17.1924 12.5159 15.6437 12.4069 14.5538C12.3449 13.9454 12.5629 13.3463 12.9946 12.9139C13.1912 12.7173 13.3557 12.5933 13.5324 12.4729C13.8587 12.2528 14.3025 12.3996 14.4257 12.77L14.8724 14.11C14.9956 14.4775 14.9401 14.7098 14.7812 14.8651L14.4257 15.2241C14.2491 15.4008 14.2198 15.6736 14.3552 15.8852C14.5518 16.1936 14.9222 16.6873 15.604 17.3691C16.2857 18.0508 16.7794 18.4212 17.0878 18.6178C17.2994 18.7532 17.573 18.724 17.7489 18.5473L18.108 18.1918C18.264 18.033 18.4962 17.9774 18.8631 18.1007L20.203 18.5473C20.5735 18.6706 20.7202 19.1144 20.4973 19.4406Z"
                        fill="#061C2B"
                      />
                    </g>
                    <defs>
                      <clipPath id="clip0_9797_451">
                        <rect
                          width="17"
                          height="17"
                          fill="white"
                          transform="translate(8 7.97266)"
                        />
                      </clipPath>
                    </defs>
                  </svg>
                </a>

                <a href="#" aria-label="YouTube">
                  <svg
                    width="33"
                    height="33"
                    viewBox="0 0 33 33"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <rect width="33" height="33" rx="16.5" fill="#39FFFB" />
                    <g clip-path="url(#clip0_9797_455)">
                      <path
                        d="M22.024 10.9727H10.9767C9.88512 10.9727 9 11.869 9 12.9738V19.9709C9 21.0763 9.88512 21.972 10.9767 21.972H22.024C23.1149 21.972 24 21.0763 24 19.9709V12.9738C24 11.869 23.1149 10.9727 22.024 10.9727ZM18.2744 16.9551L15.2023 18.51C14.8475 18.6897 14.4307 18.429 14.4307 18.0279V14.9181C14.4307 14.5169 14.8481 14.2563 15.2023 14.4353L18.2744 15.9902C18.6667 16.1888 18.6667 16.7565 18.2744 16.9551Z"
                        fill="#061C2B"
                      />
                    </g>
                    <defs>
                      <clipPath id="clip0_9797_455">
                        <rect
                          width="15"
                          height="11"
                          fill="white"
                          transform="translate(9 10.9727)"
                        />
                      </clipPath>
                    </defs>
                  </svg>
                </a>

                <a href="#" aria-label="Threads ">
                  <svg
                    width="33"
                    height="33"
                    viewBox="0 0 33 33"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <rect width="33" height="33" rx="16.5" fill="#39FFFB" />
                    <g clip-path="url(#clip0_9797_458)">
                      <path
                        d="M22.718 10.8002C21.5048 9.1696 19.7185 8.27151 17.8091 8.05302C17.2097 7.98466 16.6091 7.98715 16.0083 8.0304C13.7753 8.25312 11.6646 9.33142 10.2141 11.1982C8.54403 13.3473 7.79763 16.2506 8.04697 19.021C8.22791 21.0319 8.91631 22.8648 10.4043 24.1594C12.2109 25.7309 14.6915 26.1952 16.9569 25.9287C18.2925 25.7716 19.7007 25.3351 20.7651 24.4172C20.4058 23.9538 20.0635 23.4875 19.7784 22.9665C17.9343 24.0988 15.9304 24.5541 13.8451 23.9374C12.4882 23.536 11.3787 22.7 10.6811 21.3709C9.72233 19.5437 9.7623 17.1728 10.2876 15.2044C10.8165 13.2215 12.093 11.3993 13.7848 10.4033C15.3351 9.49025 17.0364 9.22105 18.7346 9.77089C18.8344 9.80246 18.9331 9.83776 19.0304 9.87703C20.3952 10.5236 21.5552 11.4239 22.1209 12.9658C22.6173 14.3177 22.5054 16.1867 21.9568 17.5022C21.6345 18.275 21.0708 19.0714 20.318 19.3849C20.101 19.4751 19.783 19.5569 19.5596 19.4425C19.3659 19.3436 19.264 19.1838 19.2018 18.9688C19.0738 18.5258 19.9251 13.7351 20.0617 12.8917C19.512 12.8671 18.5095 12.6767 18.0906 13.0878C18.045 13.1328 18.0002 13.178 17.9558 13.224L17.8849 13.1557C17.3058 12.6021 16.4841 12.497 15.7328 12.5536C14.6294 12.6369 13.7769 13.1413 13.0677 14.0441C12.0972 15.28 11.6244 17.1343 11.7554 18.7346C11.8254 19.5909 12.1157 20.4761 12.7537 21.0316C13.3577 21.5579 14.17 21.6884 14.9233 21.5847C15.7638 21.4689 16.5596 20.9996 17.1671 20.3737C17.5632 20.9369 18.0071 21.2735 18.6715 21.3814C19.7652 21.5589 20.8252 21.2524 21.6948 20.5263C23.0501 19.3943 23.7521 17.6844 23.9441 15.8822C24.1436 14.0125 23.8265 12.2899 22.718 10.8002ZM17.0116 18.0886C16.7348 18.7957 16.2352 19.1363 15.6018 19.4142C15.278 19.5086 14.9356 19.5139 14.6319 19.3441C14.316 19.1671 14.1328 18.835 14.0438 18.4738C13.8352 17.6257 14.0482 16.5549 14.4688 15.8119C14.8371 15.1614 15.2598 14.8099 15.9447 14.6307C16.6248 14.5909 17.0537 14.8059 17.6083 15.1922C17.4403 16.1174 17.3497 17.2245 17.0116 18.0886Z"
                        fill="#061C2B"
                      />
                    </g>
                    <defs>
                      <clipPath id="clip0_9797_458">
                        <rect
                          width="16"
                          height="18"
                          fill="white"
                          transform="translate(8 8)"
                        />
                      </clipPath>
                    </defs>
                  </svg>
                </a>
              </li>
            </ul> */}
          </div>

          {/* Render the remaining footer columns */}
          {footerColumnData1.map((column, index) => (
            <div key={index} className={styles.footerColumn}>
              <h4>{column.title}</h4>
              <ul>
                {column.links.map((link, linkIndex) => (
                  <li key={linkIndex}>
                    <a href={link.href}>{link.text}</a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
          <hr className={styles.footerHr} />
        </div>

        <div className={styles.footerLinks}>
          <div className={styles.footerBottom}>
            <p>All rights reserved © Maflam 2023</p>
          </div>
          <ul className={styles.footerLinks}>
            <li>
              <a href="/purchaseCancellation">Purchase Policy</a>
            </li>
            <li>
              <a href="#">Help Center</a>
            </li>
            <li>
              <a href="/CommunityGuidelines">Community Guidelines</a>
            </li>
            <li>
              <a href="/privacypolicy">Privacy Policy</a>
            </li>
            <li>
              <a href="/terms&condition">Terms and Conditions</a>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default SubFooter;
