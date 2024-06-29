import React from 'react'
import { Route, Routes } from 'react-router-dom'
import HomePage from './Post-login/Pages/HomePage/HomePage'
import Header from '../Common/Header/Header'
import Footer from '../Common/Footer/Footer'
import { scubaVideo, wa } from '../assets/Index'
import Packages from './Post-login/Pages/packages/Packages'
import PackageDetails from './Components/PackageDetails/PackageDetails'

const UserIndex = () => {
  const videoStyle = {
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    objectFit: 'cover',
    zIndex: -1,
  };

  const contentStyle = {
    position: 'relative',
    zIndex: 1,
  };
  

  return (
  <div className='main-container'>
     <div className="whatsapp-logo flex">
        <a href='https://api.whatsapp.com/message/4QD4M525ED3PN1?autoload=1&app_absent=0'>
        {/* <img src={instagram} className='insta'/> */}
        <img src={wa} className="" />
        </a>
      </div>
 


    <Header/>
     <Routes>
      <Route path="/" element={<HomePage/>} />  
      <Route path="/packagedetails/:id" element={<PackageDetails/>}/>
    
    </Routes>
    <Footer/>

 </div>

  )
}

export default UserIndex
