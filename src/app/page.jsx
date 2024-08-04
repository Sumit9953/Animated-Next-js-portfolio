"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

const Homepage = () => {
  return (
    <motion.div
      className="h-full"
      initial={{ y: "-200vh" }}
      animate={{ y: "0%" }}
      transition={{ duration: 1 }}
    >
      <div className="h-full dark:bg-slate-800 text-black dark:text-white flex flex-col lg:flex-row px-4 sm:px-8 md:px-12 lg:px-20 xl:px-48">
        <div className=" h-1/2 relative lg:h-full lg:w-1/2 ">
          <Image src="/hero.png" alt="" fill className="object-contain" />
        </div>

        {/* Text container */}
        <div className="h-1/2 flex flex-col lg:h-full lg:w-1/2 gap-8 items-center justify-center">
          <h1 className="text-4xl md:text-6xl font-bold">Hey I'm Santosh</h1>
          <p className="md:text-xl">
            Adaptable Zoho Developer with extensive experience providing first
            class result. Meets job demands and deadlines through diligent
            work-ethic and dedication to quality
          </p>
          <div className="flex gap-4">
            <Link
              href="about"
              className="p-4 rounded-lg ring-1 ring-black bg-black dark:bg-white dark:text-black text-white"
            >
              View My work
            </Link>
            <Link
              href="contact"
              className="p-4 rounded-lg ring-1 ring-black dark:ring-white"
            >
              Contact me
            </Link>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default Homepage;
