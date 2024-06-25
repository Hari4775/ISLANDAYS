// HeroPage.jsx
import React from 'react';
import './HeroPage.css';
// import { scubaImage } from '../../../assets/Index';
import { scubaImage } from '../../../assets/Index';

const HeroPage = () => {
  return (
   <div className='  hero-page h-screen w-screen '>
    <div className='w-1/2 bg-green-500 mr-auto ml-20'>
    <p  className='text-white text-left'>Welcome to</p>
    <h1 className='text-white heading text-left text-6xl  bg-transperant mb-12'> ISLAND DAYS</h1>
    <h1 className='text-white heading text-left text-6xl  bg-transperant'>Let's explore THE REAL HEAVEN</h1>

    </div>
    {/* <img className='' src={scubaImage}/> */}
     </div>

  
  );
}

export default HeroPage;
