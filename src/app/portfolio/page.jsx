"use client";
import { motion, useInView, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { useRef } from "react";

const items = [
  {
    id: 1,
    color: "from-red-300  to-blue-300 dark:from-slate-100 dark:to-red-100",
    title: "Zoho CRM",
    desc: "With extensive experience in Zoho CRM customization, I have successfully tailored over 30 accounts to meet diverse client demands, ensuring each solution is uniquely crafted to fit the client's specific needs across various industries. My key customizations and integrations include transitioning entire loan calculation systems from Excel to Zoho CRM for enhanced efficiency and accuracy, implementing a unique lead deduplication process based on departments to match clients' internal structures, and developing bespoke integrations with Zoho Sign for secure digital signing workflows. Additionally, I have created specialized finance templates within Zoho CRM to meet diverse business model needs, designed unique calculation methods for quotes and sales orders to accommodate intricate pricing structures, and executed numerous advanced API integrations for seamless data flow and automation. Moreover, I have addressed challenging requirements, such as automating complex business processes, designing multi-step approval systems, and integrating third-party tools for real-time analytics, delivering solutions that exceed client expectations through a deep understanding of Zoho's ecosystem.",
    img: "https://images.pexels.com/photos/18073372/pexels-photo-18073372/free-photo-of-young-man-sitting-in-a-car-on-a-night-street.jpeg?auto=compress&cs=tinysrgb&w=1600&lazy=load",
    link: "https://lama.dev",
  },
  {
    id: 2,
    color: "from-blue-300 to-violet-300 dark:from-red-100 dark:to-blue-100",
    title: "Zoho Finance (Books, Inventory, Expenses, Subscriptions)",
    desc: "With extensive experience in Zoho Finance modules, especially Zoho Books and Zoho Inventory, I have crafted and implemented advanced customizations to meet diverse client needs, enhancing business efficiency and financial management. Key achievements include developing a custom payment approval module in Zoho Books to ensure payments are processed only after appropriate approval, automating Shopify integration to streamline order-to-payment processes, and designing tailored HTML templates for financial documents. I also integrated Zoho Inventory with multiple e-commerce platforms, developed a robust barcoding system, created advanced financial reports and dashboards, and implemented multi-currency and complex tax configurations. Additionally, I integrated Zoho Books and Zoho Inventory with various third-party applications and designed custom workflow automations, consistently delivering solutions that exceed client expectations and address complex requirements.",
    img: "https://images.pexels.com/photos/18023772/pexels-photo-18023772/free-photo-of-close-up-of-a-person-holding-a-wristwatch.jpeg?auto=compress&cs=tinysrgb&w=1600&lazy=load",
    link: "https://lama.dev",
  },
  {
    id: 3,
    color:
      "from-violet-300 to-purple-300 dark:from-blue-100 dark:to-violet-100",
    title: "Zoho Creator",
    desc: "With extensive expertise in Zoho Creator, I have developed a variety of custom applications and integrations to meet specific client needs, ranging from advanced calculators to functional and visually appealing solutions. Notable achievements include creating a Board of Investment (BOI) calculator integrated with Zoho CRM for accurate financial management, developing a hosted payment page using Zoho Subscriptions API for secure billing, and designing a custom application for managing financial targets and collections. I also built a comprehensive barcoding system to enhance inventory management, developed multiple aesthetically pleasing customer portals, and implemented various API integrations to ensure seamless data flow. Additionally, I created custom workflow automations to streamline routine processes and designed dynamic reports and dashboards for real-time insights. My work with Zoho Creator consistently addresses complex requirements and delivers innovative solutions tailored to client needs.",
    img: "https://images.pexels.com/photos/6894528/pexels-photo-6894528.jpeg?auto=compress&cs=tinysrgb&w=1600&lazy=load",
    link: "https://lama.dev",
  },
  {
    id: 4,
    color: "from-purple-300 to-red-300 dark:from-violet-100 dark:to-pink-800",
    title: "Zoho analytics",
    desc: "With in-depth experience in Zoho Analytics, I have developed a range of custom workspaces and dashboards that provide actionable insights and comprehensive data analysis. My expertise in integrating data from multiple sources and utilizing SQL queries has enabled me to create powerful and visually appealing analytics solutions. Key accomplishments include integrating data from Zoho CRM, Zoho Finance, Zoho Forms, Shopify, Xero, custom servers, and Zoho Creator into cohesive workspaces for a unified view of business metrics. I designed dynamic dashboards and reports tailored to client needs, employed mid-level SQL queries for sophisticated data analysis, and developed custom visualizations to represent complex data effectively. Automated reporting processes and interactive dashboards were set up to enhance user engagement and operational efficiency, while custom KPIs and performance tracking systems were implemented to align with strategic goals. My work consistently addresses complex data analysis needs, delivering solutions that enhance data understanding and support strategic decision-making.",
    img: "https://images.pexels.com/photos/18540208/pexels-photo-18540208/free-photo-of-wood-landscape-water-hill.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    link: "https://lama.dev",
  },
  {
    id: 5,
    color: "from-pink-300 to-red-300 dark:from-violet-100 dark:to-blue-800",
    title: "Zoho Forms",
    desc: "With extensive experience in Zoho Forms, I have designed and implemented a wide range of custom forms tailored to diverse client needs. My expertise includes creating visually appealing and user-friendly forms, integrating them with various applications, and utilizing advanced features to enhance functionality. Key accomplishments include designing aesthetically pleasing forms that align with client branding, implementing integrations with applications like Zoho CRM, Zoho Books, Zoho Creator, and external systems to streamline data flow, and developing pre-filled data forms to improve user experience. I also utilized dynamic field visibility and conditional logic to ensure forms adapt to user inputs, set up automated notifications and responses for efficient communication, and implemented robust data validation and error handling to enhance data accuracy. Custom integrations with third-party applications, multi-step forms for extensive data collection, and complex form designs have been key in addressing unique requirements, consistently delivering tailored solutions that enhance data collection and user interaction.",
    img: "https://images.pexels.com/photos/18540208/pexels-photo-18540208/free-photo-of-wood-landscape-water-hill.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    link: "https://lama.dev",
  },
  {
    id: 6,
    color: "from-blue-300 to-red-300 dark:from-violet-100 dark:to-red-800",
    title: "Zoho Desk",
    desc: "With substantial experience in Zoho Desk, I have tailored various solutions to meet unique client requirements and optimize customer support processes. My expertise includes integrating Zoho Desk with other Zoho modules and external systems to create seamless workflows. Key achievements include developing a custom integration to automatically create Zoho Desk tickets from Shopify orders, setting up a unified help center for two companies within a single Zoho Desk account, and linking Zoho Desk with Zoho Books to automate invoice creation and streamline financial and project management processes. I also designed custom workflow automations to enhance support efficiency, created detailed reports and analytics to track performance metrics, and developed integrations with external systems for extended functionalities. Customizing ticket forms and fields, optimizing knowledge base articles and self-service portals, and addressing complex requirements such as e-commerce integrations and multi-faceted workflows have been central to my work, consistently delivering tailored solutions that enhance support operations and align with client needs.",
    img: "https://images.pexels.com/photos/18540208/pexels-photo-18540208/free-photo-of-wood-landscape-water-hill.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    link: "https://lama.dev",
  },
  {
    id: 7,
    color: "from-pink-300 to-red-300 dark:from-violet-100 dark:to-red-800",
    title: "Zoho SalesIQ",
    desc: "With extensive experience in Zoho SalesIQ, I have developed and implemented a range of customizations to enhance customer engagement and streamline support processes. My expertise includes creating advanced Zobots, integrating SalesIQ with other Zoho applications, and connecting with multiple sales channels. Notable achievements include designing complex Zobots tailored for different departments to handle specific inquiries and tasks, integrating SalesIQ with Zoho Desk and Zoho CRM to synchronize customer information and automate ticket creation, and connecting SalesIQ with various sales channels to ensure consistent engagement. I also implemented advanced analytics and reporting features to track performance and improve strategies, developed custom workflows for Zobots to manage complex queries, enabled real-time visitor tracking for personalized engagement, and customized lead capture and qualification processes. Additionally, I integrated SalesIQ with marketing tools to enhance lead nurturing and conversion efforts. Each project focused on delivering tailored solutions to meet unique requirements, optimizing customer interaction and support processes.",
    img: "https://images.pexels.com/photos/18540208/pexels-photo-18540208/free-photo-of-wood-landscape-water-hill.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    link: "https://lama.dev",
  },
  {
    id: 8,
    color: "from-yellow-300 to-red-300 dark:from-violet-100 dark:to-blue-800",
    title: "Zoho Flow",
    desc: "With extensive experience in Zoho Flow, I have created and managed numerous integrations to automate workflows and connect various applications, enhancing operational efficiency. Key achievements include integrating Zoho Flow with HighLevel to streamline marketing and CRM processes, and automating e-commerce workflows with Shopify and WooCommerce to improve order processing, customer management, and inventory updates. I also connected Zoho Flow with RingCentral to optimize communication processes, integrated with Tidio to automate chat interactions and customer support workflows, and developed custom integrations to meet specific client needs. My work involved designing automated workflows to handle repetitive tasks, ensuring real-time data synchronization between platforms, and configuring custom notifications and alerts to keep users informed of important events. Each project focused on delivering tailored solutions to enhance data management and streamline business operations.",
    img: "https://images.pexels.com/photos/18540208/pexels-photo-18540208/free-photo-of-wood-landscape-water-hill.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    link: "https://lama.dev",
  },
  {
    id: 9,
    color: "from-green-300 to-red-300 dark:from-violet-100 dark:to-slate-800",
    title: "Zoho Other Applications",
    desc: "In addition to my extensive work with core Zoho applications, I have successfully customized and integrated a range of other Zoho products to address diverse client needs. With Zoho Backstage, I developed solutions for complex event management, including ticketing and attendee registration, and integrated it with Zoho CRM and marketing tools for synchronized event data and improved engagement. My work with Zoho Sign involved API integrations to automate document signing, customizing multi-step approval processes, and integrating with CRM and financial systems for seamless document handling. In Zoho Creator, I designed custom applications and workflows, implemented API integrations, and developed complex forms and reports to streamline business processes. For Zoho Marketing applications, I integrated various tools to enhance lead generation, campaign management, and customer engagement, designed custom marketing campaigns, and utilized advanced analytics to optimize strategies and improve ROI. Each project focused on delivering tailored solutions that address specific client requirements and drive business success.",
    img: "https://images.pexels.com/photos/18540208/pexels-photo-18540208/free-photo-of-wood-landscape-water-hill.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    link: "https://lama.dev",
  },
  {
    id: 9,
    color: "from-purple-300 to-red-300 dark:from-violet-100 dark:to-slate-800",
    title: "",
    desc: "",
    img: "https://images.pexels.com/photos/18540208/pexels-photo-18540208/free-photo-of-wood-landscape-water-hill.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    link: "https://lama.dev",
  },
  {
    id: 9,
    color: "from-purple-300 to-red-300 dark:from-violet-100 dark:to-slate-800",
    title: "Zoho Other Applications",
    desc: "In addition to my extensive work with core Zoho applications, I have successfully customized and integrated a range of other Zoho products to address diverse client needs. With Zoho Backstage, I developed solutions for complex event management, including ticketing and attendee registration, and integrated it with Zoho CRM and marketing tools for synchronized event data and improved engagement. My work with Zoho Sign involved API integrations to automate document signing, customizing multi-step approval processes, and integrating with CRM and financial systems for seamless document handling. In Zoho Creator, I designed custom applications and workflows, implemented API integrations, and developed complex forms and reports to streamline business processes. For Zoho Marketing applications, I integrated various tools to enhance lead generation, campaign management, and customer engagement, designed custom marketing campaigns, and utilized advanced analytics to optimize strategies and improve ROI. Each project focused on delivering tailored solutions that address specific client requirements and drive business success.",
    img: "https://images.pexels.com/photos/18540208/pexels-photo-18540208/free-photo-of-wood-landscape-water-hill.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    link: "https://lama.dev",
  }
];

const PortfolioPage = () => {
  const ref = useRef();

  const { scrollYProgress } = useScroll({ target: ref });
  const x = useTransform(scrollYProgress, [0, 1], ["0%", "-80%"]);

  const experienceRef = useRef();
  const isExperienceRefInView = useInView(experienceRef, { margin: "-100px" });

  return (
    <motion.div
      className="h-full"
      initial={{ y: "-200vh" }}
      animate={{ y: "0%" }}
      transition={{ duration: 1 }}
    >
      <div className="h-[600vh] dark:bg-slate-800 relative " ref={ref}>
        <div className="w-screen h-[calc(100vh-6rem)] flex items-center justify-center text-6xl lg:text-8xl text-center">
          My Works & Projects
        </div>
        <div className="sticky top-0 flex h-screen gap-4 items-center overflow-x-hidden">
          <motion.div style={{ x }} className="flex">
            <div className="h-screen w-screen flex items-center justify-center bg-gradient-to-r from-purple-300 dark:from-slate-800 dark:to-slate-100 to-red-300" />
            {items.map((item) => (
              <div
                className={`h-screen w-screen flex items-center justify-center bg-gradient-to-r ${item.color}`}
                key={item.id}
              >
                <div className="flex flex-col gap-8 items-center justify-center text-white">
                  <h1 className="text-xl mt-10 font-bold dark:text-slate-800 md:text-4xl lg:text-6xl  xl:text-6xl">
                    {item.title}
                  </h1>
                  {/* <div className="relative rounded-3xl shadow-xl shadow-black w-[300px] h-[300px] md:w-[800px] md:h-[400px] lg:w-[1000px] lg:h-[500px] xl:w-[1200px] xl:h-[450px]">
                    <Image
                      className="rounded-3xl "
                      src={item.img}
                      alt=""
                      fill
                    />
                  </div> */}
                  <p className="w-[300px] text-gray-800 md:w-[800px] lg:w-[1000px] lg:text-lg xl:w-[1200px]">
                    {item.desc}
                  </p>
                  {/* <Link href={item.link} className="flex mb-10 justify-end">
                    <button className="p-2 text-sm md:p-4 md:text-md lg:p-4 lg:text-lg bg-black text-white hover:bg-white hover:text-gray-600 font-semibold m-2 rounded">
                      See Demo
                    </button>
                  </Link> */}
                </div>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
      <div
        className="w-screen h-screen flex flex-col gap-16 items-center justify-center text-center"
        ref={experienceRef}
      >
        <motion.h1
          initial={{ opacity: 0.2 }}
          animate={isExperienceRefInView ? { opacity: 1 } : {}}
          transition={{ duration: 3, ease: "easeInOut" }}
          className="text-4xl lg:text-8xl xl:text-8xl"
        >
          Do you have a project?
        </motion.h1>
        <motion.div
          initial={{ x: "1000px" }}
          animate={isExperienceRefInView ? { x: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="relative"
        >
          <motion.svg
            animate={{ rotate: 360 }}
            transition={{ duration: 8, ease: "linear", repeat: Infinity }}
            viewBox="0 0 300 300"
            className="w-64 h-64 md:w-[500px] md:h-[500px] "
          >
            <defs>
              <path
                id="circlePath"
                d="M 150, 150 m -60, 0 a 60,60 0 0,1 120,0 a 60,60 0 0,1 -120,0 "
              />
            </defs>
            <text fill="#000" className="dark:fill-red-50">
              <textPath xlinkHref="#circlePath" className="text-xl ">
                Zoho Developer
              </textPath>
            </text>
          </motion.svg>
          <Link
            href="/contact"
            className="w-16 h-16 md:w-28 md:h-28 absolute top-0 left-0 right-0 bottom-0 m-auto bg-black dark:bg-white dark:text-black text-lg font-semibold text-white rounded-full flex items-center justify-center"
          >
            Hire Me
          </Link>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default PortfolioPage;
