import React from "react";
import Image from "next/image";

const CourseSection = () => {
  return (
    <section className="bg-white py-16 px-4 sm:px-6 lg:px-8">
      <div className="container mx-auto flex flex-col md:flex-row items-center justify-between">
        <div className="md:w-1/2 lg:ml-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 text-orange-500">
            JAVA FULL STACK
          </h2>
          <h3 className="text-xl sm:text-2xl font-semibold text-blue-700 mb-4">
            🚀 Java Full Stack: Build a High-Paying Career
          </h3>
          <p className="text-blue-700 mb-6 w-full sm:w-3/4 tracking-wide mt-4">
            Learn industry-ready skills with hands-on projects, expert mentorship, and guaranteed job assistance. Build your future today with Linkcode.
          </p>

          <div className="mt-4 gap-4 flex flex-col sm:flex-row">
            <button className="border p-2 rounded-xl bg-orange-500 text-white pr-2 mb-2 sm:mb-0">
              📚 Explore the Course
            </button>
            <button className="border p-2 rounded-xl bg-green-500 text-white pr-2">
              🚀 Join Now and Get Started!
            </button>
          </div>
        </div>
        <div className="md:w-1/2 mt-8 md:mt-0 flex justify-center">
          <iframe
            src="https://www.youtube.com/embed/hs5ACr-G6fg"
            width="100%"
            height="300"
            className="max-w-full"
            style={{ maxWidth: '500px' }}
            title="Course Introduction"
          ></iframe>
        </div>
      </div>
    </section>
  );
};

export default CourseSection;