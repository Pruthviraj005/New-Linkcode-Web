import React from 'react';

const CourseContent = () => {
  return (
    <div className="container mx-auto px-4">
      <h2 className="text-3xl font-bold mb-6">Modules to be Covered</h2>
      <h3 className='text-2xl font-bold mb-6'>📖 What You&apos;ll Learn</h3>
      <div>
        <div className="bg-green-400 rounded-md p-1 pl-4">
          <h3 className="text-xl font-bold text-white">Module 1</h3>
        </div>
        <p className='pl-6 p-2 bg-gray-50'>Front-End Technologies (HTML, CSS, JavaScript, React.js/Angular)</p>
      </div>

      <div>
        <div className="bg-green-400 rounded-md p-1 pl-4">
          <h3 className="text-xl font-bold text-white">Module 2</h3>
        </div>
        <p className='pl-6 p-2 bg-gray-50'>Core Java and Object-Oriented Programming</p>
      </div>

      <div>
        <div className="bg-green-400 rounded-md p-1 pl-4">
          <h3 className="text-xl font-bold text-white">Module 3</h3>
        </div>
        <p className='pl-6 p-2 bg-gray-50'>Backend Development with Spring Boot</p>
      </div>

      <div>
        <div className="bg-green-400 rounded-md p-1 pl-4">
          <h3 className="text-xl font-bold text-white">Module 4</h3>
        </div>
        <p className='pl-6 p-2 bg-gray-50'>Database Management (SQL, Hibernate)</p>
      </div>

      <div>
        <div className="bg-green-400 rounded-md p-1 pl-4">
          <h3 className="text-xl font-bold text-white">Module 5</h3>
        </div>
        <p className='pl-6 p-2 bg-gray-50'>DevOps Essentials (Git)</p>
      </div>

      <div>
        <div className="bg-green-400 rounded-md p-1 pl-4">
          <h3 className="text-xl font-bold text-white">Module 6</h3>
        </div>
        <p className='pl-6 p-2 bg-gray-50'>Full-Stack Project and Deployment</p>
      </div>

    </div>
  );
};

export default CourseContent;
