import React from 'react'
import { Navbar, Footer, ShowCase, MoreBookletTwo } from '../../Component';
import { LanguageProvider } from '../../store'
function EbookTwo() {
  return (
    <div>
      <LanguageProvider >
        <ShowCase />
        <MoreBookletTwo />       
     </LanguageProvider>
    </div>
  )
}

export default EbookTwo;