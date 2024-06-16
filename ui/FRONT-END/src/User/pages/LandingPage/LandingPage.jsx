import React from 'react';
import './LandingPage.css';
import { About, Contact, Experience, Hero, StarsCanvas, Tech, Works } from '../../../components';
import { whatsappfloat,instagram, video, instafloat } from "../../../assets";
import Banner from '../../../components/Banner';
import Feature from '../../../components/Feature/Feature';



const LandingPage = () => {
  return (
    <>
      <div className="whatsapp-logo fixed bottom-4 right-4 z-50 flex">
        <a className=" p-2 rounded-full " href="https://api.whatsapp.com/message/YXTQ4L56BTSZA1?autoload=1&app_absent=0">
          <img className="w-12 h-12" src={whatsappfloat} alt="whatsapp logo" />
        </a>
        <a className=" p-2 rounded-full" href="https://www.instagram.com/island___days/I">
          <img className="w-12 h-12" src={instafloat} alt="whatsapp logo" />
        </a>
      </div>

      
      <div className="relative z-0 super-main main-container ">
        <div className="">

          <Hero />

        </div>
        <About />

      {/* <HorizontalMaterialTailwindTimeline/> */}
        {/* <Feature/> */}
        {/* <Experience /> */}
        {/* <Tech /> */}
        <Works />
        <div className="relative z-0">
          <Contact />
          <StarsCanvas />
        </div>
      </div>
    </>
  );
}

export default LandingPage;
