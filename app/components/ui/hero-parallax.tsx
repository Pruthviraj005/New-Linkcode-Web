"use client";
import React from "react";
import {
  motion,
  useScroll,
  useTransform,
  useSpring,
  MotionValue,
} from "framer-motion";
import Image from "next/image";
import Link from "next/link";

// export const HeroParallax = ({
//   products,
// }: {
//   products: {
//     title: string;
//     link: string;
//     thumbnail: string;
//   }[];
// }) => {
//   const firstRow = products.slice(0, 3);
//   const secondRow = products.slice(3,6);
//   const thirdRow = products.slice(6, 9);
//   const ref = React.useRef(null);
//   const { scrollYProgress } = useScroll({
//     target: ref,
//     offset: ["start start", "end start"],
//   });

//   const springConfig = { stiffness: 300, damping: 30, bounce: 100 };

//   const translateX = useSpring(
//     useTransform(scrollYProgress, [0, 1], [0, 1000]),
//     springConfig
//   );
//   const translateXReverse = useSpring(
//     useTransform(scrollYProgress, [0, 1], [0, -1000]),
//     springConfig
//   );
//   const rotateX = useSpring(
//     useTransform(scrollYProgress, [0, 0.2], [15, 0]),
//     springConfig
//   );
//   const opacity = useSpring(
//     useTransform(scrollYProgress, [0, 0.2], [0.2, 1]),
//     springConfig
//   );
//   const rotateZ = useSpring(
//     useTransform(scrollYProgress, [0, 0.2], [20, 0]),
//     springConfig
//   );
//   const translateY = useSpring(
//     useTransform(scrollYProgress, [0, 0.2], [-700, 500]),
//     springConfig
//   );
//   return (
//     <div
//       ref={ref}
//       className=" py-40 overflow-hidden  antialiased relative flex flex-col self-auto [perspective:1000px] [transform-style:preserve-3d]"
//     >
//       <Header />
//       <motion.div
//         style={{
//           rotateX,
//           rotateZ,
//           translateY,
//           opacity,
//         }}
//         className=""
//       >
//         <motion.div className="flex flex-row-reverse space-x-reverse space-x-20 mb-20">
//           {firstRow.map((product) => (
//             <ProductCard
//               product={product}
//               translate={translateX}
//               key={product.title}
//             />
//           ))}
//         </motion.div>
//         <motion.div className="flex flex-row  mb-20 space-x-20 ">
//           {secondRow.map((product) => (
//             <ProductCard
//               product={product}
//               translate={translateXReverse}
//               key={product.title}
//             />
//           ))}
//         </motion.div>
//         <motion.div className="flex flex-row-reverse space-x-reverse space-x-20">
//           {thirdRow.map((product) => (
//             <ProductCard
//               product={product}
//               translate={translateX}
//               key={product.title}
//             />
//           ))}
//         </motion.div>
//       </motion.div>
//     </div>
//   );
// };

export const Header = () => {
  return (
    <div className="max-w-7xl relative mx-auto py-20 md:py-40 px-4 w-full  left-0 top-0 bg-sky-50">
      <h1 className="text-2xl md:text-7xl font-bold bg-gradient-to-r from-purple-700 via-blue-600 to-green-500 bg-clip-text text-transparent animate-fadeIn">
        Unlock Your Coding Potential. <br /> Linking To The Corporate World
      </h1>
      <p className="max-w-2xl text-base md:text-xl mt-8 text-gray-950">
        Unleash your coding potential with Linkcode. Decode the digital world and build the future.
      </p>

      <button className="px-8 py-2 rounded-full bg-gradient-to-b from-blue-500 to-blue-600 text-white focus:ring-2 focus:ring-blue-400 hover:shadow-xl transition duration-200 mt-10">
        Get Started
      </button>

    </div>
  );
};

// export const ProductCard = ({
//   product,
//   translate,
// }: {
//   product: {
//     title: string;
//     link: string;
//     thumbnail: string;
//   };
//   translate: MotionValue<number>;
// }) => {
//   return (
//     <div className="-mt-20">
//       <motion.div
//         style={{
//           x: translate,
//         }}
//         whileHover={{
//           y: -20,
//         }}
//         key={product.title}
//         className="group/product relative flex-shrink-0 mt-4 w-full md:w-[50rem] h-96" // Responsive width and fixed height
//       >
//         <Link
//           href={product.link}
//           className="block group-hover/product:shadow-2xl "
//         >
//           <Image
//             src={product.thumbnail}
//             height={400} // Height adjusted for better responsiveness
//             width={1600} // Increased width for full-screen width on large screens
//             className="h-full w-full object-cover object-center absolute inset-0" // Ensure image covers container
//             alt={product.title}
//           />
//         </Link>
//         <div className="absolute inset-0 h-full w-full opacity-0 group-hover/product:opacity-80 bg-black pointer-events-none hidden"></div>
//         <h2 className="absolute bottom-4 left-4 opacity-0 group-hover/product:opacity-100 text-white">
//           {product.title}
//         </h2>
//       </motion.div>
//     </div>
//   );
// };
