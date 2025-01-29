'use client'
import React from 'react'

function page() {
  return (
    <>

      {/* Hero Section */}
      <section
        className="relative bg-sky-50"
      >
        <div
          className="absolute inset-0 bg-gray-900/75 sm:bg-transparent sm:from-gray-900/95 sm:to-gray-900/25 ltr:sm:bg-gradient-to-r rtl:sm:bg-gradient-to-l"
        ></div>

        <div
          className="relative mx-auto max-w-screen-xl px-4 py-32 sm:px-6 lg:flex lg:items-center lg:px-8"
        >
          <div className="max-w-xl text-center ltr:sm:text-left rtl:sm:text-right">
            <h1 className="text-3xl font-extrabold text-blue-500 sm:text-5xl">
              BLOG

              <strong className="block font-extrabold text-green-600"> Learn. Share. Grow. </strong>
            </h1>

            <div className="mt-8 flex flex-wrap gap-4 text-center">
              <a
                href="#"
                className="block w-full rounded bg-blue-600 px-12 py-3 text-sm text-white shadow hover:bg-blue-700 focus:outline-none focus:ring active:bg-blue-700 sm:w-auto font-medium m-auto"
              >
                Get Started
              </a>

            </div>
          </div>
        </div>
      </section>

      <div className='border border-gray-200'></div> {/* separating hero section and blog section */}

      {/* Blog Section */}
      <div className='border border-gray-300 h-96'>

      </div>
      
    </>
  )
}

export default page
