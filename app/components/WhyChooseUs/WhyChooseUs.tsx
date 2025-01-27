"use client";
import React, { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { StickyScroll } from "@/app/components/ui/sticky-scroll-reveal";
import Image from "next/image";

type ContentItem = {
  title: string;
  description: string;
  content: React.ReactNode;
};

const content: ContentItem[] = [
  {
    title: "Collaborative Editing",
    description:
      "Work together in real time with your team, clients, and stakeholders. Collaborate on documents, share ideas, and make decisions quickly. With our platform, you can streamline your workflow and increase productivity.",
    content: (
      <motion.div
        className="h-full w-full bg-gradient-to-br from-cyan-500 to-emerald-500 flex items-center justify-center text-white text-center"
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        Collaborative Editing
      </motion.div>
    ),
  },
  {
    title: "Real time changes",
    description:
      "See changes as they happen. With our platform, you can track every modification in real time. No more confusion about the latest version of your project. Say goodbye to the chaos of version control and embrace the simplicity of real-time updates.",
    content: (
      <motion.div
        className="h-full w-full flex items-center justify-center text-white"
        initial={{ opacity: 0, x: -50 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5 }}
      >
        <Image
          src="/linear.webp"
          width={300}
          height={300}
          className="h-auto w-full object-cover"
          alt="linear board demo"
        />
      </motion.div>
    ),
  },
  {
    title: "Version control",
    description:
      "Experience real-time updates and never stress about version control again. Our platform ensures that you're always working on the most recent version of your project, eliminating the need for constant manual updates. Stay in the loop, keep your team aligned, and maintain the flow of your work without any interruptions.",
    content: (
      <motion.div
        className="h-full w-full bg-gradient-to-br from-orange-500 to-yellow-500 flex items-center justify-center text-white text-center"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6 }}
      >
        Version control
      </motion.div>
    ),
  },
  {
    title: "Running out of content",
    description:
      "Experience real-time updates and never stress about version control again. Our platform ensures that you're always working on the most recent version of your project, eliminating the need for constant manual updates. Stay in the loop, keep your team aligned, and maintain the flow of your work without any interruptions.",
    content: (
      <motion.div
        className="h-full w-full bg-gradient-to-br from-cyan-500 to-emerald-500 flex items-center justify-center text-white text-center"
        initial={{ y: 50, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        Running out of content
      </motion.div>
    ),
  },
];

export default function WhyChooseUs() {
  const contentRef = useRef<HTMLDivElement>(null);

  // Automatic scrolling logic
  useEffect(() => {
    const container = contentRef.current;
    if (!container) return;

    let scrollAmount = 0;
    const maxScroll = container.scrollHeight - container.clientHeight;

    const scrollInterval = setInterval(() => {
      if (maxScroll > 0) {
        scrollAmount = (scrollAmount + 1) % (maxScroll + 1); // Loop back to top after reaching the end
        container.scrollTo({
          top: scrollAmount,
          behavior: "smooth",
        });
      }
    }, 50); // Adjust interval to control scrolling speed

    return () => clearInterval(scrollInterval); // Cleanup on component unmount
  }, []);

  return (
    <motion.div
      className="container mx-auto py-10 -mt-28 px-4 sm:px-6 lg:px-8"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
    >
      <div className="mb-6">
        <motion.h1
          className="text-2xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-blue-950 text-center"
          initial={{ y: -50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.7 }}
        >
          Why Choose Us
        </motion.h1>
      </div>
      <div
        ref={contentRef}
        className="h-[24rem] w-full sm:h-[30rem] overflow-y-scroll scrollbar-hidden"
        style={{ overflow: "hidden" }}
      >
        <StickyScroll content={content} />
      </div>
    </motion.div>
  );
}
