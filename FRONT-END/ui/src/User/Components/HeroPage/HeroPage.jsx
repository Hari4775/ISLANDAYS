// HeroPage.jsx
import React, { useEffect, useRef } from 'react';
import './HeroPage.css';

const HeroPage = () => {
  
  return (
    <div className='hero-page  w-screen flex items-start'>
      <div className='w-1/2 mr-auto md:ml-20 mx-auto md:mx-1 mt-52 mb-20'>
        <p className='text-white text-center md:text-left'>Welcome to</p>

        <h1 className='text-white heading   text-left md:text-6xl text-2xl mb-12 '>ISLAND DAYS</h1>
        <h1 className='text-white  text-left'>Lets Explore the real Heaven with us </h1>
        <div className='flex items-center mt-4'>
        </div>
      </div>
    </div>
  );
}

export default HeroPage;
