import Image from 'next/image';
import React from 'react';

const features = [
  {
    icon: (
      <div className="h-full w-full flex flex-col items-center justify-center text-center text-white">
        <Image width={0} height={0} alt='' src="/assets/why/lms-icon1.png" />
      </div>
    ),// Replace this with an actual icon (or SVG)

  },
  {
    icon: (
      <div className="h-full w-full flex flex-col items-center justify-center text-center text-white">
        <Image width={0} height={0} alt='' src="/assets/why/lms-icon2.png" />
      </div>
    ),

  },
  {
    icon: (
      <div className="h-full w-full flex flex-col items-center justify-center text-center text-white">
        <Image width={0} height={0} alt='' src="/assets/why/lms-icon3.png" />
      </div>
    ),

  },
  {
    icon: (
      <div className="h-full w-full flex flex-col items-center justify-center text-center text-white">
        <Image width={0} height={0} alt='' src="/assets/why/lms-icon4.png" />
      </div>
    ),

  },
];

export default function LayoutGrid() {
  return (


    <div className='col-span-6 lg:col-span-5'>
      <div className='grid grid-cols-1 sm:grid-cols-2 gap-x-16 gap-y-2 lg:gap-x-2 px-10 py-12 -mt-4 bg-blue-50 rounded-3xl'>
        {features.map((feature, index) => (
          <div
            key={index}
            className="bg-white rounded-lg shadow-lg p-6 flex flex-row items-center text-center  justify-center"
          >
            <div className="w-28">{feature.icon}</div>

          </div>
        ))}
      </div>
    </div>
  );
}

