import React from 'react'
import { Navbar, Footer, MyProfileCertificate } from '../../Component';
import { LanguageProvider } from '../../store'
function MyCertificate() {
  return (
    <div>
      <LanguageProvider >
        <Navbar />
        <MyProfileCertificate />
        <Footer />        
     </LanguageProvider>


    </div>
  )
}

export default MyCertificate;