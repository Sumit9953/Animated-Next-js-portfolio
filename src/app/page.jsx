"use client"

import { motion } from "framer-motion";
import Image from "next/image";

const Homepage = () => {
  return (
    <motion.div 
    className="h-full"
    initial={{y: "-200vh"}}
    animate={{y: "0%"}}
    transition={{duration: 1}}
    >
      <div className="h-full flex flex-col lg:flex-row px-4 sm:px-8 md:px-12 lg:px-20 xl:px-48">
        <div className=" h-1/2 relative lg:h-full lg:w-1/2 ">
          <Image src="/hero.png" alt="" fill className="object-contain" />
        </div>

        {/* Text container */}
        <div className="h-1/2 flex flex-col lg:h-full lg:w-1/2 gap-8 items-center justify-center">
          <h1 className="text-4xl md:text-6xl font-bold">Hey I m Sumit</h1>
          <p className="md:text-xl">
            I m a Full Stack Web Developer with a. strong passion for building
            web applications with great user experiences. Here s a bit more
            about me
          </p>
          <div className="flex gap-4">
            <button className="p-4 rounded-lg ring-1 ring-black bg-black text-white">
              View My work
            </button>
            <button className="p-4 rounded-lg ring-1 ring-black">
              Contact me
            </button>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default Homepage;
