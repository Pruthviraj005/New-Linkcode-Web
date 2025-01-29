import React from 'react'

function CourseLastSection() {
  return (
    <div className='border mt-10 w-11/12 mx-auto h-80 flex gap-4'>
      <div className='border w-1/2'>
        <h1 className='p-4 pl-16 text-3xl font-bold'>Job Opportunities</h1>
        <h2 className='pl-16 text-2xl'>
          💼 Unlock Exciting Career Opportunities!
        </h2>
        <p className='pl-16 text-base text-gray-800'>Become a highly sought-after Java Full Stack Developer and open doors to lucrative career opportunities in the tech industry. Popular job roles include:</p>
        <ul className='border pl-20'>
          <li>Full Stack Developer</li>
          <li>Software Engineer</li>
          <li>Backend Developer</li>
          <li>Frontend Developer</li>
        </ul>
      </div>
      <div className='border w-1/2'>
        <h1>Enquiry Form</h1>
      </div>
    </div>
  )
}

export default CourseLastSection
