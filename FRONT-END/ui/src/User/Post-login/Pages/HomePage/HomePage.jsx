import React from 'react'
import './HomePage.css'
import HeroPage from '../../../Components/HeroPage/HeroPage'
import AutoPlay from './Slider/Slider'
import Header from '../../../../Common/Header/Header'
import { scubaImage,bgisland} from '../../../../assets/Index'
import { scubaVideo } from '../../../../assets/Index'
import HorizontalScrollComponent from '../../../Components/Virtual/Virtual'



const HomePage = () => {
  return (
    <>

    {/* <div className='home-page 'style={{ backgroundImage: `url(${scubaImage})` }} > */}
    <div className='home-page'>
        <video className='video-background' autoPlay loop muted>
          <source src={scubaVideo} type='video/mp4' />
          Your browser does not support the video tag.
        </video>
      <Header/>
     <HeroPage/>
    
    </div>
    <div
    className="slider-container w-screen h-full bg-cover bg-center"
    style={{ backgroundImage: `url(${bgisland})` }}
  >
    <AutoPlay/>
    </div>
   
    </>
  )
}

export default HomePage
