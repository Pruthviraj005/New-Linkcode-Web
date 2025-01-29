'use client'
import React from 'react'
import CourseSection from './SingleCourseSection1'
import CourseOverview from './SingleCourseSection2'
import CourseContent from './SingleCourseSection3'
import CourseLastSection from './SingleCourseSection4'

function page() {
  return (
    <>

      <CourseSection />
      <CourseOverview />
      <CourseContent />
      <CourseLastSection />
    </>
  )
}

export default page
