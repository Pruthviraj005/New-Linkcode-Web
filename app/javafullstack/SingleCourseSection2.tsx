import React, { useState, useEffect } from "react";

const CourseOverview = () => {
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  return (
    <div className="container mx-auto px-4 py-16">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="p-4">
          <h2 className="text-3xl font-bold mb-4">Course Overview</h2>
          <p className="text-xl font-medium justify-evenly -ml-6 tracking-normal">🌟What Makes Our Java Full Stack Development Course Unique?</p>
          <p className="text-base font-thin justify-evenly mt-2 ml-2 p-3">
            Dive into the world of full-stack development and master both front-end and back-end technologies. Designed for beginners and professionals alike, this course takes you from the basics of coding to advanced concepts like REST APIs, Spring Boot, and cloud deployment. Learn through hands-on projects and build a portfolio that showcases your expertise to potential employers.
          </p>
          <h3 className="text-2xl font-bold mt-8 mb-4 -ml-6">
            🎯 Why Choose Our Java Full Stack Course?
          </h3>
          <ul className="list-disc pl-6 p-4">
            <li>
              <span className="font-semibold text-gray-900">Comprehensive Learning:</span> From HTML and CSS to advanced Spring Boot and Hibernate, we’ve got you covered
            </li>
            <li>
              <span className="font-semibold text-gray-900">Hands-On Projects:</span> Gain real-world experience with projects that mimic industry scenarios.
            </li>
            <li>
              <span className="font-semibold text-gray-900">Expert Mentorship: </span> Learn from top-notch instructors with years of industry experience.
            </li>
            <li>
              <span className="font-semibold text-gray-9 00">Flexible Learning: </span> Access the course anytime, anywhere with lifetime access to resources.
            </li>
            <li>
              <span className="font-semibold text-gray-900">Job Assistance: </span> Resume building, mock interviews, and placement support to land your dream job.
            </li>
          </ul>
        </div>
        <div className="bg-orange-100 p-6 rounded-lg">
          <h3 className="text-xl font-bold mb-4 text-center">
            <span className="ml-2">Features of the Course</span>
          </h3>

          <div>
            <h2 className="text-xl tracking-wide text-gray-800 font-semibold">✨ What You'll Get:</h2>
            <ul className="ml-8 mt-6">
              <li className={`text-lg transition-transform duration-300 ${isHovered ? 'transform scale-105' : ''}`} onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>150+ hours of immersive video lectures</li>
              <li className={`text-lg transition-transform duration-300 ${isHovered ? 'transform scale-105' : ''}`} onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>Live coding sessions</li>
              <li className={`text-lg transition-transform duration-300 ${isHovered ? 'transform scale-105' : ''}`} onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>Lifetime access to course materials</li>
              <li className={`text-lg transition-transform duration-300 ${isHovered ? 'transform scale-105' : ''}`} onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>Certification upon completion</li>
              <li className={`text-lg transition-transform duration-300 ${isHovered ? 'transform scale-105' : ''}`} onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>Interactive doubt-clearing sessions</li>
            </ul>
          </div>
          
        </div>
      </div>
    </div>
  );
};

export default CourseOverview;