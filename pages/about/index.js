//  data
import React, { useState } from "react";
import Avatar from "../../components/Avatar";
import Circles from '../../components/Circles'
import { motion } from 'framer-motion';
import { fadeIn } from '../../variants'
import CountUp from "react-countup";

import {
  FaHtml5,
  FaCss3,
  FaJs,
  FaReact,
  FaWordpress,
  FaFigma,
  FaNodeJs,
} from 'react-icons/fa';

import {
  SiNextdotjs,
  SiFramer,
  SiAdobexd,
  SiAdobephotoshop,
  SiTypescript,
} from 'react-icons/si';

export const aboutData = [
  {
    title: 'skills',
    info: [
      {
        title: 'Web Development',
        icons: [
          // eslint-disable-next-line react/jsx-key
          <FaHtml5 />,
          // eslint-disable-next-line react/jsx-key
          <FaCss3 />,
          // eslint-disable-next-line react/jsx-key
          <FaJs />,
          // eslint-disable-next-line react/jsx-key
          <FaNodeJs />,
          // eslint-disable-next-line react/jsx-key
          <FaReact />,
          // eslint-disable-next-line react/jsx-key
          <SiNextdotjs />,
          // eslint-disable-next-line react/jsx-key
          <FaWordpress />,
        ],
      },
      {
        title: 'UI/UX Design',
        // eslint-disable-next-line react/jsx-key
        icons: [<FaFigma />, <SiFramer />, <SiAdobephotoshop />],
      },
    ],
  },
  {
    title: 'awards',
    info: [
      {
        title: 'DevMedia - FullStack Developer',
        stage: '2023 - 2024',
      },
    ],
  },
  {
    title: 'experience',
    info: [
      {
        title: 'Freelancer - Front End',
        stage: '2019 - 2020',
      },
    ],
  },
];

const About = () => {
  const [index, setIndex] = useState(0);
  console.log(index)
  return (
    <div className="h-full bg-primary/30 py-32 text-center xl:text-left">
      <Circles />
      {/* avartar */}
      <motion.div 
       variants={fadeIn('right', 0.2)}
       initial='hidden'
       animate='show'
       exit='hidden'
       className='hidden xl:flex absolute bottom-0 -left-[380px]'
       >
        <Avatar />
      </motion.div>
      <div className="container mx-auto h-full flex flex-col items-center 
        xl:flex-row gap-x-6">
          {/* text */}
        <div className="flex-1 flex flex-col justify-center">
          <motion.h2
            variants={fadeIn('right', 0.2)}
            initial='hidden'
            animate='show'
            exit='hidden' 
            className="h2 py-5">Desenvolvedor Front End / <span className="text-accent">Designer</span>
          </motion.h2>
          <motion.p 
            variants={fadeIn('right', 0.4)}
            initial='hidden'
            animate='show'
            exit='hidden'
            className="max-w-[500px] mx-auto xl:mx-0 mb-6 xl:mb-12 px-2 xl:px-0">
          2 anos de conhecimento em linguagens como <span className="font-bold "> HTML, CSS, Javascript, ReactJs, TypeScript, Tailwind, NodeJs, Styled-Components, Php, Git e outros.</span> (usadas na criação desta landing pages). Uso o GitHub como repositório de meus projetos e estou estudando Nextjs e outras tools para utilizar.
          </motion.p>
          {/* counters */}
          <motion.div 
            variants={fadeIn('right', 0.6)}
            initial='hidden'
            animate='show'
            exit='hidden'
            className="hidden md:flex md:max-w-xl xl:max-w-none mx-auto xl:mx-0 mb-8">
            <div className="flex flex-1 xl:gap-x-6">
              {/* experience */}
              <div className="relative flex-1 after:w-[1px] after:h-full after:bg-white/10 
              after:absolute after:top-0 after:right-0">
                <div className="text-2xl xl:text-4xl font-extrabold text-accent mb-2">
                <CountUp start={0} end={2} duration={10} /> + 
              </div>
              <div className="text-xs uppercase tracking-[1px] leading-[1.4] max-w-[100px] ">Years of experience</div>
              </div>
              {/* projects */}
              <div className="relative flex-1 after:w-[1px] after:h-full after:bg-white/10 
                after:absolute after:top-0 after:right-0">
                <div className="text-2xl xl:text-4xl font-extrabold text-accent mb-2">
                <CountUp start={0} end={200} duration={10} /> +
              </div>
              <div className="text-xs uppercase tracking-[1px] leading-[1.4] max-w-[100px] ">Projects</div>
              </div>
              {/* awards */}
              <div className="relative flex-1 after:w-[1px] after:h-full after:bg-white/10 
                after:absolute after:top-0 after:right-0">
                <div className="text-2xl xl:text-4xl font-extrabold text-accent mb-2">
                <CountUp start={0} end={25} duration={10} />
              </div>
              <div className="text-xs uppercase tracking-[1px] leading-[1.4] max-w-[100px] ">Awards</div>
              </div>
            </div>
          </motion.div>
        </div>
           {/* info */}
        <motion.div 
          variants={fadeIn('left', 0.4)}
          initial='hidden'
          animate='show'
          exit='hidden'
          className="flex flex-col w-full xl:max-w-[48%] h-[480px]">
          <div className="flex gap-x-4 xl:gap-x-8 mx-auto xl:mx-0 mb-4">
            {aboutData.map((item, itemIndex) => {
              return (
              <div 
                key={itemIndex}
                className={`${
                  index === itemIndex && 
                  'text-accent after:w-[100%] after:bg-accent after:transition-all after:duration-300'
                } cursor-pointer capitalize xl:text-lg relative after:w-8 after:h-[2px] after:bg-white after:absolute after:-bottom-1 after:left-0`}
                onClick={() => setIndex(itemIndex)}
                >
                  {item.title}
                </div>
                );
              })}
          </div>
          <div className="py-2 xl:py-6 flex flex-col gap-y-2 xl:gap-y-4 items-center xl:items-start">
          {aboutData[index].info.map((item, itemIndex) => {
            return (
              <div 
                key={itemIndex} 
                className="flex-1 flex flex-col md:flex-row mx-w-max gap-x-2 items-center text-white/60"
              >
                {/* title */}
                <div className="font-light mb-2 md:mb-0">{item.title}</div>
                <div className="hidden md:flex">-</div>
                <div>{item.stage}</div>
                <div className="flex gap-x-4">
                  {/* icons */}
                  {item.icons?.map((icon, itemIndex) => {
                    // eslint-disable-next-line react/jsx-key
                    return <div className="text-2xl text-white">{icon}</div>;
                  })}
                </div>
              </div>
              );
            })}
          </div>
        </motion.div>      
      </div>
    </div>
  );
};

export default About;
