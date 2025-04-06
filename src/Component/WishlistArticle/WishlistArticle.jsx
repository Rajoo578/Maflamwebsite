import React from 'react';
import styles from './WishlistArticle.module.css';
import profilecoursefirst from "../../assets/profilecoursefirst.png";

function WishlistArticle() {
  // Define an array of articles
  const articles = [
    { id: 1, image: profilecoursefirst, text: "مهمتنا توفير محتوى تعليمي عالي الجودة" },
    { id: 2, image: profilecoursefirst, text: "مهمتنا توفير محتوى تعليمي عالي الجودة" },
    { id: 3, image: profilecoursefirst, text: "مهمتنا توفير محتوى تعليمي عالي الجودة" },
  ];

  return (
    <div className={styles.articleSection}>
      <h2 className={styles.heading}>Articles</h2>
      <div className={styles.articlesContainer}>
        {articles.map((article) => (
          <div key={article.id} className={styles.articleCard}>
            <img src={article.image} alt="Course" className={styles.articleImage} />
            <div className={styles.articleContent}>
              <p>{article.text}</p>
              <a href="#" className={styles.readMore}>
                Continue reading →
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default WishlistArticle;
