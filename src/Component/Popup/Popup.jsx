
import React, { useState } from 'react';
import styles from './Popup.module.css';

const Popup = ({ isOpen, onClose, ebookData, onDownload }) => {
    const [fullName, setFullName] = useState('');
    const [email, setEmail] = useState('');
    const [nameError, setNameError] = useState('');
    const [emailError, setEmailError] = useState('');

    if (!isOpen || !ebookData) return null;

    const handleDownload = () => {
        let isValid = true;

        // Validate full name
        if (!fullName.trim()) {
            setNameError("Full name is required.");
            isValid = false;
        } else {
            setNameError('');
        }

        // Validate email
        const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!email.trim()) {
            setEmailError("Email is required.");
            isValid = false;
        } else if (!emailPattern.test(email)) {
            setEmailError("Please enter a valid email address.");
            isValid = false;
        } else {
            setEmailError('');
        }

        if (isValid) {
            console.log("Downloading eBook for:", { fullName, email });
            onDownload();
        }
    };

    return (
        <>
            <div className={styles.overlay} onClick={onClose}></div>
            <div className={styles.popupContainer}>
                <button className={styles.closeButton} onClick={onClose}>X</button>
                <div className={styles.popupContent}>
                    <div className={styles.formContainer}>
                        <h2>Register to Download the Booklet</h2>
                        <div className={styles.inputGroup}>
                            <label htmlFor="fullName">Full Name</label>
                            <input
                                type="text"
                                id="fullName"
                                value={fullName}
                                onChange={(e) => setFullName(e.target.value)}
                                placeholder="Enter your full name"
                                className={styles.inputField}
                            />
                            {nameError && <p className={styles.errorText}>{nameError}</p>}
                        </div>
                        <div className={styles.inputGroup}>
                            <label htmlFor="email">Email</label>
                            <input
                                type="email"
                                id="email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                placeholder="Enter your email"
                                className={styles.inputField}
                            />
                            {emailError && <p className={styles.errorText}>{emailError}</p>}
                        </div>
                        <button onClick={handleDownload} className={styles.downloadButton}>
                            Download eBook
                        </button>
                    </div>
                    <div className={styles.imageContainer}>
                        <img src={ebookData.imgSrc} alt={ebookData.title} className={styles.ebookImage} />
                    </div>
                </div>
            </div>
        </>
    );
};

export default Popup;
