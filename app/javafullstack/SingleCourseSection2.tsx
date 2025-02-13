import React from "react";
import Image from "next/image";

const CourseOverview = () => {
  return (
    <div className="container mx-auto px-4 py-16">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="p-4">
          <h2 className="text-3xl font-bold mb-4">Course Overview</h2>
          <p className="text-xl font-semibold tracking-tight">
            🌟 What Makes Our Java Full Stack Development Course Unique?
          </p>
          <p className="text-base font-thin mt-2 p-3">
            Dive into the world of full-stack development and master both front-end and back-end technologies. Designed for beginners and professionals alike, this course takes you from the basics of coding to advanced concepts like REST APIs, Spring Boot, and cloud deployment. Learn through hands-on projects and build a portfolio that showcases your expertise to potential employers.
          </p>
          <h3 className="text-xl font-semibold mt-8 mb-4">
            🎯 Why Choose Our Java Full Stack Course?
          </h3>
          <ul className="list-disc pl-6 p-4">
            <li>
              <span className="font-semibold text-gray-900">Comprehensive Learning:</span> From HTML and CSS to advanced Spring Boot and Hibernate, we’ve got you covered.
            </li>
            <li>
              <span className="font-semibold text-gray-900">Hands-On Projects:</span> Gain real-world experience with projects that mimic industry scenarios.
            </li>
            <li>
              <span className="font-semibold text-gray-900">Expert Mentorship:</span> Learn from top-notch instructors with years of industry experience.
            </li>
            <li>
              <span className="font-semibold text-gray-900">Flexible Learning:</span> Access the course anytime, anywhere with lifetime access to resources.
            </li>
            <li>
              <span className="font-semibold text-gray-900">Job Assistance:</span> Resume building, mock interviews, and placement support to land your dream job.
            </li>
          </ul>
        </div>
        <div>
          <div className="shadow-md p-6 rounded-lg">
            <h3 className="text-xl font-bold mb-4 text-center flex bg-orange-300 p-2 rounded-xl">
              <span>
                <Image width={100} height={10} alt={''} src="/assets/java.png" className="w-8" />
              </span>
              <span className="ml-auto">Features of the Course</span>
            </h3>

            <div>
              <h2 className="text-xl tracking-wide text-gray-800 font-semibold">✨ What You’ll Get:</h2>
              <ul className="ml-10 mt-6 space-y-2"> {/* Added space-y-2 for spacing between list items */}
                <li className="text-lg transition-all duration-300 bg-white hover:bg-blue-100 hover:scale-105 hover:shadow-lg p-2 rounded">150+ hours of immersive video lectures</li>
                <li className="text-lg transition-all duration-300 bg-white hover:bg-blue-100 hover:scale-105 hover:shadow-lg p-2 rounded">Live coding sessions</li>
                <li className="text-lg transition-all duration-300 bg-white hover:bg-blue-100 hover:scale-105 hover:shadow-lg p-2 rounded">Lifetime access to course materials</li>
                <li className="text-lg transition-all duration-300 bg-white hover:bg-blue-100 hover:scale-105 hover:shadow-lg p-2 rounded">Certification upon completion</li>
                <li className="text-lg transition-all duration-300 bg-white hover:bg-blue-100 hover:scale-105 hover:shadow-lg p-2 rounded">Interactive doubt-clearing sessions</li>
              </ul>
            </div>
          </div>

          <div className="shadow-md mt-4 rounded-xl">
            <h3 className="p-2 pl-4 text-xl font-bold bg-orange-300 rounded-xl w-11/12 ml-6 text-center">Key Advantages of Learning Java Full Stack</h3>
            <p className="p-4 text-base font-semibold">🔥 Why Java Full Stack is the Skill of the Future</p>
            <ul className="pl-10 space-y-2"> {/* Added space-y-2 for spacing between list items */}
              <li className="p-0.5 hover:text-orange-600">High demand across industries</li>
              <li className="p-0.5 hover:text-orange-600">Versatility in creating scalable web and mobile applications</li>
              <li className="p-0.5 hover:text-orange-600">Seamless integration with emerging technologies</li>
              <li className="p-0.5 hover:text-orange-600">Backed by a strong community and long-term relevance</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CourseOverview;