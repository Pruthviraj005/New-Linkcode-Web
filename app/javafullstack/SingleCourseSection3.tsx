import React from 'react';

const CourseContent = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <h2 className="text-3xl sm:text-4xl font-bold mb-6">Modules to be Covered</h2>
      <h3 className='text-2xl sm:text-3xl font-bold mb-6'>📖 What You&apos;ll Learn</h3>
      <div>
        {Array.from({ length: 6 }, (_, index) => (
          <div key={index} className="mb-4">
            <div className="bg-green-400 rounded-md p-1 pl-4">
              <h3 className="text-xl sm:text-2xl font-bold text-white">Module {index + 1}</h3>
            </div>
            <p className='pl-6 p-2 bg-gray-50 text-base sm:text-lg'>
              {getModuleDescription(index)}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

// Function to return module descriptions based on the index
const getModuleDescription = (index: number) => {
  const descriptions = [
    "Front-End Technologies (HTML, CSS, JavaScript, React.js/Angular)",
    "Core Java and Object-Oriented Programming",
    "Backend Development with Spring Boot",
    "Database Management (SQL, Hibernate)",
    "DevOps Essentials (Git)",
    "Full-Stack Project and Deployment"
  ];
  return descriptions[index];
};

export default CourseContent;