'use client'
import React from 'react'
import Image from 'next/image'

function CourseLastSection() {
  return (
    <div className='mt-10 w-11/12 mx-auto flex flex-col md:flex-row gap-4'>
      <div className='md:w-1/2'>
        <h1 className='p-4 pl-0 md:pl-16 text-3xl font-bold'>Job Opportunities</h1>
        <h2 className='pl-0 md:pl-16 text-2xl'>
          💼 Unlock Exciting Career Opportunities!
        </h2>
        <p className='pl-0 md:pl-16 text-base text-gray-800'>
          Become a highly sought-after Java Full Stack Developer and open doors to lucrative career opportunities in the tech industry. Popular job roles include:
        </p>
        <ul className='mt-4'>
          <li className='pl-0 md:pl-16 flex gap-2'><span><Image width={20} height={10} alt={""} src={'/assets/checkmark.png'} /></span>Full Stack Developer</li>
          <li className='pl-0 md:pl-16 flex gap-2'><span><Image width={20} height={10} alt={""} src={'/assets/checkmark.png'} /></span>Software Engineer</li>
          <li className='pl-0 md:pl-16 flex gap-2'><span><Image width={20} height={10} alt={""} src={'/assets/checkmark.png'} /></span>Backend Developer</li>
          <li className='pl-0 md:pl-16 flex gap-2'><span><Image width={20} height={10} alt={""} src={'/assets/checkmark.png'} /></span>Frontend Developer</li>
        </ul>
      </div>
      <div className='border text-center md:w-1/2 p-4'>
        <h1 className='font-bold text-3xl'>Enquiry Form</h1>
        {/* You can add a form here if needed */}
      </div>
    </div>
  )
}

export default CourseLastSection;