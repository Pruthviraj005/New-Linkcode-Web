'use client';
import { useEffect, useState } from 'react';

export default function Checklist() {
  const [currentIndex, setCurrentIndex] = useState(0); // Tracks the current active item index
  const items = [
    { text: '100% Placement Assistance' },
    { text: 'Offline Classroom + Industry-Oriented Hands-On Training' },
    { text: 'Online Live Training + Recorded Sessions for Revision', highlight: true },
    { text: 'Internship with Stipend + Work on Live Projects' },
    { text: 'Support and Career guidance' },
    { text: 'Experienced and Certified Trainers' },
    { text: 'Hands - on projects from Day one' },
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % items.length); // Cycle through the items
    }, 2000); // Trigger every 2 seconds

    return () => clearInterval(interval);
  }, [items.length]);

  return (
    <div className="h-full flex items-center justify-center bg-gray-50 hover:shadow-lg">
      <ul className="space-y-4">
        {items.map((item, index) => (
          <li
            key={index}
            className={`flex items-center space-x-2 ${
              index === currentIndex
                ? 'text-lime-500' // Highlight the active item in green
                : 'text-gray-500' // Inactive items are gray
            }`}
          >
            <span
              className={`h-4 w-4 flex items-center justify-center rounded-full border-2 ${
                index === currentIndex
                  ? 'border-lime-500 bg-lime-500' // Green border and fill for active item
                  : 'border-gray-500' // Gray border for inactive items
              }`}
            >
              {index === currentIndex && (
                <span className="h-2 w-2 rounded-full bg-black"></span> // Small black dot for active item
              )}
            </span>
            <span className="text-lg">{item.text}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}
