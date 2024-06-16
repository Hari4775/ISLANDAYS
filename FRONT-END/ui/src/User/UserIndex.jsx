import React from 'react'
import { Route, Routes } from 'react-router-dom'
import HomePage from './Post-login/Pages/HomePage/HomePage'
import Header from '../Common/Header/Header'
import Footer from '../Common/Footer/Footer'
const UserIndex = () => {
  return (
    <>
    <Header/>
     <Routes>
      <Route path="/" element={<HomePage/>} />   
    </Routes>
    <Footer/>
      
    </>
  )
}

export default UserIndex
