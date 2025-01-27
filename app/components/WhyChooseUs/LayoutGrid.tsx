import React from 'react';

const features = [
  {
    icon: (
      <div className="h-full w-full flex flex-col items-center justify-center text-center text-white">
      <img src="/assets/why/lms-icon1.png" />
      </div>
    ),// Replace this with an actual icon (or SVG)
    title: 'Experienced and Certified Trainers.',
    description: '',
  },
  {
    icon: (
      <div className="h-full w-full flex flex-col items-center justify-center text-center text-white">
      <img src="/assets/why/lms-icon2.png" />
      </div>
    ),
    title: 'Internship opportunities with real clients.',
    description: '',
  },
  {
    icon: (
      <div className="h-full w-full flex flex-col items-center justify-center text-center text-white">
      <img src="/assets/why/lms-icon3.png" />
      </div>
    ),
    title: 'Support and Career guidance.',
    description: '',
  },
  {
    icon: (
      <div className="h-full w-full flex flex-col items-center justify-center text-center text-white">
      <img src="/assets/why/lms-icon4.png" />
      </div>
    ),
    title: 'Hands-on projects from Day one.',
    description: '',
  },
];

export default function LayoutGrid() {
  return (


    <div className='col-span-6 lg:col-span-5'>
      <div className='grid grid-cols-1 sm:grid-cols-2 gap-x-16 gap-y-6 lg:gap-x-6 px-10 py-12 -mt-7 bg-blue-50 rounded-3xl'>
        {features.map((feature, index) => (
          <div
            key={index}
            className="bg-white rounded-lg shadow-lg p-6 flex flex-row items-center text-center"
          >
            <div className="w-40">{feature.icon}</div>
            <p className="text-lg tracking-tighter font-semibold mb-2">{feature.title}</p>
            {feature.description && <p className="text-sm text-gray-600">{feature.description}</p>}
          </div>
        ))}
      </div>
    </div>
  );
}

