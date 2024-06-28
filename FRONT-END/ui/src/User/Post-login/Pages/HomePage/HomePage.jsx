import React, { useEffect } from 'react';
import './HomePage.css';
import HeroPage from '../../../Components/HeroPage/HeroPage';
import AutoPlay from './Slider/Slider';
import Header from '../../../../Common/Header/Header';
import { scubaImage, bgisland } from '../../../../assets/Index';
import { scubaVideo, scuba2, wa, instagram } from '../../../../assets/Index';
import HorizontalScrollComponent from '../../../Components/Virtual/Virtual';
import PinContainer from '../../../Components/Virtual/Virtual';

const HomePage = () => {
  useEffect(() => {
    const script = document.createElement('script');
    script.src = '//widget.tagembed.com/embed.min.js';
    script.type = 'text/javascript';
    script.async = true;
    document.body.appendChild(script);
  }, []);
  return (
    <>
      <div className="whatsapp-logo flex">
        <a href='https://api.whatsapp.com/message/4QD4M525ED3PN1?autoload=1&app_absent=0'>
        {/* <img src={instagram} className='insta'/> */}
        <img src={wa} className="" />
        </a>
      </div>

      {/* <div className='home-page 'style={{ backgroundImage: `url(${scubaImage})` }} > */}
      <div className="home-page h-screen">
        <video className="video-background" autoPlay loop muted>
          <source src={scuba2} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        <Header />
        <HeroPage />
      </div>
      <div className='bg-blue-700'>
       <AutoPlay />

    
     
      <div
      className="tagembed-widget"
      style={{ width: '100%', height: '100%' }}
      data-widget-id="154404"
    ></div>
    
      </div>
    </>
  );
};

export default HomePage;
