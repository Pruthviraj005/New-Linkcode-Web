"use client";
import React, { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import LayoutGrid from "../WhyChooseUs/LayoutGrid";

export const StickyScroll = ({
  content,
  contentClassName,
}: {
  content: {
    title: string;
    description: string;
    content?: React.ReactNode | any;
  }[];
  contentClassName?: string;
}) => {
  const [activeCard, setActiveCard] = useState(0);
  const ref = useRef<HTMLDivElement>(null);

  const backgroundColors = [
    "rgb(248 250 252 / var(--tw-bg-opacity, 1))",
    "rgb(248 250 252 / var(--tw-bg-opacity, 1))",
    "rgb(248 250 252 / var(--tw-bg-opacity, 1))",
  ];
  const linearGradients = [
    "linear-gradient(to bottom right, var(--cyan-500), var(--emerald-500))",
    "linear-gradient(to bottom right, var(--pink-500), var(--indigo-500))",
    "linear-gradient(to bottom right, var(--orange-500), var(--yellow-500))",
  ];

  const [backgroundGradient, setBackgroundGradient] = useState(
    linearGradients[0]
  );

  useEffect(() => {
    setBackgroundGradient(linearGradients[activeCard % linearGradients.length]);
  }, [activeCard]);

  // Auto-scrolling and content highlighting logic
  useEffect(() => {
    const container = ref.current;
    if (!container) return;

    let scrollAmount = 0;
    const maxScroll = container.scrollHeight - container.clientHeight;

    // Store the offset positions of the cards
    const cardOffsets = Array.from(
      container.querySelectorAll(".content-card")
    ).map((card: HTMLElement) => ({
      offsetTop: card.offsetTop,
      height: card.offsetHeight,
    }));

    const scrollInterval = setInterval(() => {
      if (maxScroll > 0) {
        scrollAmount = (scrollAmount + 2) % (maxScroll + 1); // Loop back to the top
        container.scrollTo({
          top: scrollAmount,
          behavior: "smooth",
        });

        // Highlight logic: Check when the last fourth line of the current card scrolls up
        cardOffsets.forEach((card, index) => {
          const fourthLineHeight = card.height / 4;
          const triggerPoint = card.offsetTop + card.height - fourthLineHeight;

          if (scrollAmount >= triggerPoint) {
            setActiveCard(index + 1); // Highlight the next card
          }
        });
      }
    }, 30); // Adjust interval speed here

    return () => clearInterval(scrollInterval); // Cleanup on unmount
  }, []);

  return (
    <motion.div
      animate={{
        backgroundColor: backgroundColors[activeCard % backgroundColors.length],
      }}
      className="h-[30rem] overflow-hidden flex justify-center relative space-x-10 rounded-md p-10"
      ref={ref}
    >
      <div className="relative flex items-start px-4 ml-14">
        <div className="max-w-2xl">
          {content.map((item, index) => (
            <div
              key={item.title + index}
              className={`my-20 content-card transition-all duration-500 ${
                activeCard === index
                  ? "bg-blue-100 text-blue-900 p-6 rounded-lg shadow-md"
                  : "text-gray-700"
              }`}
            >
              <motion.h2
                initial={{ opacity: 0 }}
                animate={{
                  opacity: activeCard === index ? 1 : 0.3,
                }}
                className={`text-2xl font-bold ${
                  activeCard === index ? "text-3xl font-extrabold" : ""
                }`}
              >
                {item.title}
              </motion.h2>
              <motion.p
                initial={{ opacity: 0 }}
                animate={{
                  opacity: activeCard === index ? 1 : 0.3,
                }}
                className="text-lg mt-4"
              >
                {item.description}
              </motion.p>
            </div>
          ))}
          <div className="h-40" />
        </div>
      </div>

      <div className="hidden lg:block rounded-md w-1/2 justify-center sticky overflow-hidden top-5">
        <LayoutGrid />
      </div>
    </motion.div>
  );
};
