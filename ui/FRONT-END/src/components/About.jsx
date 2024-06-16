import React, { useEffect, useRef, useState } from "react";
import { Tilt } from "react-tilt";
import { color, motion } from "framer-motion";

import { services } from "../constants";
import { fadeIn, textVariant } from "../utils/motion";
import { styles } from "../styles";
// import "./About.css";

// Service Card
const ServiceCard = ({ index, title, icon }) => {

  console.log(index,"index:")
  const [slider,setSlide] =useState(0)
  const delay= 2500;
  const timeoutRef= useRef(null);
  function resetTimeout(){
    if(timeoutRef.current){
      clearTimeout(timeoutRef.current);
    }
  }

  useEffect(()=>{
    resetTimeout();
    timeoutRef.current =setTimeout(
      ()=>
      setIndex((preIndex)=>
      preIndex ===NoColorSpace.current))
  })

  return (
    <Tilt className="xs:w-[250px] w-full">
      <motion.div
        variants={fadeIn("right", "spring", 0.5 * index, 0.75)}
        className="w-full p-[1px] rounded-[20px] shadow-card"
        
      >
        <div
          options={{
            max: 45,
            scale: 1,
            speed: 250,
          }}
           className=" rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col"
          
        >
          <img src={icon} alt={title} className="w-16 h-16 object-contain" />
          <h3 className="text-white text-[20px] font-bold text-center">
            {title}
          </h3>
        </div>
      </motion.div>
    </Tilt>
  );
};

// About
const About = () => {
  
return(   
    <div className="">
      {/* Title */}
      <motion.div variants={textVariant()}>
        <h2 className={styles.sectionHeadText}>Overview.</h2>
      </motion.div>

      {/* Body */}
      <motion.p
        variants={fadeIn("", "", 0.1, 1)}
        className="empty-4 text-secondary text-[17px] max-w-3xl leading-[30px] ml-24"
      >
        I'm a skilled Developer with experience in Javascript, and expertise in
        frameworks like Reactjs and also worked in HTML5,CSS3, Tailwind CSS
        ,Redux-toolk .I'm a quick learner and collaborate closely with clients
        to create efficient, scalable, and user-friendly solutions that solve
        real-world problems. Let's work together to bring your ideas to life!
      </motion.p>

      {/* Service Cards
      <div className="slide-container mb-20" >
        <div className="mt-20 flex gap-10" id="slideContainer">
          {services.map((service, i) => (
            <ServiceCard key={service.title} index={i} {...service} />
          ))}
        </div>
      </div> */}

      <motion.div
                className="flex"
                animate={{
                  x: ['0%', '100%'],
                  transition: {
                      ease: 'linear',
                      duration: 5,
                      repeat: Infinity,  // Repeat infinitely
                      repeatType: 'reverse',  // Reverse the animation direction each time
                  }
              }}
            >
                 <div className="slide-container mb-20" >
        <div className="mt-20 flex gap-10" id="slideContainer">
          {services.map((service, i) => (
            <ServiceCard key={service.title} index={i} {...service} />
          ))}
        </div>
      </div>
            </motion.div>
             

        
    
        </div>
  
  );
};

export default About;
