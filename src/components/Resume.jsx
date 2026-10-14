import React, {  useState } from 'react'
import Title from './layouts/Title';
import Education from './resume/Education';
import Skills from './resume/Skills';
import Experience from "./resume/Experience";
import { SectionWrapper } from '../hoc';

const Resume = () => { 

   const [educationData, setEducationData] = useState(true);
   const [skillData, setSkillData] = useState(false);
   const [experienceData, setExperienceData] = useState(false);

  return (
    <section id="resume" className="w-full py-20 border-b-[1px] border-b-black">
      <div className="flex justify-center items-center text-center">
        <Title title="4+ YEARS OF EXPERIENCE" des="My Resume" />
      </div>
      <div>
        <ul className="w-full gap-5 grid grid-cols-1 md:grid-cols-1 xl:grid-cols-3 cursor-pointer">
          <li
            onClick={() =>
              setEducationData(true) &
              setExperienceData(false) &
              setSkillData(false)
            }
            className={`${
              educationData
                ? "blue-green-gradient rounded-lg"
                : "border-white rounded-lg"
            } resumeLi`}
          >
            Education
          </li>
          <li
            onClick={() =>
              setEducationData(false) &
              setSkillData(false) &
              setExperienceData(true)
            }
            className={`${
              experienceData
                ? "blue-green-gradient rounded-lg"
                : "border-white rounded-lg"
            } resumeLi`}
          >
            Experience
          </li>
          <li
            onClick={() =>
              setEducationData(false) &
              setSkillData(true) &
              setExperienceData(false)
            }
            className={`${
              skillData ? "blue-green-gradient rounded-lg" 
              : "border-white rounded-lg"
            } resumeLi`}
          >
            Professional Skills
          </li>
        </ul>
      </div>
      {educationData && <Education />}
      {experienceData && <Experience />}
      {skillData && <Skills />}
 
    </section>
  ); 
} 

export default SectionWrapper(Resume, "resume")