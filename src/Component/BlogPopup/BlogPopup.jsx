
import React from 'react';
import styles from './BlogPopup.module.css';

const BlogPopup = ({ isOpen, onClose }) => {
    if (!isOpen) return null;

    return (
        <div className={styles.overlay} onClick={onClose}>
            <div className={styles.popupContainer} onClick={(e) => e.stopPropagation()}>
                <button className={styles.closeButton} onClick={onClose}>X</button>
                <div className={styles.contentContainer}>
                    <table className={styles.table}>
                    <tbody>
                            <tr className={styles.row}>
                                <td><a href="#" className={styles.navItem}>Scriptwriting</a></td>
                                <td><a href="#" className={styles.navItem}>Cinematography and Cameras</a></td>
                                <td><a href="#" className={styles.navItem}>Documentaries</a></td>
                                <td><a href="#" className={styles.navItem}>Production</a></td>
                                <td><a href="#" className={styles.navItem}>Marketing and Distribution</a></td>
                                <td><a href="#" className={styles.navItem}>Recording audio and music</a></td>
                                <td><a href="#" className={styles.navItem}>Grants,Contests and Awards </a></td>
                            </tr>
                            <tr className={styles.row}>
                                <td><a href="#" className={styles.navItem}>Directing</a></td>
                                <td><a href="#" className={styles.navItem}>Editing and Post-production</a></td>
                                <td><a href="#" className={styles.navItem}>TV shows and movies</a></td>
                                <td><a href="#" className={styles.navItem}>Acting</a></td>
                                <td><a href="#" className={styles.navItem}>Events and occasions</a></td>
                                <td><a href="#" className={styles.navItem}>Ai</a></td>
                                <td><a href="#" className={styles.navItem}>Jobs and Opportunitie</a></td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};

export default BlogPopup;
