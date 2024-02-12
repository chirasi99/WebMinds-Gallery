import React, { useState} from "react";

// icons
import {
  FaHtml5,
  FaCss3,
  FaJs,
  FaReact,
  FaWordpress,
  FaFigma,
} from "react-icons/fa";

import {
  SiNextdotjs,
  SiFramer,
  SiAdobexd,
  SiAdobephotoshop,
} from "react-icons/si";


//  about data
export const aboutData = [
  {
    title: 'skills',
    info: [
      {
        title: 'Web Development',
        icons: [
          <FaHtml5 />,
          <FaCss3 />,
          <FaJs />,
          <FaReact />,
          <SiNextdotjs />,
          <SiFramer />,
          <FaWordpress />,
        ],
      },
      {
        title: 'UI/UX Design',
        icons: [<FaFigma />, <SiAdobexd />, <SiAdobephotoshop />],
      },
    ],
  },
  {
    title: 'awards',
    info: [
      {
        title: 'Webby Awards - Honoree',
        stage: '2011 - 2012',
      },
      {
        title: 'Adobe Design Achievement Awards - Finalist',
        stage: '2009 - 2010',
      },
    ],
  },
  {
    title: 'experience',
    info: [
      {
        title: 'UX/UI Designer - XYZ Company',
        stage: '2012 - 2023',
      },
      {
        title: 'Web Developer - ABC Agency',
        stage: '2010 - 2012',
      },
      {
        title: 'Intern - DEF Corporation',
        stage: '2008 - 2010',
      },
    ],
  },
  {
    title: 'credentials',
    info: [
      {
        title: 'Web Development - ABC University, LA, CA',
        stage: '2011',
      },
      {
        title: 'Computer Science Diploma - AV Technical Institute',
        stage: '2009',
      },
      {
        title: 'Certified Graphic Designer - ABC Institute, Los Angeles, CA',
        stage: '2006',
      },
    ],
  },
];

// about component
import Avatar from "../../components/Avatar"; 
import Circles from "../../components/Circles";

// framer motion
import { motion } from "framer-motion";
import { fadeIn } from "../../variants";

const About = () => {
  const [index, setIndex] = useState(0);
  console.log(index);
  return <div className="h-full py-32 text-center bg-primary/30 xl:text-left">
    <Circles />
    {/* avatar img  */}
    <motion.div variants={fadeIn('right', 0.2)} initial='hidden' animate='show' exit='hidden' className="absolute bottom-0 hidden xl:flex -left-[370px]">
      <Avatar />
    </motion.div>
    <div className="container flex flex-col items-center h-full mx-auto xl:flex-row gap-x-6">
      <div className="flex flex-col justify-center flex-1">text</div>
      <div className="flex flex-col w-full xl:max-w-[48%] h-[480px]">
        <div className="flex mx-auto mb-4 gap-x-4 xl:gap-x-8 xl:mx-0">
          {aboutData.map((item, itemIndex) => {
            return ( <div key={itemIndex} 
            className={`${index === itemIndex && `text-accent after:w-[100%] after:bg-accent after:transition-all after:duration-300`}
            cursor-pointer capitalize xl:text-lg relative after:-w-8 after:h-[2px] after:bg-white after:absolute after:-bottom-1 after:left-0 `}
            onClick={() => setIndex(itemIndex)}
            >
              {item.title}
            </div>
            );
          })}
        </div>
        <div className="flex flex-col items-center py-2 xl:py-6 gap-y-2 xl:gap-y-4 xl:items-start">
          {aboutData[index].info.map((item, itemIndex) => {
            return <div key={itemIndex} className="flex flex-col items-center flex-1 text-white/60 md:flex-row max-w-max gap-x-2">
              {/* title  */}
              <div className="mb-2 font-light md:md-0">
                {item.title}
              </div>
              <div className="hidden md:flex">-</div>
              <div>{item.stage}</div>
              <div className="flex gap-x-4">
                {/* icons  */}
                {item.icons?.map((icon, itemIndex) => {
                  return <div className="text-2xl text-white">{icon}</div>
                })}
              </div>
            </div>
          })}
        </div>
      </div>
    </div>
  </div>
};

export default About;
