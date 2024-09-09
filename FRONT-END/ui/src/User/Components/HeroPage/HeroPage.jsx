// HeroPage.jsx
import React, { useEffect, useRef } from 'react';
import './HeroPage.css';
import { heroImage, minicoy } from '../../../assets/Index';

const HeroPage = () => {
  
  return (
    <div className='hero-page  w-10/12  items-start  mx-auto'>
      <div className=' mr-auto mt-32 mb-20 '>
      <img className='w-72' src={heroImage}/>

        <div className='flex items-center mt-4'>
        <h1 className='text-white  ml-7 text-3xl'>Lets Explore the real Heaven with us </h1>

        </div>
      </div>
    </div>
  );
}

export default HeroPage;
