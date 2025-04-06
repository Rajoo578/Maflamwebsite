import React from 'react'

import { LanguageProvider } from '../../store'
import { 
  MyProfileWishlist, 
  WishlistSpecializedCourses, 
  WishlistArticle, 
  WishlistEbookCard, 
  Navbar, 
  Footer 
} from '../../Component';
import styles from "./MyWishlist.module.css";


function MyWishlist() {

    

  return (
    <div>
      <LanguageProvider >
        <Navbar />
        <div className={styles.wishlistbg}>
        <MyProfileWishlist />
        <WishlistSpecializedCourses />
        <WishlistEbookCard />
        <WishlistArticle />
        </div>
        <Footer />        
     </LanguageProvider>


    </div>
  )
}

export default MyWishlist;