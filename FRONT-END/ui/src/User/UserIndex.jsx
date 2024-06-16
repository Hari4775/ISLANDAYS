import React from 'react'
import { Route, Routes } from 'react-router-dom'
import HomePage from './Post-login/Pages/HomePage/HomePage'
const UserIndex = () => {
  return (
    <>

     <Routes>
      <Route path="/" element={<HomePage/>} />   
    </Routes>
      
    </>
  )
}

export default UserIndex
