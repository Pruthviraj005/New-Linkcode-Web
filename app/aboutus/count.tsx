'use client'
import React from 'react';

const StatsSection = () => {
  return (
    <section className="bg-white text-gray-700 py-10">
      <div className="container mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        <div className="flex flex-col items-center animate-fadeIn">
          <h1 className="text-5xl font-bold mb-2 text-blue-500 shadow-lg p-3 rounded-xl bg-gray-50">4000</h1>
          <p className='text-green-700 text-xl mt-4 tracking-wider font-semibold'>Students Placed</p>
        </div>
        <div className="flex flex-col items-center animate-fadeIn">
          <h1 className="text-5xl font-bold mb-2 text-blue-500 shadow-lg p-3 rounded-xl bg-gray-50">600</h1>
          <p className='text-green-700 text-xl mt-4 tracking-wider font-semibold'>Clients</p>
        </div>
        <div className="flex flex-col items-center animate-fadeIn">
          <h1 className="text-5xl font-bold mb-2 text-blue-500 shadow-lg p-3 rounded-xl bg-gray-50">150</h1>
          <p className='text-green-700 text-xl mt-4 tracking-wider font-semibold'>Industry Trainers</p>
        </div>
        <div className="flex flex-col items-center animate-fadeIn">
          <h1 className="text-5xl font-bold mb-2 text-blue-500 shadow-lg p-3 rounded-xl bg-gray-50">500</h1>
          <p className='text-green-700 text-xl mt-4 tracking-wider font-semibold'>Placement Drives</p>
        </div>
      </div>
    </section>
  );
};

export default StatsSection;