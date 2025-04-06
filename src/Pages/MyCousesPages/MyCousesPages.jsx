import React from 'react'
import { Navbar, Footer, MyCourseCard } from '../../Component';

import { LanguageProvider } from '../../store'
// import MyCoursesFinishCourse from '../../Component/MyCourseCard/MyCoursesFinishCourse'

export default function MyCousesPages() {
  return (
    <div>
        <LanguageProvider>
    <MyCourseCard></MyCourseCard>
        </LanguageProvider>
    </div>
  )
}
