"use client";

import React, { useRef } from "react";
import { motion, useInView, useScroll } from "framer-motion";
import Brain from "@/components/brain";

const About = () => {
  const containerRef = useRef();

  const { scrollYProgress } = useScroll({ container: containerRef });

  const skillRef = useRef();
  // const isSkillRefInView = useInView(skillRef, {once:true});
  const isSkillRefInView = useInView(skillRef, { margin: "-100px" });

  const experienceRef = useRef();
  const isExperienceRefInView = useInView(experienceRef, { margin: "-100px" });

  return (
    <motion.div
      className="h-full"
      initial={{ y: "-200vh" }}
      animate={{ y: "0%" }}
      transition={{ duration: 1 }}
    >
      {/* Container */}
      <div
        className="h-full  overflow-scroll dark:bg-slate-800 text-black dark:text-white lg:flex"
        ref={containerRef}
      >
        {/* Text contaniner */}
        <div
          className="p-4 sm:p-8 md:p-12 lg:p-20 xl:p-10  flex  flex-col gap-24 md:gap-32 lg:gap-48 xl:gap-20 lg:w-2/3 lg:pr-0 xl:w-1/2
        "
        >
          {/* Biograpgy */}
          <div className="flex flex-col gap-12 justify-center">
            <h1 className="font-bold text-2xl">BIOGRAPHY</h1>
            <p className="text-lg">
              Adaptable Zoho Developer with extensive experience providing first
              class result. Meets job demands and deadlines through diligent
              work-ethic and dedication to quality
            </p>
            {/* <span className=" italic">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Voluptatibus, quam?
            </span> */}

            <motion.svg
              initial={{ opacity: 0.2, y: 0 }}
              animate={{ opacity: 1, y: "10px" }}
              transition={{ repeat: Infinity, duration: 3, ease: "easeInOut" }}
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              width={50}
              height={50}
              className="dark:fill-white"
            >
              <path
                d="M5 15C5 16.8565 5.73754 18.6371 7.05029 19.9498C8.36305 21.2626 10.1435 21.9999 12 21.9999C13.8565 21.9999 15.637 21.2626 16.9498 19.9498C18.2625 18.6371 19 16.8565 19 15V9C19 7.14348 18.2625 5.36305 16.9498 4.05029C15.637 2.73754 13.8565 2 12 2C10.1435 2 8.36305 2.73754 7.05029 4.05029C5.73754 5.36305 5 7.14348 5 9V15Z"
                stroke="#000000"
                strokeWidth="1"
              ></path>
              <path d="M12 6V14" stroke="#000000" strokeWidth="1"></path>
              <path
                d="M15 11L12 14L9 11"
                stroke="#000000"
                strokeWidth="1"
              ></path>
            </motion.svg>
          </div>
          {/* skilss */}
          <div className="flex flex-col gap-12 justify-center " ref={skillRef}>
            <motion.h1
              initial={{ x: "-300px" }}
              animate={isSkillRefInView ? { x: 0 } : {}}
              transition={{ delay: 0.5 }}
              className="font-bold text-2xl"
            >
              SKILLS
            </motion.h1>

            <motion.div
              initial={{ x: "-1000px" }}
              animate={isSkillRefInView ? { x: 0 } : {}}
              transition={{ delay: 0.2, ease: "easeIn" }}
              className="flex gap-4 flex-wrap"
            >
              <div className="rounded p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black ">
                Deluge
              </div>
              <div className="rounded p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black ">
                Api Integration
              </div>
              <div className="rounded p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black ">
                Webhooks
              </div>
              <div className="rounded p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black ">
                CRM
              </div>
              <div className="rounded p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black ">
                Creator
              </div>
              <div className="rounded p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black ">
                Accounts
              </div>
              <div className="rounded p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black ">
                Analytics
              </div>
              <div className="rounded p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black ">
                Desk
              </div>
              <div className="rounded p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black ">
                Flow
              </div>
              <div className="rounded p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black ">
                Data Migration
              </div>
              <div className="rounded p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black ">
                SalesIQ
              </div>
              <div className="rounded p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black ">
                Marketing
              </div>
              <div className="rounded p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black ">
                Backstage
              </div>
              <div className="rounded p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black ">
                Sign
              </div>
              <div className="rounded p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black ">
                Writter
              </div>
              <div className="rounded p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black ">
                Zapier
              </div>
              <div className="rounded p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black ">
                Other Zoho Application
              </div>
            </motion.div>

            <motion.svg
              initial={{ opacity: 0.2, y: 0 }}
              animate={{ opacity: 1, y: "10px" }}
              transition={{ repeat: Infinity, duration: 3, ease: "easeInOut" }}
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              width={40}
              height={40}
              className="dark:fill-white"
            >
              <path
                d="M5 15C5 16.8565 5.73754 18.6371 7.05029 19.9498C8.36305 21.2626 10.1435 21.9999 12 21.9999C13.8565 21.9999 15.637 21.2626 16.9498 19.9498C18.2625 18.6371 19 16.8565 19 15V9C19 7.14348 18.2625 5.36305 16.9498 4.05029C15.637 2.73754 13.8565 2 12 2C10.1435 2 8.36305 2.73754 7.05029 4.05029C5.73754 5.36305 5 7.14348 5 9V15Z"
                stroke="#000000"
                strokeWidth="1"
              ></path>
              <path d="M12 6V14" stroke="#000000" strokeWidth="1"></path>
              <path
                d="M15 11L12 14L9 11"
                stroke="#000000"
                strokeWidth="1"
              ></path>
            </motion.svg>
          </div>
          {/* expeience */}
          <div
            className="flex flex-col  gap-12 justify-center  pb-48"
            ref={experienceRef}
          >
            <motion.h1
              initial={{ x: "-1000px" }}
              animate={isExperienceRefInView ? { x: 0 } : {}}
              transition={{ delay: 0.5 }}
              className="font-bold text-2xl"
            >
              EXPERIENCE
            </motion.h1>

            {/* Expeience list */}
            <motion.div
              initial={{ x: "10000px" }}
              animate={isExperienceRefInView ? { x: 0 } : {}}
              transition={{ duration: 0.5, ease: "easeInOut" }}
            >
              <div className="flex justify-between h-48">
                {/* left */}
                <div className="w-1/3">
                  <div className="bg-white dark:text-black p-3 font-semibold rounded-b-lg rounded-s-lg">
                    Zoho Developer
                  </div>
                  <div className="p-3 text-sm italic">
                    I've worked at Delveio for 2.5 years, completing about 30
                    projects with a focus on CRM and case studies. I’m skilled
                    in accounting, API integration, webhooks, Deluge scripting,
                    and Zoho Creator applications. I developed a barcoding
                    system and customer portals, and have strong analytics and
                    SQL skills, as well as marketing application knowledge. My
                    experience and continuous learning have prepared me for
                    complex projects.
                  </div>
                  <div className="p-3 text-red-400 text-sm font-semibold">
                    Apr 2022 to Current
                  </div>
                  <div className="p-1 rounded bg-white text-sm font-semibold text-black w-fit">
                    Delveio Consulting
                  </div>
                </div>

                {/* center */}
                <div className="w-1/6 ">
                  <div className="w-1 h-full bg-gray-600 rounded relative">
                    <div className="absolute w-5 h-5 rounded-full ring-4 ring-red-400 bg-white -left-2"></div>
                  </div>
                </div>
                {/* right */}
                <div className="w-1/3"></div>
              </div>

              <div className="flex justify-between h-48">
                {/* left */}
                <div className="w-1/3"></div>

                {/* center */}
                <div className="w-1/6 ">
                  <div className="w-1 h-full bg-gray-600 dark:bg-gray-50 rounded relative">
                    <div className="absolute w-5 h-5 rounded-full ring-4 ring-red-400 bg-white -left-2"></div>
                  </div>
                </div>
                {/* right */}

                <div className="w-1/3 ">
                  <div className="bg-white dark:text-black p-3 font-semibold rounded-b-lg rounded-s-lg">
                    Zoho Developer
                  </div>
                  <div className="p-3 text-sm italic">
                    With extensive freelancing experience, I have successfully
                    managed Zoho setups for multiple organizations. My expertise
                    includes handling complex projects and delivering tailored
                    solutions to meet diverse business needs. I am dedicated to
                    providing exceptional service and ensuring optimal results
                    for every client.
                  </div>
                  <div className="p-3 text-red-400 text-sm font-semibold"></div>
                  <div className="p-1 rounded bg-white text-sm font-semibold text-black w-fit">
                    freelancing
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
        {/* svg contaniner */}
        <div className="hidden lg:block sticky top-0 z-30 w-1/3 xl:w-1/2">
          <Brain scrollYProgress={scrollYProgress} />
        </div>
      </div>
    </motion.div>
  );
};

export default About;
