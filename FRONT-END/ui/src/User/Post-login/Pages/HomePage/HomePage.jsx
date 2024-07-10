import React, { useEffect } from 'react';
import './HomePage.css';
import HeroPage from '../../../Components/HeroPage/HeroPage';
import AutoPlay from './Slider/Slider';
import Header from '../../../../Common/Header/Header';
import { scubaImage, bgisland } from '../../../../assets/Index';
import { scubaVideo, scuba2, wa, instagram } from '../../../../assets/Index';
import HorizontalScrollComponent from '../../../Components/Virtual/Virtual';
import PinContainer from '../../../Components/Virtual/Virtual';
import Packages from '../packages/Packages';
import Footer from '../../../../Common/Footer/Footer';
import Virtual from '../../../Components/Virtual/Virtual';
import Services from '../../../Components/Services/Services';

const HomePage = () => {

  return (
    <>
     

      {/* <div className='home-page 'style={{ backgroundImage: `url(${scubaImage})` }} > */}
      <div className="home-page h-screen ">
        <video className="video-background" autoPlay loop muted>
          <source src={scuba2} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        <HeroPage />
      </div>
      <div className='mid-container h-full'>
       <AutoPlay/>
       <Services/>
       {/* <Virtual/> */}
       <Packages/>
    
      <div className='mb-20  w-11/12 mx-auto'>
       <h1 className='happy-clients  '>OUR HAPPY CLIENTS</h1>
       <iframe src="https://widget.taggbox.com/157839" style={{width:'100%',height:'700px',border:'none'}}></iframe>
      </div>   
      </div> 
    </>
  );
};

export default HomePage;
