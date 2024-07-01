// HeroPage.jsx
import React, { useEffect, useRef } from 'react';
import './HeroPage.css';
import { scubaImage } from '../../../assets/Index';
import { motion } from "framer-motion";

const HeroPage = () => {
  // const btnRef = useRef(null);
  // const spanRef = useRef(null);

  // useEffect(() => {
  //   const handleMouseMove = (e) => {
  //     const { width } = e.target.getBoundingClientRect();
  //     const offset = e.offsetX;
  //     const left = `${(offset / width) * 100}%`;

  //     spanRef.current.animate({ left }, { duration: 250, fill: "forwards" });
  //   };

  //   const handleMouseLeave = () => {
  //     spanRef.current.animate(
  //       { left: "50%" },
  //       { duration: 100, fill: "forwards" }
  //     );
  //   };

  //   btnRef.current.addEventListener("mousemove", handleMouseMove);
  //   btnRef.current.addEventListener("mouseleave", handleMouseLeave);

  //   return () => {
  //     btnRef.current.removeEventListener("mousemove", handleMouseMove);
  //     btnRef.current.removeEventListener("mouseleave", handleMouseLeave);
  //   };
  // }, []);



  return (
    <div className='hero-page h-screen w-screen flex items-start'>
      <div className='w-1/2 mr-auto md:ml-20 ml-5'>
        <p className='text-white text-left'>Welcome to</p>
        <h1 className='text-white text-left md:text-6xl text-2xl mb-12 '>ISLAND DAYS</h1>
        <div className='flex items-center mt-4'>

        {/* <motion.button
      whileTap={{ scale: 0.985 }}
      ref={btnRef}
      className="relative explore-button w-ful max-w-xs overflow-hidden rounded-lg bg-slate-950 px-4 py-3 text-lg font-medium text-white"
    >
      <span className="pointer-events-none relative z-10 mix-blend-difference">
        Let's Explore Now!
      </span>
      <span
        ref={spanRef}
        className="pointer-events-none absolute left-[3%] top-[50%] h-32 w-40  -translate-x-[90%] -translate-y-[50%]  bg-blue-600"
      />
    </motion.button> */}

          {/* <button className='explore-button px-10 py-2 border border-blue-500 text-white rounded-full bg-transparent hover:text-blue-500 transition-colors'>
            Explore Now
          </button> */}
        </div>
      </div>
      {/* <img className='' src={scubaImage}/> */}
    </div>
  );
}

export default HeroPage;
