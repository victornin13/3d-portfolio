import React, { useState, useEffect } from "react";
import { motion } from "framer-motion"
import { styles } from "../styles"
import { ComputersCanvas } from "./canvas"

const Hero = () => {
  const [loopNum, setLoopNum] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [text, setText] = useState('');
  const [delta, setDelta] = useState(300 - Math.random() * 100);
  const toRotate = ["Computer Engineer","Hardware Engineer", "Network Engineer", "Web Designer"];
  const period = 2000;

  useEffect(() => {
    let ticker = setInterval(() => {
      tick();
    }, delta);

    return () => {
      clearInterval(ticker);
    };
  }, [text]);

  const tick = () => {
    let i = loopNum % toRotate.length;
    let fullText = toRotate[i];
    let updatedText = isDeleting
      ? fullText.substring(0, text.length - 1)
      : fullText.substring(0, text.length + 1);

    setText(updatedText);

    if (isDeleting) {
      setDelta(prevDelta => prevDelta / 2);
    }

    if (!isDeleting && updatedText === fullText) {
      setIsDeleting(true);
      setDelta(period);
    } else if (isDeleting && updatedText === '') {
      setIsDeleting(false);
      setLoopNum(loopNum + 1);
      setDelta(500);
    }
  };

  return (
    <section className="relative w-full h-screen
    mx-auto">
      <div className={`${styles.paddingX} 
      absolute inset-0 top-[120px] max-w-7xl
      mx-auto flex flex-row items-start`}>
        <div className="flex flex-col
        justify-center items-center mt-5">
          <div className="w-5 h-5 rounded-full
          bf-[#E6DEDD]" />
            <div className="w-1 sm:h-80 h-40 
            red-gradient" />
          </div>
          <div className='max-w-[1000px] mx-auto px-3 flex flex-col h-full'>
          <div className="rounded-[2px]
          py-1 px-1 min-h-[10px] flex 
          justify-evenly items-center">
            <span className="tagline">
              Welcome to my Portfolio
            </span>
          </div>
          <h1 className='text-2xl sm:text-8xl md:text-7xl font-bold text-white font-mono'>
          {`Hi! I'm a `}
          <span className="txt-rotate" data-period="1000" data-rotate='["Computer Engineer", "Software Engineer", "Web Designer"]'>
          <span className="wrap xl:flex font-mono">{text}</span>
          </span>
          </h1>
        </div>
      </div>
      <ComputersCanvas />
        <div className="absolute xs:bottom-5
        bottom-32 w-full flex justify-center
        items-center">
          <a href='#about' aria-label='Skip to About Section'>
            <div className="w-[35px] h-[64px]
            rounded-3xl border-4 border-secondary
            flex justify-center items-start p-2">
              <motion.div
              animate={{
                y: [0,24,0]
              }}
              transition={{
                duration:1.5,
                repeat: Infinity,
                repeatType: 'loop'
              }}
              className="w-3 h-3 rounded-full
              bg-secondary mb-1"
            />
            </div>
          </a>
        </div>
    </section>
  )
}

export default Hero