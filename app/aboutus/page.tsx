'use client'
import React from 'react'
import { motion } from 'framer-motion'
import StatsSection from './count'
import { TracingBeam } from '../components/ui/tracing-beam'
import { TextGenerateEffect } from '../components/ui/text-generate-effect'
import Checklist from './CheckList'

function AboutUs() {
  const fadeUp = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8 } }
  }

  return (
    <>
      {/* Header Section */}
      <div className='bg-sky-50 h-64 w-full flex items-center justify-center'>
        <h1 className='text-3xl sm:text-5xl font-bold tracking-wide text-center'>
          <span className='text-blue-500'>About</span> <span className='text-green-600'>Us</span>
        </h1>
      </div>

      {/* Stats Section */}
      <StatsSection />

      {/* Mission and Vision Section */}
      <TracingBeam>
        <div className='bg-white w-full p-6 sm:p-12'>
          {/* Our Mission */}
          <motion.h1
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
            variants={fadeUp}
            className='text-3xl sm:text-5xl font-bold tracking-wide mb-6 text-center sm:text-left lg:ml-28'
          >
            <span className='text-green-600'>Our</span> <span className='text-blue-500'>Mission</span>
          </motion.h1>
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
            variants={fadeUp}
            className='mx-auto sm:mx-0 sm:ml-10 lg:ml-32 w-72 h-40 sm:w-3/4 lg:w-1/2 justify-center place-content-center p-6 bg-white rounded-md shadow-md'
          >
            <p className='lg:text-lg sm:text-xl tracking-wide text-center sm:text-left '>
              Fostering a community of learners and professionals, where knowledge sharing and collaborative growth are core values.
            </p>
          </motion.div>

          {/* Our Vision */}
          <motion.h1
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
            variants={fadeUp}
            className='text-3xl sm:text-5xl font-bold tracking-wide mt-12 mb-6 text-center sm:text-right lg:mr-28'
          >
            <span className='text-green-600'>Our</span> <span className='text-blue-500'>Vision</span>
          </motion.h1>
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
            variants={fadeUp}
            className='mx-auto sm:mx-0 sm:ml-10 lg:ml-auto lg:mr-32  w-72 h-40 sm:w-3/4 lg:w-1/2 justify-center place-content-center p-6 bg-white rounded-md shadow-md'
          >
            <p className='lg:text-lg sm:text-xl tracking-wide text-center sm:text-left'>
              Fostering a community of learners and professionals, where knowledge sharing and collaborative growth are core values.
            </p>
          </motion.div>
        </div>

        {/* Why Linkcode */}
        <div>
          <h1 className='text-3xl sm:text-5xl font-semibold tracking-wide p-10 text-blue-500' >WHY LINKCODE ?</h1>
          <div className='flex flex-wrap gap-2'>
            <div className='border w-1/3 ml-14'>
              <a href="#" className="group relative block bg-black">
                <img
                  alt=""
                  src="https://images.unsplash.com/photo-1603871165848-0aa92c869fa1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=772&q=80"
                  className="absolute inset-0 h-full w-full object-cover opacity-75 transition-opacity group-hover:opacity-50"
                />

                <div className="relative p-4 sm:p-6 lg:p-8">
                  <p className="text-sm font-medium uppercase tracking-widest text-pink-500">MENTOR</p>

                  <p className="text-xl font-bold text-white sm:text-2xl">Tony Wayne</p>

                  <div className="mt-32 sm:mt-48 lg:mt-64">
                    <div
                      className="translate-y-8 transform opacity-0 transition-all group-hover:translate-y-0 group-hover:opacity-100"
                    >
                      <p className="text-sm text-white tracking-wide">
                        A dedicated mentor who provided invaluable guidance, insights, and support throughout the project, ensuring a balance of technical growth and personal development. Their expertise played a pivotal role in achieving project milestones effectively.
                      </p>
                    </div>
                  </div>

                </div>
              </a>
            </div>
            <div className='w-[700px]'>
              <Checklist />
            </div>
          </div>
        </div>
      </TracingBeam>
      <div className='border mt-10 w-full h-auto bg-green-700 flex flex-col md:flex-row md:h-40'>
        <div className='flex justify-center items-center'>
          <img src="/assets/newsletter/star-medal.png" alt="" className='w-20 mt-4 md:mt-10 lg:ml-36 ml-10' />
        </div>
        <div className='flex flex-col justify-center items-center text-center md:text-left md:w-1/2 p-4'>
          <h1 className='text-white text-lg lg:text-5xl mt-4 md:mt-12 font-semibold tracking-wide'>New Student Join Every Week</h1>
          <p className='text-gray-100 text-base lg:text-xl mt-2'>New Courses, interesting posts, popular books and much more!</p>
        </div>
        <div className='flex justify-center items-center md:items-start md:mt-16 md:ml-28'>
          <button className="shadow-[0_4px_14px_0_rgb(0,0,0,10%)] hover:shadow-[0_6px_20px_rgba(93,93,93,23%)] px-8 py-2 bg-[#fff] text-[#696969] rounded-md font-light transition duration-200 ease-linear mt-4 md:mt-0 ">
            Apply Course Now
          </button>
        </div>
      </div>

    </>
  )
}

export default AboutUs
