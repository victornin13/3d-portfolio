import React from 'react'
import { Tilt } from 'react-tilt'
import { motion } from 'framer-motion';
import { styles } from '../styles';
import {fadeIn, textVariant} from '../utils/motion';
import {ShipCanvas} from './canvas'
import { slideIn } from '../utils/motion'

import { SectionWrapper } from '../hoc';

const About = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={`${styles.sectionSubText}`}>Introduction</p>
        <h2 className={styles.sectionHeadText}>Overview</h2>
      </motion.div>

      <div className="flex flex-col xl:flex-row items-center xl:ml-[250px]">
      <Tilt options={{ max: 45, scale: 1, speed: 450 }} className="mt-5 xs:mt-8 ml-10 xs:ml-[5px]">
          <motion.div
          variants={fadeIn("", "", 0.1, 3)} 
          className='photo xs:ml-[50px] xl:ml-[120px]'>
            {/* Your photo content */}
          </motion.div>
        </Tilt>

        {/* Information Section */}
        <motion.div
        variants={fadeIn("", "", 0.1, 3)}
        className="mt-5 xs:mt-5 xs:ml-[50px] xl:ml-[50px] w-[350px] bg-tertiary opacity-10
        rounded-[20px] py-1 px-4 border-[4px] border-white-700 ">
        <h2 className='mt-2 mb-7 text-[22px] font-serif'><span className='text-blue-500 font-bold font-serif'>Name:</span> Victor Nin</h2>
          <p className='mb-7 text-[22px] font-serif'><span className='text-blue-500 font-bold font-serif'>Age:</span> 22</p>
          <p className='mb-5 text-[22px] font-serif'><span className='text-blue-500 font-bold font-serif'>Nationality:</span> US Citizen</p>
          
        
        </motion.div>
      </div>
      
      <div className='mt-5 xs:ml-5 xl:ml-2'>
            <h3 className='text-blue-500 font-bold text-[26px] font-serif'>Bio:</h3>
            <motion.p
            variants={fadeIn("", "", 0.1, 3)} 
            className='text-white text-[22px]'>
            My passion for technology started at the age of 13, when I worked on my first Lego Robotics project in 6th grade.
            Over the years, I have become skilled in circuit design, software engineering, web development, and AI technologies. 
            Through my coursework and projects I have gained valuable experience in these areas.
          Now, I am very enthusiastic about applying my knowledge to driving innovation, alongside
          aquiring and providing fresh perspectives while taking on new challenges.
            </motion.p>
            <motion.div
          variants={slideIn('right', 'tween', 0.2, 6)}
          className='mb-5 xl:flex-1 xl:h-auto md:h-[550px] h-[350px] flex-row xl:mr-5'>
          <ShipCanvas />
        </motion.div>
          </div>

      </>

  );
};

export default SectionWrapper(About, "about")