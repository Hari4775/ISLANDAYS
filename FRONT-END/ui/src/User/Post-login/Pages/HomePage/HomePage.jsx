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
     

      {/* <div className='home-page 'style={{ backgroundImage: `url(${scubaImage})` }} > */}
      <div className="home-page h-full">
        <video className="video-background" autoPlay loop muted>
          <source src={scuba2} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        <Header />
        <HeroPage />
      </div>
      <div className='bg-black'>
       <AutoPlay />
       <Packages/>

    <h1 className='happy-clients'>OUR HAPPY CLIENTS</h1>
       <iframe src="https://widget.taggbox.com/157839" style={{width:'100%',height:'600px',border:'none'}}></iframe>
     
      {/* <div
      className="tagembed-widget"
      style={{ width: '100%', height: '100%' }}
      data-widget-id="154404"
    >


    </div> */}
    
      </div>
    </>
  );
};

export default HomePage;
