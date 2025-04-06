import React from 'react'
import { MyProfilePersonalInfo } from '../../Component';
import { LanguageProvider } from '../../store'


function PersonalInformation() {
  return (
    <div>
      <LanguageProvider >
        <MyProfilePersonalInfo />  
     </LanguageProvider>


    </div>
  )
}

export default PersonalInformation;