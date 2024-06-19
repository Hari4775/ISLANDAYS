import React from 'react'
import { Route, Routes } from 'react-router-dom'
import HomePage from './Post-login/Pages/HomePage/HomePage'
import Header from '../Common/Header/Header'
import Footer from '../Common/Footer/Footer'
import { scubaVideo } from '../assets/Index'

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
  <div>
  <div>

    {/* <Header/> */}
     <Routes>
      <Route path="/" element={<HomePage/>} />   
    </Routes>
    <Footer/>

 </div>
 </div>
  )
}

export default UserIndex
