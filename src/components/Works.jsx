import React, {useState, useEffect} from 'react'
import { motion } from 'framer-motion'
import { styles } from '../styles'
import { SectionWrapper } from '../hoc'
import { projects } from '../constants'
import { github } from '../assets'
import { fadeIn, textVariant } from '../utils/motion'
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa'; // You can use any icon library or custom components for arrows

const CustomPrevArrow = ({ onClick }) => (
  <div className="custom-arrow custom-prev xs:ml-1" onClick={onClick}>
    <FaChevronLeft />
  </div>
);

const CustomNextArrow = ({ onClick }) => (
  <div className="custom-arrow custom-next xs:mr-2" onClick={onClick}>
    <FaChevronRight />
  </div>
);

const ProjectCard = ({index, name, description,
  tags, image, source_code_link, demo, label, activeIndex}) => {
    const hasDemo = demo !== undefined && demo !== "";
    const [active, setActive] = useState("");
    const [scrolled, setScrolled] = useState(false);
    

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      if (scrollTop > 100) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

   return (
    <motion.div variants={fadeIn("up", "spring",
    index*0.5, 0.75)}>
      <div
        className={`flex flex-col gap-3 group relative border border-white-500 shadow-lg text-white
          rounded-3xl sm:w-[360px] md:mx-auto xs:h-full sm:h-[75vh] md:h-[75vh] lg:h-[75vh] xxl:h-[85vh] w-full px-5 py-8 overflow-hidden cursor-pointer
          ${index !== activeIndex ? 'opacity-30' : ''}`}
      >
        <div className="absolute inset-0 green-pink-gradient opacity-10 group-hover:opacity-20" />
        <div className='absolute inset-0 flex justify-end m-3 card-img_hover'>
            {source_code_link && (  
              <a
         href={source_code_link}
         target="_blank"
         rel="noopener noreferrer"
         className="black-gradient w-10 h-10 rounded-full flex justify-center items-center cursor-pointer"
         style={{ position: 'absolute', bottom: '5px', left: '5px' }}
       >
         <img
           src={github}
           alt="github"
           className="w-1/2 h-1/2 object-contain"
         />
       </a>
            )}
       {hasDemo ? (
            <button
              className="tagline h-[50px] w-[200px] rounded-3xl"
              style={{
                position: 'absolute',
                bottom: '-15px', // Adjust the distance from the bottom as needed
                left: '50%', // Center the button horizontally
                transform: 'translateX(-50%)', // Center the button horizontally
              }}
              onClick={() => {
                window.open(demo, '_blank');
              }}
            >
              {label}
            </button>
          ) : (
            <button
              className="tagline h-[50px] w-[200px] rounded-3xl text-xs"
              style={{
                position: 'absolute',
                bottom: '-15px', // Adjust the distance from the bottom as needed
                left: '50%', // Center the button horizontally
                transform: 'translateX(-50%)', // Center the button horizontally
              }}
              onClick={() => {
                // Action for projects without demo
                alert("Stay up to date");
                // Scroll to the contact page
                window.scrollTo({
                top: document.body.scrollHeight,
                behavior: 'smooth',
                });
              }}
            >
              {label}
            </button>
          )}

          </div>

        <div className='relative w-full h-[230px]'>
          <img
            src={image}
            alt={name}
            className='w-full h-full object-cover
            rounded-2xl'
          />
        </div>

        <div className=' flex flex-wrap gap-2 '>
        {tags.map((tag) => (
          <p key={tag.name}
          style={{backgroundColor: tag.color}}
         className={`
         border border-white-100 py-1 px-1.5 rounded-2xl text-[14px] ${tag.color}`}>
            {tag.name}
          </p>
        ))}
      </div>
 
 
        <div className='mt-1'>
          <h3 className='text-white font-bold
          text-[24px]'>
            {name}</h3>
          <p className='mt-2 text-secondary
          text-[14px] xl:text-[16px] xxl:text-[17px] mb-10'>
            {description}</p>
        </div>
        </div>
 
    </motion.div>
  )
 }



const Works = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [slidesToShow, setSlidesToShow] = useState(3);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth <= 868) {
        setSlidesToShow(1);
      } 
      else if (window.innerWidth <= 1225) {
        setSlidesToShow(1);
      } else {
        setSlidesToShow(3);
      }
    };

    // Initial call to set the initial value
    handleResize();

    // Listen for window resize events
    window.addEventListener('resize', handleResize);

    // Cleanup the event listener on component unmount
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []); // Add an empty dependency array to run the effect only once on mount

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow, // Number of cards shown on large devices
    slidesToScroll: 1,
    centerMode: true,
    centerPadding: '0',
    beforeChange: (current) => {
      setActiveIndex(current);
    },
    prevArrow: <CustomPrevArrow />,
    nextArrow: <CustomNextArrow />,
    swipe: true, //Enable Swipe
  };

 return (
   <>
     <motion.div variants={textVariant()}>
     <p className={`${styles.sectionSubText}`}
       >My Work</p>
       <h2 className={styles.sectionHeadText}>
         Projects</h2>
     </motion.div>


     <div className='w-full flex'>
       <motion.p
         variants={fadeIn("", "", 0.1, 1)}
         className='mt-3 text-secondary text-[17px]
         max-w-3xl leading-[30px]'
       >
        These are some featured projects I have worked on.
       </motion.p>
     </div>

     <div className='mt-20'>
        <Slider {...settings}
        beforeChange={(current, next) => setActiveIndex(next)}>
          {projects.map((project, index) => (
            <div key={`project${index}`}>
              <ProjectCard
                index={index}
                activeIndex={activeIndex}
                {...project}
              />
            </div>
          ))}
        </Slider>
      </div>
    </>
 );
};



export default SectionWrapper(Works, "work")